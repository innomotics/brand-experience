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
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  Watch
} from '@stencil/core';
import sanitizeHtml from 'sanitize-html';

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
   * otherwise you can provide your own html directly.
   */
  @Prop({ mutable: true }) popoverText: string;

  /**
   * Position of the popover. If there is not enough space it will be automatically placed to where it has enough place.
   * Please note that the offset will remain the same in case the desired placement does not fit.
   */
  @Prop({ mutable: true }) placement: Placement = 'top';

  /**
   * Offset of the popover position in pixels. Please note that the offset will remain the same in case the desired placement does not fit.
   */
  @Prop({ mutable: true }) offset: number = 8;

  /**
   * Programatically change whether the popover is visible or not.
   */
  @Prop({ mutable: true }) visible = false;

  /**
   * Popover should have a backdrop. Has no effect if trigger type is 'hover'.
   */
  @Prop({ mutable: true }) hasBackdrop = false;

  /**
   * Popover will have a close button. Has no effect if trigger type is 'hover'.
   */
  @Prop({ mutable: true }) closable = false;

  /** @internal */
  @Prop() animationFrame = false;

  /**
   * Fired when popover is shown.
   */
  @Event() innoPopoverShown: EventEmitter<void>;

  /**
   * Fired when popover is hidden.
   */
  @Event() innoPopoverHidden: EventEmitter<void>;

  @Element() hostElement: HTMLInnoPopoverElement;

  private showBind = this.onTooltipShow.bind(this);
  private hideBind = this.onTooltipHide.bind(this);
  private disposeAutoUpdate?: () => void;

  private backdropElement: HTMLDivElement;

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

  private onTooltipShow(event: globalThis.Event) {
    if (this.trigger === 'click') {
      event?.preventDefault();
      event?.stopPropagation();
    }

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
      this.createBackdrop();
      await this.computeTooltipPosition(anchorElement);
      this.visible = true;
      this.innoPopoverShown.emit();
    }
  }

  /**
   * Hide the tooltip.
   */
  @Method()
  async hideTooltip() {
    this.destroyBackdrop();
    this.destroyAutoUpdate();
    this.visible = false;
    this.innoPopoverHidden.emit();
  }

  private createBackdrop(): void {
    let backdropVisible = this.hasBackdrop && this.trigger !== 'hover';

    if (backdropVisible) {
      this.backdropElement = document.createElement("div");
      this.backdropElement.classList.add("inno-popover-backdrop");
      this.backdropElement.style.cssText = `
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100vw;
        height: 100vh;
        background-color: white;
        opacity: 0.6;
      `;
      document.body.appendChild(this.backdropElement);
    }
  }

  private destroyBackdrop(): void {
    if (!!this.backdropElement) {
      this.backdropElement.remove();
      this.backdropElement = null;
    }
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

  private async computePositionFn(target: Element) {
    return new Promise<void>(async (resolve) => {
      const computeResponse = await computePosition(
        target,
        this.hostElement,
        {
          strategy: 'fixed',
          placement: this.placement,
          middleware: [
            offset({
              mainAxis: this.offset
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
  }

  private async computeTooltipPosition(target: Element) {
    if (!target) {
      return;
    }

    await this.computePositionFn(target);

    return new Promise<void>((resolve) => {
      this.disposeAutoUpdate = autoUpdate(
        target,
        this.hostElement,
        async () => {
          await this.computePositionFn(target);
          resolve();
        },
        {
          ancestorResize: true,
          ancestorScroll: true,
          elementResize: true,
          layoutShift: true,
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

    this.destroyBackdrop();
  }

  render() {
    let hasCloseBtn: boolean = this.closable && this.trigger !== 'hover';
    let hasTitleText: boolean = !!this.popoverTitle && this.popoverTitle !== '';
    let hasText: boolean = !!this.popoverText && this.popoverText !== '';
    let renderTitleRow: boolean = hasTitleText || hasCloseBtn;
    let onlyCloseBtn: boolean = hasCloseBtn && !hasTitleText;

    return (
      <Host class={{
        visible: this.visible,
        light: this.variant === 'light',
        dark: this.variant === 'dark'
      }}>
        <div class="tooltip-content">
          {renderTitleRow
            ?
            <div class={{ "tooltip-title-row": true, "only-close-btn": onlyCloseBtn }}>
              {hasTitleText ? <div class="tooltip-title" innerHTML={sanitizeHtml(this.popoverTitle)}></div> : null}
              {hasCloseBtn ? <inno-icon icon='close' size={24} onClick={() => this.hideTooltip()}></inno-icon> : null}
            </div>
            : null}
          {hasText ? <div class="tooltip-text" innerHTML={sanitizeHtml(this.popoverText)}></div> : null}
          <slot></slot>
        </div>
        <div class="arrow"></div>
      </Host>
    );
  }

}
