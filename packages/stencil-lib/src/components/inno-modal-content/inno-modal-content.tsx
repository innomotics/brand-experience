import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'inno-modal-content',
  styleUrl: 'inno-modal-content.scss',
  scoped: true,
})
export class InnoModalContent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
