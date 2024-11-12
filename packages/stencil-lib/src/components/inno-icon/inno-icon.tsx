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
   * For possible values, see: https://innomotics.github.io/brand-experience/docs/icons/
   */
  @Prop({ mutable: true }) icon: string;

  /**
   * Font icon code for the InnomoticsUiIcons font.
   * Use either this or the icon property.
   * For possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont
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
  async iconChanged() {
    this.content = await this.resolveIcon(false);
  }

  @Watch('iconFont')
  async fontChanged() {
    this.content = await this.resolveIcon(true);
  }

  componentWillLoad() {
    if (!this.iconFont) {
      this.iconChanged();
    } else {
      this.fontChanged();
    }
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

  async resolveIcon(isIconFont: boolean): Promise<string | null> {
    if (this.icon && !isIconFont) {
      const svgIcon = await import(`@innomotics/brand-experience-icons/lib/inno-icons`);
      const iconname = 'inno_' + this.icon;
      const resolvedIcon = svgIcon[iconname];

      if (resolvedIcon == null) {
        console.error(`No content for icon "${this.icon}"! Maybe the icon was renamed or no longer exists.`);
      }
      return resolvedIcon;
    }

    if (this.iconFont && isIconFont) {
      return (
        <span class={`icon-${this.size} icon-${this.variant} icon-font`} style={{ fontSize: `${this.size}px` }}>
          {String.fromCodePoint(parseInt(this.iconFont, 16))}
        </span>
      );
    }

    return null;
  }
}
