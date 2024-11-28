import type { Components, JSX } from "../types/components";

interface InnoPopover extends Components.InnoPopover, HTMLElement {}
export const InnoPopover: {
    prototype: InnoPopover;
    new (): InnoPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
