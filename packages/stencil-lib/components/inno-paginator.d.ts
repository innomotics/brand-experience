import type { Components, JSX } from "../dist/types/components";

interface InnoPaginator extends Components.InnoPaginator, HTMLElement {}
export const InnoPaginator: {
    prototype: InnoPaginator;
    new (): InnoPaginator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
