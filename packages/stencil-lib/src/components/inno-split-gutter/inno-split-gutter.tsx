import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-split-gutter',
  styleUrl: 'inno-split-gutter.scss',
  scoped: true,
})
export class InnoSplitGutter {
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  render() {
    return (
      <Host class={{
        'split-gutter': true,
        'horizontal': this.orientation === 'horizontal',
        'vertical': this.orientation === 'vertical'
      }}>
      </Host>
    );
  }
}
