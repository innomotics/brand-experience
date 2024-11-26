import { EventEmitter } from '../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
export declare class InnoSelectItem {
    /**
     * Value of the item.
     */
    value: any;
    /**
     * Label of the item, can be different from the value.
     */
    label: string;
    /**
     * Optional icon for the label. Use either this or the iconFont property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/icons/
     */
    icon: string;
    /**
     * Optional icon font for the label. Use either this or the icon property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont
     */
    iconFont: string;
    /**
     * Whether the item is selected or not.
     */
    selected: boolean;
    /**
     * Adds a favorite icon to the selectable item. If you press this icon an event will be fired with the selected item.
     * You have to take care of managing and ordering the array of favorite items in your business logic.
     * Clicking on the favorite icon will not close the dropdown.
     */
    canFavorite: boolean;
    /**
     * The selectable item is favorited or not.
     */
    isFavorite: boolean;
    /**
     * Tooltip text for favorite add. The tooltip is only visible if the InnoSelectItem has a unique id.
     */
    addToFavoritesLabel: string;
    /**
     * Tooltip text for favorite remove. The tooltip is only visible if the InnoSelectItem has a unique id.
     */
    removeFromFavoritesLabel: string;
    /**
     * Position of the favorite icon tooltip.
     * Please note that the offset will remain the same in case the desired placement does not fit.
     */
    favoriteIconTooltipPos: Placement;
    /**
     * Color variant of the favorite icon tooltip.
     */
    favoriteIconTooltipVariant: 'light' | 'dark';
    /**
     * Offset of the favorite icon tooltip position in pixels.
     * Please note that the offset will remain the same in case the desired placement does not fit.
     */
    favoriteIconTooltipOffset: number;
    /**
     * A simple separator for the item. You can use it for example to visually separate the favorited and non-favorited items.
     */
    hasSeparator: boolean;
    /**
     * This event is fired whenever an item is selected.
     */
    itemSelected: EventEmitter<any>;
    /**
     * This event is fired whenever an item is favorited.
     */
    itemFavorited: EventEmitter<any>;
    /**
     * This event is fired whenever an item is removed from favorites.
     */
    itemUnfavorited: EventEmitter<any>;
    /**
     * This event is fired whenever the selected item's label changes. The inno-select component then will rerender.
     */
    itemLabelChanged: EventEmitter<any>;
    host: HTMLInnoSelectElement;
    private popover;
    private get hostElementHasId();
    private get forSelector();
    selectItem(event: MouseEvent): void;
    favoriteItem(event: MouseEvent): void;
    unFavoriteItem(event: MouseEvent): void;
    favoriteStar(): any;
    favoriteStarPopup(): any;
    labelChanged(newLabel: string): void;
    render(): any;
}
