import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-loader',
  styleUrl: 'inno-loader.scss',
  scoped: true,
})
export class InnoLoader {

  /**
   * Size of the loader. Valid values are: 16, 24, 32, 64.
   */
  @Prop({mutable : true}) size: number = 64;

    /**
   * Theme variant property.
   */
  @Prop({ mutable: true })
  variant: 'light' | 'dark' = 'light';

  getStlyes()
  {
    let classes = this.variant == "light"?"light":"dark";
    return classes +` icon-${this.size}`;
  }

  componentWillLoad()
  {
    if(this.size > 64)
    {
      this.size = 64;
    }
  }
  render() {
    return (
      <Host class={this.getStlyes()}>
      </Host>
    );
  }

}
