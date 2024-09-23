import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Gutter for the inno-split component. Inserted automatically. Should not be used as a standalone component.
 */
@Component({
  tag: 'inno-split-gutter',
  styleUrl: 'inno-split-gutter.scss',
  scoped: true,
})
export class InnoSplitGutter {

  /**
   * @internal
   */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  render() {
    return (
      <Host class={{
        'split-gutter': true,
        'horizontal': this.orientation === 'horizontal',
        'vertical': this.orientation === 'vertical'
      }}>
        <div class="handle"></div>
      </Host>
    );
  }
}
