import { Component, Host, Prop, h, Element, Watch } from '@stencil/core';

/**
 * Represents the general footer for the Innomotics applications.
 *
 * @slot links - containing the links elements
 * @slot icons - containing the icon elements
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
    this.cascadeFooterStyle();
  }

  @Watch('variant')
  watchVariant() {
    this.cascadeFooterStyle();
  }

  cascadeFooterStyle() {
    this.hostElement.querySelectorAll('inno-footer-item').forEach(item => {
      // Set only for those children which not specified explicitly
      if (!item.hasAttribute('variant')) {
        item.variant = this.variant;
      }
    });
  }

  variantStyle() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
    };
  }

  createCopyrightNode() {
    const classes = {
      ...this.variantStyle(),
      'ix-footer-copyright': true,
    };

    return <div class={classes}>{this.copyright}</div>;
  }

  linkNodes() {
    return (
      <div class={{ links: true }}>
        <slot name="links"></slot>
      </div>
    );
  }

  iconNodes() {
    return (
      <div class={{ icons: true }}>
        <slot name="icons"></slot>
      </div>
    );
  }

  render() {
    return (
      <Host class={this.variantStyle()}>
        {this.createCopyrightNode()}
        {this.linkNodes()}
        {this.iconNodes()}
      </Host>
    );
  }
}
