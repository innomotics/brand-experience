import type { Components, JSX } from "../types/components";

interface InnoDateTimeCard extends Components.InnoDateTimeCard, HTMLElement {}
export const InnoDateTimeCard: {
    prototype: InnoDateTimeCard;
    new (): InnoDateTimeCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
