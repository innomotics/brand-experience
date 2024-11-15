import type { Components, JSX } from "../types/components";

interface InnoModalHeader extends Components.InnoModalHeader, HTMLElement {}
export const InnoModalHeader: {
    prototype: InnoModalHeader;
    new (): InnoModalHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
