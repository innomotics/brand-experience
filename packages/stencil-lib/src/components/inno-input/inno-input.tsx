import { Element, Listen, Event, Prop, Component, Host, h, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'inno-input',
  styleUrl: 'inno-input.scss',
  scoped: true,
  formAssociated: true,
})
export class InnoInput {
  @Element() hostElement!: HTMLInnoInputElement;
  private inputElementRef?: HTMLInputElement;

  /**
   * Fired when the new value is valid.
   */
  @Event() valueChanged: EventEmitter<string | number>;

  @State() isActive: boolean;

  /**
   * Whether the input is focused or not.
   */
  @Prop({ mutable: true }) isFocused: boolean;

  /**
   * Whether the input is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;

  /**
   * Floating label for the input.
   */
  @Prop({ mutable: true }) label: string;

  /**
   * Color variant of the input.
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';

  /** @internal */ //for now this stays as non public, if it causes some issues for someone, they can disable it
  @Prop() valuePropReDefine: boolean = true;

  @State() isValid: boolean = true;

  get errorElements() {
    return [...Array.from(this.hostElement.querySelectorAll('inno-error'))];
  }

  @Listen('input')
  inputChanged(event) {
    this.isActive = !this.isValueEmpty();
    this.setErrors(event.target);
  }

  private setErrors(element: any) {
    this.errorElements.forEach(ee => (ee.active = false));
    if (!element.validity.valid) {
      this.isValid = false;
      //set everything off;

      let property: keyof typeof element.validity; // Type is 'foo' | 'bar'

      for (property in element.validity) {
        if (element.validity[property]) {
          let definedErrorElement = this.errorElements.find(ee => ee.type == property);
          if (definedErrorElement) {
            definedErrorElement.active = true;
          }
        }
      }
    } else {
      this.isValid = true;
    }

    if (this.isValid) {
      this.valueChanged.emit(this.value);
    }
  }

  private isValueEmpty(): boolean {
    return this.value === '' || this.value === undefined || this.value === null;
  }

  private get value(): any {
    return this.inputElementRef?.value;
  }

  //when we programatically change the input's value (e.g. with Angular's formControl's setValue(...)), no events are generated
  //we redefine the input value setter, so an event will be fired besides the original setter function
  //if we disable this then we have to manually send input events to the input
  private reDefineInputValueProperty(): void {
    if (!this.inputElementRef || !this.valuePropReDefine) {
      return;
    }

    let elementPrototype = Object.getPrototypeOf(this.inputElementRef);
    let descriptor = Object.getOwnPropertyDescriptor(elementPrototype, "value");
    let thisref = this;
    Object.defineProperty(this.inputElementRef, "value", {
      get: function () {
        return descriptor.get.apply(this, arguments);
      },
      set: function () {
        descriptor.set.apply(this, arguments);
        setTimeout(() => thisref.hostElement.dispatchEvent(new globalThis.Event("reCheckInnoInputValue", { bubbles: true })), 0);
      }
    });
  }

  componentDidLoad() {
    this.inputElementRef = this.hostElement.querySelector('input');

    this.reDefineInputValueProperty();

    if (!this.isValueEmpty()) {
      this.isActive = true;
    }

    this.errorElements.forEach(ee => ee.classList.add(this.variant));
  }

  @Listen('reCheckInnoInputValue')
  reCheckValue() {
    this.setErrors(this.inputElementRef);
    this.isActive = !this.isValueEmpty();
  }

  @Listen('focusin')
  onFocus() {
    this.isActive = true;
    this.isFocused = true;
  }

  @Listen('focusout')
  onFocusout() {
    if (this.isValueEmpty()) {
      this.isActive = false;
    }
    this.isFocused = false;
  }

  activateInput() {
    this.isActive = true;
    this.inputElementRef.focus();
  }

  render() {
    return (
      <Host
        class={{
          'input-container': true,
          'isactive': this.isActive,
          'focused': this.isFocused,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'disabled': this.disabled,
          'invalid': !this.isValid,
        }}
        onClick={() => this.activateInput()}
      >
        <span class={{ label: true, float: this.isActive, disabled: this.disabled, light: this.variant === 'light', dark: this.variant === 'dark' }}>{this.label}</span>
        <slot></slot>
      </Host>
    );
  }
}
