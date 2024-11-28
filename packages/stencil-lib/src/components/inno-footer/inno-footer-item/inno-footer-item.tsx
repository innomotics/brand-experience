import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

const IGNORED_ELEMENTS = ['A', 'P', 'inno-icon', 'SPAN'];

/**
 * Represents an inno-footer item.
 *
 * Wrap an element for the inno-footer parent.
 *
 * See the InnoFooter docs for more information.
 */
@Component({
  tag: 'inno-footer-item',
  styleUrl: 'inno-footer-item.scss',
  scoped: true,
})
export class InnoFooterItem {
  @Element()
  hostElement: HTMLElement;

  /**
   * Theme variant property.
   * Inherited from the parent.
   * Can be overridden if explicitly defined.
   */
  @Prop({ mutable: true })
  variant: 'light' | 'dark' = 'light';

  @Watch('variant')
  watchVariant(newVariant: 'light' | 'dark') {
    this.variant = newVariant;
    this.propagateStyle();
  }

  componentDidLoad() {
    this.propagateStyle();
  }

  propagateStyle() {
    const children = this.hostElement.children;
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      if (element?.tagName && !IGNORED_ELEMENTS.includes(element.tagName)) {
        (element as HTMLElement).dataset.innoFooterItemStyle = this.variant;
      }
    }
  }

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
