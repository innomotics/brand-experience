import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

export type TabClickDetail = {
  nativeEvent: MouseEvent;
};

@Component({
  tag: 'inno-tab-item',
  styleUrl: 'inno-tab-item.scss',
  scoped: true,
})
export class InnoTabItem {
  /**
   * Set selected tab
   */
  @Prop() selected = false;

  /**
   * Set disabled tab
   */
  @Prop() disabled = false;

  /**
   * Set layout width style
   */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /**
   * Set selected placement
   */
  @Prop() placement: 'bottom' | 'top' = 'bottom';

  /**
   * On tab click
   */
  @Event() tabClick: EventEmitter<TabClickDetail>;

  private tabItemClasses(props: { selected: boolean; disabled: boolean; layout: 'auto' | 'stretched'; placement: 'bottom' | 'top' }) {
    return {
      selected: props.selected,
      disabled: props.disabled,
      stretched: props.layout === 'stretched',
      bottom: props.placement === 'bottom',
      top: props.placement === 'top',
    };
  }

  render() {
    return (
      <Host
        class={this.tabItemClasses({
          selected: this.selected,
          disabled: this.disabled,
          layout: this.layout,
          placement: this.placement,
        })}
        tabIndex={0}
        onClick={(event: MouseEvent) => {
          const clientEvent = this.tabClick.emit({
            nativeEvent: event,
          });

          if (clientEvent.defaultPrevented) {
            event.stopPropagation();
          }
        }}
      >
        <div
          class={{
            text: true,
            selected: this.selected,
            disabled: this.disabled,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
