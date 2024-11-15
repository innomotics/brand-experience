import type { Components, JSX } from "../types/components";

interface InnoBreadcrumb extends Components.InnoBreadcrumb, HTMLElement {}
export const InnoBreadcrumb: {
    prototype: InnoBreadcrumb;
    new (): InnoBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
