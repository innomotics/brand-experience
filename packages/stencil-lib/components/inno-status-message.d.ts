import type { Components, JSX } from "../types/components";

interface InnoStatusMessage extends Components.InnoStatusMessage, HTMLElement {}
export const InnoStatusMessage: {
    prototype: InnoStatusMessage;
    new (): InnoStatusMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
