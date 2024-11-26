import { p as proxyCustomElement, H, h, d as Host } from './p-f47e640c.js';

const innoErrorCss = ".sc-inno-error-h{display:none;font-size:12px}[active].sc-inno-error-h{display:block;transform:translate(-16px, 1rem) scale(1)}[active].light.sc-inno-error-h{color:#CB0E0E}[active].dark.sc-inno-error-h{color:#FF88AB}";
const InnoErrorStyle0 = innoErrorCss;

const InnoError = /*@__PURE__*/ proxyCustomElement(class InnoError extends H {
    constructor() {
        super();
        this.__registerHost();
        this.active = false;
        this.type = undefined;
        this.variant = 'light';
    }
    render() {
        return (h(Host, { key: '23ba9413e7dc64c641b26f7fbe4713045383baa8', active: this.active, class: { 'dark': this.variant === 'dark', 'light': this.variant === 'light' } }, h("slot", { key: '0306943c62030ee72c154d42f2f7f15aebeed8a4' })));
    }
    static get style() { return InnoErrorStyle0; }
}, [6, "inno-error", {
        "active": [1028],
        "type": [1025],
        "variant": [1025]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-error"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-error":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoError);
            }
            break;
    } });
}

export { InnoError as I, defineCustomElement as d };

//# sourceMappingURL=p-9e847f4a.js.map