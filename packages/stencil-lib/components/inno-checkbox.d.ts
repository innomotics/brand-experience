import type { Components, JSX } from "../dist/types/components";

interface InnoCheckbox extends Components.InnoCheckbox, HTMLElement {}
export const InnoCheckbox: {
    prototype: InnoCheckbox;
    new (): InnoCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
