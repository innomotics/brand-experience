import { Component, Host, h } from '@stencil/core';

/**
 * Should be only used with inno-split component. Can contain inno-split component for nesting.
 */
@Component({
  tag: 'inno-split-item',
  styleUrl: 'inno-split-item.scss',
  scoped: true,
})
export class InnoSplitItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
