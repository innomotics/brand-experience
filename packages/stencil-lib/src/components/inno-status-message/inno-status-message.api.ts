import { TypedEvent } from '../../utils/typed-event';
import { InnoStatusMessageContainer } from '../inno-status-message-container/inno-status-message-container';

/**
 * Type of the status messages.
 */
export type InnoStatusMessageType = 'info' | 'success' | 'warning' | 'error';

/**
 * Position of the status messages.
 */
export type InnoStatusMessagePosition = 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';

/**
 * Available status message theme.
 */
export type InnoStatusMessageTheme = 'light' | 'dark';

/**
 * Status message configuration.
 */
export interface InnoStatusMessageConfig {
  /**
   * Content of the status message.
   */
  message: string | HTMLElement;

  /**
   * Type of the message.
   */
  type?: InnoStatusMessageType;

  /**
   * Theme of the message.
   */
  theme?: InnoStatusMessageTheme;

  /**
   * Should close the message automatically.
   */
  autoClose?: boolean;

  /**
   * When to close the message.
   * Applied to the autoClose and showProgress properties.
   */
  autoCloseDelay?: number;

  /**
   * Show the progress bar.
   */
  showProgress?: boolean;

  /**
   * Override the icon.
   */
  icon?: string;

  /**
   * Override the color of the icon.
   */
  iconColor?: string;

  /**
   * Position of the message on the screen.
   */
  position?: InnoStatusMessagePosition;
}

/**
 * Reference to the opened message.
 */
export type ShowStatusMessageResult = {
  onClose: TypedEvent<any | undefined>;
  close: (result?: any) => void;
};

export function getStatusMessageContainer(): HTMLElement & InnoStatusMessageContainer {
  const containerList = Array.from(document.querySelectorAll('inno-status-message-container'));
  const [container] = containerList;

  if (containerList.length > 1) {
    console.warn('Multiple toast containers were found. Only the first one will be used.');
    return container as any;
  }

  if (!container) {
    const statusMessageContainer = document.createElement('inno-status-message-container');
    document.body.appendChild(statusMessageContainer);
    return statusMessageContainer as any;
  }

  return container as any;
}

export function setStatusMessagePosition(position: InnoStatusMessagePosition) {
  const container = getStatusMessageContainer();
  container.position = position;
}

function statusMessage(config: InnoStatusMessageConfig): Promise<ShowStatusMessageResult> {
  const container = getStatusMessageContainer();
  return container.showStatusMessage(config);
}

statusMessage.info = (config: InnoStatusMessageConfig) => {
  return statusMessage({
    ...config,
    type: 'info',
  });
};

statusMessage.error = (config: InnoStatusMessageConfig) => {
  return statusMessage({
    ...config,
    type: 'error',
  });
};

statusMessage.success = (config: InnoStatusMessageConfig) => {
  return statusMessage({
    ...config,
    type: 'success',
  });
};

statusMessage.warning = (config: InnoStatusMessageConfig) => {
  return statusMessage({
    ...config,
    type: 'warning',
  });
};

export { statusMessage };
