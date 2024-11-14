import type { Components, JSX } from "../dist/types/components";

interface InnoInput extends Components.InnoInput, HTMLElement {}
export const InnoInput: {
    prototype: InnoInput;
    new (): InnoInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
