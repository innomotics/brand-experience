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
    console.log('InnoFooter :: componentDidLoad');
  }

  render() {
    return (
      <Host class={this.variantStyle()}>
        {this.createCopyrightNode()}
        <slot></slot>
      </Host>
    );
  }

  private createCopyrightNode() {
    const classes = {
      ...this.variantStyle(),
      'ix-footer-copyright': true,
    };

    return <div class={classes}>{this.copyright}</div>;
  }

  // private createContentNodes() {
  //   return this.entries.map(entry => {
  //     switch (entry.type) {
  //       case 'footer:text':
  //         return this.createTextNode(entry);
  //       default:
  //         return this.createIconNode(entry);
  //     }
  //   });
  // }

  // private createTextNode(entry: FooterText) {
  //   const classes = {
  //     'ix-footer-text': true,
  //     ...this.variantStyle(),
  //   };

  //   return (
  //     <a class={classes} rel={entry.rel} key={entry.selector} onClick={() => this.sendEvent(entry)}>
  //       {entry.text}
  //     </a>
  //   );
  // }

  // private createIconNode(entry: FooterIcon) {
  //   const classes = {
  //     'ix-footer-icon': true,
  //     ...this.variantStyle(),
  //   };

  //   return (
  //     <a class={classes} rel={entry.rel}>
  //       <inno-icon icon={entry.icon} size={24} theme={this.variant} onClick={() => this.sendEvent(entry)}></inno-icon>
  //     </a>
  //   );
  // }

  private variantStyle() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
    };
  }
}
