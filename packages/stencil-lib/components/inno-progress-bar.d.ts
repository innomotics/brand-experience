import type { Components, JSX } from "../types/components";

interface InnoProgressBar extends Components.InnoProgressBar, HTMLElement {}
export const InnoProgressBar: {
    prototype: InnoProgressBar;
    new (): InnoProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
