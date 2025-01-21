import { autoUpdate, computePosition, flip, shift } from '@floating-ui/dom';
import { Event, EventEmitter, Element, Component, Host, Prop, h, State, Watch, Listen, Method } from '@stencil/core';
import sanitizeHtml from 'sanitize-html';

@Component({
  tag: 'inno-select',
  styleUrl: 'inno-select.scss',
  scoped: true,
})
export class InnoSelect {
  @Element() hostElement!: HTMLInnoSelectElement;

  private itemsContainerRef?: HTMLDivElement;
  private wrapperRef?: HTMLDivElement;
  @State() navigationItem: HTMLInnoSelectItemElement;

  /**
   * If you work with object arrays you can set a simple function which returns the unique key value 
   * so the objects can be differentiated. By default we assume you work with simple arrays
   * so we simply return the value as it is, in that case you don't have to provide this function.
   */
  @Prop({ mutable: true }) keyValueSelector: (val: any) => any = (val: any) => { return val; };

  /**
   * Value of the select.
   */
  @Prop({ mutable: true }) value: any;

  /**
   * Whether the select is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;

  /**
   * Label for the select when no item selected.
   */
  @Prop({ mutable: true }) label: string;

  /**
   * Color variant of the select.
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' | 'primary' | 'primary-dark' = 'light';
  @State() isOpen: boolean = false;

  /**
   * Depending on the container html element's background color you can choose a lighter or darker disabled style.
   * Only applicable when variant is 'primary'.
   */
  @Prop({ mutable: true }) disabledBackgroundColor: 'light' | 'dark' = 'light';

  /**
   * Icon for select when no item selected. Use either this or the iconFont property.
   * When icon is present the label doesn't behave as floating.
   * For possible values, see: https://innomotics.github.io/brand-experience/docs/icons/
   */
  @Prop() icon: string;

  /**
   * Icon font for select when no item selected. Use either this or the icon property.
   * When icon is present the label doesn't behave as floating.
   * For possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont
   */
  @Prop() iconFont: string;

  /**
   * Whether the select should use icons. You only have to set this to true if you don't want to use the icon or iconFont properties
   * since your select has no state where nothing is selected.
   */
  @Prop() hasIcons: boolean = false;

  /**
   * The floating label is an absolutely positioned element meaning if it is too long it will grow out of the boundaries of the InnoSelect component.
   * By default the InnoSelect component automatically resizes the floating label so it will fit inside.
   * You can turn this behavior off e.g. if you are sure the label will always fit or it causes some issues.
   */
  @Prop({ mutable: true }) disableFloatingLabelAutoResize: boolean = false;

  /**
   * By default the InnoSelect component automatically resizes the dropdown so it will be as wide as the component itself.
   * You can override it to be a fixed width. Accepts any value that the 'width' css property accepts, e.g. "300px" or "min-content"
   */
  @Prop({ mutable: true }) dropdownWidth: string;

  /**
   * This event is fired when the value changes.
   */
  @Event() valueChanged: EventEmitter<string>;

  /**
   * This event is fired when an item is favorited.
   * You have to take care of managing and ordering the array of favorite items in your business logic.
   */
  @Event() itemIsFavorited: EventEmitter<any>;

  /**
   * This event is fired when an item is removed from favorites.
   * You have to take care of managing and ordering the array of favorite items in your business logic.
   */
  @Event() itemIsUnfavorited: EventEmitter<any>;

  /**
   * This event is fired when an item is added to or removed from favorites.
   * The event contains all of the favorited items.
   */
  @Event() favoriteItemsChanged: EventEmitter<any>;

  /**
   * This event is fired when the dropdown is closed. You can use this event for example 
   * if you want to reorder your InnoSelectItems after the favorited elements are changed.
   */
  @Event() dropdownClosed: EventEmitter<void>;

  private items: HTMLInnoSelectItemElement[] = [];

  private disposeAutoUpdate?: () => void;

  private itemsObserver: MutationObserver;
  private resizeObserver: ResizeObserver;

