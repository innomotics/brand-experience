import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f47e640c.js';
import { c as computePosition, s as shift, f as flip, a as autoUpdate } from './p-ae69ea43.js';
import { s as sanitizeHtml } from './p-84ee2b37.js';
import { d as defineCustomElement$2 } from './p-d4b96023.js';

const innoSelectCss = ".select-item.sc-inno-select{display:grid;grid-template-columns:minmax(0, 1fr) 16px;grid-template-rows:auto;align-items:center;border-width:0px;border-style:none;padding:0px 16px 0px 16px;height:56px;gap:10px;cursor:pointer}.select-item.icon-driven.sc-inno-select:not(.can-favorite){grid-template-columns:auto minmax(0, 1fr) 16px}.select-item.icon-driven.can-favorite.sc-inno-select{grid-template-columns:auto minmax(0, 1fr) 24px}.select-item.can-favorite.sc-inno-select .star.sc-inno-select{display:block;font-size:24px;position:relative}.select-item.separator.sc-inno-select{border-bottom:3px double #ffffff}.select-item.can-favorite.sc-inno-select:not(.selected):not(.icon-driven){grid-template-columns:minmax(0, 1fr) 24px}.select-item.can-favorite.selected.sc-inno-select:not(.icon-driven){grid-template-columns:minmax(0, 1fr) 16px 24px}.sc-inno-select-h{cursor:pointer}.sc-inno-select-h .icon-driven.sc-inno-select span.sc-inno-select{display:contents}.sc-inno-select-h:focus-visible{outline-color:#1491EB;outline-style:solid;outline-width:2px;outline-offset:2px}.light.sc-inno-select-h:hover:not(.disabled):not(:disabled){border:1px solid #40545b;box-shadow:inset 0px 0px 0px 1px #40545b}.light.sc-inno-select-h .select-header.sc-inno-select inno-icon.sc-inno-select{color:#08191f}.light.sc-inno-select-h .icon-driven.sc-inno-select:not(inno-select-item){color:#08191f}.dark.sc-inno-select-h:hover:not(.disabled):not(:disabled){border:1px solid #e1f000;box-shadow:inset 0px 0px 0px 1px #e1f000}.dark.sc-inno-select-h .select-header.sc-inno-select inno-icon.sc-inno-select{color:#ffffff}.dark.sc-inno-select-h .icon-driven.sc-inno-select:not(inno-select-item){color:#ffffff}.primary.sc-inno-select-h{transition:background-color 0.3s cubic-bezier(0.84, 0, 0.58, 1)}.primary.sc-inno-select-h:hover:not(.disabled):not(:disabled){color:#08191f;background-color:#b2c1c7}.primary.sc-inno-select-h .select-header.sc-inno-select inno-icon.sc-inno-select{color:#08191f}.primary.sc-inno-select-h .icon-driven.sc-inno-select:not(inno-select-item){color:#08191f}.primary-dark.sc-inno-select-h{transition:background-color 0.3s cubic-bezier(0.84, 0, 0.58, 1)}.primary-dark.sc-inno-select-h:hover:not(.disabled):not(:disabled){color:#ffffff;background-color:#40545b}.primary-dark.sc-inno-select-h .select-header.sc-inno-select inno-icon.sc-inno-select{color:#e1f000}.primary-dark.sc-inno-select-h .icon-driven.sc-inno-select:not(inno-select-item){color:#e1f000}.input-container.sc-inno-select-h{display:flex;flex-direction:column;border:1px solid #9aacb4;margin:5px 5px 8px 5px;height:56px;max-height:56px;min-height:56px}.input-container.primary.sc-inno-select-h{border:none}.input-container.sc-inno-select-h .select-header.sc-inno-select{padding:8px 16px 8px 16px;box-sizing:border-box;height:56px;max-height:56px;min-height:56px;display:flex;align-items:center;justify-content:space-between;position:relative}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select{display:flex;overflow-x:hidden}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.filled.sc-inno-select:not(.empty-label) .label-value.sc-inno-select{margin-top:16px}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.sc-inno-select{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.light.sc-inno-select{color:#40545b}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.light.disabled.sc-inno-select{color:#40545b}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.dark.sc-inno-select{color:#b2c1c7}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.dark.disabled.sc-inno-select{color:#b2c1c7}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.primary.sc-inno-select{color:#08191f}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.primary.disabled.sc-inno-select{color:#9aacb4;background-color:#40545b}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.primary-dark.sc-inno-select{color:#08191f}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label.primary-dark.disabled.sc-inno-select{color:#9aacb4;background-color:#cad5da}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .float.sc-inno-select{position:absolute;top:8px;font-size:12px}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.sc-inno-select{font-size:16px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.light.sc-inno-select{color:#08191f}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.light.disabled.sc-inno-select{color:#40545b}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.dark.sc-inno-select{color:#ffffff}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.dark.disabled.sc-inno-select{color:#b2c1c7}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.primary.sc-inno-select{color:#08191f}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.primary.disabled.sc-inno-select{color:#9aacb4;background-color:#40545b}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.primary-dark.sc-inno-select{color:#e1f000}.input-container.sc-inno-select-h .select-header.sc-inno-select .content.sc-inno-select .label-value.primary-dark.disabled.sc-inno-select{color:#9aacb4;background-color:#cad5da}.input-container.dark.sc-inno-select-h{background-color:#08191f}.input-container.dark.disabled.sc-inno-select-h{background-image:linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))}.input-container.light.sc-inno-select-h{background-color:#ffffff}.input-container.light.disabled.sc-inno-select-h{background-color:rgba(8, 25, 31, 0.2)}.input-container.primary.sc-inno-select-h{background-color:#e1f000}.input-container.primary.disabled.sc-inno-select-h{color:#9aacb4;background-color:#40545b}.input-container.primary-dark.sc-inno-select-h{color:#e1f000;background-color:#08191f}.input-container.primary-dark.disabled.sc-inno-select-h{color:#9aacb4;background-color:#cad5da}.sc-inno-select-h .select-wrapper.sc-inno-select{position:relative}.sc-inno-select-h .select-wrapper.sc-inno-select .items.sc-inno-select{z-index:2;display:none;position:fixed;max-height:500px;overflow-y:auto}.sc-inno-select-h .select-wrapper.sc-inno-select .items.opened.sc-inno-select{display:block}.sc-inno-select-h .select-wrapper.sc-inno-select .select-item.icon-driven.light.disabled.sc-inno-select{color:#40545b}.sc-inno-select-h .select-wrapper.sc-inno-select .select-item.icon-driven.dark.disabled.sc-inno-select{color:#b2c1c7}.sc-inno-select-h .select-wrapper.sc-inno-select .select-item.icon-driven.disabled-light.sc-inno-select{color:#9aacb4}.sc-inno-select-h .select-wrapper.sc-inno-select .select-item.icon-driven.disabled-dark.sc-inno-select{color:#9aacb4}.sc-inno-select-h .select-wrapper.sc-inno-select .select-item.icon-driven.sc-inno-select .icon-driven-label.sc-inno-select{font-size:16px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.disabled.sc-inno-select-h{border:1px solid transparent;background-color:rgba(255, 255, 255, 0.1);pointer-events:none}.disabled.sc-inno-select-h inno-icon.chevron.sc-inno-select{display:none}";
const InnoSelectStyle0 = innoSelectCss;

