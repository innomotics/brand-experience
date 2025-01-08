import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f9444b6c.js';
import { d as defineCustomElement$3 } from './p-f8e7f9af.js';
import { d as defineCustomElement$2 } from './p-62de66a9.js';

const innoSelectItemCss = ".sc-inno-select-item-h{background-color:#2a3b40;color:#ffffff}.sc-inno-select-item-h:hover{background-color:#b2c1c7;color:#08191f}.focused.sc-inno-select-item-h{background-color:#b2c1c7;color:#08191f}.selected.sc-inno-select-item-h{color:#e1f000}.sc-inno-select-item-h .content-wrapper.sc-inno-select-item{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";
const InnoSelectItemStyle0 = innoSelectItemCss;

const InnoSelectItem$1 = /*@__PURE__*/ proxyCustomElement(class InnoSelectItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.itemSelected = createEvent(this, "itemSelected", 7);
        this.itemFavorited = createEvent(this, "itemFavorited", 7);
        this.itemUnfavorited = createEvent(this, "itemUnfavorited", 7);
        this.itemLabelChanged = createEvent(this, "itemLabelChanged", 7);
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
    get host() { return this; }
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
        return (h(Host, { key: 'e6bfe4a0271d4ecd73622e77ee356adf373eb8d7', class: {
                'select-item': true,
                'icon-driven': this.icon != undefined || this.iconFont != undefined,
                selected: this.selected,
                'can-favorite': this.canFavorite,
                separator: this.hasSeparator
            }, onClick: (e) => this.selectItem(e) }, this.icon ? h("inno-icon", { icon: this.icon, size: 24 }) : null, this.iconFont && !this.icon ? h("inno-icon", { iconFont: this.iconFont, size: 24 }) : null, h("div", { key: '4bca610ca6fa4e3d947606850eed089f60492d30', class: "content-wrapper" }, this.label), this.selected && !this.icon && !this.iconFont ? h("inno-icon", { icon: "check_checkbox", size: 24 }) : null, this.canFavorite ? this.favoriteStar() : null, this.canFavorite ? this.favoriteStarPopup() : null));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "label": ["labelChanged"]
    }; }
    static get style() { return InnoSelectItemStyle0; }
}, [66, "inno-select-item", {
        "value": [8],
        "label": [1],
        "icon": [1],
        "iconFont": [1, "icon-font"],
        "selected": [1028],
        "canFavorite": [1028, "can-favorite"],
        "isFavorite": [1028, "is-favorite"],
        "addToFavoritesLabel": [1025, "add-to-favorites-label"],
        "removeFromFavoritesLabel": [1025, "remove-from-favorites-label"],
        "favoriteIconTooltipPos": [1025, "favorite-icon-tooltip-pos"],
        "favoriteIconTooltipVariant": [1025, "favorite-icon-tooltip-variant"],
        "favoriteIconTooltipOffset": [1026, "favorite-icon-tooltip-offset"],
        "hasSeparator": [1028, "has-separator"]
    }, undefined, {
        "label": ["labelChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-select-item", "inno-icon", "inno-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-select-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoSelectItem$1);
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "inno-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoSelectItem = InnoSelectItem$1;
const defineCustomElement = defineCustomElement$1;

export { InnoSelectItem, defineCustomElement };

//# sourceMappingURL=inno-select-item.js.map