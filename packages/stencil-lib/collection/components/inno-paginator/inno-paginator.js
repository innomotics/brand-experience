import { Host, h } from "@stencil/core";
export class InnoPaginator {
    constructor() {
        this.variant = 'light';
        this.pageCount = undefined;
        this.selectedPage = 1;
    }
    maxCountPages = 8;
    hostElement;
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
    static get is() { return "inno-paginator"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-paginator.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-paginator.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'dark' | 'light'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "pageCount": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Total number of pages"
                },
                "attribute": "page-count",
                "reflect": false
            },
            "selectedPage": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "One based index of currently selected page"
                },
                "attribute": "selected-page",
                "reflect": false,
                "defaultValue": "1"
            }
        };
    }
    static get events() {
        return [{
                "method": "pageSelected",
                "name": "pageSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Page selection event"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "itemCountChanged",
                "name": "itemCountChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Item count change event"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-paginator.js.map
