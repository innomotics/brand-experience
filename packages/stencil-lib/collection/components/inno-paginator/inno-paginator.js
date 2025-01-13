import { Host, h } from "@stencil/core";
export class InnoPaginator {
    maxCountPages = 8;
    hostElement;
    variant = 'light';
    /**
     * Total number of pages
     */
    pageCount;
    /**
     * One based index of currently selected page
     */
    selectedPage = 1;
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
