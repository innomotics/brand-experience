import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';

const innoBreadcrumbItemCss = ".sc-inno-breadcrumb-item-h{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;align-items:center;white-space:nowrap;min-width:0;gap:4px}.sc-inno-breadcrumb-item-h li.sc-inno-breadcrumb-item{display:contents;cursor:pointer}.sc-inno-breadcrumb-item-h li.sc-inno-breadcrumb-item a.sc-inno-breadcrumb-item{display:contents;color:inherit}.sc-inno-breadcrumb-item-h .chevron.sc-inno-breadcrumb-item{pointer-events:none}.sc-inno-breadcrumb-item-h.sc-inno-breadcrumb-item-s>a[href],.sc-inno-breadcrumb-item-h .sc-inno-breadcrumb-item-s>a[href]{text-decoration:none !important}.sc-inno-breadcrumb-item-h.sc-inno-breadcrumb-item-s>a[href],.sc-inno-breadcrumb-item-h.sc-inno-breadcrumb-item-s>a[href]:active,.sc-inno-breadcrumb-item-h .sc-inno-breadcrumb-item-s>a[href]:active{text-decoration:none !important}.invisible.sc-inno-breadcrumb-item-h{display:none}.sc-inno-breadcrumb-item-h:focus-visible{outline:none}";

const BreadcrumbItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.breadcrumbItemClick = createEvent(this, "breadcrumbItemClick", 7);
        this.label = undefined;
        this.icon = undefined;
        this.itemIndex = undefined;
        this.iconSize = 16;
        this.visible = true;
        this.showChevron = true;
    }
    get hostElement() { return getElement(this); }
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
};
BreadcrumbItem.style = innoBreadcrumbItemCss;

export { BreadcrumbItem as inno_breadcrumb_item };

//# sourceMappingURL=inno-breadcrumb-item.entry.js.map