import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-error',
  styleUrl: 'inno-error.scss',
  scoped: true
})
export class InnoError {

  /**
   * Show the error or not.
   */
  @Prop({ mutable: true }) active: boolean = false;

  /**
   * The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   */
  @Prop({ mutable: true }) type: 'badInput' | 'customError' | 'patternMismatch' | 'rangeOverflow' | 'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valid' | 'valueMissing' | undefined;

  /**
   * Theme variant of the input.
   */
  @Prop({ mutable: true }) variant: 'dark' | 'light' = 'light';

  render() {
    return (
      <Host active={this.active} class={{ 'dark': this.variant === 'dark', 'light': this.variant === 'light' }}>
        <slot></slot>
      </Host>
    );
  }

}
