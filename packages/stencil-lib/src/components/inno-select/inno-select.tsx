import { Event, EventEmitter, Element, Component, Host, Prop, h, State, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'inno-select',
  styleUrl: 'inno-select.scss',
  scoped: true,
})
export class InnoSelect {
  @Element() hostElement!: HTMLInnoSelectElement;

  private itemsContainerRef?: HTMLDivElement;
  @State() navigationItem: HTMLInnoSelectItemElement;

  @Prop() name: string;
  @Prop() type: 'text' | 'number' = 'text';

  @State() selectedItem: { value: string; label: string };

  @Prop({ mutable: true }) value: string;

  @Prop({ mutable: true }) isActive: boolean;
  @Prop({ mutable: true }) isFocused: boolean;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() label: string;
  @Prop() variant: 'light' | 'dark' = 'light';
  @State() isOpen: boolean = false;
  @Event() valueChanged: EventEmitter<string>;

  selectClicked() {
    this.isOpen = !this.isOpen;
    this.setActiveState();
    console.log(`isopen: ${this.isOpen}`);
  }

  componentDidLoad() {
    if (this.value) {
      let initSelection = this.items.filter(i => i.value == this.value);
      this.selectedItem = { value: initSelection[0].value, label : initSelection[0].innerText };
      initSelection[0].selected = true;
    }
    this.setActiveState();
  }

  setActiveState() {
    if (this.selectedItem !== undefined) {
      this.isActive = true;
    }
  }

  onFocusout() {
    this.isFocused = false;
    this.setActiveState();
    this.isOpen = false;
  }

  @Watch('isOpen')
  alignItems() {
    let selectPacement = this.hostElement.getBoundingClientRect();
    this.itemsContainerRef.setAttribute('style', `top: ${selectPacement.bottom}px; left: ${selectPacement.left}px; width: ${selectPacement.width}px;`);
  }

  @Listen('resize', { target: 'document' })
  windowResize() {
    this.isOpen = false;
  }

  @Listen('scroll', { target: 'window' })
  windowResizea() {
    this.isOpen = false;
  }

  @Listen('itemSelected')
  itemSelected(event: CustomEvent<{ value: string; label: string }>) {
    this.selectedItem = event.detail;
    this.value = this.selectedItem.value;
    this.valueChanged.emit(this.value);
    this.items.forEach(i => {
      if (i.value === this.selectedItem.value) {
        i.selected = true;
      } else {
        i.selected = false;
      }
    });
  }

  @Listen('keydown')
  async onKeyDown(event: KeyboardEvent) {

    if (event.code === 'Enter' || event.code === 'NumpadEnter') {

      this.isOpen = !this.isOpen;
    }

    if (event.code === 'Escape') {
      this.isOpen = false;
    }
  }

  get items() {
    return [...Array.from(this.hostElement.querySelectorAll('inno-select-item'))];
  }

  render() {
    return (
      <Host
        tabindex={0}
        class={{
          'input-container': true,
          'isactive': this.isActive,
          'focused': this.isFocused,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'disabled': this.disabled,
        }}
        onFocusout={() => this.onFocusout()}
        onClick={() => this.selectClicked()}
      >
        <div class="select-header">
          <div class={{ content: true, filled: this.isActive }}>
            <span class={{ label: true, float: this.isActive, disabled: this.disabled, light: this.variant === 'light', dark: this.variant === 'dark' }}>{this.label}</span>
            <span>{this.selectedItem?.label}</span>
          </div>
          <inno-icon icon={this.isOpen ? 'chevron-up' : 'chevron-down'} size={16}></inno-icon>
        </div>
        <div ref={el => (this.itemsContainerRef = el as HTMLDivElement)} class={{ items: true, opened: this.isOpen }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
