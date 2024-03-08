import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-button',
  styleUrl: 'inno-button.scss',
  scoped: true
})
export class InnoButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'media' | 'navigation';
  @Prop() parentBackgroundColor: 'light' | 'dark' = 'light';
  @Prop() type: 'button' | 'submit' = 'button';
  @Prop() tabIdx: number = 0;
  @Prop({ reflect: true }) disabled = false;

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
              'light-bgc': this.parentBackgroundColor === 'light',
              'dark-bgc': this.parentBackgroundColor === 'dark',
              disabled: this.disabled
            }
          }
          onClick={() => this.dispatchFormEvents()}
          type={this.type}
          tabIndex={this.disabled ? -1 : this.tabIdx ?? 0}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }

}
