import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-table-base',
  styleUrl: 'inno-table-base.scss',
  scoped: true,
})
export class InnoTableBase {

  @Prop() variant: 'light' | 'dark' = 'light';

  render() {
    return (
      <Host class={{ light: this.variant === 'light',
      dark: this.variant === 'dark',}}>
        <slot></slot>
      </Host>
    );
  }

}
