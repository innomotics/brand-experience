import type { Components, JSX } from "../types/components";

interface InnoLoader extends Components.InnoLoader, HTMLElement {}
export const InnoLoader: {
    prototype: InnoLoader;
    new (): InnoLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
