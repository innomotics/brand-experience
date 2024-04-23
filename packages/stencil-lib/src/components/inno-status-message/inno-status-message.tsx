import { Component, Element, Event, EventEmitter, Host, Prop, h, State } from '@stencil/core';
import { StatusMessageTypeDetails, getDetailsForStatusMessage } from './inno-status-message.values';
import { InnoStatusMessageTheme, InnoStatusMessageType } from './inno-status-message.api';

/**
 * Represents a status message entry.
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

  componentDidLoad() {
    if (this.autoClose) {
      setTimeout(() => this.closeProcess(), this.autoCloseDelay);
    }
  }

  private themeClasses(): ThemeClasses {
    return {
      light: this.theme === 'light',
      dark: this.theme === 'dark',
    };
  }

  private messageTypeDetails() {
    return getDetailsForStatusMessage(this.messageType);
  }

  private closeProcess() {
    if (this.hostElement) {
      this.hostElement.classList.add('fadeOut');
    }
    setTimeout(() => {
      this.closeMessage.emit();
    }, 250);
  }

  private messageIcon(typeInfo: StatusMessageTypeDetails, themeClasses: ThemeClasses) {
    const classes = {
      ...themeClasses,
      'icon-container': true,
      [typeInfo.typeClass]: true,
    };

    const iconName = this.icon ?? typeInfo.icon;
    const iconStyle = this.iconColor ? { color: this.iconColor } : {};

    return (
      <div class={classes}>
        <inno-icon icon={iconName} size={64} style={iconStyle}></inno-icon>
      </div>
    );
  }

  private messageContainer(typeDetails: StatusMessageTypeDetails, themeClasses: ThemeClasses) {
    const classes = {
      ...themeClasses,
      'message-container': true,
      [typeDetails.typeClass]: true,
    };

    return (
      <div class={classes}>
        <slot></slot>
      </div>
    );
  }

  private closeControl(typeDetails: StatusMessageTypeDetails, themeClasses: ThemeClasses) {
    const classes = {
      ...themeClasses,
      'close-container': true,
      [typeDetails.typeClass]: true,
    };

    return (
      <div class={classes}>
        <inno-icon icon="closesmall" size={32} onClick={() => this.closeMessage.emit()}></inno-icon>
      </div>
    );
  }

  private progressBar(typeDetails: StatusMessageTypeDetails, themeClasses: ThemeClasses) {
    const classes = {
      ...themeClasses,
      [typeDetails.typeClass]: true,
      'progress-bar': true,
      'progress-bar--animated': this.showProgress,
    };

    const progressBarStyle: Record<string, string> = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched ? 'paused' : 'running',
    };

    return (
      <div
        class={classes}
        style={progressBarStyle}
        onAnimationEnd={() => this.closeProcess()}
        onTransitionEnd={() => {
          if (this.progress === 0) {
            this.closeProcess();
          }
        }}
      ></div>
    );
  }

  render() {
    const typeDetails = this.messageTypeDetails();
    const themeClasses = this.themeClasses();

    const hostClasses = {
      ...themeClasses,
      [typeDetails.typeClass]: true,
      'sm-fade-in': true,
    };

    return (
      <Host class={hostClasses} onPointerEnter={() => (this.touched = true)} onPointerLeave={() => (this.touched = false)}>
        {this.messageIcon(typeDetails, themeClasses)}
        {this.messageContainer(typeDetails, themeClasses)}
        {this.closeControl(typeDetails, themeClasses)}
        {this.progressBar(typeDetails, themeClasses)}
      </Host>
    );
  }
}

interface ThemeClasses {
  readonly light: boolean;
  readonly dark: boolean;
}
