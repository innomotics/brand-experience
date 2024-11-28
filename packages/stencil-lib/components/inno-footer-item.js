import { p as proxyCustomElement, H, h, d as Host } from './p-f9444b6c.js';

const innoFooterItemCss = ".sc-inno-footer-item-h{display:block;cursor:pointer}.sc-inno-footer-item-h.light :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon){font-weight:300;font-style:normal;font-size:14px;text-decoration:underline;margin-block-start:0;margin-block-end:0;color:#08191f}.sc-inno-footer-item-h.light :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon):hover{color:#08191f}.sc-inno-footer-item-h.dark :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon){font-weight:300;font-style:normal;font-size:14px;text-decoration:underline;margin-block-start:0;margin-block-end:0;color:#ffffff}.sc-inno-footer-item-h.dark :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon):hover{color:#ffffff}@media screen and (min-width: 768px){.sc-inno-footer-item-h{margin-bottom:0;display:flex;justify-content:center;align-items:center}.sc-inno-footer-item-h.light :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon){color:#08191f}.sc-inno-footer-item-h.light :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon):hover{color:#08191f}.sc-inno-footer-item-h.dark :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon){color:#ffffff}.sc-inno-footer-item-h.dark :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon):hover{color:#ffffff}}";
const InnoFooterItemStyle0 = innoFooterItemCss;

const IGNORED_ELEMENTS = ['A', 'P', 'inno-icon', 'SPAN'];
const InnoFooterItem$1 = /*@__PURE__*/ proxyCustomElement(class InnoFooterItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'light';
    }
    get hostElement() { return this; }
    watchVariant(newVariant) {
        this.variant = newVariant;
        this.propagateStyle();
    }
    componentDidLoad() {
        this.propagateStyle();
    }
    propagateStyle() {
        const children = this.hostElement.children;
        for (let index = 0; index < children.length; index++) {
            const element = children[index];
            if (element?.tagName && !IGNORED_ELEMENTS.includes(element.tagName)) {
                element.dataset.innoFooterItemStyle = this.variant;
            }
        }
    }
    variantStyle() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
        };
    }
    render() {
        return (h(Host, { key: '0bfbb9d010e31f582094fac88a7078ccaeefd4ea', class: this.variantStyle() }, h("slot", { key: '039cb73b7883544d6a83b51fea87ce5c48af0dfc' })));
    }
    static get watchers() { return {
        "variant": ["watchVariant"]
    }; }
    static get style() { return InnoFooterItemStyle0; }
}, [6, "inno-footer-item", {
        "variant": [1025]
    }, undefined, {
        "variant": ["watchVariant"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-footer-item"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-footer-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoFooterItem$1);
            }
            break;
    } });
}

const InnoFooterItem = InnoFooterItem$1;
const defineCustomElement = defineCustomElement$1;

export { InnoFooterItem, defineCustomElement };

//# sourceMappingURL=inno-footer-item.js.map