export declare class InnoError {
    /**
     * Show the error or not.
     */
    active: boolean;
    /**
     * The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
     */
    type: 'badInput' | 'customError' | 'patternMismatch' | 'rangeOverflow' | 'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valid' | 'valueMissing' | undefined;
    /**
     * Theme variant of the input.
     */
    variant: 'dark' | 'light';
    render(): any;
}
