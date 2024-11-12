import type { Components, JSX } from "../dist/types/components";

interface InnoModal extends Components.InnoModal, HTMLElement {}
export const InnoModal: {
    prototype: InnoModal;
    new (): InnoModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
