import { EventEmitter } from '../../stencil-public-runtime';
export declare class InnoInput {
    hostElement: HTMLInnoInputElement & HTMLDivElement;
    private inputElementRef?;
    private seizerElementRef;
    private mutationObserver;
    private resizeObserver;
    /**
     * Fired when the new value is valid.
     */
    valueChanged: EventEmitter<string | number>;
    isActive: boolean;
    shouldFloat: boolean;
    textareaMode: boolean;
    /**
     * Whether the input is focused or not.
     */
    isFocused: boolean;
    /**
     * Whether the inno-input component is disabled or not. Probably not needed to be set since the component
     * automatically detects if the inserted input element is disabled or not.
     * The inno-input component will also be in a disabled state when the input element is readonly.
     */
    disabled: boolean;
    /**
     * Floating label for the input.
     */
    label: string;
    /**
     * Color variant of the input.
     */
    variant: 'light' | 'dark';
    /**
     * Error message to show. If you don't want to use this property you can manually add 'inno-error' components inside the 'inno-input' component.
     * You can either use this property or use the manually added errors. Can't use both at the same time.
     */
    error: string;
    /**
     * The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
     * <br/><br/>Only has an effect if 'error' has a value.
     */
    errortype: 'badInput' | 'customError' | 'patternMismatch' | 'rangeOverflow' | 'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valid' | 'valueMissing' | undefined;
    /** @internal */ valuePropReDefine: boolean;
    /**
     * When you click on the inno-input a focus() command is called on the input element.
     * This might cause that the caret position will be at the beginnging of the input's value.
     * Set this to true if you want to select all of the text by default.
     */
    selectOnFocus: boolean;
    /**
     * When you click on the inno-input a focus() command is called on the input element.
     * This might cause that the caret position will be at the beginnging of the input's value.
     * Set this to true if you want the caret position to be at the end. Only has an effect if the input type is 'text'.
     * Has no effect if 'selectOnFocus' is also true.
     */
    caretPosEndOnFocus: boolean;
    /**
     * Whether the textarea is resizeable.
     * Only has effect if textarea is provided as wrapped element.
     */
    resizeable: boolean;
    /**
     * Set the resize direction.
     * Only has effect if textarea is provided as wrapped element.
     */
    resizeMode: 'vertical' | 'horizontal' | 'both';
    /**
     * The floating label is an absolutely positioned element meaning if it is too long it will grow out of the boundaries of the InnoInput component.
     * By default the InnoInput component automatically resizes the floating label so it will fit inside.
     * You can turn this behavior off e.g. if you are sure the label will always fit or it causes some issues.
     */
    disableFloatingLabelAutoResize: boolean;
    isValid: boolean;
    private floatingLabel;
    private resizeTimeout;
    get errorElements(): HTMLInnoErrorElement[];
    inputChanged(event: any): void;
    private setErrors;
    private isValueEmpty;
    private get value();
    private setFloatingLabelMaxWidth;
    private reDefineInputValueProperty;
    private startMutationObserver;
    private startResizeObserver;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    reCheckValue(): void;
    onFocus(): void;
    onFocusout(): void;
    activateInput(): void;
    private synchSeizerPosition;
    private onSeizerMouseDown;
    private onSeizerMove;
    private seizerElement;
    private errorElement;
    render(): any;
}
