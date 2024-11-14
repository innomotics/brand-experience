import type { Components, JSX } from "../dist/types/components";

interface InnoSplitItem extends Components.InnoSplitItem, HTMLElement {}
export const InnoSplitItem: {
    prototype: InnoSplitItem;
    new (): InnoSplitItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
