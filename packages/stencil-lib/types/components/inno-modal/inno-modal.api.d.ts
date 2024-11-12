import { InnoModalSize } from './inno-modal.model';
import { TypedEvent } from '../../utils/typed-event';
/**
 * Modal instance configuration.
 */
export interface ModalConfig<CONTENT = any> {
    animation?: boolean;
    ariaDescribedby?: string;
    ariaLabelledby?: string;
    backdrop?: boolean;
    closeOnBackdropClick?: boolean;
    closeOnEscape?: boolean;
    centered?: boolean;
    container?: string | HTMLElement;
    content: CONTENT | string;
    fixed?: boolean;
    size?: InnoModalSize;
}
/**
 * Reference to the opened modal instance.
 */
export interface ModalInstance<TReason = any> {
    htmlElement: HTMLInnoModalElement;
    onClose: TypedEvent<TReason>;
    onDismiss: TypedEvent<TReason>;
}
export declare function setA11yAttributes(element: HTMLElement, config: ModalConfig): void;
export declare function closeModal<TClose = any>(element: Element, closeResult: TClose): void;
export declare function dismissModal(element: Element, dismissResult?: any): void;
export declare function showModal<T>(config: ModalConfig<T>): Promise<ModalInstance<T>>;
