import type { Components, JSX } from "../dist/types/components";

interface InnoStatusMessageContainer extends Components.InnoStatusMessageContainer, HTMLElement {}
export const InnoStatusMessageContainer: {
    prototype: InnoStatusMessageContainer;
    new (): InnoStatusMessageContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
