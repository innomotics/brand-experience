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

  @Prop() trigger: 'hover' | 'click' | 'manual' = 'click';

  @Prop() for: string;

  @Prop() titleContent: string;

  @Prop() placement: Placement = 'top';

  @Prop({ mutable: true }) visible = false;

  /** @internal */
  @Prop() animationFrame = false;

  @Element() hostElement: HTMLInnoPopoverElement;

  private onEnterElementBind = this.onTooltipShow.bind(this);
  private onLeaveElementBind = this.onTooltipHide.bind(this);
  private disposeAutoUpdate?: () => void;

  private disposeListener: Function;

  private forElement: HTMLElement;

  private get arrowElement() {
    return this.hostElement.querySelector('.arrow') as HTMLElement;
  }

  private destroyAutoUpdate() {
    if (this.disposeAutoUpdate != undefined) {
      this.disposeAutoUpdate();
    }
  }

  private onTooltipShow(e: Event) {
    this.showTooltip(e.target as Element);
  }

  private onTooltipHide() {
    this.hideTooltip();
  }

  @Method()
  async showTooltip(anchorElement: any) {
    await this.computeTooltipPosition(anchorElement);
    this.visible = true;
  }

  @Method()
  async hideTooltip() {
    this.visible = false;
    this.destroyAutoUpdate();
  }

  @Watch('visible')
  visibleChanged() {
    if (this.trigger === 'manual') {
      if (this.visible) {
        let anchorEelement = document.querySelector(this.for);
        this.showTooltip(anchorEelement);
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
                strategy: 'absolute',
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
      this.forElement.addEventListener('mouseenter', this.onEnterElementBind);
      this.forElement.addEventListener('mouseleave', this.onLeaveElementBind);
      this.forElement.addEventListener('focusin', this.onEnterElementBind);
      this.forElement.addEventListener('focusout', this.onLeaveElementBind);

      this.disposeListener = () => {
        this.forElement.removeEventListener('mouseenter', this.onEnterElementBind);
        this.forElement.removeEventListener('mouseleave', this.onLeaveElementBind);
        this.forElement.removeEventListener('focusin', this.onEnterElementBind);
        this.forElement.removeEventListener('focusout', this.onLeaveElementBind);
      };
    };
  }

  @Listen('keydown', { target: 'window' })
  async onKeydown(event: KeyboardEvent) {
    if (this.visible && event.code === 'Escape') {
      this.onTooltipHide();
    }
  }

  @Listen('click', { target: 'window' })
  async onClick(event: globalThis.Event) {
    if (this.trigger === 'click') {
      if (this.visible) {
        if (event.target !== this.hostElement && !this.hostElement.contains(event.target as Node)) {
          this.onTooltipHide();
        }
      } else {
        if (event.target === this.forElement || this.forElement.contains(event.target as Node)) {
          this.onTooltipShow(event);
        }
      }
    }
  }

  componentDidLoad() {
    this.forElement = document.querySelector(this.for);
    if (this.forElement == null) {
      throw "No valid html element found for the css selector in the 'for' property!"
    }

    this.registerHoverListeners();
  }

  disconnectedCallback() {
    this.destroyAutoUpdate();

    if (this.disposeListener) {
      this.disposeListener();
    }
  }

  render() {
    return (
      <Host class={{ visible: this.visible }}>
        <div class="tooltip-content">
          <slot></slot>
        </div>
        <div class="arrow"></div>
      </Host>
    );
  }

}
