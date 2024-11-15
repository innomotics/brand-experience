import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Copied from the the original Siemens IX library.
// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/shadow-dom.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function closestElement(selector, el) {
    if (!el) {
        return null;
    }
    return el.closest(selector) || closestElement(selector, el.getRootNode().host);
}
function getSlottedElements(slot) {
    return slot.assignedElements({ flatten: true });
}
function hasSlottedElements(slot) {
    if (!slot) {
        return false;
    }
    return slot.assignedElements({ flatten: true }).length !== 0;
}
function containsElement(target, element) {
    const hasShadowDom = target.shadowRoot;
    if (hasShadowDom) {
        target.contains(element) || target.shadowRoot.contains(element);
    }
    return target.contains(element);
}
function closestPassShadow(node, selector) {
    if (!node) {
        return null;
    }
    if (node instanceof ShadowRoot) {
        return closestPassShadow(node.host, selector);
    }
    if (node instanceof HTMLElement) {
        if (node.matches(selector)) {
            return node;
        }
        else {
            return closestPassShadow(node.parentNode, selector);
        }
    }
    return closestPassShadow(node.parentNode, selector);
}

const innoModalHeaderCss = ".sc-inno-modal-header-h{display:flex;align-items:center;align-self:stretch;font-size:24px;line-height:32px;font-family:\"InnomoticsHafferSQ\";font-weight:bold;text-overflow:ellipsis}.sc-inno-modal-header-h *.sc-inno-modal-header,.sc-inno-modal-header-h *.sc-inno-modal-header::after,.sc-inno-modal-header-h *.sc-inno-modal-header::before{box-sizing:border-box}.sc-inno-modal-header-h .sc-inno-modal-header::-webkit-scrollbar-button{display:none}.sc-inno-modal-header-h .sc-inno-modal-header::-webkit-scrollbar{width:0.5rem;height:0.5rem}.sc-inno-modal-header-h .sc-inno-modal-header::-webkit-scrollbar-track{border-radius:5px;background:#2a3b40}.sc-inno-modal-header-h .sc-inno-modal-header::-webkit-scrollbar-track:hover{background:#2a3b40}.sc-inno-modal-header-h .sc-inno-modal-header::-webkit-scrollbar-thumb{border-radius:5px;background:#566b73}.sc-inno-modal-header-h .sc-inno-modal-header::-webkit-scrollbar-thumb:hover{background:#566b73}.sc-inno-modal-header-h .sc-inno-modal-header::-webkit-scrollbar-corner{display:none}.sc-inno-modal-header-h .modal-close.sc-inno-modal-header{align-self:flex-start;margin-left:auto;background-color:transparent;color:#ffffff;cursor:pointer}.sc-inno-modal-header-h .modal-close.sc-inno-modal-header:hover{color:#9aacb4}.sc-inno-modal-header-h .modal-icon.sc-inno-modal-header{margin-right:1rem;color:#ffffff}.light.sc-inno-modal-header-h{color:#ffffff}.dark.sc-inno-modal-header-h{color:#ffffff}";

const InnoModalHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeClick = createEvent(this, "closeClick", 7);
        this.variant = 'light';
        this.showClose = true;
        this.icon = undefined;
    }
    parentDialog;
    get hostElement() { return getElement(this); }
    /**
     * Emits when close icon is clicked and closes the modal
     * Can be prevented, in which case only the event is triggered, and the modal remains open
     */
    closeClick;
    componentDidLoad() {
        this.parentDialog = closestPassShadow(this.hostElement, 'inno-modal');
    }
    onCloseClick(event) {
        const ce = this.closeClick.emit(event);
        if (ce.defaultPrevented || event.defaultPrevented) {
            return;
        }
        this.parentDialog.dismissModal();
    }
    themeClasses() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
        };
    }
    titleIcon() {
        if (this.icon) {
            const classes = { ...this.themeClasses(), 'modal-icon': true };
            return h("inno-icon", { icon: this.icon, class: classes, size: 24 });
        }
        else {
            return null;
        }
    }
    closeControl() {
        if (this.showClose) {
            const classes = { ...this.themeClasses(), 'modal-close': true };
            return h("inno-icon", { icon: "close", class: classes, size: 24, onClick: e => this.onCloseClick(e) });
        }
        else {
            return null;
        }
    }
    render() {
        const hostClasses = { ...this.themeClasses() };
        return (h(Host, { key: 'aa679137991decd498bd5d9da888193804799ede', class: hostClasses }, this.titleIcon(), h("slot", { key: 'd65f3f58414c909aae89f3c759171350774da9fc' }), this.closeControl()));
    }
};
InnoModalHeader.style = innoModalHeaderCss;

export { InnoModalHeader as inno_modal_header };

//# sourceMappingURL=inno-modal-header.entry.js.map