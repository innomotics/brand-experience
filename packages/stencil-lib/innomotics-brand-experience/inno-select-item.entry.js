import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';

const innoSelectItemCss = ".sc-inno-select-item-h{background-color:#2a3b40;color:#ffffff}.sc-inno-select-item-h:hover{background-color:#b2c1c7;color:#08191f}.focused.sc-inno-select-item-h{background-color:#b2c1c7;color:#08191f}.selected.sc-inno-select-item-h{color:#e1f000}.sc-inno-select-item-h .content-wrapper.sc-inno-select-item{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";

const InnoSelectItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
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
    static get formAssociated() { return true; }
    static get watchers() { return {
        "label": ["labelChanged"]
    }; }
};
InnoSelectItem.style = innoSelectItemCss;

export { InnoSelectItem as inno_select_item };

//# sourceMappingURL=inno-select-item.entry.js.map