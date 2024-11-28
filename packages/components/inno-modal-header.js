import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f9444b6c.js';
import { d as defineCustomElement$2 } from './p-a043038e.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
const InnoModalHeaderStyle0 = innoModalHeaderCss;

const InnoModalHeader$1 = /*@__PURE__*/ proxyCustomElement(class InnoModalHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.closeClick = createEvent(this, "closeClick", 7);
        this.variant = 'light';
        this.showClose = true;
        this.icon = undefined;
    }
    parentDialog;
    get hostElement() { return this; }
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
    static get style() { return InnoModalHeaderStyle0; }
}, [6, "inno-modal-header", {
        "variant": [1025],
        "showClose": [4, "show-close"],
        "icon": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-modal-header", "inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-modal-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoModalHeader$1);
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoModalHeader = InnoModalHeader$1;
const defineCustomElement = defineCustomElement$1;

export { InnoModalHeader, defineCustomElement };

//# sourceMappingURL=inno-modal-header.js.map