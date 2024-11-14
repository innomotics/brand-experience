import type { Components, JSX } from "../dist/types/components";

interface InnoButton extends Components.InnoButton, HTMLElement {}
export const InnoButton: {
    prototype: InnoButton;
    new (): InnoButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
