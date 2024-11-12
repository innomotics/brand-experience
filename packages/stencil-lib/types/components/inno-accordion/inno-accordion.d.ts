import { EventEmitter } from '../../stencil-public-runtime';
export declare class InnoAccordion {
    /**
     * Color variant of the accordion.
     */
    variant: 'light' | 'dark';
    /**
     * You can programatically open/close the accordion with this property.
     */
    collapsed: boolean;
    /**
     * Whether the accordion is the last in a group of accordions. Needed for styling.
     */
    last: boolean;
    /**
     * Whether it is an accordion inside another accordion. Gives a different style then the main one.
     */
    inner: boolean;
    /**
     * Text to display for the accordion. Always visible whether the accordion is opened or closed.
     */
    label: string;
    /**
     * Secondary text for the accordion. Always visible whether the accordion is opened or closed.
     */
    secondLabel: string;
    /**
     * This event is fired whenever the accordion is opened/closed via user interaction.
     */
    collapsedChanged: EventEmitter<{
        element: HTMLInnoAccordionElement;
        collapsed: boolean;
    }>;
    hostElement: HTMLInnoAccordionElement;
    private anchorElementRef;
    private onHeaderClick;
    private toggleHoveredClass;
    render(): any;
}
