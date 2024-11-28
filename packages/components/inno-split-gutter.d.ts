import type { Components, JSX } from "../types/components";

interface InnoSplitGutter extends Components.InnoSplitGutter, HTMLElement {}
export const InnoSplitGutter: {
    prototype: InnoSplitGutter;
    new (): InnoSplitGutter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
