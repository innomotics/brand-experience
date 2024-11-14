import type { Components, JSX } from "../dist/types/components";

interface InnoPane extends Components.InnoPane, HTMLElement {}
export const InnoPane: {
    prototype: InnoPane;
    new (): InnoPane;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
