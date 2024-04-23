import { InnoStatusMessageContainer, ShowToastResult } from './inno-status-message-container';

export type InnoStatusMessageType = 'info' | 'success' | 'warning' | 'error';
export type InnoStatusMessagePosition = 'bottom-right' | 'top-right';
export type InnoStatusMessageTheme = 'light' | 'dark';

export interface InnoStatusMessageConfig {
  // title?: string;
  theme?: InnoStatusMessageTheme;
  message: string | HTMLElement;
  type?: InnoStatusMessageType;
  autoClose?: boolean;
  autoCloseDelay?: number;
  // icon?: string;
  // iconColor?: string;
  position?: InnoStatusMessagePosition;
}

export function getStatusMessageContainer(): HTMLElement & InnoStatusMessageContainer {
  const containerList = Array.from(document.querySelectorAll('inno-status-message-container'));
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn('Multiple toast containers were found. Only the first one will be used.');
    return container as any;
  }

  if (!container) {
    const toastContainer = document.createElement('inno-status-message-container');
    document.body.appendChild(toastContainer);

    return toastContainer as any;
  }

  return container as any;
}

export function setToastPosition(position: InnoStatusMessagePosition) {
  const container = getStatusMessageContainer();
  container.position = position;
}

function toast(config: InnoStatusMessageConfig): Promise<ShowToastResult> {
  const container = getStatusMessageContainer();
  return container.showToast(config);
}

toast.info = (config: InnoStatusMessageConfig) => {
  return toast({
    ...config,
    type: 'info',
  });
};

toast.error = (config: InnoStatusMessageConfig) => {
  return toast({
    ...config,
    type: 'error',
  });
};

toast.success = (config: InnoStatusMessageConfig) => {
  return toast({
    ...config,
    type: 'success',
  });
};

toast.warning = (config: InnoStatusMessageConfig) => {
  return toast({
    ...config,
    type: 'warning',
  });
};

export { toast };
