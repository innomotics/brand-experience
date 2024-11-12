import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
import { h, Host } from "@stencil/core";
import sanitizeHtml from "sanitize-html";
const numberToPixel = (value) => (value != null ? `${value}px` : '');
export class InnoPopover {
    constructor() {
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
    hostElement;
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
                h("div", { class: { "tooltip-title-row": true, "only-close-btn": onlyCloseBtn } }, hasTitleText ? h("div", { class: "tooltip-title", innerHTML: sanitizeHtml(this.popoverTitle) }) : null, hasCloseBtn ? h("inno-icon", { icon: 'close', size: 24, onClick: () => this.hideTooltip() }) : null)
            : null, hasText ? h("div", { class: "tooltip-text", innerHTML: sanitizeHtml(this.popoverText) }) : null, h("slot", { key: '10dc5dbb6ba293d28892dcc6406b0ced657d7d2c' })), h("div", { key: '660e02b9b8f9f80c9b6d9f437524eeddc49e5bab', ref: ref => this.arrowElement = ref, class: "arrow" })));
    }
    static get is() { return "inno-popover"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-popover.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-popover.css"]
        };
    }
    static get properties() {
        return {
            "trigger": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'hover' | 'click' | 'manual'",
                    "resolved": "\"click\" | \"hover\" | \"manual\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How to show the popover. If set to 'manual' then you need to programatically modify the 'visibile' property."
                },
                "attribute": "trigger",
                "reflect": false,
                "defaultValue": "'click'"
            },
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'light' | 'dark'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color variant of the popover."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'dark'"
            },
            "for": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Css selector of the element the popover is for. This is just the initial value, \r\ndon't update it manually. Use the 'updateForElement(...)' method instead."
                },
                "attribute": "for",
                "reflect": false
            },
            "popoverTitle": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Contents of the title. Can be either html or a simple string. Can be omitted."
                },
                "attribute": "popover-title",
                "reflect": false
            },
            "popoverText": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Contents of the text. Can be either html or a simple string. Can be omitted. You can use this property if you want a simple tooltip, \r\notherwise you can provide your own html directly."
                },
                "attribute": "popover-text",
                "reflect": false
            },
            "placement": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "@floating-ui/dom",
                            "id": "../../node_modules/@floating-ui/dom/dist/floating-ui.dom.d.ts::Placement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the popover. If there is not enough space it will be automatically placed to where it has enough place.\r\nPlease note that the offset will remain the same in case the desired placement does not fit."
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'top'"
            },
            "offset": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Offset of the popover position in pixels. Please note that the offset will remain the same in case the desired placement does not fit."
                },
                "attribute": "offset",
                "reflect": false,
                "defaultValue": "8"
            },
            "visible": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Programatically change whether the popover is visible or not."
                },
                "attribute": "visible",
                "reflect": false,
                "defaultValue": "false"
            },
            "hasBackdrop": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Popover should have a backdrop. Has no effect if trigger type is 'hover'."
                },
                "attribute": "has-backdrop",
                "reflect": false,
                "defaultValue": "false"
            },
            "closable": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Popover will have a close button. Has no effect if trigger type is 'hover'."
                },
                "attribute": "closable",
                "reflect": false,
                "defaultValue": "false"
            },
            "animationFrame": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "animation-frame",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "innoPopoverShown",
                "name": "innoPopoverShown",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when popover is shown."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "innoPopoverHidden",
                "name": "innoPopoverHidden",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when popover is hidden."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "showTooltip": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Show the tooltip.",
                    "tags": []
                }
            },
            "hideTooltip": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Hide the tooltip.",
                    "tags": []
                }
            },
            "updateForElement": {
                "complexType": {
                    "signature": "(forElement?: string) => Promise<boolean>",
                    "parameters": [{
                            "name": "forElement",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Updates the element the popover is for including all the internal event listeners and the popover's position.\r\nIf called without a parameter it will refresh the internal event listeners and the popover's position for the current target element.\r\nIf called with a nonexisting selector it will refresh the internal event listeners and the popover's position for the current target element.\r\nReturns a Promise which is 'true' when the update/refresh succeded. \r\nReturns 'false' if neither the current target element nor the element from the parameter exists.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "visible",
                "methodName": "visibleChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeydown",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "onClick",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=inno-popover.js.map
