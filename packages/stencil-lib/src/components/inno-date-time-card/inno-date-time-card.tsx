import { Component, Host, h, Prop } from '@stencil/core';

/**
 *@internal
 */
@Component({
  tag: 'inno-date-time-card',
  styleUrl: 'inno-date-time-card.scss',
  scoped: true,
})
export class InnoDateTimeCard {
  @Prop() standaloneAppearance = false;

  render() {
    const cardClasses = {
      card: true,
      standaloneAppearance: this.standaloneAppearance,
    };

    return (
      <Host>
        <div class={cardClasses}>
          <div class="header">
            <slot name="header"></slot>
          </div>

          <div class="separator"></div>

          <div class="content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
