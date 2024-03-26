import { Component, Host, h, Prop } from '@stencil/core';

/**
 * Represents an inno-footer item.
 */
@Component({
  tag: 'inno-footer-item',
  styleUrl: 'inno-footer-item.scss',
  scoped: true,
})
export class InnoFooterItem {
  /**
   * Theme variant property.
   */
  @Prop({ mutable: true })
  variant: 'light' | 'dark' = 'light';

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
