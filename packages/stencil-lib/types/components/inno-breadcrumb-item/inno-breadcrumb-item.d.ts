import { EventEmitter } from '../../stencil-public-runtime';
export declare class BreadcrumbItem {
    hostElement: HTMLInnoBreadcrumbItemElement;
    /**
     * Breadcrumb label
     */
    label: string;
    /**
     * Icon to be displayed next ot the label
     */
    icon: string;
    /** @internal */ itemIndex: number;
    iconSize: number;
    /**@internal */
    visible: boolean;
    /**@internal */
    showChevron: boolean;
    /**@internal */
    breadcrumbItemClick: EventEmitter<{
        itemIndex: number;
        label: string;
    }>;
    render(): any;
}
