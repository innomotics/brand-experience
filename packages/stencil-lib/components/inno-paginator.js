import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f9444b6c.js';
import { d as defineCustomElement$2 } from './p-a043038e.js';

const innoPaginatorCss = ".select-item.sc-inno-paginator{display:grid;grid-template-columns:minmax(0, 1fr) 16px;grid-template-rows:auto;align-items:center;border-width:0px;border-style:none;padding:0px 16px 0px 16px;height:56px;gap:10px;cursor:pointer}.select-item.icon-driven.sc-inno-paginator:not(.can-favorite){grid-template-columns:auto minmax(0, 1fr) 16px}.select-item.icon-driven.can-favorite.sc-inno-paginator{grid-template-columns:auto minmax(0, 1fr) 24px}.select-item.can-favorite.sc-inno-paginator .star.sc-inno-paginator{display:block;font-size:24px;position:relative}.select-item.separator.sc-inno-paginator{border-bottom:3px double #ffffff}.select-item.can-favorite.sc-inno-paginator:not(.selected):not(.icon-driven){grid-template-columns:minmax(0, 1fr) 24px}.select-item.can-favorite.selected.sc-inno-paginator:not(.icon-driven){grid-template-columns:minmax(0, 1fr) 16px 24px}.sc-inno-paginator-h{display:flex;flex-direction:row;flex-wrap:nowrap;gap:8px;align-items:center;justify-items:center;height:32px}.sc-inno-paginator-h button.sc-inno-paginator{font-family:\"InnomoticsHafferSQ\";font-size:16px;font-weight:430;border:none;width:32px;height:32px;background-color:rgba(0, 0, 0, 0);display:flex;justify-content:center;align-items:center;cursor:pointer;color:#08191f}.sc-inno-paginator-h button.dark.sc-inno-paginator{color:#ffffff}.sc-inno-paginator-h button.dark.sc-inno-paginator:hover{color:#08191f;background-color:#9aacb4}.sc-inno-paginator-h button.dark.selected.sc-inno-paginator{background-color:#e1f000;color:#08191f}.sc-inno-paginator-h button.sc-inno-paginator:focus:not(.disabled):not(:disabled){outline-color:#1491EB;outline-style:solid;outline-width:2px;outline-offset:2px}.sc-inno-paginator-h button.selected.sc-inno-paginator{background-color:#08191f;color:#ffffff}.sc-inno-paginator-h button.sc-inno-paginator:hover{background-color:#40545b;color:#ffffff}.sc-inno-paginator-h .page-buttons.sc-inno-paginator{align-self:center;display:flex;flex-direction:row;flex-wrap:nowrap;gap:8px}";
const InnoPaginatorStyle0 = innoPaginatorCss;

