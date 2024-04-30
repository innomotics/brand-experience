import { Component, h, Host, Method, Prop, Watch } from '@stencil/core';
import { TypedEvent } from '../../utils/typed-event';
import { InnoStatusMessageConfig, InnoStatusMessagePosition, ShowStatusMessageResult } from '../inno-status-message/inno-status-message.api';

/**
 * Container to hold the status messages.
 *
 * @internal
 */
@Component({
  tag: 'inno-status-message-container',
  styleUrl: './inno-status-message-container.scss',
  scoped: true,
})
export class InnoStatusMessageContainer {
  /**
   * Customizable container id.
   */
  @Prop() containerId = 'status-message-container';

  /**
   * Customizable container class.
   */
  @Prop() containerClass = 'status-message-container';

  /**
   * Position of container.
   */
  @Prop() position: InnoStatusMessagePosition = 'top-right';

  private readonly PREFIX_POSITION_CLASS = 'status-message-container--';

  get hostContainer() {
    return new Promise<HTMLElement>(resolve => {
      const interval = setInterval(() => {
        const containerElement = document.getElementById(this.containerId);
        if (containerElement) {
          clearInterval(interval);
          resolve(containerElement);
        }
      });
    });
  }

  componentDidLoad() {
    if (!document.getElementById(this.containerId)) {
      const container = document.createElement('div');
      container.id = this.containerId;
      container.classList.add(this.containerClass);
      container.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`);
      document.body.appendChild(container);
    }
  }

  @Watch('position')
  onPositionChange(newPosition: string, oldPosition: string) {
    const container = document.getElementById(this.containerId);
    container.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
    container.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
  }

  /**
   * Display a toast message
   * @param config
   */
  @Method()
  async showStatusMessage(config: InnoStatusMessageConfig): Promise<ShowStatusMessageResult> {
    const statusMessage = document.createElement('inno-status-message');
    const onClose = new TypedEvent<any | undefined>();

    function removeStatusMessage(result?: any) {
      statusMessage.remove();
      onClose.emit(result);
    }

    // Config status message
    if (config.type) {
      statusMessage.messageType = config.type;
    }
    if (config.theme) {
      statusMessage.theme = config.theme;
    }
    statusMessage.autoClose = config.autoClose;
    statusMessage.autoCloseDelay = config.autoCloseDelay ?? 3000;
    statusMessage.showProgress = config.showProgress;
    statusMessage.icon = config.icon;
    statusMessage.iconColor = config.iconColor;

    // Subscribe to close event
    statusMessage.addEventListener('closeMessage', (event: CustomEvent<any | undefined>) => {
      const { detail } = event;
      removeStatusMessage(detail);
    });

    // Set stasus message content
    if (typeof config.message === 'string') {
      statusMessage.innerText = config.message;
    } else {
      statusMessage.appendChild(config.message);
    }

    (await this.hostContainer).appendChild(statusMessage);

    return {
      onClose,
      close: (result?: any) => {
        removeStatusMessage(result);
      },
    };
  }

  render() {
    return (
      <Host
        class={{
          [`${this.PREFIX_POSITION_CLASS}top-right`]: this.position === 'top-right',
          [`${this.PREFIX_POSITION_CLASS}bottom-right`]: this.position === 'bottom-right',
          [`${this.PREFIX_POSITION_CLASS}bottom-left`]: this.position === 'bottom-left',
          [`${this.PREFIX_POSITION_CLASS}top-left`]: this.position === 'top-left',
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
