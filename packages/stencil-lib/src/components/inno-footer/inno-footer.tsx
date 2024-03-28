import { Component, Host, Prop, h, Element, Watch } from '@stencil/core';

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

  @Watch('variant')
  watchVariant() {
    this.cascadeFooterStyle();
  }

  componentDidLoad() {
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

  linkNodes(fullScreen) {
    if (fullScreen) {
      return <slot name="links"></slot>;
    } else {
      return (
        <div class={{ links: true }}>
          <slot name="links"></slot>
        </div>
      );
    }
  }

  iconNodes(fullScreen: boolean) {
    if (fullScreen) {
      return <slot name="icons"></slot>;
    } else {
      return (
        <div class={{ icons: true }}>
          <slot name="icons"></slot>
        </div>
      );
    }
  }

  render() {
    const matches = window.matchMedia('(min-width: 768px)').matches;

    return (
      <Host class={this.variantStyle()}>
        {this.createCopyrightNode()}
        {this.linkNodes(matches)}
        {this.iconNodes(matches)}
      </Host>
    );
  }
}
