import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-error',
  styleUrl: 'inno-error.scss',
  scoped: true
})
export class InnoError {

  @Prop() active : boolean = false;
  @Prop() type: 'badInput' | 'customError' |'patternMismatch' | 'rangeOverflow' |'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valid' | 'valueMissing' | undefined;
  
  // @Watch('active')
  // activehandling(newValue: boolean)
  // {
  //   this.active = newValue;
  // }
  render() {
    return (
      <Host active={this.active}>
        <slot></slot>
      </Host>
    );
  }

}
