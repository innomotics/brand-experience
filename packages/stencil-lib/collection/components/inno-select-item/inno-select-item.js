import { Host, h } from "@stencil/core";
export class InnoSelectItem {
    constructor() {
        this.value = undefined;
        this.label = undefined;
        this.icon = undefined;
        this.iconFont = undefined;
        this.selected = false;
        this.canFavorite = false;
        this.isFavorite = false;
        this.addToFavoritesLabel = "Add to favorites";
        this.removeFromFavoritesLabel = "Remove from favorites";
        this.favoriteIconTooltipPos = "right";
        this.favoriteIconTooltipVariant = 'light';
        this.favoriteIconTooltipOffset = 8;
        this.hasSeparator = false;
    }
    /**
     * This event is fired whenever an item is selected.
     */
    itemSelected;
    /**
     * This event is fired whenever an item is favorited.
     */
    itemFavorited;
    /**
     * This event is fired whenever an item is removed from favorites.
     */
    itemUnfavorited;
    /**
     * This event is fired whenever the selected item's label changes. The inno-select component then will rerender.
     */
    itemLabelChanged;
    host;
    popover;
    get hostElementHasId() {
        return this.host.id != null && this.host.id.trim() !== '';
    }
    get forSelector() {
        return this.isFavorite ? `#${this.host.id} .star.favorite` : `#${this.host.id} .star.not-favorite`;
    }
    selectItem(event) {
        event.stopPropagation();
        event.preventDefault();
        this.itemSelected.emit(this.value);
    }
    favoriteItem(event) {
        event.stopPropagation();
        event.preventDefault();
        this.isFavorite = true;
        this.itemFavorited.emit(this.value);
    }
    unFavoriteItem(event) {
        event.stopPropagation();
        event.preventDefault();
        this.isFavorite = false;
        this.itemUnfavorited.emit(this.value);
    }
    favoriteStar() {
        return this.isFavorite
            ? h("span", { class: "star favorite", onClick: (event) => this.unFavoriteItem(event) }, "\u2605")
            : h("span", { class: "star not-favorite", onClick: (event) => this.favoriteItem(event) }, "\u2606");
    }
    favoriteStarPopup() {
        if (!this.hostElementHasId) {
            return null;
        }
        return h("inno-popover", { ref: el => this.popover = el, popoverText: this.isFavorite ? this.removeFromFavoritesLabel : this.addToFavoritesLabel, trigger: 'hover', for: this.forSelector, placement: this.favoriteIconTooltipPos, variant: this.favoriteIconTooltipVariant, offset: this.favoriteIconTooltipOffset });
    }
    labelChanged(newLabel) {
        if (this.selected) {
            this.itemLabelChanged.emit(newLabel);
        }
    }
    render() {
        if (this.hostElementHasId && !!this.popover) {
            this.popover.updateForElement(this.forSelector);
        }
        return (h(Host, { key: 'dbc866b8f9265c143de7c72a937993f94fc5d0b1', class: {
                'select-item': true,
                'icon-driven': this.icon != undefined || this.iconFont != undefined,
                selected: this.selected,
                'can-favorite': this.canFavorite,
                separator: this.hasSeparator
            }, onClick: (e) => this.selectItem(e) }, this.icon ? h("inno-icon", { icon: this.icon, size: 24 }) : null, this.iconFont && !this.icon ? h("inno-icon", { iconFont: this.iconFont, size: 24 }) : null, h("div", { key: 'b9925100dcf7438b66d85dea0e8906a527f2d3c6', class: "content-wrapper" }, this.label), this.selected && !this.icon && !this.iconFont ? h("inno-icon", { icon: "check_checkbox", size: 24 }) : null, this.canFavorite ? this.favoriteStar() : null, this.canFavorite ? this.favoriteStarPopup() : null));
    }
    static get is() { return "inno-select-item"; }
    static get encapsulation() { return "scoped"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-select-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-select-item.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value of the item."
                },
                "attribute": "value",
                "reflect": false
            },
            "label": {
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
                    "text": "Label of the item, can be different from the value."
                },
                "attribute": "label",
                "reflect": false
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
                    "text": "Optional icon for the label. Use either this or the iconFont property.\r\nFor possible values, see: https://innomotics.github.io/brand-experience/docs/icons/"
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
                    "text": "Optional icon font for the label. Use either this or the icon property.\r\nFor possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont"
                },
                "attribute": "icon-font",
                "reflect": false
            },
            "selected": {
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
                    "text": "Whether the item is selected or not."
                },
                "attribute": "selected",
                "reflect": false,
                "defaultValue": "false"
            },
            "canFavorite": {
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
                    "text": "Adds a favorite icon to the selectable item. If you press this icon an event will be fired with the selected item. \r\nYou have to take care of managing and ordering the array of favorite items in your business logic.\r\nClicking on the favorite icon will not close the dropdown."
                },
                "attribute": "can-favorite",
                "reflect": false,
                "defaultValue": "false"
            },
            "isFavorite": {
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
                    "text": "The selectable item is favorited or not."
                },
                "attribute": "is-favorite",
                "reflect": false,
                "defaultValue": "false"
            },
            "addToFavoritesLabel": {
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
                    "text": "Tooltip text for favorite add. The tooltip is only visible if the InnoSelectItem has a unique id."
                },
                "attribute": "add-to-favorites-label",
                "reflect": false,
                "defaultValue": "\"Add to favorites\""
            },
            "removeFromFavoritesLabel": {
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
                    "text": "Tooltip text for favorite remove. The tooltip is only visible if the InnoSelectItem has a unique id."
                },
                "attribute": "remove-from-favorites-label",
                "reflect": false,
                "defaultValue": "\"Remove from favorites\""
            },
            "favoriteIconTooltipPos": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "@floating-ui/dom",
                            "id": "../../node_modules/@floating-ui/dom/dist/floating-ui.dom.d.ts::Placement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the favorite icon tooltip.\r\nPlease note that the offset will remain the same in case the desired placement does not fit."
                },
                "attribute": "favorite-icon-tooltip-pos",
                "reflect": false,
                "defaultValue": "\"right\""
            },
            "favoriteIconTooltipVariant": {
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
                    "text": "Color variant of the favorite icon tooltip."
                },
                "attribute": "favorite-icon-tooltip-variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "favoriteIconTooltipOffset": {
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
                    "text": "Offset of the favorite icon tooltip position in pixels.\r\nPlease note that the offset will remain the same in case the desired placement does not fit."
                },
                "attribute": "favorite-icon-tooltip-offset",
                "reflect": false,
                "defaultValue": "8"
            },
            "hasSeparator": {
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
                    "text": "A simple separator for the item. You can use it for example to visually separate the favorited and non-favorited items."
                },
                "attribute": "has-separator",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "itemSelected",
                "name": "itemSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired whenever an item is selected."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "itemFavorited",
                "name": "itemFavorited",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired whenever an item is favorited."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "itemUnfavorited",
                "name": "itemUnfavorited",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired whenever an item is removed from favorites."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "itemLabelChanged",
                "name": "itemLabelChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired whenever the selected item's label changes. The inno-select component then will rerender."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "label",
                "methodName": "labelChanged"
            }];
    }
}
//# sourceMappingURL=inno-select-item.js.map