const InnoSelect$1 = /*@__PURE__*/ proxyCustomElement(class InnoSelect extends H {
    constructor() {
        super();
        this.__registerHost();
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.itemIsFavorited = createEvent(this, "itemIsFavorited", 7);
        this.itemIsUnfavorited = createEvent(this, "itemIsUnfavorited", 7);
        this.favoriteItemsChanged = createEvent(this, "favoriteItemsChanged", 7);
        this.dropdownClosed = createEvent(this, "dropdownClosed", 7);
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
    get hostElement() { return this; }
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
        return (h(Host, { key: '375736989a5b2b8c948793440ff4f856f6b73657', tabindex: 0, class: {
                'input-container': true,
                'isactive': !this.valueIsUndefined,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                'primary': this.variant === 'primary',
                'primary-dark': this.variant === 'primary-dark',
                'disabled': this.disabled,
                'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
                'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark'
            }, onClick: (e) => this.selectClicked(e), onFocusout: () => this.onFocusout() }, h("div", { key: '0c69af4852ffe82a2b40eb549c207a5be882008f', class: "select-wrapper", ref: el => this.wrapperRef = el }, !this.icon && !this.iconFont && !this.hasIcons ? (h("div", { class: "select-header" }, h("div", { class: { content: true, filled: !this.valueIsUndefined, "empty-label": this.isLabelEmpty } }, h("span", { class: {
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
            } }, (this.selectedItem?.icon || this.selectedItem?.iconFont) ? (h("span", null, this.selectedItem?.icon ? h("inno-icon", { icon: this.selectedItem.icon, size: 32 }) : null, this.selectedItem?.iconFont && !this.selectedItem?.icon ? h("inno-icon", { iconFont: this.selectedItem.iconFont, size: 32 }) : null, h("div", { class: "icon-driven-label" }, this.selectedItem.label))) : (h("span", null, this.icon ? h("inno-icon", { icon: this.icon, size: 32 }) : null, this.iconFont && !this.icon ? h("inno-icon", { iconFont: this.iconFont, size: 32 }) : null, h("div", { class: "icon-driven-label" }, this.label))), h("inno-icon", { class: "chevron", icon: this.isOpen ? 'chevron_up_small' : 'chevron_down_small', size: 16 }), ' ')), h("div", { key: '0297c9975edd316b357a7956efa57a6baf5ec01b', ref: el => (this.itemsContainerRef = el), class: { items: true, opened: this.isVisible } }, h("slot", { key: '033e35acecf544d53e470df0d5e21d33c841533f' })))));
    }
    static get watchers() { return {
        "isOpen": ["alignItems"],
        "value": ["refreshSelected"]
    }; }
    static get style() { return InnoSelectStyle0; }
}, [6, "inno-select", {
        "keyValueSelector": [1040],
        "value": [1032],
        "disabled": [1540],
        "label": [1025],
        "variant": [1025],
        "disabledBackgroundColor": [1025, "disabled-background-color"],
        "icon": [1],
        "iconFont": [1, "icon-font"],
        "hasIcons": [4, "has-icons"],
        "disableFloatingLabelAutoResize": [1028, "disable-floating-label-auto-resize"],
        "dropdownWidth": [1025, "dropdown-width"],
        "navigationItem": [32],
        "isOpen": [32],
        "items": [32],
        "refresh": [64]
    }, [[0, "itemSelected", "itemSelected"], [0, "itemFavorited", "itemFavorited"], [0, "itemUnfavorited", "itemUnfavorited"], [0, "itemLabelChanged", "itemLabelChanged"], [0, "keydown", "keyboardHandler"]], {
        "isOpen": ["alignItems"],
        "value": ["refreshSelected"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-select", "inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoSelect$1);
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoSelect = InnoSelect$1;
const defineCustomElement = defineCustomElement$1;

export { InnoSelect, defineCustomElement };

//# sourceMappingURL=inno-select.js.map