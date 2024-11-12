import { EventEmitter } from '../../stencil-public-runtime';
export type ExpandedChangedEvent = {
    expanded: boolean;
};
export declare class InnoPane {
    hostElement: HTMLInnoPaneElement;
    /**
     * Position of the pane.
     */
    position: 'top' | 'left' | 'bottom' | 'right';
    /**
     * Programatically control whether the pane is opened or closed.
     */
    expanded: boolean;
    /**
     * The pane comes with a close button by default. Hide it with this property.
     */
    hideCloseButton: boolean;
    /**
     * Title of the pane.
     */
    titleText: string;
    /**
     * Whether the pane is closeable by clicking outside of it.
     */
    closeOnBackdropClick: boolean;
    /**
     * Size of the pane. It is a width value in case of 'left' and 'right' position, and a height value in case of 'top' and 'bottom' position.
     * All css units are supported which are supported by width and height css properties.
     */
    paneSize: string;
    /**
     * This event is fired when the pane is opened or closed.
     */
    expandedChanged: EventEmitter<ExpandedChangedEvent>;
    private showContent;
    closeViaBackdrop(event: globalThis.Event): void;
    private emitExpandedChangedEvent;
    onExpandedChange(): void;
    private animateHorizontalPane;
    private animateVerticalPane;
    render(): any;
}
