import type { Components, JSX } from "../dist/types/components";

interface InnoModalContent extends Components.InnoModalContent, HTMLElement {}
export const InnoModalContent: {
    prototype: InnoModalContent;
    new (): InnoModalContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
