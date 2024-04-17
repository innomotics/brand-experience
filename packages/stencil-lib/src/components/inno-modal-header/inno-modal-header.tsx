import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';
import { closestPassShadow } from './../../utils/siemensix/shadow-dom';

@Component({
  tag: 'inno-modal-header',
  styleUrl: 'inno-modal-header.scss',
  scoped: true,
})
export class InnoModalHeader {
  @Element() hostElement!: InnoModalHeader & HTMLElement;

  /**
   * Theme variant of the component.
   */
  @Prop({ mutable: true }) variant: 'dark' | 'light' = 'light';

  /**
   * Hide the close button.
   */
  @Prop() hideClose = false;

  /**
   * Icon of the Header
   */
  @Prop() icon: string;

  /**
   * Emits when close icon is clicked and closes the modal
   * Can be prevented, in which case only the event is triggered, and the modal remains open
   */
  @Event() closeClick: EventEmitter<MouseEvent>;

  private parentDialog: any;

  componentDidLoad() {
    this.parentDialog = closestPassShadow(this.hostElement, 'inno-modal');
    // if (this.parentDialog) {
    //   if (this.icon) {
    //     this.parentDialog.classList.add('with-icon');
    //   } else {
    //     this.parentDialog.classList.remove('with-icon');
    //   }
    // }
  }

  private onCloseClick(event: MouseEvent) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }

    this.parentDialog.dismissModal();
  }

  private themeClasses() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
    };
  }

  private titleIcon() {
    if (this.icon) {
      return <inno-icon icon={this.icon} class={{ 'modal-icon': true }} size={24}></inno-icon>;
    } else {
      return null;
    }
  }

  private closeControl() {
    if (!this.hideClose) {
      return <inno-icon onClick={event => this.onCloseClick(event)} icon="close" size={24} class={'modal-close'}></inno-icon>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Host class={{ ...this.themeClasses() }}>
        {this.titleIcon()}
        <slot></slot>
        {this.closeControl()}
      </Host>
    );
  }
}
