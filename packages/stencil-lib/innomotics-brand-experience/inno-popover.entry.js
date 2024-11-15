import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';
import { c as computePosition, o as offset, s as shift, f as flip, b as arrow, a as autoUpdate } from './floating-ui.dom.esm-f11f0749.js';
import { s as sanitizeHtml_1 } from './index-526702fd.js';
import './_commonjsHelpers-6cbf8316.js';

const innoPopoverCss = ".sc-inno-popover-h{display:inline-block;position:fixed;left:0px;top:0px;z-index:1001;color:#ffffff;font-weight:300;font-size:14px;opacity:0;visibility:collapse !important;overflow-wrap:break-word;width:-moz-max-content;width:max-content;max-width:90vw;background-color:#2a3b40;padding:16px;box-shadow:0px 2px 5px 0px rgba(8, 25, 31, 0.8)}.sc-inno-popover-h .tooltip-title-row.sc-inno-popover{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:16px}.sc-inno-popover-h .tooltip-title-row.sc-inno-popover .tooltip-title.sc-inno-popover{display:block;font-size:24px;line-height:130%;font-weight:700}.sc-inno-popover-h .tooltip-title-row.sc-inno-popover inno-icon.sc-inno-popover{margin-left:16px;cursor:pointer}.sc-inno-popover-h .tooltip-title-row.only-close-btn.sc-inno-popover{justify-content:flex-end}.sc-inno-popover-h .tooltip-text.sc-inno-popover{display:block}.visible.sc-inno-popover-h{opacity:1;visibility:visible !important}.visible.sc-inno-popover-h .arrow.sc-inno-popover,.visible.sc-inno-popover-h .arrow.sc-inno-popover::before{position:absolute;width:8px;height:8px;background:inherit}.visible.sc-inno-popover-h .arrow.sc-inno-popover{visibility:hidden}.visible.sc-inno-popover-h .arrow.sc-inno-popover::before{visibility:visible;content:\"\";transform:rotate(45deg);background-color:inherit}.dark.sc-inno-popover-h{color:#ffffff;background-color:#2a3b40}.light.sc-inno-popover-h{color:#08191f;background-color:#e1f000}";

