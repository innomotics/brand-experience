import type { Components, JSX } from "../dist/types/components";

interface InnoTableBase extends Components.InnoTableBase, HTMLElement {}
export const InnoTableBase: {
    prototype: InnoTableBase;
    new (): InnoTableBase;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
