import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f9444b6c.js';
import { d as defineCustomElement$3 } from './p-fd4e2b17.js';
import { d as defineCustomElement$2 } from './p-f8e7f9af.js';

const innoBreadcrumbCss = ".sc-inno-breadcrumb-h{display:flex;background-color:transparent;overflow:hidden;font-size:12px}.sc-inno-breadcrumb-h inno-icon.sc-inno-breadcrumb{padding-top:2px}.light.sc-inno-breadcrumb-h{color:#08191f}.dark.sc-inno-breadcrumb-h{color:#ffffff}.sc-inno-breadcrumb-h ol.sc-inno-breadcrumb{list-style:none;display:flex;align-items:center;flex-direction:row;flex-wrap:wrap;gap:4px;padding:0px}.sc-inno-breadcrumb-h ol.sc-inno-breadcrumb-s>inno-breadcrumb-item:last-of-type,.sc-inno-breadcrumb-h ol .sc-inno-breadcrumb-s>inno-breadcrumb-item:last-of-type{font-weight:bold}";
const InnoBreadcrumbStyle0 = innoBreadcrumbCss;

const Breadcrumb = /*@__PURE__*/ proxyCustomElement(class Breadcrumb extends H {
    constructor() {
        super();
        this.__registerHost();
        this.itemClick = createEvent(this, "itemClick", 7);
        this.variant = 'light';
    }
    get hostElement() { return this; }
    /**
     * Crumb item clicked event. The event contains the label and the zero-based index of the breadcrumb item inside the breadcrumb.
     */
    itemClick;
    onBreadcrumbItemClicked(event) {
        this.itemClick.emit(event.detail);
    }
    get items() {
        return [...Array.from(this.hostElement.querySelectorAll('inno-breadcrumb-item'))];
    }
    removeLastItemChevron(children) {
        if (children.length > 0) {
            children[children.length - 1].showChevron = false;
            let childrenId = 1;
            children.forEach(c => c.itemIndex = childrenId++);
        }
    }
    render() {
        this.removeLastItemChevron(this.items);
        return (h(Host, { key: '24445c39cd58e0430b33ab877ec9d01c0eec71a4', class: {
                'light': this.variant === 'light',
                'dark': this.variant === 'dark'
            } }, h("ol", { key: '2cbb0716c60fe67e5e533224352ba3093eecf636' }, this.items?.length > 0 ? (h("inno-breadcrumb-item", { label: "home", icon: "home", itemIndex: 0, showChevron: this.items.length > 0 })) : null, h("slot", { key: '1582cd4b497bbf16b982e9824ac07da95838afd8' }))));
    }
    static get style() { return InnoBreadcrumbStyle0; }
}, [6, "inno-breadcrumb", {
        "variant": [1025]
    }, [[0, "breadcrumbItemClick", "onBreadcrumbItemClicked"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-breadcrumb", "inno-breadcrumb-item", "inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-breadcrumb":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Breadcrumb);
            }
            break;
        case "inno-breadcrumb-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoBreadcrumb = Breadcrumb;
const defineCustomElement = defineCustomElement$1;

export { InnoBreadcrumb, defineCustomElement };

//# sourceMappingURL=inno-breadcrumb.js.map