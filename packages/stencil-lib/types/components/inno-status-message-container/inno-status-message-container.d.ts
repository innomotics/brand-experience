import { InnoStatusMessageConfig, InnoStatusMessagePosition, ShowStatusMessageResult } from '../inno-status-message/inno-status-message.api';
/**
 * Container to hold the status messages.
 *
 * @internal
 */
export declare class InnoStatusMessageContainer {
    /**
     * Customizable container id.
     */
    containerId: string;
    /**
     * Customizable container class.
     */
    containerClass: string;
    /**
     * Position of container.
     */
    position: InnoStatusMessagePosition;
    private readonly PREFIX_POSITION_CLASS;
    get hostContainer(): Promise<HTMLElement>;
    componentDidLoad(): void;
    onPositionChange(newPosition: string, oldPosition: string): void;
    /**
     * Display a toast message
     * @param config
     */
    showStatusMessage(config: InnoStatusMessageConfig): Promise<ShowStatusMessageResult>;
    render(): any;
}
