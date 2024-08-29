import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'inno-icon',
  styleUrl: 'inno-icon.scss',
  scoped: true,
})
export class InnoIcon {
  /**
   * The icon name.
   * Use either this or the iconFont property.
   */
  @Prop({ mutable: true }) icon: string;

  /**
   * Font icon code for the InnomoticsUiIcons font.
   * Use either this or the icon property.
   */
  @Prop({ mutable: true }) iconFont: string;

  /*
   * The icon size.
   */
  @Prop({ mutable: true }) size: number = 16;

  /**
   * Color style of the icon.
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';

  @State() content?: string;

  @Watch('icon')
  async svgContentChanged() {
    this.content = await this.resolveIcon();
  }

  @Watch('iconFont')
  async fontChanged() {
    this.content = await this.resolveIcon();
  }

  async connectedCallback() {
    this.svgContentChanged();
  }

  render() {
    if (this.iconFont) {
      return <Host class={`icon-${this.size} icon-inno-${this.icon}`}>{this.content}</Host>;
    }

    return (
      <Host class={`icon-${this.size} icon-inno-${this.icon}`}>
        <div class={`icon-${this.size} icon-${this.variant}`} innerHTML={this.content}></div>
      </Host>
    );
  }

  async resolveIcon(): Promise<string | null> {
    if (this.icon) {
      const svgIcon = await import(`@innomotics/brand-experience-icons/dist/inno-icons`);
      const iconname = 'inno_' + this.icon.replace(/\-/g, '');
      return svgIcon[iconname];
    }

    if (this.iconFont) {
      return (
        <span class={`icon-${this.size} icon-${this.variant} icon-font`} style={{ fontSize: `${this.size}px` }}>
          {String.fromCodePoint(parseInt(this.iconFont, 16))}
        </span>
      );
    }

    return null;
  }
}
