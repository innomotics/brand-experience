import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { FooterContent, FooterIcon, FooterText } from './inno-footer.model';

/**
 * Represents the general footer for the Innomotics applications.
 */
@Component({
  tag: 'inno-footer',
  styleUrl: 'inno-footer.scss',
  scoped: true,
})
export class InnoFooter {
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

  /**
   * Generalized entries for the application.
   */
  @Prop()
  entries: ReadonlyArray<FooterContent> = [];

  /**
   * The selector value is emitted if the given content is clicked.
   */
  @Event()
  contentSelected: EventEmitter<string>;

  render() {
    const hostClasses = {
      ...this.variantStyle(),
    };

    return (
      <Host class={hostClasses}>
        {this.createCopyrightNode()}
        {this.createContentNodes()}
      </Host>
    );
  }

  private createCopyrightNode() {
    const classes = {
      'ix-footer-copyright': true,
      ...this.variantStyle(),
    };

    return <div class={classes}>{this.copyright}</div>;
  }

  private createContentNodes() {
    return this.entries.map(entry => {
      switch (entry.type) {
        case 'footer:text':
          return this.createTextNode(entry);
        default:
          return this.createIconNode(entry);
      }
    });
  }

  private createTextNode(entry: FooterText) {
    const classes = {
      'ix-footer-text': true,
      ...this.variantStyle(),
    };

    return (
      <div class={classes} key={entry.selector} onClick={() => this.sendEvent(entry)}>
        {entry.text}
      </div>
    );
  }

  private createIconNode(entry: FooterIcon) {
    const classes = {
      'ix-footer-icon': true,
      ...this.variantStyle(),
    };

    return (
      <div class={classes}>
        <inno-icon icon={entry.icon} size={24} theme={this.variant} onClick={() => this.sendEvent(entry)}></inno-icon>
      </div>
    );
  }

  private variantStyle() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
    };
  }

  private sendEvent(content: FooterContent) {
    this.contentSelected.emit(content.selector);
  }
}
