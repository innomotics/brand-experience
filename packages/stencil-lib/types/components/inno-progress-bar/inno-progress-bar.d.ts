export declare class InnoProgressBar {
    /**
     * Color variant of the progress bar.
     */
    variant: 'light' | 'dark';
    /**
     * Text to display for the progress bar.
     */
    progressText: string;
    /**
     * Progress in percentage. Must be a number between 0 and 100.
     */
    progressPercentage: number;
    /**
     * Show the percentage number on the progress bar. The value is rounded according to the 'percentagePrecision' and 'trailingZeroes' properties.
     */
    showPercentage: boolean;
    /**
     * If the percentage number is shown, how many decimal places should be visible
     */
    percentagePrecision: number;
    /**
     * If 'percentagePrecision' is larger than 0, should we display the trailing zeroes.
     * For example if the progress is 1.5% and the 'percentagePrecision' is 2 then the displayed text will be '1.50%'
     * if trailing zeroes are enabled and '1.5%' if trailing zeroes are disabled.
     * Uses the toFixed(..) function in the background.
     */
    trailingZeroes: boolean;
    private frontLayerRef;
    progressChangedhandler(newValue: number): void;
    componentDidLoad(): void;
    private setClipPath;
    private progressNum;
    private validateProps;
    private progressHtml;
    render(): any;
}
