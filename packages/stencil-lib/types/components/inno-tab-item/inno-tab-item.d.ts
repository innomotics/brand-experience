import { EventEmitter } from '../../stencil-public-runtime';
export type TabClickDetail = {
    nativeEvent: MouseEvent;
};
/**
 * Represents an inno-tab item.
 *
 * Wraps the provided content.
 *
 * See the InnoTab component for more information about how to use the tab component.
 */
export declare class InnoTabItem {
    /**
     * Theme variant property.
     * Inherited from the parent.
     * Can be overridden if explicitly defined.
     */
    theme: 'light' | 'dark';
    /**
     * Set layout width style.
     * Auto: Item has the same width as the enclosed item in slot.
     * Stretched: Item has the maximum available width.
     */
    layout: 'auto' | 'stretched';
    /**
     * Set selected tab.
     */
    selected: boolean;
    /**
     * Set disabled tab.
     */
    disabled: boolean;
    /**
     * Make the non-selected items always vivid without any opacity effect.
     */
    alwaysEmphasized: boolean;
    /**
     * Minimalize the bottom decorator for the tab items.
     * Show only if the given item is interracted or selected.
     */
    minimalDecorator: boolean;
    /**
     * On tab click.
     */
    tabClick: EventEmitter<TabClickDetail>;
    private themeClasses;
    private hostClasses;
    private slotContainerClasses;
    render(): any;
}
