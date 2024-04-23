import { Component, Element, Event, EventEmitter, Host, Prop, h, State } from '@stencil/core';
import { getTypeInfo } from './inno-status-message.values';
import { InnoStatusMessageTheme, InnoStatusMessageType } from './inno-status-message.api';

/**
 * Represents the toast message holder.
 */
@Component({
  tag: 'inno-status-message',
  styleUrl: 'inno-status-message.scss',
  scoped: true,
})
export class InnoStatusMessage {
  @Element() hostElement: HTMLElement;

  @State() progress = 0;
  @State() touched = false;

  /**
   * Theme variant of the component.
   */
  @Prop() theme: InnoStatusMessageTheme = 'light';

  /**
   * Type of the status message.
   */
  @Prop() messageType: InnoStatusMessageType = 'info';

  /**
   * Autoclose title after delay
   */
  @Prop() autoCloseDelay = 3000;

  /**
   * Autoclose behavior
   */
  @Prop() autoClose = true;

  /**
   * Icon of toast
   */
  @Prop() icon: string;

  /**
   * Icon color of toast
   */
  @Prop() iconColor: string;

  /**
   * Animate progressbar.
   */
  @Prop() showProgress: boolean = false;

  /**
   * Status message is closed.
   */
  @Event() closeMessage: EventEmitter;

  private themeClasses() {
    return {
      light: this.theme === 'light',
      dark: this.theme === 'dark',
    };
  }

  private typeInfo() {
    return getTypeInfo(this.messageType);
  }

  private closeMessageProcess() {}

  private messageIcon() {
    const typeInfo = this.typeInfo();

    const classes = {
      ...this.themeClasses(),
      'icon-container': true,
      [typeInfo.typeClass]: true,
    };

    const iconName = this.icon ? this.icon : typeInfo.icon;
    const iconStyle = this.iconColor ? { color: this.iconColor } : {};

    return (
      <div class={classes}>
        <inno-icon icon={iconName} size={64} style={iconStyle}></inno-icon>
      </div>
    );
  }

  private messageContainer() {
    const typeInfo = this.typeInfo();

    const classes = {
      ...this.themeClasses(),
      'message-container': true,
      [typeInfo.typeClass]: true,
    };

    return (
      <div class={classes}>
        <slot></slot>
      </div>
    );
  }

  private closeControl() {
    const typeInfo = this.typeInfo();

    const classes = {
      ...this.themeClasses(),
      'close-container': true,
      [typeInfo.typeClass]: true,
    };

    return (
      <div class={classes}>
        <inno-icon icon="closesmall" size={32} onClick={() => this.closeMessage.emit()}></inno-icon>
      </div>
    );
  }

  render() {
    const hostClasses = {
      ...this.themeClasses(),
      [this.typeInfo().typeClass]: true,
    };

    return (
      <Host class={hostClasses} onPointerEnter={() => (this.touched = true)} onPointerLeave={() => (this.touched = false)}>
        {this.messageIcon()}
        {this.messageContainer()}
        {this.closeControl()}
        {this.touched ? 'touched' : 'not-touched'}
      </Host>
    );
  }
}
