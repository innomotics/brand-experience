import { p as proxyCustomElement, H, h, d as Host } from './p-f9444b6c.js';

const innoModalContentCss = ".sc-inno-modal-content-h{display:block;position:relative;overflow:auto}.sc-inno-modal-content-h *.sc-inno-modal-content,.sc-inno-modal-content-h *.sc-inno-modal-content::after,.sc-inno-modal-content-h *.sc-inno-modal-content::before{box-sizing:border-box}.sc-inno-modal-content-h .sc-inno-modal-content::-webkit-scrollbar-button{display:none}.sc-inno-modal-content-h .sc-inno-modal-content::-webkit-scrollbar{width:0.5rem;height:0.5rem}.sc-inno-modal-content-h .sc-inno-modal-content::-webkit-scrollbar-track{border-radius:5px;background:#2a3b40}.sc-inno-modal-content-h .sc-inno-modal-content::-webkit-scrollbar-track:hover{background:#2a3b40}.sc-inno-modal-content-h .sc-inno-modal-content::-webkit-scrollbar-thumb{border-radius:5px;background:#566b73}.sc-inno-modal-content-h .sc-inno-modal-content::-webkit-scrollbar-thumb:hover{background:#566b73}.sc-inno-modal-content-h .sc-inno-modal-content::-webkit-scrollbar-corner{display:none}";
const InnoModalContentStyle0 = innoModalContentCss;

const InnoModalContent$1 = /*@__PURE__*/ proxyCustomElement(class InnoModalContent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '6d09a70eb3305a479174901b9c9f745e524f414f' }, h("slot", { key: '05ede465c65bedbdacf5cc890dc872d5b7a40518' })));
    }
    static get style() { return InnoModalContentStyle0; }
}, [6, "inno-modal-content"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-modal-content"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-modal-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoModalContent$1);
            }
            break;
    } });
}

const InnoModalContent = InnoModalContent$1;
const defineCustomElement = defineCustomElement$1;

export { InnoModalContent, defineCustomElement };

//# sourceMappingURL=inno-modal-content.js.map