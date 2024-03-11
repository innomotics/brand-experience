import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'inno-floating-label',
  styleUrl: 'inno-floating-label.scss',
  scoped: true,
})
export class InnoFloatingLabel {
  /*
   * the floating label text
   */
  @Prop() label: string;

  @Prop({mutable:true}) activeState: boolean;

  render() {
    return (
      <Host style={{ display: 'flex', flexFlow: 'column-reverse' }}>
        <slot></slot>
        <span class={{"label":true, "floatingLabel": this.activeState}}>{this.label}</span>
      </Host>
    );
  }
}
