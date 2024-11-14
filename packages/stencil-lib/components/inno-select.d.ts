import type { Components, JSX } from "../dist/types/components";

interface InnoSelect extends Components.InnoSelect, HTMLElement {}
export const InnoSelect: {
    prototype: InnoSelect;
    new (): InnoSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
