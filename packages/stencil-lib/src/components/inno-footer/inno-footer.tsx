import { Component, Host, Prop, h, Element } from '@stencil/core';
import { Component, Host, Prop, h, Element } from '@stencil/core';

/**
 * Represents the general footer for the Innomotics applications.
 */
@Component({
  tag: 'inno-footer',
  styleUrl: 'inno-footer.scss',
  scoped: true,
})
export class InnoFooter {
  @Element()
  hostElement: HTMLElement;

  /**
   * Theme variant property.
   */
  @Prop({ mutable: true })
  variant: 'light' | 'dark' = 'light';

  /**
   * The copyright label.
   */
  @Prop()
  copyright = '';

  componentDidLoad() {
    this.hostElement.querySelectorAll('inno-footer-item').forEach(item => (item.variant = this.variant));
  }

  createCopyrightNode() {
    const classes = {
      ...this.variantStyle(),
      'ix-footer-copyright': true,
    };

    return <div class={classes}>{this.copyright}</div>;
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
        {this.createCopyrightNode()}
        <slot></slot>
      </Host>
    );
  }
}
