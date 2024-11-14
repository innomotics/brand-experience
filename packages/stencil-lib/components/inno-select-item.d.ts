import type { Components, JSX } from "../dist/types/components";

interface InnoSelectItem extends Components.InnoSelectItem, HTMLElement {}
export const InnoSelectItem: {
    prototype: InnoSelectItem;
    new (): InnoSelectItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
