import { p as proxyCustomElement, H, h, d as Host } from './p-f47e640c.js';

const innoDateTimeCardCss = ".sc-inno-date-time-card-h .card.sc-inno-date-time-card{width:100%;display:flex;flex-direction:column;border:none;border-radius:unset;background-color:#2a3b40;box-shadow:none}.sc-inno-date-time-card-h .card.standaloneAppearance.sc-inno-date-time-card{box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 12px 18px 0 rgba(0, 0, 0, 0.1)}.sc-inno-date-time-card-h .card.sc-inno-date-time-card .header.sc-inno-date-time-card{padding:1rem;flex:0 1 auto}.sc-inno-date-time-card-h .card.sc-inno-date-time-card .separator.sc-inno-date-time-card{width:100%;flex:0 1 auto;border:1px solid #ffffff;opacity:0.4}.sc-inno-date-time-card-h .card.sc-inno-date-time-card .content.sc-inno-date-time-card{display:flex;flex-direction:column;justify-content:center;flex:1 1 auto;padding:0 0.75rem 0.75rem 0.75rem}";
const InnoDateTimeCardStyle0 = innoDateTimeCardCss;

const InnoDateTimeCard = /*@__PURE__*/ proxyCustomElement(class InnoDateTimeCard extends H {
    constructor() {
        super();
        this.__registerHost();
        this.standaloneAppearance = false;
    }
    render() {
        const cardClasses = {
            card: true,
            standaloneAppearance: this.standaloneAppearance,
        };
        return (h(Host, { key: '91a18cf5910f6cea2833656ef71e900714a2542e' }, h("div", { key: '92313ffdd18ca6d215e03949cbb40c27af0813ab', class: cardClasses }, h("div", { key: 'e9d87672e62a06dc087f4652726918802aff4114', class: "header" }, h("slot", { key: '7c5b3e7a821a272e392995f76742ced0c2dd9ce1', name: "header" })), h("div", { key: '46498d626c5ac5a09b54d2388c2eb1abf715c83d', class: "separator" }), h("div", { key: '1a092bab70256c3844d0dc516dc1ee77a241aecd', class: "content" }, h("slot", { key: '44cd49f3278cf2af8e2b5749ecf99f002de721f1' })))));
    }
    static get style() { return InnoDateTimeCardStyle0; }
}, [6, "inno-date-time-card", {
        "standaloneAppearance": [4, "standalone-appearance"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-date-time-card"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-date-time-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoDateTimeCard);
            }
            break;
    } });
}

export { InnoDateTimeCard as I, defineCustomElement as d };

//# sourceMappingURL=p-54290d8e.js.map