import { Placement } from '@floating-ui/dom';
import { EventEmitter } from '../../stencil-public-runtime';
export declare class InnoPopover {
    /**
     * How to show the popover. If set to 'manual' then you need to programatically modify the 'visibile' property.
     */
    trigger: 'hover' | 'click' | 'manual';
    /**
     * Color variant of the popover.
     */
    variant: 'light' | 'dark';
    /**
     * Css selector of the element the popover is for. This is just the initial value,
     * don't update it manually. Use the 'updateForElement(...)' method instead.
     */
    for: string;
    /**
     * Contents of the title. Can be either html or a simple string. Can be omitted.
     */
    popoverTitle: string;
    /**
     * Contents of the text. Can be either html or a simple string. Can be omitted. You can use this property if you want a simple tooltip,
     * otherwise you can provide your own html directly.
     */
    popoverText: string;
    /**
     * Position of the popover. If there is not enough space it will be automatically placed to where it has enough place.
     * Please note that the offset will remain the same in case the desired placement does not fit.
     */
    placement: Placement;
    /**
     * Offset of the popover position in pixels. Please note that the offset will remain the same in case the desired placement does not fit.
     */
    offset: number;
    /**
     * Programatically change whether the popover is visible or not.
     */
    visible: boolean;
    /**
     * Popover should have a backdrop. Has no effect if trigger type is 'hover'.
     */
    hasBackdrop: boolean;
    /**
     * Popover will have a close button. Has no effect if trigger type is 'hover'.
     */
    closable: boolean;
    /** @internal */
    animationFrame: boolean;
    private forInternal;
    /**
     * Fired when popover is shown.
     */
    innoPopoverShown: EventEmitter<void>;
    /**
     * Fired when popover is hidden.
     */
    innoPopoverHidden: EventEmitter<void>;
    hostElement: HTMLInnoPopoverElement;
    private showBind;
    private hideBind;
    private disposeAutoUpdate?;
    private backdropElement;
    private disposeListener;
    private arrowElement;
    private get forElement();
    private destroyAutoUpdate;
    private onTooltipShow;
    private onTooltipHide;
    /**
     * Show the tooltip.
     */
    showTooltip(): Promise<void>;
    /**
     * Hide the tooltip.
     */
    hideTooltip(): Promise<void>;
    /**
     * Updates the element the popover is for including all the internal event listeners and the popover's position.
     * If called without a parameter it will refresh the internal event listeners and the popover's position for the current target element.
     * If called with a nonexisting selector it will refresh the internal event listeners and the popover's position for the current target element.
     * Returns a Promise which is 'true' when the update/refresh succeded.
     * Returns 'false' if neither the current target element nor the element from the parameter exists.
     */
    updateForElement(forElement?: string): Promise<boolean>;
    private createBackdrop;
    private destroyBackdrop;
    visibleChanged(): void;
    private computeArrowPosition;
    private computePosition;
    private computeTooltipPositionWithAutoUpdate;
    private registerHoverListeners;
    private registerClickListener;
    onKeydown(event: KeyboardEvent): Promise<void>;
    onClick(event: globalThis.Event): Promise<void>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
