import { Component, Host, h } from '@stencil/core';

/**
 * Represents the footer content for the InnoModal component.
 */
@Component({
  tag: 'inno-modal-footer',
  styleUrl: 'inno-modal-footer.scss',
  scoped: true,
})
export class InnoModalFooter {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
