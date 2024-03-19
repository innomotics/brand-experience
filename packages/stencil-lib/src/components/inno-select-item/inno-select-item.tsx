import { Element, Event, EventEmitter, Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inno-select-item',
  styleUrl: 'inno-select-item.scss',
  scoped: true,
  formAssociated: true
})
export class InnoSelectItem {
  @Prop() value: string;
  @Prop() selected: boolean = false;
  @Event() itemSelected: EventEmitter<{ value: string; label: string }>;
  @Element() host: HTMLInnoSelectElement;

  selectItem() {
    this.itemSelected.emit({ value: this.value, label: this.host.innerText });
  }
  
  render() {
    return (
      <Host tabindex="0" class={{selected: this.selected}} onClick={() => this.selectItem()}>
        <slot></slot>
        { this.selected? <inno-icon icon='check' size={16}></inno-icon>: null}
      </Host>
    );
  }
}
