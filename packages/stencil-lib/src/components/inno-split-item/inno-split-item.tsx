import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'inno-split-item',
  styleUrl: 'inno-split-item.scss',
  scoped: true,
})
export class InnoSplitItem {
  @Prop({mutable: true}) flexBasis: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
