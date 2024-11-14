import type { Components, JSX } from "../dist/types/components";

interface InnoAccordion extends Components.InnoAccordion, HTMLElement {}
export const InnoAccordion: {
    prototype: InnoAccordion;
    new (): InnoAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
