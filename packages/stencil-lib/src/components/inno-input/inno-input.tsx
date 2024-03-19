import { Event, Prop, Component, Host, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'inno-input',
  styleUrl: 'inno-input.scss',
  scoped: true,
  formAssociated: true,
})
export class InnoInput {
  private inputElementRef?: HTMLInputElement;
  @Prop() name: string;
  @Prop() type: 'text' | 'number' = 'text';
  @Prop({ mutable: true }) value: string;
  @Event() valueChanged: EventEmitter<string>;

  @Prop({ mutable: true }) isActive: boolean;
  @Prop({ mutable: true }) isFocused: boolean;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() label: string;
  @Prop() variant: 'light' | 'dark' = 'light';

  
  inputChanged(event) {
    this.value = event.target.value;
    this.valueChanged.emit(this.value);
  }

  componentDidLoad() {
    if (this.value) {
      this.isActive = true;
    }
  }

  onBlur() {
    if (this.value === '' || this.value === undefined) {
      this.isActive = false;
    }
  }

  onFocus() {
    this.isActive = true;
    this.isFocused = true;
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
          value={this.value}
          onInput={event => this.inputChanged(event)}
        />
      </Host>
    );
  }
}
