import { autoUpdate, computePosition, flip, shift } from "@floating-ui/dom";
import { Host, h } from "@stencil/core";
import sanitizeHtml from "sanitize-html";
export class InnoSelect {
    constructor() {
        this.navigationItem = undefined;
        this.keyValueSelector = (val) => { return val; };
        this.value = undefined;
        this.disabled = false;
        this.label = undefined;
        this.variant = 'light';
        this.isOpen = false;
        this.disabledBackgroundColor = 'light';
        this.icon = undefined;
        this.iconFont = undefined;
        this.hasIcons = false;
        this.disableFloatingLabelAutoResize = false;
        this.dropdownWidth = undefined;
        this.items = [];
    }
    hostElement;
    itemsContainerRef;
    wrapperRef;
    /**
     * This event is fired when the value changes.
     */
    valueChanged;
    /**
     * This event is fired when an item is favorited.
     * You have to take care of managing and ordering the array of favorite items in your business logic.
     */
    itemIsFavorited;
    /**
     * This event is fired when an item is removed from favorites.
     * You have to take care of managing and ordering the array of favorite items in your business logic.
     */
    itemIsUnfavorited;
    /**
     * This event is fired when an item is added to or removed from favorites.
     * The event contains all of the favorited items.
     */
    favoriteItemsChanged;
    /**
     * This event is fired when the dropdown is closed. You can use this event for example
     * if you want to reorder your InnoSelectItems after the favorited elements are changed.
     */
    dropdownClosed;
    disposeAutoUpdate;
    itemsObserver;
    resizeObserver;
    isVisible = false;
    floatingLabel;
    resizeTimeout;
    get isLabelEmpty() {
        return this.label == null || this.label.trim() === '';
    }
    selectClicked(e) {
        e.stopImmediatePropagation();
        this.isOpen = !this.isOpen;
    }
    componentWillLoad() {
        this.updateItems();
    }
    componentDidLoad() {
        if (this.value) {
            let selectedItem = this.items.find(i => this.keyValueSelector(i.value) === this.keyValueSelector(this.value));
            if (!!selectedItem) {
                this.selectitem(selectedItem.value, true);
            }
        }
        this.itemsObserver = new MutationObserver(() => {
            this.updateItems();
        });
        this.itemsObserver.observe(this.hostElement.querySelector(".items"), { childList: true });
        this.startResizeObserver();
        this.setLabelsMaxWidth();
    }
    onFocusout() {
        this.isOpen = false;
    }
    alignItems() {
        if (this.isOpen) {
            this.updateItems();
            this.refreshSelected();
            this.computeDropdownPosition().then(() => {
                this.isVisible = true;
            });
        }
        else {
            this.destroyAutoUpdate();
            this.isVisible = false;
        }
    }
    destroyAutoUpdate() {
        if (this.disposeAutoUpdate != undefined) {
            this.disposeAutoUpdate();
            this.dropdownClosed.emit();
        }
    }
    refreshSelected() {
        this.updateSelectedItem();
    }
    async computePositionFn() {
        return new Promise(async (resolve) => {
            const computeResponse = await computePosition(this.wrapperRef, this.itemsContainerRef, {
                strategy: 'fixed',
                placement: 'bottom',
                middleware: [
                    shift(),
                    flip({
                        mainAxis: true,
                        crossAxis: true,
                        fallbackStrategy: 'bestFit',
                        padding: 5
                    })
                ]
            });
            const { x, y } = computeResponse;
            let newDropdownWidth = !this.dropdownWidth
                ? `${this.wrapperRef.getBoundingClientRect().width}px`
                : this.dropdownWidth;
            Object.assign(this.itemsContainerRef.style, {
                left: x !== null ? `${x}px` : '',
                top: y !== null ? `${y - 1}px` : '',
                width: newDropdownWidth
            });
            resolve();
        });
    }
    async computeDropdownPosition() {
        await this.computePositionFn();
        return new Promise((resolve) => {
            this.disposeAutoUpdate = autoUpdate(this.wrapperRef, this.itemsContainerRef, async () => {
                await this.computePositionFn();
                resolve();
            }, {
                ancestorResize: true,
                ancestorScroll: true,
                elementResize: true,
                layoutShift: true
            });
        });
    }
    itemSelected(event) {
        this.selectitem(event.detail);
    }
    itemFavorited(event) {
        this.itemIsFavorited.emit(event.detail);
        this.emitAllFavoritedItems();
    }
    itemUnfavorited(event) {
        this.itemIsUnfavorited.emit(event.detail);
        this.emitAllFavoritedItems();
    }
    itemLabelChanged(_event) {
        this.updateItems();
    }
    /**
     * Can be used to force the inno-select component to rerender.
     */
    async refresh() {
        this.updateItems();
    }
    emitAllFavoritedItems() {
        let favoritedItems = this.items?.filter(item => item.isFavorite).map(item => item.value) ?? [];
        this.favoriteItemsChanged.emit(favoritedItems);
    }
    selectitem(value, init = false) {
        this.value = value;
        if (!init) {
            this.valueChanged.emit(this.value);
        }
        this.updateSelectedItem();
        this.isOpen = false;
    }
    updateSelectedItem() {
        this.items.forEach(i => {
            if (this.keyValueSelector(i.value) === this.keyValueSelector(this.value)) {
                i.selected = true;
            }
            else {
                i.selected = false;
            }
        });
    }
    clearFocus() {
        let focusdItems = this.items.filter(si => si.classList.contains('focused'));
        focusdItems.forEach(fi => fi.classList.remove('focused'));
    }
    setLabelsMaxWidth() {
        if (this.disableFloatingLabelAutoResize) {
            return;
        }
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            if (!this.floatingLabel || !this.hostElement || this.valueIsUndefined) {
                return;
            }
            let newWidth = this.hostElement.getBoundingClientRect().width - 16;
            this.floatingLabel.style.maxWidth = `${newWidth}px`;
        }, 200);
    }
    startResizeObserver() {
        if (!this.hostElement) {
            return;
        }
        this.resizeObserver = new ResizeObserver(() => {
            this.setLabelsMaxWidth();
        });
        this.resizeObserver.observe(this.hostElement, { box: "border-box" });
    }
    keyboardHandler(ev) {
        if (ev.key === 'Enter' || ev.key == 'NumpadEnter') {
            this.isOpen = !this.isOpen;
            if (!this.isOpen) {
                this.clearFocus();
                if (this.navigationItem) {
                    this.selectitem(this.navigationItem.value);
                }
                this.navigationItem = undefined;
            }
            return;
        }
        if ((ev.key == 'ArrowDown' || ev.key == 'ArrowUp') && this.isOpen) {
            ev.preventDefault();
            ev.stopPropagation();
            this.clearFocus();
            if (this.navigationItem) {
                let index = this.items.indexOf(this.navigationItem);
                switch (ev.key) {
                    case 'ArrowUp': {
                        if (index - 1 >= 0) {
                            this.navigationItem = this.items[index - 1];
                        }
                        break;
                    }
                    case 'ArrowDown': {
                        if (index + 1 < this.items.length) {
                            this.navigationItem = this.items[index + 1];
                        }
                        break;
                    }
                }
            }
            else {
                if (this.items.length > 0) {
                    this.navigationItem = this.items[0];
                }
            }
            if (this.navigationItem) {
                this.navigationItem.classList.add('focused');
            }
            return;
        }
        if (ev.key == 'Escape' && this.isOpen) {
            this.isOpen = false;
        }
    }
    disconnectedCallback() {
        this.destroyAutoUpdate();
        this.itemsObserver?.disconnect();
        this.itemsObserver = null;
        this.resizeObserver?.disconnect();
        this.resizeObserver = null;
    }
    updateItems() {
        this.items = [...Array.from(this.hostElement.querySelectorAll('inno-select-item'))];
    }
    get selectedItem() {
        return this.items.find(i => this.keyValueSelector(i.value) === this.keyValueSelector(this.value));
    }
    get valueIsUndefined() {
        return this.value === undefined || this.value === '' || this.value === null;
    }
    render() {
        this.setLabelsMaxWidth();
        return (h(Host, { key: '0f808eb0d1c730368973c6bd28d2d85f8c2bcbd0', tabindex: 0, class: {
                'input-container': true,
                'isactive': !this.valueIsUndefined,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                'primary': this.variant === 'primary',
                'primary-dark': this.variant === 'primary-dark',
                'disabled': this.disabled,
                'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
                'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark'
            }, onClick: (e) => this.selectClicked(e), onFocusout: () => this.onFocusout() }, h("div", { key: 'e8199efa7c2d128122d0cf49fc19a3fa8d408486', class: "select-wrapper", ref: el => this.wrapperRef = el }, !this.icon && !this.iconFont && !this.hasIcons ? (h("div", { class: "select-header" }, h("div", { class: { content: true, filled: !this.valueIsUndefined, "empty-label": this.isLabelEmpty } }, h("span", { class: {
                label: true,
                float: !this.valueIsUndefined,
                disabled: this.disabled,
                'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
                'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark',
                light: this.variant === 'light',
                dark: this.variant === 'dark',
                primary: this.variant === 'primary'
            }, innerHTML: sanitizeHtml(this.label), ref: el => this.floatingLabel = el }), h("span", { class: {
                'label-value': true,
                disabled: this.disabled,
                'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
                'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark',
                light: this.variant === 'light',
                dark: this.variant === 'dark',
                primary: this.variant === 'primary'
            } }, this.selectedItem?.label)), h("inno-icon", { class: "chevron", icon: this.isOpen ? 'chevron_up_small' : 'chevron_down_small', size: 16 }), ' ')) : (h("div", { class: {
                'select-item': true,
                'icon-driven': true,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                disabled: this.disabled,
                'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
                'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark'
            } }, (this.selectedItem?.icon || this.selectedItem?.iconFont) ? (h("span", null, this.selectedItem?.icon ? h("inno-icon", { icon: this.selectedItem.icon, size: 32 }) : null, this.selectedItem?.iconFont && !this.selectedItem?.icon ? h("inno-icon", { iconFont: this.selectedItem.iconFont, size: 32 }) : null, h("div", { class: "icon-driven-label" }, this.selectedItem.label))) : (h("span", null, this.icon ? h("inno-icon", { icon: this.icon, size: 32 }) : null, this.iconFont && !this.icon ? h("inno-icon", { iconFont: this.iconFont, size: 32 }) : null, h("div", { class: "icon-driven-label" }, this.label))), h("inno-icon", { class: "chevron", icon: this.isOpen ? 'chevron_up_small' : 'chevron_down_small', size: 16 }), ' ')), h("div", { key: '5b8f9d4577d3058f2a48ee7b1dbba3616f526390', ref: el => (this.itemsContainerRef = el), class: { items: true, opened: this.isVisible } }, h("slot", { key: 'a8ac45d467a26c94598b26e0ecea44c6207af8e0' })))));
    }
    static get is() { return "inno-select"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-select.css"]
        };
    }
    static get properties() {
        return {
            "keyValueSelector": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "(val: any) => any",
                    "resolved": "(val: any) => any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If you work with object arrays you can set a simple function which returns the unique key value \r\nso the objects can be differentiated. By default we assume you work with simple arrays\r\nso we simply return the value as it is, in that case you don't have to provide this function."
                },
                "defaultValue": "(val: any) => { return val; }"
            },
            "value": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value of the select."
                },
                "attribute": "value",
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the select is disabled or not."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label for the select when no item selected."
                },
                "attribute": "label",
                "reflect": false
            },
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'light' | 'dark' | 'primary' | 'primary-dark'",
                    "resolved": "\"dark\" | \"light\" | \"primary\" | \"primary-dark\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color variant of the select."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "disabledBackgroundColor": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'light' | 'dark'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Depending on the container html element's background color you can choose a lighter or darker disabled style.\r\nOnly applicable when variant is 'primary'."
                },
                "attribute": "disabled-background-color",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon for select when no item selected. Use either this or the iconFont property.\r\nWhen icon is present the label doesn't behave as floating.\r\nFor possible values, see: https://innomotics.github.io/brand-experience/docs/icons/"
                },
                "attribute": "icon",
                "reflect": false
            },
            "iconFont": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon font for select when no item selected. Use either this or the icon property.\r\nWhen icon is present the label doesn't behave as floating.\r\nFor possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont"
                },
                "attribute": "icon-font",
                "reflect": false
            },
            "hasIcons": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the select should use icons. You only have to set this to true if you don't want to use the icon or iconFont properties\r\nsince your select has no state where nothing is selected."
                },
                "attribute": "has-icons",
                "reflect": false,
                "defaultValue": "false"
            },
            "disableFloatingLabelAutoResize": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The floating label is an absolutely positioned element meaning if it is too long it will grow out of the boundaries of the InnoSelect component.\r\nBy default the InnoSelect component automatically resizes the floating label so it will fit inside.\r\nYou can turn this behavior off e.g. if you are sure the label will always fit or it causes some issues."
                },
                "attribute": "disable-floating-label-auto-resize",
                "reflect": false,
                "defaultValue": "false"
            },
            "dropdownWidth": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "By default the InnoSelect component automatically resizes the dropdown so it will be as wide as the component itself.\r\nYou can override it to be a fixed width. Accepts any value that the 'width' css property accepts, e.g. \"300px\" or \"min-content\""
                },
                "attribute": "dropdown-width",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "navigationItem": {},
            "isOpen": {},
            "items": {}
        };
    }
    static get events() {
        return [{
                "method": "valueChanged",
                "name": "valueChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired when the value changes."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "itemIsFavorited",
                "name": "itemIsFavorited",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired when an item is favorited.\r\nYou have to take care of managing and ordering the array of favorite items in your business logic."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "itemIsUnfavorited",
                "name": "itemIsUnfavorited",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired when an item is removed from favorites.\r\nYou have to take care of managing and ordering the array of favorite items in your business logic."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "favoriteItemsChanged",
                "name": "favoriteItemsChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired when an item is added to or removed from favorites.\r\nThe event contains all of the favorited items."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "dropdownClosed",
                "name": "dropdownClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired when the dropdown is closed. You can use this event for example \r\nif you want to reorder your InnoSelectItems after the favorited elements are changed."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "refresh": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Can be used to force the inno-select component to rerender.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "alignItems"
            }, {
                "propName": "value",
                "methodName": "refreshSelected"
            }];
    }
    static get listeners() {
        return [{
                "name": "itemSelected",
                "method": "itemSelected",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "itemFavorited",
                "method": "itemFavorited",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "itemUnfavorited",
                "method": "itemUnfavorited",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "itemLabelChanged",
                "method": "itemLabelChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "keyboardHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=inno-select.js.map
