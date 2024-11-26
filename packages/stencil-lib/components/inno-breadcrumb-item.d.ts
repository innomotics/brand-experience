import type { Components, JSX } from "../types/components";

interface InnoBreadcrumbItem extends Components.InnoBreadcrumbItem, HTMLElement {}
export const InnoBreadcrumbItem: {
    prototype: InnoBreadcrumbItem;
    new (): InnoBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
