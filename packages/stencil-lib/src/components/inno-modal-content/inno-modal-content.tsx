import { Component, Host, h } from '@stencil/core';

/**
 * Represents the main content of the modal.
 * The content is provided by the user.
 */
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
