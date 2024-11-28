import { Component, Host, h, Element, Prop, Event as StencilEventDecorator, EventEmitter } from '@stencil/core';
import { closestPassShadow } from '../../../utils/siemensix/shadow-dom';

/**
 * Represents the header of the inno-modal component.
 *
 * See the inno-modal component for more information.
 */
@Component({
  tag: 'inno-modal-header',
  styleUrl: 'inno-modal-header.scss',
  scoped: true,
})
export class InnoModalHeader {
  private parentDialog: any;

  @Element() hostElement!: any;

  /**
   * Theme variant of the component.
   */
  @Prop({ mutable: true }) variant: 'dark' | 'light' = 'light';

  /**
   * Hide the close button.
   */
  @Prop() showClose = true;

  /**
   * Icon of the header, optional.
   */
  @Prop() icon?: string;

  /**
   * Emits when close icon is clicked and closes the modal
   * Can be prevented, in which case only the event is triggered, and the modal remains open
   */
  @StencilEventDecorator() closeClick: EventEmitter<Event>;

  componentDidLoad() {
    this.parentDialog = closestPassShadow(this.hostElement, 'inno-modal');
  }

  private onCloseClick(event: Event) {
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
      const classes = { ...this.themeClasses(), 'modal-icon': true };
      return <inno-icon icon={this.icon} class={classes} size={24}></inno-icon>;
    } else {
      return null;
    }
  }

  private closeControl() {
    if (this.showClose) {
      const classes = { ...this.themeClasses(), 'modal-close': true };
      return <inno-icon icon="close" class={classes} size={24} onClick={e => this.onCloseClick(e)}></inno-icon>;
    } else {
      return null;
    }
  }

  render() {
    const hostClasses = { ...this.themeClasses() };

    return (
      <Host class={hostClasses}>
        {this.titleIcon()}
        <slot></slot>
        {this.closeControl()}
      </Host>
    );
  }
}