  private isVisible: boolean = false;
  private floatingLabel: HTMLSpanElement;
  private resizeTimeout: any;

  private get isLabelEmpty(): boolean {
    return this.label == null || this.label.trim() === '';
  }

  selectClicked(e: MouseEvent) {
    e.stopImmediatePropagation();
    this.isOpen = !this.isOpen;
  }

  componentWillLoad() {
    this.updateItems();
  }

  componentDidLoad() {
    if (!this.valueIsUndefined) {
      let selectedItem = this.items.find(i => this.keyValueSelector(i.value) === this.keyValueSelector(this.value));
      if (!!selectedItem) {
        this.selectitem(selectedItem.value, true);
      }
    }

    this.itemsObserver = new MutationObserver(() => {
      this.updateItems();
    });
    this.itemsObserver.observe(this.hostElement.querySelector(".items"), { childList: true })

    this.startResizeObserver();

    this.setLabelsMaxWidth();
  }

  onFocusout() {
    this.isOpen = false;
  }

  @Watch('isOpen')
  alignItems() {
    if (this.isOpen) {
      //this.updateItems();
      this.refreshSelected();
      this.computeDropdownPosition().then(() => {
        this.isVisible = true;
      })
    } else {
      this.destroyAutoUpdate();
      this.isVisible = false;
    }
  }

  private destroyAutoUpdate() {
    if (this.disposeAutoUpdate != undefined) {
      this.disposeAutoUpdate();
      this.dropdownClosed.emit();
    }
  }

  @Watch('value')
  refreshSelected() {
    this.updateSelectedItem();
  }

  private async computePositionFn() {
    return new Promise<void>(async (resolve) => {
      const computeResponse = await computePosition(
        this.wrapperRef,
        this.itemsContainerRef,
        {
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
        }
      );

      const { x, y } = computeResponse;
      let newDropdownWidth: string = !this.dropdownWidth
        ? `${this.wrapperRef.getBoundingClientRect().width}px`
        : this.dropdownWidth;
      Object.assign(this.itemsContainerRef.style, {
        left: x !== null ? `${x}px` : '',
        top: y !== null ? `${y - 1}px` : '',
        width: newDropdownWidth
      });
      resolve();
    })
  }

  private async computeDropdownPosition() {
    await this.computePositionFn();

    return new Promise<void>((resolve) => {
      this.disposeAutoUpdate = autoUpdate(
        this.wrapperRef,
        this.itemsContainerRef,
        async () => {
          await this.computePositionFn();
          resolve();
        },
        {
          ancestorResize: true,
          ancestorScroll: true,
          elementResize: true,
          layoutShift: true
        }
      );
    });
  }

  @Listen('itemSelected')
  itemSelected(event: CustomEvent<any>) {
    this.selectitem(event.detail);
  }

  @Listen('itemFavorited')
  itemFavorited(event: CustomEvent<any>) {
    this.itemIsFavorited.emit(event.detail);
    this.emitAllFavoritedItems();
  }

  @Listen('itemUnfavorited')
  itemUnfavorited(event: CustomEvent<any>) {
    this.itemIsUnfavorited.emit(event.detail);
    this.emitAllFavoritedItems();
  }

  @Listen('itemLabelChanged')
  itemLabelChanged(_event: CustomEvent<any>) {
    this.updateItems();
  }

  /**
   * Can be used to force the inno-select component to rerender.
   */
  @Method()
  async refresh() {
    this.updateItems();
  }

  private emitAllFavoritedItems(): void {
    let favoritedItems: any[] = this.items?.filter(item => item.isFavorite).map(item => item.value) ?? [];
    this.favoriteItemsChanged.emit(favoritedItems);
  }

  private selectitem(value: any, init: boolean = false): void {
    this.value = value;
    if (!init) {
      this.valueChanged.emit(this.value);
    }

    this.updateSelectedItem();
    this.isOpen = false;
  }

  private updateSelectedItem(): void {
    this.items.forEach(i => {
      if (this.keyValueSelector(i.value) === this.keyValueSelector(this.value)) {
        i.selected = true;
      } else {
        i.selected = false;
      }
    });
  }

