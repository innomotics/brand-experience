import { p as proxyCustomElement, H, h, d as Host } from './p-f9444b6c.js';

const innoSplitItemCss = ".sc-inno-split-item-h{display:block;overflow:hidden;width:100%;height:100%}";
const InnoSplitItemStyle0 = innoSplitItemCss;

const InnoSplitItem$1 = /*@__PURE__*/ proxyCustomElement(class InnoSplitItem extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '0e1f9dc6b469c26c8183b21c8ede20b0e7ab335d' }, h("slot", { key: '683f4a2f31334552d9ddb87c2bd4d4159ab45133' })));
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