import { EventEmitter } from '../../stencil-public-runtime';
export declare class InnoSelect {
    hostElement: HTMLInnoSelectElement;
    private itemsContainerRef?;
    private wrapperRef?;
    navigationItem: HTMLInnoSelectItemElement;
    /**
     * If you work with object arrays you can set a simple function which returns the unique key value
     * so the objects can be differentiated. By default we assume you work with simple arrays
     * so we simply return the value as it is, in that case you don't have to provide this function.
     */
    keyValueSelector: (val: any) => any;
    /**
     * Value of the select.
     */
    value: any;
    /**
     * Whether the select is disabled or not.
     */
    disabled: boolean;
    /**
     * Label for the select when no item selected.
     */
    label: string;
    /**
     * Color variant of the select.
     */
    variant: 'light' | 'dark' | 'primary' | 'primary-dark';
    isOpen: boolean;
    /**
     * Depending on the container html element's background color you can choose a lighter or darker disabled style.
     * Only applicable when variant is 'primary'.
     */
    disabledBackgroundColor: 'light' | 'dark';
    /**
     * Icon for select when no item selected. Use either this or the iconFont property.
     * When icon is present the label doesn't behave as floating.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/icons/
     */
    icon: string;
    /**
     * Icon font for select when no item selected. Use either this or the icon property.
     * When icon is present the label doesn't behave as floating.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont
     */
    iconFont: string;
    /**
     * Whether the select should use icons. You only have to set this to true if you don't want to use the icon or iconFont properties
     * since your select has no state where nothing is selected.
     */
    hasIcons: boolean;
    /**
     * The floating label is an absolutely positioned element meaning if it is too long it will grow out of the boundaries of the InnoSelect component.
     * By default the InnoSelect component automatically resizes the floating label so it will fit inside.
     * You can turn this behavior off e.g. if you are sure the label will always fit or it causes some issues.
     */
    disableFloatingLabelAutoResize: boolean;
    /**
     * By default the InnoSelect component automatically resizes the dropdown so it will be as wide as the component itself.
     * You can override it to be a fixed width. Accepts any value that the 'width' css property accepts, e.g. "300px" or "min-content"
     */
    dropdownWidth: string;
    /**
     * This event is fired when the value changes.
     */
    valueChanged: EventEmitter<string>;
    /**
     * This event is fired when an item is favorited.
     * You have to take care of managing and ordering the array of favorite items in your business logic.
     */
    itemIsFavorited: EventEmitter<any>;
    /**
     * This event is fired when an item is removed from favorites.
     * You have to take care of managing and ordering the array of favorite items in your business logic.
     */
    itemIsUnfavorited: EventEmitter<any>;
    /**
     * This event is fired when an item is added to or removed from favorites.
     * The event contains all of the favorited items.
     */
    favoriteItemsChanged: EventEmitter<any>;
    /**
     * This event is fired when the dropdown is closed. You can use this event for example
     * if you want to reorder your InnoSelectItems after the favorited elements are changed.
     */
    dropdownClosed: EventEmitter<void>;
    items: HTMLInnoSelectItemElement[];
    private disposeAutoUpdate?;
    private itemsObserver;
    private resizeObserver;
    private isVisible;
    private floatingLabel;
    private resizeTimeout;
    private get isLabelEmpty();
    selectClicked(e: MouseEvent): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    onFocusout(): void;
    alignItems(): void;
    private destroyAutoUpdate;
    refreshSelected(): void;
    private computePositionFn;
    private computeDropdownPosition;
    itemSelected(event: CustomEvent<any>): void;
    itemFavorited(event: CustomEvent<any>): void;
    itemUnfavorited(event: CustomEvent<any>): void;
    itemLabelChanged(_event: CustomEvent<any>): void;
    /**
     * Can be used to force the inno-select component to rerender.
     */
    refresh(): Promise<void>;
    private emitAllFavoritedItems;
    private selectitem;
    private updateSelectedItem;
    clearFocus(): void;
    private setLabelsMaxWidth;
    private startResizeObserver;
    keyboardHandler(ev: KeyboardEvent): void;
    disconnectedCallback(): void;
    private updateItems;
    get selectedItem(): HTMLInnoSelectItemElement;
    get valueIsUndefined(): boolean;
    render(): any;
}
