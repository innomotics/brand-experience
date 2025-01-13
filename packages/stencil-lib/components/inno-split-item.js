import { p as proxyCustomElement, H, h, d as Host } from './p-6a22c7f2.js';

const innoSplitItemCss = ".sc-inno-split-item-h{display:block;overflow:hidden;width:100%;height:100%}";
const InnoSplitItemStyle0 = innoSplitItemCss;

const InnoSplitItem$1 = /*@__PURE__*/ proxyCustomElement(class InnoSplitItem extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'a12f069a60676f3b95cc21e2734144dac735c574' }, h("slot", { key: 'f01e34fb3894e07133ee8b4da065c541342f1396' })));
    }
    static get style() { return InnoSplitItemStyle0; }
}, [6, "inno-split-item"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-split-item"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-split-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoSplitItem$1);
            }
            break;
    } });
}

const InnoSplitItem = InnoSplitItem$1;
const defineCustomElement = defineCustomElement$1;

export { InnoSplitItem, defineCustomElement };

//# sourceMappingURL=inno-split-item.js.map