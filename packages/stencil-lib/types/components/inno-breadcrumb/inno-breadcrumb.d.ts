import { EventEmitter } from '../../stencil-public-runtime';
export declare class Breadcrumb {
    hostElement: HTMLInnoBreadcrumbElement;
    /**
     * Color variant of the accordion.
     */
    variant: 'light' | 'dark';
    /**
     * Crumb item clicked event. The event contains the label and the zero-based index of the breadcrumb item inside the breadcrumb.
     */
    itemClick: EventEmitter<{
        itemIndex: number;
        label: string;
    }>;
    onBreadcrumbItemClicked(event: CustomEvent<{
        itemIndex: number;
        label: string;
    }>): void;
    get items(): HTMLInnoBreadcrumbItemElement[];
    removeLastItemChevron(children: HTMLInnoBreadcrumbItemElement[]): void;
    render(): any;
}
