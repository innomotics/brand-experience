import { Element, Event, EventEmitter, Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-select-item',
  styleUrl: 'inno-select-item.scss',
  scoped: true,
  formAssociated: true,
})
export class InnoSelectItem {
  /**
   * Value of the item.
   */
  @Prop() value: string;

  /**
   * Label of the item, can be different from the value.
   */
  @Prop() label: string

  /**
   * Optional icon for the label.
   */
  @Prop() icon: string;

  /**
   * Whether the item is selected or not.
   */
  @Prop({ mutable: true }) selected: boolean = false;

  /**
   * This event is fired whenever an item is selected.
   */
  @Event() itemSelected: EventEmitter<string>;
  @Element() host: HTMLInnoSelectElement;

  selectItem() {
    this.itemSelected.emit(this.value);
  }

  render() {
    return (
      <Host class={{ 'select-item': true, 'icon-driven': this.icon != undefined, selected: this.selected }} onClick={() => this.selectItem()}>
        {this.icon ? <inno-icon icon={this.icon} size={24}></inno-icon> : null}
        <div class="content-wrapper">{this.label}</div>
        {this.selected && !this.icon ? <inno-icon icon="check" size={16}></inno-icon> : null}
      </Host>
    );
  }
}
