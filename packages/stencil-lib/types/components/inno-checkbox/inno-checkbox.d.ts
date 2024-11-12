import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Checkbox for Innomatics design system.
 */
export declare class InnoCheckbox {
    hostElement: HTMLElement;
    elementInternals: ElementInternals;
    isFocused: boolean;
    /**
     * Theme variant of the component.
     */
    variant: 'dark' | 'light';
    /**
     * The tab index.
     */
    tabIdx: number;
    /**
     * Form entry name.
     */
    name: string;
    /**
     * Label to show.
     */
    label: string;
    /**
     * Whether element is checked.
     */
    checked: boolean | undefined;
    /**
     * Whether indeterminate state is enabled for the component.
     * The component is in indeterminate state if
     * it is explicity requested
     * and the checked status is not defined
     */
    indeterminate: boolean;
    /**
     * Whether component is disabled.
     * In this state no other state effects are applied to the element like error.
     */
    disabled: boolean;
    /**
     * Whether the component is readonly.
     * In this state no other state effects are applied to the element like error.
     */
    readonly: boolean;
    /**
     * Mark the component as required and show the required marker.
     * Validation is performed with this property.
     */
    required: boolean;
    /**
     * Whether the element is in error state.
     * Error state can be defined if manual error handling is required.
     */
    error: boolean;
    /**
     * Checked status has been changed.
     */
    valueChange: EventEmitter<boolean>;
    formDisabledCallback(disabled: boolean): void;
    onFocus(): void;
    onFocusOut(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    elementInDisabledInteractionMode(): boolean;
    changeCheckedState(newState: boolean): void;
    checkRequiredState(): boolean;
    checkErrorState(): boolean;
    checkReadonlyState(): boolean;
    checkIndeterminateState(): boolean;
    commonStyles(): {
        light: boolean;
        dark: boolean;
        checked: boolean;
        focus: boolean;
        disabled: boolean;
        error: boolean;
        readonly: boolean;
        required: boolean;
        indeterminate: boolean;
    };
    inputElement(): any;
    checkboxComponent(): any;
    checkSignComponent(): any;
    labelComponent(): any;
    render(): any;
}
