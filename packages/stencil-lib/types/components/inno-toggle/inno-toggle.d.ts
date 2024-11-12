import { EventEmitter } from '../../stencil-public-runtime';
export declare class InnoToggle {
    hostElement: HTMLInnoToggleElement;
    /**
     * Whether the slide-toggle element is checked or not. Can be changed programatically, will emit a change event.
     */
    checked: boolean;
    /**
     * Whether the slide-toggle element is disabled or not.
     */
    disabled: boolean;
    /**
     * Color variant of the toggle component.
     */
    variant: 'dark' | 'light';
    /**
     * The tab index of the toggle
     */
    tabIdx: number;
    /**
     * An event will be dispatched each time the slide-toggle changes its value.
     */
    checkedChange: EventEmitter<boolean>;
    onCheckedChange(newChecked: boolean): void;
    checkedChangeHandler(newValue: boolean, oldValue: boolean): void;
    render(): any;
}
