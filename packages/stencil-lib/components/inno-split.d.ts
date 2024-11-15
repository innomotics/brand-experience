import type { Components, JSX } from "../types/components";

interface InnoSplit extends Components.InnoSplit, HTMLElement {}
export const InnoSplit: {
    prototype: InnoSplit;
    new (): InnoSplit;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
