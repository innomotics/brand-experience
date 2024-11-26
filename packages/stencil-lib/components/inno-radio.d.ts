import type { Components, JSX } from "../dist/types/components";

interface InnoRadio extends Components.InnoRadio, HTMLElement {}
export const InnoRadio: {
    prototype: InnoRadio;
    new (): InnoRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
