import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';

const innoPaginatorCss = ".select-item.sc-inno-paginator{display:grid;grid-template-columns:minmax(0, 1fr) 16px;grid-template-rows:auto;align-items:center;border-width:0px;border-style:none;padding:0px 16px 0px 16px;height:56px;gap:10px;cursor:pointer}.select-item.icon-driven.sc-inno-paginator:not(.can-favorite){grid-template-columns:auto minmax(0, 1fr) 16px}.select-item.icon-driven.can-favorite.sc-inno-paginator{grid-template-columns:auto minmax(0, 1fr) 24px}.select-item.can-favorite.sc-inno-paginator .star.sc-inno-paginator{display:block;font-size:24px;position:relative}.select-item.separator.sc-inno-paginator{border-bottom:3px double #ffffff}.select-item.can-favorite.sc-inno-paginator:not(.selected):not(.icon-driven){grid-template-columns:minmax(0, 1fr) 24px}.select-item.can-favorite.selected.sc-inno-paginator:not(.icon-driven){grid-template-columns:minmax(0, 1fr) 16px 24px}.sc-inno-paginator-h{display:flex;flex-direction:row;flex-wrap:nowrap;gap:8px;align-items:center;justify-items:center;height:32px}.sc-inno-paginator-h button.sc-inno-paginator{font-family:\"InnomoticsHafferSQ\";font-size:16px;font-weight:430;border:none;width:32px;height:32px;background-color:rgba(0, 0, 0, 0);display:flex;justify-content:center;align-items:center;cursor:pointer;color:#08191f}.sc-inno-paginator-h button.dark.sc-inno-paginator{color:#ffffff}.sc-inno-paginator-h button.dark.sc-inno-paginator:hover{color:#08191f;background-color:#9aacb4}.sc-inno-paginator-h button.dark.selected.sc-inno-paginator{background-color:#e1f000;color:#08191f}.sc-inno-paginator-h button.sc-inno-paginator:focus:not(.disabled):not(:disabled){outline-color:#1491EB;outline-style:solid;outline-width:2px;outline-offset:2px}.sc-inno-paginator-h button.selected.sc-inno-paginator{background-color:#08191f;color:#ffffff}.sc-inno-paginator-h button.sc-inno-paginator:hover{background-color:#40545b;color:#ffffff}.sc-inno-paginator-h .page-buttons.sc-inno-paginator{align-self:center;display:flex;flex-direction:row;flex-wrap:nowrap;gap:8px}";

const InnoPaginator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pageSelected = createEvent(this, "pageSelected", 7);
        this.itemCountChanged = createEvent(this, "itemCountChanged", 7);
        this.variant = 'light';
        this.pageCount = undefined;
        this.selectedPage = 1;
    }
    maxCountPages = 8;
    get hostElement() { return getElement(this); }
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
        return (h(Host, { key: 'b1cdd6f2580b6686436f9c7f592c09604c7305bd' }, h("button", { key: '821ceda6cc0bc61582818da27349caf90e9d5be0', disabled: this.selectedPage === 0, class: { light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.first() }, h("inno-icon", { key: 'b74a126ba6a5936f657fa3bec7c9ce05068b1b9b', size: 32, icon: 'arrow_double_left', variant: this.variant })), h("button", { key: '3ed3ad6af2589954006589528b035c04dc2302af', disabled: this.selectedPage === 0, class: { light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.prev() }, h("inno-icon", { key: '46b90b12fd37410690460d71ce946b267cd2e85a', size: 32, icon: 'arrowhead_left', variant: this.variant })), h("span", { key: '551171a31f2b014b88348183839a3d5c59625f5c', class: "basic-pagination" }, this.renderPageButtons(), " "), h("button", { key: '19b1cbcec3a652bbd4578fa515d23263296a8584', disabled: this.selectedPage === this.pageCount, class: { light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.next() }, h("inno-icon", { key: 'f0093bba684f3e27bae69b282db9ed8e94e0911b', size: 32, icon: 'arrowhead_right', variant: this.variant })), h("button", { key: 'f4bd239d40a1234f3e5697fb53c60b3ea5d0d307', disabled: this.selectedPage === this.pageCount, class: { light: this.variant == 'light', dark: this.variant == 'dark' }, onClick: () => this.last() }, h("inno-icon", { key: 'b25d068438cbf5ec25d40cdee29a93b6865f57b8', size: 32, icon: 'arrow_double_right', variant: this.variant }))));
    }
};
InnoPaginator.style = innoPaginatorCss;

export { InnoPaginator as inno_paginator };

//# sourceMappingURL=inno-paginator.entry.js.map