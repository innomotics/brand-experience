import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

export type TabClickDetail = {
  nativeEvent: MouseEvent;
};

type HostClasses = { selected: boolean; disabled: boolean; stretched: boolean; emphasized: boolean };

/**
 * Represents an inno-tab item.
 *
 * Wraps the provided content.
 *
 * See the InnoTab component for more information about how to use the tab component.
 */
@Component({
  tag: 'inno-tab-item',
  styleUrl: 'inno-tab-item.scss',
  scoped: true,
})
export class InnoTabItem {
  /**
   * Theme variant property.
   * Inherited from the parent.
   * Can be overridden if explicitly defined.
   */
  @Prop() theme: 'light' | 'dark' = 'light';

  /**
   * Set layout width style.
   * Auto: Item has the same width as the enclosed item in slot.
   * Stretched: Item has the maximum available width.
   */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /**
   * Set selected tab.
   */
  @Prop() selected = false;

  /**
   * Set disabled tab.
   */
  @Prop() disabled = false;

  /**
   * Make the non-selected items always vivid without any opacity effect.
   */
  @Prop() alwaysEmphasized = false;

  /**
   * On tab click.
   */
  @Event() tabClick: EventEmitter<TabClickDetail>;

  private themeClasses() {
    return {
      light: this.theme === 'light',
      dark: this.theme === 'dark',
    };
  }

  private hostClasses(): HostClasses {
    return {
      ...this.themeClasses(),
      selected: this.selected,
      disabled: this.disabled,
      stretched: this.layout === 'stretched',
      emphasized: this.alwaysEmphasized,
    };
  }

  private slotContainerClasses() {
    return {
      ...this.themeClasses(),
      'slot-container': true,
      'selected': this.selected,
      'disabled': this.disabled,
    };
  }

  render() {
    return (
      <Host
        class={this.hostClasses()}
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
        <div class={this.slotContainerClasses()}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
