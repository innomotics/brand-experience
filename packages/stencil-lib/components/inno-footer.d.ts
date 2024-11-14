import type { Components, JSX } from "../dist/types/components";

interface InnoFooter extends Components.InnoFooter, HTMLElement {}
export const InnoFooter: {
    prototype: InnoFooter;
    new (): InnoFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
