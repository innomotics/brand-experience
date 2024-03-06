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
  @Prop() size: number = 12 | 16 | 24 | 32;

  @State() svgContent?: string;

  async componentDidLoad() {
    console.log("Resolving icon..");
    this.svgContent = await this.resolveIcon(this.icon);
    console.log("Icon resolved..");

  }

  render() {
    return <Host class={`icon-${this.size}`} innerHTML={this.svgContent}></Host>;
  }

  async resolveIcon(icon: string) {
    const esmIcon = await import(`@innomotics/ix-icons/dist/inno-icons`);
    const iconname = 'inno_'+icon.replace(/\-/g,'');
    return esmIcon[iconname];
  }
}
