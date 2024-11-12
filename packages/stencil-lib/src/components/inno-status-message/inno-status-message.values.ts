import { InnoStatusMessageType } from './inno-status-message.api';

export interface StatusMessageTypeDetails {
  readonly typeClass: string;
  readonly icon: string;
}

const TYPE_INFO: { [key in InnoStatusMessageType]: StatusMessageTypeDetails } = {
  info: {
    typeClass: 'type-info',
    icon: 'information',
  },
  warning: {
    typeClass: 'type-warning',
    icon: 'warning_with_circle',
  },
  error: {
    typeClass: 'type-error',
    icon: 'error_with_circle',
  },
  success: {
    typeClass: 'type-success',
    icon: 'success_with_circle',
  },
};

/**
 * Return the type information or info if not found.
 */
export function getDetailsForStatusMessage(type: InnoStatusMessageType) {
  return TYPE_INFO[type] ?? TYPE_INFO['info'];
}
