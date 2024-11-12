import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Represents the header of the inno-modal component.
 *
 * See the inno-modal component for more information.
 */
export declare class InnoModalHeader {
    private parentDialog;
    hostElement: any;
    /**
     * Theme variant of the component.
     */
    variant: 'dark' | 'light';
    /**
     * Hide the close button.
     */
    showClose: boolean;
    /**
     * Icon of the header, optional.
     */
    icon?: string;
    /**
     * Emits when close icon is clicked and closes the modal
     * Can be prevented, in which case only the event is triggered, and the modal remains open
     */
    closeClick: EventEmitter<Event>;
    componentDidLoad(): void;
    private onCloseClick;
    private themeClasses;
    private titleIcon;
    private closeControl;
    render(): any;
}
