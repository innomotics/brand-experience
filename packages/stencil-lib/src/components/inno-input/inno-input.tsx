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
   * Value of the input.
   */
  @Prop({ mutable: true }) value: string | number;

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
  @State() isValid: boolean = true;

  get errorElements() {
    return [...Array.from(this.hostElement.querySelectorAll('inno-error'))];
  }

  @Listen('input')
  inputChanged(event) {
    this.errorElements.forEach(ee => (ee.active = false));
    if (!event.target.validity.valid) {
      this.isValid = false;
      //set everything off;

      let property: keyof typeof event.target.validity; // Type is 'foo' | 'bar'

      for (property in event.target.validity) {
        if (event.target.validity[property]) {
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
      this.value = event.target.value;
      this.valueChanged.emit(this.value);
    }
  }

  componentDidLoad() {
    this.inputElementRef = this.hostElement.querySelector('input');
    this.errorElements.forEach(ee => ee.classList.add(this.variant));
    if (this.value) {
      this.isActive = true;
    }
  }

  @Listen('focusin')
  onFocus() {
    this.isActive = true;
    this.isFocused = true;
  }

  @Listen('focusout')
  onFocusout() {
    if (this.value === '' || this.value === undefined) {
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
