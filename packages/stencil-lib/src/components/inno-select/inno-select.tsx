import { autoUpdate, computePosition, flip } from '@floating-ui/dom';
import { Event, EventEmitter, Element, Component, Host, Prop, h, State, Watch, Listen } from '@stencil/core';
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
   * Whether the select is focused or not.
   */
  @Prop({ mutable: true }) isFocused: boolean;

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
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';
  @State() isOpen: boolean = false;

  /**
   * Icon for select when no item selected
   * When icon is present the label is not behaves as floating
   */
  @Prop() icon: string;

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

  @State() items: HTMLInnoSelectItemElement[] = [];

  private disposeAutoUpdate?: () => void;

  private observer: MutationObserver;

  selectClicked() {
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

    this.observer = new MutationObserver(() => {
      this.updateItems();
    });
    this.observer.observe(this.hostElement.querySelector(".items"), { childList: true })
  }

  onFocusout() {
    this.isFocused = false;
    this.isOpen = false;
  }

  @Watch('isOpen')
  alignItems() {
    if (this.isOpen) {
      this.updateItems();
      this.refreshSelected();
      this.computeDropdownPosition();
    } else {
      this.destroyAutoUpdate();
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

  private async computeDropdownPosition() {
    return new Promise<void>((resolve) => {
      this.disposeAutoUpdate = autoUpdate(
        this.wrapperRef,
        this.itemsContainerRef,
        async () => {
          setTimeout(async () => {
            const computeResponse = await computePosition(
              this.wrapperRef,
              this.itemsContainerRef,
              {
                strategy: 'fixed',
                placement: 'bottom',
                middleware: [
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
            Object.assign(this.itemsContainerRef.style, {
              left: x !== null ? `${x}px` : '',
              top: y !== null ? `${y - 1}px` : '',
              width: `${this.wrapperRef.getBoundingClientRect().width}px`
            });

            resolve();
          });
        },
        {
          ancestorResize: true,
          ancestorScroll: true,
          elementResize: true
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
    this.observer.disconnect();
    this.observer = null;
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
    return (
      <Host
        tabindex={0}
        class={{
          'input-container': true,
          'isactive': !this.valueIsUndefined,
          'focused': this.isFocused,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'disabled': this.disabled,
        }}
        onFocusout={() => this.onFocusout()}
        onClick={() => this.selectClicked()}
      >
        <div class="select-wrapper" ref={el => this.wrapperRef = el as HTMLDivElement}>
          {!this.icon ? (
            <div class="select-header">
              <div class={{ content: true, filled: !this.valueIsUndefined }}>
                <span class={{ label: true, float: !this.valueIsUndefined, disabled: this.disabled, light: this.variant === 'light', dark: this.variant === 'dark' }}
                  innerHTML={sanitizeHtml(this.label)}>
                </span>
                <span class={{ "label-value": true, disabled: this.disabled, light: this.variant === 'light', dark: this.variant === 'dark' }}>
                  {this.selectedItem?.label}
                </span>
              </div>
              <inno-icon class="chevron" icon={this.isOpen ? 'chevron-up' : 'chevron-down'} size={16}></inno-icon>{' '}
            </div>
          ) : (
            <div class="select-item icon-driven">
              {this.selectedItem?.icon ? (
                <span>
                  <inno-icon icon={this.selectedItem.icon} size={32}></inno-icon>
                  <div class="content-wrapper">{this.selectedItem.label}</div>
                </span>
              ) : (
                <span>
                  <inno-icon icon={this.icon} size={32}></inno-icon>Please select
                </span>
              )}
              <inno-icon class="chevron" icon={this.isOpen ? 'chevron-up' : 'chevron-down'} size={16}></inno-icon>{' '}
            </div>
          )}
          <div ref={el => (this.itemsContainerRef = el as HTMLDivElement)} class={{ items: true, opened: this.isOpen }}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