const InnoPaginator$1 = /*@__PURE__*/ proxyCustomElement(class InnoPaginator extends H {
    constructor() {
        super();
        this.__registerHost();
        this.pageSelected = createEvent(this, "pageSelected", 7);
        this.itemCountChanged = createEvent(this, "itemCountChanged", 7);
        this.variant = 'light';
        this.pageCount = undefined;
        this.selectedPage = 1;
    }
    maxCountPages = 8;
    get hostElement() { return this; }
    /**
     * Page selection event
     */
    pageSelected;
    /**
     * Item count change event
     */
    itemCountChanged;
    selectPage(index) {
        if (index < 1) {
            this.selectedPage = 1;
        }
        else if (index > this.pageCount) {
            this.selectedPage = this.pageCount;
        }
        else {
            this.selectedPage = index;
        }
        this.pageSelected.emit(this.selectedPage);
    }
    next() {
        if (this.selectedPage !== this.pageCount) {
            this.selectPage(this.selectedPage + 1);
        }
    }
    prev() {
        if (this.selectedPage !== 1) {
            this.selectPage(this.selectedPage - 1);
        }
    }
    first() {
        if (this.selectedPage !== 1) {
            this.selectPage(1);
        }
    }
    last() {
        if (this.selectedPage !== this.pageCount) {
            this.selectPage(this.pageCount);
        }
    }
    getPageButton(index) {
        return h("button", { class: { selected: this.selectedPage == index, light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.selectPage(index) }, index);
    }
    renderPageButtons() {
        const pagesBeforeOverflow = Math.floor(this.maxCountPages / 2);
        const hasOverflow = this.pageCount > this.maxCountPages;
        const hasOverflowStart = hasOverflow && this.selectedPage > pagesBeforeOverflow;
        const hasOverflowEnd = hasOverflow && this.selectedPage <= this.pageCount - pagesBeforeOverflow;
        const pageButtons = [];
        let start = 1;
        let end = Math.min(this.pageCount, this.maxCountPages);
        let pageCount = Math.floor((this.maxCountPages - 4) / 2);
        if (hasOverflowStart) {
            const baseButtonProps = {
                onClick: () => {
                    if (hasOverflowEnd) {
                        this.selectPage(this.selectedPage - Math.max(0, 2 * pageCount + 1));
                    }
                    else {
                        this.selectPage(this.pageCount - this.maxCountPages);
                    }
                }
            };
            pageButtons.push(h("button", { class: { light: this.variant == 'light', dark: this.variant == 'dark' }, ...baseButtonProps }, "..."));
            if (hasOverflowEnd) {
                start = this.pageCount - this.maxCountPages + 2;
            }
            else {
                start = this.pageCount - this.maxCountPages + 3;
                end = this.pageCount;
            }
        }
        if (hasOverflowEnd) {
            if (hasOverflowStart) {
                start = this.selectedPage - pageCount;
                end = this.selectedPage + pageCount;
            }
            else {
                end = this.maxCountPages - 2;
            }
        }
        for (let i = start; i <= end; i++) {
            pageButtons.push(this.getPageButton(i));
        }
        if (hasOverflowEnd) {
            const baseButtonProps = {
                onClick: () => {
                    if (hasOverflowStart) {
                        this.selectPage(this.selectedPage + Math.max(0, 2 * pageCount + 1));
                    }
                    else {
                        this.selectPage(this.maxCountPages - 1);
                    }
                }
            };
            pageButtons.push(h("button", { class: { light: this.variant == 'light', dark: this.variant == 'dark' }, ...baseButtonProps }, "..."));
        }
        return h("span", { class: "page-buttons" }, pageButtons);
    }
    render() {
        return (h(Host, { key: '49a54d0e87092550ac9b4fb89312f6dcc274d0f0' }, h("button", { key: '563ee49badd594b04b47b8a081afb35f8f3437f1', disabled: this.selectedPage === 0, class: { light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.first() }, h("inno-icon", { key: '065da656e295a666fb483aadefb6fec3bb4f72ca', size: 32, icon: 'arrow_double_left', variant: this.variant })), h("button", { key: '4bd8c2cfb03685e3151e73ccedfc6cc286413721', disabled: this.selectedPage === 0, class: { light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.prev() }, h("inno-icon", { key: 'a9ef0d4d41962a7cf84723f70427c2869d8ff425', size: 32, icon: 'arrowhead_left', variant: this.variant })), h("span", { key: '6f50767326ebb83723c26d3290a4c289591b6a72', class: "basic-pagination" }, this.renderPageButtons(), " "), h("button", { key: 'ad5b5c0d44cc1030ca6a0a26c1c2108ccd0a6b8f', disabled: this.selectedPage === this.pageCount, class: { light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.next() }, h("inno-icon", { key: '614f39420dd1cf3c25a18558247f1ea3b43a54d2', size: 32, icon: 'arrowhead_right', variant: this.variant })), h("button", { key: 'f1f70ebdbf3c2e4fb474f2a60e30bf7bf7290a30', disabled: this.selectedPage === this.pageCount, class: { light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.last() }, h("inno-icon", { key: '5f46d9edb757eec5baefee26e8ed502aba3f3ec3', size: 32, icon: 'arrow_double_right', variant: this.variant }))));
    }
    static get style() { return InnoPaginatorStyle0; }
}, [2, "inno-paginator", {
        "variant": [1025],
        "pageCount": [1026, "page-count"],
        "selectedPage": [1026, "selected-page"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-paginator", "inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-paginator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoPaginator$1);
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoPaginator = InnoPaginator$1;
const defineCustomElement = defineCustomElement$1;

export { InnoPaginator, defineCustomElement };

//# sourceMappingURL=inno-paginator.js.map