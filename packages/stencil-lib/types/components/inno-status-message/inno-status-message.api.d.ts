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
export declare function getStatusMessageContainer(): HTMLElement & InnoStatusMessageContainer;
export declare function setStatusMessagePosition(position: InnoStatusMessagePosition): void;
declare function statusMessage(config: InnoStatusMessageConfig): Promise<ShowStatusMessageResult>;
declare namespace statusMessage {
    var info: (config: InnoStatusMessageConfig) => Promise<ShowStatusMessageResult>;
    var error: (config: InnoStatusMessageConfig) => Promise<ShowStatusMessageResult>;
    var success: (config: InnoStatusMessageConfig) => Promise<ShowStatusMessageResult>;
    var warning: (config: InnoStatusMessageConfig) => Promise<ShowStatusMessageResult>;
}
export { statusMessage };