  clearFocus() {
    let focusdItems = this.items.filter(si => si.classList.contains('focused'));
    focusdItems.forEach(fi => fi.classList.remove('focused'));
  }

  private setLabelsMaxWidth(): void {
    if (this.disableFloatingLabelAutoResize) {
      return;
    }

    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      if (!this.floatingLabel || !this.hostElement || this.valueIsUndefined) {
        return;
      }

      let newWidth: number = this.hostElement.getBoundingClientRect().width - 16;
      this.floatingLabel.style.maxWidth = `${newWidth}px`;
    }, 200);
  }

  private startResizeObserver(): void {
    if (!this.hostElement) {
      return;
    }
    this.resizeObserver = new ResizeObserver(() => {
      this.setLabelsMaxWidth();
    });

    this.resizeObserver.observe(this.hostElement, { box: "border-box" });
  }

  @Listen('keydown')
  keyboardHandler(ev: KeyboardEvent) {
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
      } else {
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

  private updateItems() {
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

    return (
      <Host
        tabindex={0}
        class={{
          'input-container': true,
          'isactive': !this.valueIsUndefined,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'primary': this.variant === 'primary',
          'primary-dark': this.variant === 'primary-dark',
          'disabled': this.disabled,
          'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
          'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark'
        }}
        onClick={(e: MouseEvent) => this.selectClicked(e)}
        onFocusout={() => this.onFocusout()}
      >
        <div class="select-wrapper" ref={el => this.wrapperRef = el as HTMLDivElement}>
          {!this.icon && !this.iconFont && !this.hasIcons ? (
            <div class="select-header">
              <div class={{ content: true, filled: !this.valueIsUndefined, "empty-label": this.isLabelEmpty }}>
                <span class={{
                  label: true,
                  float: !this.valueIsUndefined,
                  disabled: this.disabled,
                  'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
                  'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark',
                  light: this.variant === 'light',
                  dark: this.variant === 'dark',
                  primary: this.variant === 'primary'
                }}
                  innerHTML={sanitizeHtml(this.label)}
                  ref={el => this.floatingLabel = el}>
                </span>
                <span class={{
                  'label-value': true,
                  disabled: this.disabled,
                  'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
                  'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark',
                  light: this.variant === 'light',
                  dark: this.variant === 'dark',
                  primary: this.variant === 'primary'
                }}>
                  {this.selectedItem?.label}
                </span>
              </div>
              <inno-icon class="chevron" icon={this.isOpen ? 'chevron_up_small' : 'chevron_down_small'} size={16}></inno-icon>{' '}
            </div>
          ) : (
            <div class={{
              'select-item': true,
              'icon-driven': true,
              'light': this.variant === 'light',
              'dark': this.variant === 'dark',
              disabled: this.disabled,
              'disabled-light': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'light',
              'disabled-dark': this.disabled && this.variant === 'primary' && this.disabledBackgroundColor === 'dark'
            }}>
              {(this.selectedItem?.icon || this.selectedItem?.iconFont) ? (
                <span>
                  {this.selectedItem?.icon ? <inno-icon icon={this.selectedItem.icon} size={32}></inno-icon> : null}
                  {this.selectedItem?.iconFont && !this.selectedItem?.icon ? <inno-icon iconFont={this.selectedItem.iconFont} size={32}></inno-icon> : null}
                  <div class="icon-driven-label">{this.selectedItem.label}</div>
                </span>
              ) : (
                <span>
                  {this.icon ? <inno-icon icon={this.icon} size={32}></inno-icon> : null}
                  {this.iconFont && !this.icon ? <inno-icon iconFont={this.iconFont} size={32}></inno-icon> : null}
                  <div class="icon-driven-label">{this.label}</div>
                </span>
              )}
              <inno-icon class="chevron" icon={this.isOpen ? 'chevron_up_small' : 'chevron_down_small'} size={16}></inno-icon>{' '}
            </div>
          )}
          <div ref={el => (this.itemsContainerRef = el as HTMLDivElement)} class={{ items: true, opened: this.isVisible }}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
