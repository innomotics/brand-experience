import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Represents the default radio button for the Innomics applications.
 */
export declare class InnoRadio {
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
     * Form entry group name.
     */
    name: string;
    /**
     * Radio button value.
     */
    value: string;
    /**
     * Label to show.
     */
    label: string;
    /**
     *
     */
    checked: boolean;
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
     * Emits the associated value when the element is clicked.
     */
    valueChange: EventEmitter<string>;
    onFocus(): void;
    onFocusOut(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    /**
     * Remove the selection from the given control.
     * Can be used to synchronize the selection state
     * between the radio group elements if manual control is required.
     */
    unselect(): Promise<void>;
    formDisabledCallback(disabled: boolean): void;
    handleHtmlForm(): void;
    elementInDisabledInteractionMode(): boolean;
    changeCheckedState(_newValue: boolean): void;
    checkRequiredState(): boolean;
    checkErrorState(): boolean;
    checkReadonlyState(): boolean;
    commonStyles(): {
        light: boolean;
        dark: boolean;
        checked: boolean;
        focus: boolean;
        disabled: boolean;
        error: boolean;
        readonly: boolean;
        required: boolean;
    };
    inputElement(): any;
    checkboxComponent(): any;
    checkSignComponent(): any;
    labelComponent(): any;
    render(): any;
}
