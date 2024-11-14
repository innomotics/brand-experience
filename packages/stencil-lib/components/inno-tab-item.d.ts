import type { Components, JSX } from "../types/components";

interface InnoTabItem extends Components.InnoTabItem, HTMLElement {}
export const InnoTabItem: {
    prototype: InnoTabItem;
    new (): InnoTabItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
