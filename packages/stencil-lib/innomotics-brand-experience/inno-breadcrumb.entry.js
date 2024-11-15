import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';

const innoBreadcrumbCss = ".sc-inno-breadcrumb-h{display:flex;background-color:transparent;overflow:hidden;font-size:12px}.sc-inno-breadcrumb-h inno-icon.sc-inno-breadcrumb{padding-top:2px}.light.sc-inno-breadcrumb-h{color:#08191f}.dark.sc-inno-breadcrumb-h{color:#ffffff}.sc-inno-breadcrumb-h ol.sc-inno-breadcrumb{list-style:none;display:flex;align-items:center;flex-direction:row;flex-wrap:wrap;gap:4px;padding:0px}.sc-inno-breadcrumb-h ol.sc-inno-breadcrumb-s>inno-breadcrumb-item:last-of-type,.sc-inno-breadcrumb-h ol .sc-inno-breadcrumb-s>inno-breadcrumb-item:last-of-type{font-weight:bold}";

const Breadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.itemClick = createEvent(this, "itemClick", 7);
        this.variant = 'light';
    }
    get hostElement() { return getElement(this); }
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
};
Breadcrumb.style = innoBreadcrumbCss;

export { Breadcrumb as inno_breadcrumb };

//# sourceMappingURL=inno-breadcrumb.entry.js.map