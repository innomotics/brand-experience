import type { Components, JSX } from "../dist/types/components";

interface InnoTab extends Components.InnoTab, HTMLElement {}
export const InnoTab: {
    prototype: InnoTab;
    new (): InnoTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
