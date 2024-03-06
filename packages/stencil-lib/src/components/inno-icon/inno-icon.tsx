import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'inno-icon',
  styleUrl: 'inno-icon.scss',
  scoped: true,
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

  @State() svgContent?: string;

  async componentDidLoad() {
    this.svgContent = await this.resolveIcon(this.icon);
  }

  render() {
    return <Host class={`icon-${this.size} icon-inno-${this.icon}`} innerHTML={this.svgContent}></Host>;
  }

  async resolveIcon(icon: string) {
    const svgIcon = await import(`@innomotics/ix-icons/dist/inno-icons`);
    const iconname = 'inno_' + icon.replace(/\-/g, '');
    return svgIcon[iconname];
  }
}
