import { EventEmitter } from '../../stencil-public-runtime';
import { InnoModalSize } from './inno-modal.model';
/**
 * Represents the main frame of the modal component.
 */
export declare class InnoModal {
    private ariaAttributes;
    hostElement: HTMLElement;
    modalVisible: boolean;
    /**
     * Theme variant of the component.
     */
    variant: 'dark' | 'light';
    /**
     * Modal size
     */
    size: InnoModalSize;
    /**
     * Should the modal be animated
     */
    animation: boolean;
    /**
     * Show a backdrop behind the modal dialog
     */
    backdrop: boolean;
    /**
     * Dismiss modal on backdrop click
     */
    closeOnBackdropClick: boolean;
    /**
     * Centered modal
     */
    centered: boolean;
    /**
     * By default the modal always opens at the top and the InnoModal component automatically scrolls to it.
     * Set this to true if you want the modal to be always in a fixed position no matter where you scroll.
     */
    fixed: boolean;
    /**
     * If set to true the modal can be closed by pressing the Escape key
     */
    closeOnEscape: boolean;
    /**
     * Dialog close
     */
    dialogClose: EventEmitter;
    /**
     * Dialog cancel
     */
    dialogDismiss: EventEmitter;
    private clickStartedInsideDialog;
    get dialog(): HTMLDialogElement;
    componentDidLoad(): void;
    componentWillLoad(): void;
    onKey(e: KeyboardEvent): void;
    /**
     * Show the dialog.
     */
    showModal(): Promise<void>;
    /**
     * Dismiss the dialog
     */
    dismissModal<T = any>(reason?: T): Promise<void>;
    /**
     * Close the dialog
     */
    closeModal<T = any>(reason: T): Promise<void>;
    private slideInModal;
    private slideOutModal;
    private onDialogCancel;
    private onModalClick;
    private onMouseDown;
    private isClickInsideDialog;
    private dialogElement;
    render(): any;
}
