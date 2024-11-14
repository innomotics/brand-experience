import type { Components, JSX } from "../types/components";

interface InnoToggle extends Components.InnoToggle, HTMLElement {}
export const InnoToggle: {
    prototype: InnoToggle;
    new (): InnoToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
