import type { Components, JSX } from "../types/components";

interface InnoTimePicker extends Components.InnoTimePicker, HTMLElement {}
export const InnoTimePicker: {
    prototype: InnoTimePicker;
    new (): InnoTimePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
