import { Element, Listen, Event, Prop, Component, Host, h, EventEmitter, State } from '@stencil/core';
import sanitizeHtml from 'sanitize-html';

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

  @State() shouldFloat: boolean;

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

  /**
   * Error message to show. If you don't want to use this property you can manually add 'inno-error' components inside the 'inno-input' component.
   * You can either use this property or use the manually added errors. Can't use both at the same time.
   */
  @Prop({ mutable: true }) error: string;

  /**
   * The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   * <br/><br/>Only has an effect if 'error' has a value.
   */
  @Prop({ mutable: true }) errortype: 'badInput' | 'customError' | 'patternMismatch' | 'rangeOverflow'
    | 'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valid' | 'valueMissing' | undefined;

  /** @internal */ //for now this stays as non public, if it causes some issues for someone, they can disable it
  @Prop() valuePropReDefine: boolean = true;

  @State() isValid: boolean = true;

  get errorElements() {
    return [...Array.from(this.hostElement.querySelectorAll('inno-error:not(.explicit-error)'))] as HTMLInnoErrorElement[];
  }

  @Listen('input')
  inputChanged(event) {
    this.shouldFloat = true;
    this.isActive = true;
    this.setErrors(event.target);
  }

  private setErrors(element: any) {
    if (this.error != null && this.error !== '') { //if error is specified skip the manually added errors
      return;
    }

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
      this.shouldFloat = true;
    }

    this.errorElements.forEach(ee => ee.classList.add(this.variant));
  }

  @Listen('reCheckInnoInputValue')
  reCheckValue() {
    this.setErrors(this.inputElementRef);
    this.shouldFloat = !this.isValueEmpty();
  }

  @Listen('focusin')
  onFocus() {
    this.shouldFloat = true;
    this.isActive = true;
    this.isFocused = true;
  }

  @Listen('focusout')
  onFocusout() {
    if (this.isValueEmpty()) {
      this.shouldFloat = false;
    }
    this.isActive = false;
    this.isFocused = false;
  }

  activateInput() {
    this.isActive = true;
    this.inputElementRef.focus();
  }

  render() {
    let errorSpecified = this.error != null && this.error !== '';
    let canShowErrors = this.errorElements?.length > 0 || errorSpecified;

    return (
      <Host
        class={{
          'input-container': true,
          'isactive': this.isActive,
          'focused': this.isFocused,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'disabled': this.disabled,
          'invalid': !this.isValid || errorSpecified,
          'can-show-errors': canShowErrors
        }}
        onClick={() => this.activateInput()}
      >
        <span class={{
          label: true,
          float: this.shouldFloat,
          disabled: this.disabled,
          light: this.variant === 'light',
          dark: this.variant === 'dark',
          invalid: !this.isValid || errorSpecified
        }} innerHTML={sanitizeHtml(this.label)}></span>
        <slot></slot>
        {errorSpecified ?
          <inno-error
            class="explicit-error"
            type={this.errortype}
            variant={this.variant}
            active={true}>
            {this.error}
          </inno-error>
          : null}
      </Host>
    );
  }
}
