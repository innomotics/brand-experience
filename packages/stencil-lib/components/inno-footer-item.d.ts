import type { Components, JSX } from "../dist/types/components";

interface InnoFooterItem extends Components.InnoFooterItem, HTMLElement {}
export const InnoFooterItem: {
    prototype: InnoFooterItem;
    new (): InnoFooterItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
