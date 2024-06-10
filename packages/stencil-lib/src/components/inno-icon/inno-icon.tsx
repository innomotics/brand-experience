import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'inno-icon',
  styleUrl: 'inno-icon.scss',
  scoped: true
})
export class InnoIcon {
  /**
   * The icon name
   */
  @Prop() icon: string;

  /*
   * The icon size
   */
  @Prop() size: number = 16;

  /**
   * Color style of the icon.
   */
  @Prop() variant: 'light' | 'dark' = 'light';

  @State() svgContent?: string;

  @Watch('icon')
  async svgContentChanged() {
    this.svgContent = await this.resolveIcon(this.icon);
  }

  async connectedCallback() {
    this.svgContentChanged();
  }

  render() {
    return <Host class={`icon-${this.size} icon-inno-${this.icon}`}>
      <div class={`icon-${this.size} icon-${this.variant}`} innerHTML={this.svgContent}></div>
    </Host>;
  }

  async resolveIcon(icon: string) {
    if (!icon) {
      return null;
    }

    const svgIcon = await import(`@innomotics/brand-experience-icons/dist/inno-icons`);
    const iconname = 'inno_' + icon.replace(/\-/g, '');
    return svgIcon[iconname];
  }
}
