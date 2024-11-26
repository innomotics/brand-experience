import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f9444b6c.js';
import { d as defineCustomElement$1 } from './p-a043038e.js';

const innoBreadcrumbItemCss = ".sc-inno-breadcrumb-item-h{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;align-items:center;white-space:nowrap;min-width:0;gap:4px}.sc-inno-breadcrumb-item-h li.sc-inno-breadcrumb-item{display:contents;cursor:pointer}.sc-inno-breadcrumb-item-h li.sc-inno-breadcrumb-item a.sc-inno-breadcrumb-item{display:contents;color:inherit}.sc-inno-breadcrumb-item-h .chevron.sc-inno-breadcrumb-item{pointer-events:none}.sc-inno-breadcrumb-item-h.sc-inno-breadcrumb-item-s>a[href],.sc-inno-breadcrumb-item-h .sc-inno-breadcrumb-item-s>a[href]{text-decoration:none !important}.sc-inno-breadcrumb-item-h.sc-inno-breadcrumb-item-s>a[href],.sc-inno-breadcrumb-item-h.sc-inno-breadcrumb-item-s>a[href]:active,.sc-inno-breadcrumb-item-h .sc-inno-breadcrumb-item-s>a[href]:active{text-decoration:none !important}.invisible.sc-inno-breadcrumb-item-h{display:none}.sc-inno-breadcrumb-item-h:focus-visible{outline:none}";
const InnoBreadcrumbItemStyle0 = innoBreadcrumbItemCss;

const BreadcrumbItem = /*@__PURE__*/ proxyCustomElement(class BreadcrumbItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.breadcrumbItemClick = createEvent(this, "breadcrumbItemClick", 7);
        this.label = undefined;
        this.icon = undefined;
        this.itemIndex = undefined;
        this.iconSize = 16;
        this.visible = true;
        this.showChevron = true;
    }
    get hostElement() { return this; }
    /**@internal */
    breadcrumbItemClick;
    render() {
        if (!this.visible) {
            return h(Host, { class: 'invisible' });
        }
        return (h(Host, { class: {
                'hide-chevron': !this.showChevron,
            }, onClick: () => this.breadcrumbItemClick.emit({ itemIndex: this.itemIndex, label: this.label }) }, h("li", null, h("a", null, this.icon ? (h("inno-icon", { icon: this.icon, size: this.iconSize })) : this.label, h("slot", null), this.showChevron ? (h("inno-icon", { icon: "chevron_right", class: "chevron", size: this.iconSize })) : null))));
    }
    static get style() { return InnoBreadcrumbItemStyle0; }
}, [6, "inno-breadcrumb-item", {
        "label": [1],
        "icon": [1],
        "itemIndex": [2, "item-index"],
        "iconSize": [2, "icon-size"],
        "visible": [4],
        "showChevron": [4, "show-chevron"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-breadcrumb-item", "inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-breadcrumb-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BreadcrumbItem);
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { BreadcrumbItem as B, defineCustomElement as d };

//# sourceMappingURL=p-6d46b31e.js.map