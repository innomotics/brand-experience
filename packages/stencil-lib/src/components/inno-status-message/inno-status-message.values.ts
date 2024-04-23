import { InnoStatusMessageType } from './inno-status-message.api';

export interface TypeInfo {
  readonly typeClass: string;
  readonly icon: string;
}

const TYPE_INFO: { [key in InnoStatusMessageType]: TypeInfo } = {
  info: {
    typeClass: 'type-info',
    icon: 'information',
  },
  warning: {
    typeClass: 'type-warning',
    icon: 'information',
  },
  error: {
    typeClass: 'type-error',
    icon: 'information',
  },
  success: {
    typeClass: 'type-success',
    icon: 'information',
  },
};

/**
 * Return the type information or info if not found.
 */
export function getTypeInfo(type: InnoStatusMessageType) {
  return TYPE_INFO[type] ?? TYPE_INFO['info'];
}
