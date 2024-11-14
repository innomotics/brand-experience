import type { Components, JSX } from "../dist/types/components";

interface InnoDragAndDrop extends Components.InnoDragAndDrop, HTMLElement {}
export const InnoDragAndDrop: {
    prototype: InnoDragAndDrop;
    new (): InnoDragAndDrop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
