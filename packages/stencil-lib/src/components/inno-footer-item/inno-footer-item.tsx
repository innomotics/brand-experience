import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

/**
 * Represents an inno-footer item.
 *
 * Wrap an element for the inno-footer parent.
 *
 * Example are defined in the footer element.
 */
@Component({
  tag: 'inno-footer-item',
  styleUrl: 'inno-footer-item.scss',
  scoped: true,
})
export class InnoFooterItem {
  @Element()
  hostElement: HTMLElement;

  static tags = ['A', 'P', 'inno-icon'];

  /**
   * Theme variant property.
   * Inherited from the parent.
   * Can be overridden if explicitly defined.
   */
  @Prop({ mutable: true })
  variant: 'light' | 'dark' = 'light';

  variantStyle() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
    };
  }

  @Watch('variant')
  watchVariant() {
    console.log('didrender');

    const children = this.hostElement.children;
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      if (element?.tagName && !InnoFooterItem.tags.includes(element.tagName)) {
        (element as HTMLElement).dataset.innoFooterItemStyle = this.variant;
      }
    }
  }

  render() {
    return (
      <Host class={this.variantStyle()}>
        <slot></slot>
      </Host>
    );
  }
}
