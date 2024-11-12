import { InnoStatusMessageType } from './inno-status-message.api';
export interface StatusMessageTypeDetails {
    readonly typeClass: string;
    readonly icon: string;
}
/**
 * Return the type information or info if not found.
 */
export declare function getDetailsForStatusMessage(type: InnoStatusMessageType): StatusMessageTypeDetails;
