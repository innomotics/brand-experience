import { EventEmitter } from '../../stencil-public-runtime';
import { InnoStatusMessageTheme, InnoStatusMessageType } from './inno-status-message.api';
/**
 * Represents a status message entry.
 */
export declare class InnoStatusMessage {
    hostElement: HTMLElement;
    progress: number;
    touched: boolean;
    /**
     * Theme variant of the component.
     */
    theme: InnoStatusMessageTheme;
    /**
     * Type of the status message.
     */
    messageType: InnoStatusMessageType;
    /**
     * Autoclose message after the given delay.
     * The message will be closed independently from showProgress property.
     */
    autoClose: boolean;
    /**
     * Autoclose delay.
     */
    autoCloseDelay: number;
    /**
     * Animate progressbar and close after animation ends.
     * The message will be closed independently from autoClose property.
     */
    showProgress: boolean;
    /**
     * Icon of toast
     */
    icon: string;
    /**
     * Icon color of toast
     */
    iconColor: string;
    /**
     * Status message is closed.
     */
    closeMessage: EventEmitter;
    componentDidLoad(): void;
    private themeClasses;
    private messageTypeDetails;
    private closeProcess;
    private messageIcon;
    private messageContainer;
    private closeControl;
    private progressBar;
    render(): any;
}
