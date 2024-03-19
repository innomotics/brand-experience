import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-button',
  styleUrl: 'inno-button.scss',
  scoped: true
})
export class InnoButton {
  @Prop({ mutable: true }) variant: 'primary' | 'secondary' | 'tertiary' | 'media' | 'navigation' = 'primary';
  @Prop({ mutable: true }) colorVariant: 'light' | 'dark' = 'light';
  @Prop() type: 'button' | 'submit' = 'button';
  @Prop({ mutable: true }) tabIdx: number = 0;
  @Prop({ reflect: true, mutable: true }) disabled = false;
  @Prop({ mutable: true }) icon: string;
  @Prop({ mutable: true }) iconPosition: 'left' | 'right' = 'right';
  @Prop({ mutable: true }) navDirection: 'left' | 'right' = 'right';
  @Prop() iconOnly: boolean = false;

  @Element() hostElement: HTMLInnoButtonElement;
  submitButtonElement: HTMLButtonElement;

  componentDidLoad() {
    if (this.type === 'submit') {
      const submitButton = document.createElement('button');
      submitButton.style.display = 'none';
      submitButton.type = 'submit';
      submitButton.tabIndex = -1;
      this.hostElement.appendChild(submitButton);

      this.submitButtonElement = submitButton;
    }
  }

  dispatchFormEvents() {
    if (this.type === 'submit' && this.submitButtonElement) {
      this.submitButtonElement.click();
    }
  }

  render() {
    let hasIcon: boolean = (this.icon != null && this.icon != '') || this.variant === 'navigation';
    let iconSize: number = this.variant === 'media' ? 32 : 24;
    let icon: string = this.variant === 'navigation'
      ? (this.navDirection === 'right' ? 'chevron-right-small' : 'chevron-left-small')
      : this.icon;

    return (
      <Host class={{
        disabled: this.disabled
      }}>
        <button
          class={
            {
              'primary': this.variant === 'primary',
              'secondary': this.variant === 'secondary',
              'tertiary': this.variant === 'tertiary',
              'media': this.variant === 'media',
              'navigation': this.variant === 'navigation',
              'icon-only': this.iconOnly,
              'light': this.colorVariant === 'light',
              'dark': this.colorVariant === 'dark',
              'display-reverse': this.iconPosition === 'left',
              disabled: this.disabled
            }
          }
          onClick={() => this.dispatchFormEvents()}
          type={this.type}
          tabIndex={this.disabled ? -1 : this.tabIdx ?? 0}
        >
          <slot></slot>
          {hasIcon ? <inno-icon icon={icon} size={iconSize} theme={this.colorVariant}></inno-icon> : null}
        </button>
      </Host>
    );
  }

}
