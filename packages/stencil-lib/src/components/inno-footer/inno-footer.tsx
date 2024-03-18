import { Component, Host, Prop, h } from '@stencil/core';
import { FooterText } from './inno-footer.model';

/**
 * Represents the general footer for the Innomotics applications.
 */
@Component({
  tag: 'inno-footer',
  styleUrl: 'inno-footer.scss',
  shadow: true,
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
  copyright = '@ Innomotics 2024';

  /**
   * Generalized entries for the application.
   */
  @Prop()
  entries: ReadonlyArray<FooterText> = [];

  render() {
    const sadsa = this.entries?.map(entry => <div>{entry.text}</div>);

    return (
      <Host>
        <div>{this.copyright}</div>
        {sadsa}
      </Host>
    );
  }
}
