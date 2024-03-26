import { Component, Host, h, Prop, Element } from '@stencil/core';

/**
 * Represents an inno-footer item.
 *
 * @example
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

  static tags = ['A', 'P'];

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

  componentDidLoad() {
    // const children = this.hostElement.children;
    // for (let index = 0; index < children.length; index++) {
    //   const element = children[index];
    //   if (element?.tagName && InnoFooterItem.tags.includes(element.tagName)) {
    //     element.classList.add('inno-footer-item-style');
    //   }
    // }
  }
}
