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

  variantStyle() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
    };
  }

  render() {
    return (
      <Host class={this.variantStyle()}>
        <slot></slot>
      </Host>
    );
  }
}