const numberToPixel = (value) => (value != null ? `${value}px` : '');
const InnoPopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.innoPopoverShown = createEvent(this, "innoPopoverShown", 7);
        this.innoPopoverHidden = createEvent(this, "innoPopoverHidden", 7);
        this.trigger = 'click';
        this.variant = 'dark';
        this.for = undefined;
        this.popoverTitle = undefined;
        this.popoverText = undefined;
        this.placement = 'top';
        this.offset = 8;
        this.visible = false;
        this.hasBackdrop = false;
        this.closable = false;
        this.animationFrame = false;
    }
    forInternal;
    /**
     * Fired when popover is shown.
     */
    innoPopoverShown;
    /**
     * Fired when popover is hidden.
     */
    innoPopoverHidden;
    get hostElement() { return getElement(this); }
    showBind = this.onTooltipShow.bind(this);
    hideBind = this.onTooltipHide.bind(this);
    disposeAutoUpdate;
    backdropElement;
    disposeListener;
    arrowElement;
    get forElement() {
        return document.querySelector(this.forInternal ?? this.for);
    }
    destroyAutoUpdate() {
        if (this.disposeAutoUpdate != undefined) {
            this.disposeAutoUpdate();
        }
    }
    onTooltipShow(event) {
        if (this.trigger === 'click') {
            event?.preventDefault();
            event?.stopPropagation();
        }
        if (!this.visible) {
            this.showTooltip();
        }
    }
    onTooltipHide() {
        this.hideTooltip();
    }
    /**
     * Show the tooltip.
     */
    async showTooltip() {
        const anchorElement = this.forElement;
        if (!!anchorElement) {
            this.createBackdrop();
            await this.computeTooltipPositionWithAutoUpdate(anchorElement);
            this.visible = true;
            this.innoPopoverShown.emit();
        }
    }
    /**
     * Hide the tooltip.
     */
    async hideTooltip() {
        this.destroyBackdrop();
        this.destroyAutoUpdate();
        this.visible = false;
        this.innoPopoverHidden.emit();
    }
    /**
     * Updates the element the popover is for including all the internal event listeners and the popover's position.
     * If called without a parameter it will refresh the internal event listeners and the popover's position for the current target element.
     * If called with a nonexisting selector it will refresh the internal event listeners and the popover's position for the current target element.
     * Returns a Promise which is 'true' when the update/refresh succeded.
     * Returns 'false' if neither the current target element nor the element from the parameter exists.
     */
    async updateForElement(forElement = null) {
        if (!!document.querySelector(forElement) || !!this.forElement) {
            this.destroyAutoUpdate();
            if (this.disposeListener) {
                this.disposeListener();
            }
        }
        if (!!document.querySelector(forElement)) {
            this.forInternal = forElement;
        }
        const anchorElement = this.forElement;
        if (!!anchorElement) {
            this.registerHoverListeners();
            this.registerClickListener();
            if (this.visible) {
                await this.computeTooltipPositionWithAutoUpdate(anchorElement);
            }
            else {
                await this.computePosition(anchorElement);
            }
            return true;
        }
        return false;
    }
    createBackdrop() {
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
    destroyBackdrop() {
        if (!!this.backdropElement) {
            this.backdropElement.remove();
            this.backdropElement = null;
        }
    }
    visibleChanged() {
        if (this.trigger === 'manual') {
            if (this.visible) {
                this.showTooltip();
            }
            else {
                this.hideTooltip();
            }
        }
    }
    computeArrowPosition({ placement, middlewareData }) {
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
    async computePosition(target) {
        return new Promise(async (resolve) => {
            const computeResponse = await computePosition(target, this.hostElement, {
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
            });
            if (!!this.arrowElement && !!computeResponse.middlewareData.arrow) {
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
    async computeTooltipPositionWithAutoUpdate(target) {
        if (!target) {
            return;
        }
        await this.computePosition(target);
        return new Promise((resolve) => {
            this.disposeAutoUpdate = autoUpdate(target, this.hostElement, async () => {
                await this.computePosition(target);
                resolve();
            }, {
                ancestorResize: true,
                ancestorScroll: true,
                elementResize: true,
                layoutShift: true,
                animationFrame: this.animationFrame
            });
        });
    }
    registerHoverListeners() {
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
        }
        ;
    }
    registerClickListener() {
        if (this.trigger === 'click') {
            this.forElement.addEventListener('click', this.showBind);
            this.disposeListener = () => {
                this.forElement?.removeEventListener('click', this.showBind);
            };
        }
    }
    async onKeydown(event) {
        if (this.visible && event.code === 'Escape') {
            this.hideTooltip();
        }
    }
    async onClick(event) {
        if (this.visible) {
            if ((this.trigger === 'click' && event.target !== this.hostElement && !this.hostElement.contains(event.target))
                || this.trigger === 'hover') {
                this.hideTooltip();
            }
        }
    }
    componentDidLoad() {
        if (this.forElement == null) {
            console.info("No valid html element found for the css selector in the 'for' property, 'for' value: " + this.for);
            return;
        }
        this.forInternal = this.for;
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
        let hasCloseBtn = this.closable && this.trigger !== 'hover';
        let hasTitleText = !!this.popoverTitle && this.popoverTitle !== '';
        let hasText = !!this.popoverText && this.popoverText !== '';
        let renderTitleRow = hasTitleText || hasCloseBtn;
        let onlyCloseBtn = hasCloseBtn && !hasTitleText;
        return (h(Host, { key: '155d6492ff4ea5d653043c8e1d9c8a3dc91c5c8b', class: {
                visible: this.visible,
                light: this.variant === 'light',
                dark: this.variant === 'dark'
            } }, h("div", { key: '6473b66bd2a799d03e53ddd6fe5a8fe3dfd44157', class: "tooltip-content" }, renderTitleRow
            ?
                h("div", { class: { "tooltip-title-row": true, "only-close-btn": onlyCloseBtn } }, hasTitleText ? h("div", { class: "tooltip-title", innerHTML: sanitizeHtml_1(this.popoverTitle) }) : null, hasCloseBtn ? h("inno-icon", { icon: 'close', size: 24, onClick: () => this.hideTooltip() }) : null)
            : null, hasText ? h("div", { class: "tooltip-text", innerHTML: sanitizeHtml_1(this.popoverText) }) : null, h("slot", { key: '10dc5dbb6ba293d28892dcc6406b0ced657d7d2c' })), h("div", { key: '660e02b9b8f9f80c9b6d9f437524eeddc49e5bab', ref: ref => this.arrowElement = ref, class: "arrow" })));
    }
    static get watchers() { return {
        "visible": ["visibleChanged"]
    }; }
};
InnoPopover.style = innoPopoverCss;

export { InnoPopover as inno_popover };

//# sourceMappingURL=inno-popover.entry.js.map