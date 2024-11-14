import type { Components, JSX } from "../dist/types/components";

interface InnoError extends Components.InnoError, HTMLElement {}
export const InnoError: {
    prototype: InnoError;
    new (): InnoError;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
