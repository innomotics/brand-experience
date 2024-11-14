export declare class InnoButton {
    /**
     * Variant of the button.
     */
    variant: 'primary' | 'secondary' | 'tertiary' | 'media' | 'navigation' | 'delete';
    /**
     * Color variant of the button.
     */
    colorVariant: 'light' | 'dark';
    /**
     * Type of the button.
     */
    type: 'button' | 'submit';
    /**
     * Tab index of the button.
     */
    tabIdx: number;
    /**
     * Whether the button is disabled or not.
     */
    disabled: boolean;
    /**
     * Icon to use inside the button. Use either this or the 'iconFont' property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/icons/
     */
    icon: string;
    /**
     * Icon font to use inside the button. Use either this or the 'icon' property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont
     */
    iconFont: string;
    /**
     * Where to put the icon relative to the text.
     */
    iconPosition: 'left' | 'right';
    /**
     * Direction of the navigation button. Only has effect if the variant is 'navigation'.
     */
    navDirection: 'left' | 'right';
    /**
     * Only show an icon.
     */
    iconOnly: boolean;
    /**
     * Special style for button lists.
     */
    listType: boolean;
    hostElement: HTMLInnoButtonElement;
    submitButtonElement: HTMLButtonElement;
    componentDidLoad(): void;
    dispatchFormEvents(): void;
    render(): any;
}
