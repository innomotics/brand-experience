import { EventEmitter } from '../../stencil-public-runtime';
/**
 *
 */
export declare class InnoTab {
    hostElement: HTMLElement & InnoTab;
    /**
     * Theme variant of the component.
     */
    theme: 'light' | 'dark';
    /**
     * Set default selected tab by index
     * or undefined if not tab is selected.
     */
    selected: number | undefined;
    /**
     * Set layout width style
     */
    layout: 'auto' | 'stretched';
    /**
     * Show the navigation arrow for desktop.
     */
    showArrow: boolean;
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
     * `selected` property changed
     */
    selectedChange: EventEmitter<number>;
    totalItems: number;
    currentScrollAmount: number;
    scrollAmount: number;
    scrollActionAmount: number;
    private windowStartSize;
    private arrowLeftElement;
    private arrowRightElement;
    private clickAction;
    onWindowResize(): void;
    private getTabs;
    private getTab;
    private getTabsWrapper;
    private showArrows;
    private showPreviousArrow;
    private showNextArrow;
    private getArrowStyle;
    private move;
    private moveTabToView;
    private setSelected;
    private clickTab;
    private adjustCurrentScrollAmount;
    private dragStart;
    private dragMove;
    private dragStop;
    componentWillLoad(): void;
    componentDidRender(): void;
    componentWillRender(): void;
    componentDidLoad(): void;
    /**
     * Programatically change the selected tab by its index and scroll to the selected inno-tab-item inside the inno-tab.
     * Please note that manually changing the 'selected' property won't do any scrolling, that is only possible with this method.
     */
    changeSelected(newIndex: number): Promise<void>;
    onTabClick(event: CustomEvent): void;
    private themeClasses;
    private arrowStyle;
    private leftArrow;
    private scrollContent;
    private rightArrow;
    render(): any;
}
