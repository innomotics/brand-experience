import { EventEmitter } from '../../stencil-public-runtime';
export declare class InnoPaginator {
    private readonly maxCountPages;
    hostElement: HTMLInnoPaginatorElement;
    variant: 'dark' | 'light';
    /**
     * Total number of pages
     */
    pageCount: number;
    /**
     * One based index of currently selected page
     */
    selectedPage: number;
    /**
     * Page selection event
     */
    pageSelected: EventEmitter<number>;
    /**
     * Item count change event
     */
    itemCountChanged: EventEmitter<number>;
    private selectPage;
    private next;
    private prev;
    private first;
    private last;
    private getPageButton;
    private renderPageButtons;
    render(): any;
}
