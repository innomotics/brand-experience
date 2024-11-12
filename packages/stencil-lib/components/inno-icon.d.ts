import type { Components, JSX } from "../dist/types/components";

interface InnoIcon extends Components.InnoIcon, HTMLElement {}
export const InnoIcon: {
    prototype: InnoIcon;
    new (): InnoIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
