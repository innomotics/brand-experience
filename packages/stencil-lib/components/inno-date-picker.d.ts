import type { Components, JSX } from "../dist/types/components";

interface InnoDatePicker extends Components.InnoDatePicker, HTMLElement {}
export const InnoDatePicker: {
    prototype: InnoDatePicker;
    new (): InnoDatePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
