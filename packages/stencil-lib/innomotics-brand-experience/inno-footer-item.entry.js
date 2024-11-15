import { r as registerInstance, g as getElement, h, e as Host } from './index-48a3be21.js';

const innoFooterItemCss = ".sc-inno-footer-item-h{display:block;cursor:pointer}.sc-inno-footer-item-h.light :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon){font-weight:300;font-style:normal;font-size:14px;text-decoration:underline;margin-block-start:0;margin-block-end:0;color:#08191f}.sc-inno-footer-item-h.light :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon):hover{color:#08191f}.sc-inno-footer-item-h.dark :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon){font-weight:300;font-style:normal;font-size:14px;text-decoration:underline;margin-block-start:0;margin-block-end:0;color:#ffffff}.sc-inno-footer-item-h.dark :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon):hover{color:#ffffff}@media screen and (min-width: 768px){.sc-inno-footer-item-h{margin-bottom:0;display:flex;justify-content:center;align-items:center}.sc-inno-footer-item-h.light :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon){color:#08191f}.sc-inno-footer-item-h.light :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon):hover{color:#08191f}.sc-inno-footer-item-h.dark :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon){color:#ffffff}.sc-inno-footer-item-h.dark :where(.sc-inno-footer-item-s>a,.sc-inno-footer-item-s>p,.sc-inno-footer-item-s>span,.sc-inno-footer-item-s>inno-icon):hover{color:#ffffff}}";

const IGNORED_ELEMENTS = ['A', 'P', 'inno-icon', 'SPAN'];
const InnoFooterItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'light';
    }
    get hostElement() { return getElement(this); }
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
        return (h(Host, { key: 'fabc0434f63407bdd395843921e6c52142ac0306', class: this.variantStyle() }, h("slot", { key: '78dc65fe844048d21ba51897c1cdaa535abc9348' })));
    }
    static get watchers() { return {
        "variant": ["watchVariant"]
    }; }
};
InnoFooterItem.style = innoFooterItemCss;

export { InnoFooterItem as inno_footer_item };

//# sourceMappingURL=inno-footer-item.entry.js.map