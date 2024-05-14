import {
  arrow,
  autoUpdate,
  computePosition,
  ComputePositionReturn,
  flip,
  offset,
  shift,
  Placement
} from '@floating-ui/dom';
import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Method,
  Prop,
  Watch
} from '@stencil/core';

type ArrowPosition = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const numberToPixel = (value: number) => (value != null ? `${value}px` : '');

@Component({
  tag: 'inno-popover',
  styleUrl: 'inno-popover.scss',
  scoped: true
})
export class InnoPopover {

  /**
   * How to show the popover. If set to 'manual' then you need to programatically modify the 'visibile' property.
   */
  @Prop() trigger: 'hover' | 'click' | 'manual' = 'click';

  /**
   * Color variant of the popover.
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'dark';

  /**
   * Css selector of the element the popover is for.
   */
  @Prop() for: string;

  /**
   * Contents of the title. Can be either html or a simple string. Can be omitted.
   */
  @Prop({ mutable: true }) popoverTitle: string;

  /**
   * Contents of the text. Can be either html or a simple string. Can be omitted. You can use this property if you want a simple tooltip, 
   * otherwise you can provide your own html directly in the template like this: <inno-popover>your custom html goes here</inno-popover>
   */
  @Prop({ mutable: true }) popoverText: string;

  /**
   * Position of the popover. If there is not enough space it will be automatically placed to where it has enough place.
   */
  @Prop({ mutable: true }) placement: Placement = 'top';

  /**
   * Programatically change whether the popover is visible or not.
   */
  @Prop({ mutable: true }) visible = false;

  /** @internal */
  @Prop() animationFrame = false;

  @Element() hostElement: HTMLInnoPopoverElement;

  private showBind = this.onTooltipShow.bind(this);
  private hideBind = this.onTooltipHide.bind(this);
  private disposeAutoUpdate?: () => void;

  private disposeListener: Function;

  private get arrowElement() {
    return this.hostElement.querySelector('.arrow') as HTMLElement;
  }

  private get forElement() {
    return document.querySelector(this.for);
  }

  private destroyAutoUpdate() {
    if (this.disposeAutoUpdate != undefined) {
      this.disposeAutoUpdate();
    }
  }

  private onTooltipShow() {
    if (!this.visible) {
      this.showTooltip();
    }
  }

  private onTooltipHide() {
    this.hideTooltip();
  }

  /**
   * Show the tooltip.
   */
  @Method()
  async showTooltip() {
    const anchorElement = this.forElement;
    if (!!anchorElement) {
      await this.computeTooltipPosition(anchorElement);
      this.visible = true;
    }
  }

  /**
   * Hide the tooltip.
   */
  @Method()
  async hideTooltip() {
    this.visible = false;
    this.destroyAutoUpdate();
  }

  @Watch('visible')
  visibleChanged() {
    if (this.trigger === 'manual') {
      if (this.visible) {
        this.showTooltip();
      } else {
        this.hideTooltip();
      }
    }
  }

  private computeArrowPosition({
    placement,
    middlewareData
  }: ComputePositionReturn): ArrowPosition {
    let { x, y } = middlewareData.arrow;

    if (placement.startsWith('top')) {
      return {
        left: numberToPixel(x),
        bottom: numberToPixel(-4)
      };
    }

    if (placement.startsWith('right')) {
      return {
        left: numberToPixel(-4),
        top: numberToPixel(y)
      };
    }

    if (placement.startsWith('bottom')) {
      return {
        left: numberToPixel(x),
        top: numberToPixel(-4)
      };
    }

    if (placement.startsWith('left')) {
      return {
        right: numberToPixel(-4),
        top: numberToPixel(y)
      };
    }
  }

  private async computeTooltipPosition(target: Element) {
    if (!target) {
      return;
    }

    return new Promise<void>((resolve) => {
      this.disposeAutoUpdate = autoUpdate(
        target,
        this.hostElement,
        async () => {
          setTimeout(async () => {
            const computeResponse = await computePosition(
              target,
              this.hostElement,
              {
                strategy: 'fixed',
                placement: this.placement,
                middleware: [
                  offset({
                    mainAxis: 8
                  }),
                  shift(),
                  flip({
                    mainAxis: true,
                    crossAxis: true,
                    fallbackAxisSideDirection: 'start',
                    fallbackStrategy: 'bestFit',
                    padding: 5
                  }),
                  arrow({
                    element: this.arrowElement,
                    padding: 16
                  })
                ]
              }
            );

            if (computeResponse.middlewareData.arrow) {
              const arrowPosition = this.computeArrowPosition(computeResponse);
              this.arrowElement.style.top = "unset";
              this.arrowElement.style.bottom = "unset";
              this.arrowElement.style.right = "unset";
              this.arrowElement.style.left = "unset";
              Object.assign(this.arrowElement.style, arrowPosition);
            }

            const { x, y } = computeResponse;
            Object.assign(this.hostElement.style, {
              left: x !== null ? `${x}px` : '',
              top: y !== null ? `${y}px` : ''
            });

            resolve();
          });
        },
        {
          ancestorResize: true,
          ancestorScroll: true,
          elementResize: true,
          animationFrame: this.animationFrame
        }
      );
    });
  }

  private registerHoverListeners() {
    if (this.trigger === 'hover') {
      const forElement = this.forElement;
      forElement.addEventListener('mouseenter', this.showBind);
      forElement.addEventListener('mouseleave', this.hideBind);
      forElement.addEventListener('focusin', this.showBind);
      forElement.addEventListener('focusout', this.hideBind);

      this.disposeListener = () => {
        const forElement = this.forElement;
        forElement?.removeEventListener('mouseenter', this.showBind);
        forElement?.removeEventListener('mouseleave', this.hideBind);
        forElement?.removeEventListener('focusin', this.showBind);
        forElement?.removeEventListener('focusout', this.hideBind);
      };
    };
  }

  private registerClickListener() {
    if (this.trigger === 'click') {
      this.forElement.addEventListener('click', this.showBind);

      this.disposeListener = () => {
        this.forElement?.removeEventListener('click', this.showBind);
      };
    }
  }

  @Listen('keydown', { target: 'window' })
  async onKeydown(event: KeyboardEvent) {
    if (this.visible && event.code === 'Escape') {
      this.hideTooltip();
    }
  }

  @Listen('click', { target: 'window' })
  async onClick(event: globalThis.Event) {
    if (this.visible) {
      if ((this.trigger === 'click' && event.target !== this.hostElement && !this.hostElement.contains(event.target as Node))
        || this.trigger === 'hover') {
        this.hideTooltip();
      }
    }
  }

  componentDidLoad() {
    if (this.forElement == null) {
      throw "No valid html element found for the css selector in the 'for' property!"
    }

    this.registerHoverListeners();
    this.registerClickListener();
  }

  disconnectedCallback() {
    this.destroyAutoUpdate();

    if (this.disposeListener) {
      this.disposeListener();
    }
  }

  render() {
    return (
      <Host class={{
        visible: this.visible,
        'light': this.variant === 'light',
        'dark': this.variant === 'dark'
      }}>
        <div class="tooltip-content">
          {this.popoverTitle != null ? <div class="tooltip-title" innerHTML={this.popoverTitle}></div> : null}
          {this.popoverText != null ? <div class="tooltip-text" innerHTML={this.popoverText}></div> : null}
          <slot></slot>
        </div>
        <div class="arrow"></div>
      </Host>
    );
  }

}
