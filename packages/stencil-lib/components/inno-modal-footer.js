import { p as proxyCustomElement, H, h, d as Host } from './p-f47e640c.js';

const innoModalFooterCss = ".sc-inno-modal-footer-h{display:block;align-self:stretch}.sc-inno-modal-footer-h *.sc-inno-modal-footer,.sc-inno-modal-footer-h *.sc-inno-modal-footer::after,.sc-inno-modal-footer-h *.sc-inno-modal-footer::before{box-sizing:border-box}.sc-inno-modal-footer-h .sc-inno-modal-footer::-webkit-scrollbar-button{display:none}.sc-inno-modal-footer-h .sc-inno-modal-footer::-webkit-scrollbar{width:0.5rem;height:0.5rem}.sc-inno-modal-footer-h .sc-inno-modal-footer::-webkit-scrollbar-track{border-radius:5px;background:#2a3b40}.sc-inno-modal-footer-h .sc-inno-modal-footer::-webkit-scrollbar-track:hover{background:#2a3b40}.sc-inno-modal-footer-h .sc-inno-modal-footer::-webkit-scrollbar-thumb{border-radius:5px;background:#566b73}.sc-inno-modal-footer-h .sc-inno-modal-footer::-webkit-scrollbar-thumb:hover{background:#566b73}.sc-inno-modal-footer-h .sc-inno-modal-footer::-webkit-scrollbar-corner{display:none}";
const InnoModalFooterStyle0 = innoModalFooterCss;

const InnoModalFooter$1 = /*@__PURE__*/ proxyCustomElement(class InnoModalFooter extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '329e9e3141f7760663d63ff90eefa86d6b37a57b' }, h("slot", { key: '94c8c71d8da6536631a7b9ae844d357214d94529' })));
    }
    static get style() { return InnoModalFooterStyle0; }
}, [6, "inno-modal-footer"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-modal-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-modal-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoModalFooter$1);
            }
            break;
    } });
}

const InnoModalFooter = InnoModalFooter$1;
const defineCustomElement = defineCustomElement$1;

export { InnoModalFooter, defineCustomElement };

//# sourceMappingURL=inno-modal-footer.js.map