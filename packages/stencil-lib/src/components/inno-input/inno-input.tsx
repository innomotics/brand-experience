import { State, Prop, Component, Host, h, AttachInternals } from '@stencil/core';

@Component({
  tag: 'inno-input',
  styleUrl: 'inno-input.scss',
  scoped: true,
  formAssociated: true,
})
export class InnoInput {
  private inputElementRef?: HTMLInputElement;
  @Prop() name: string;
  @Prop({ mutable: true }) value: string;
  @Prop({ mutable: true }) isActive: boolean;
  @Prop({ mutable: true }) isFocused: boolean;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() label: string;
  @Prop() variant: string;
  @State() internalValue: string;

  @AttachInternals() internals: ElementInternals;

  componentWillLoad() {
    if (this.value) {
      this.internalValue = this.value;
      this.isActive = true;
      this.internals.setFormValue(this.value);
    }
  }

  onBlur() {
    if (this.internalValue === '' || this.internalValue === undefined) {
      this.isActive = false;
    }
  }

  onFocus() {
    this.isActive = true;
    this.isFocused = true;
  }

  inputChanged(event) {
    this.internalValue = event.target.value;
    this.internals.setFormValue(event.target.value);
  }

  onFocusout() {
    this.isFocused = false;
  }

  activateInput() {
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
        }}
        onClick={() => this.activateInput()}
      >
        <span class={{ label: true, float: this.isActive, disabled: this.disabled, light: this.variant === 'light', dark: this.variant === 'dark' }}>{this.label}</span>
        <input
          ref={el => (this.inputElementRef = el as HTMLInputElement)}
          class={{ light: this.variant === 'light', dark: this.variant === 'dark', disabled: this.disabled }}
          disabled={this.disabled}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          onFocusout={() => this.onFocusout()}
          value={this.internalValue}
          onInput={event => this.inputChanged(event)}
        />
      </Host>
    );
  }
}
