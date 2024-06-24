import { Component, Host, Prop, h } from '@stencil/core';
import { adjustValueToRange } from '../../utils/utils';

@Component({
  tag: 'inno-loader',
  styleUrl: 'inno-loader.scss',
  scoped: true,
})
export class InnoLoader {
  /**
   * Size of the loader. Valid values are: 16, 24, 32, 64.
   */
  @Prop({ mutable: true }) size: number = 64;

  /**
   * Theme variant property.
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';

  /**
   * Loader bar width.
   */
  @Prop() strokeWidth: 'thin' | 'thick' = 'thick';

  getStlyes() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
      thin: this.strokeWidth === 'thin',
      [`icon-${this.size}`]: true,
    };
  }

  componentWillLoad() {
    this.size = adjustValueToRange(this.size, 16, 64);
  }

  render() {
    return <Host class={this.getStlyes()}></Host>;
  }
}
