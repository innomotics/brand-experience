/**
 * Represents an inno-footer item.
 *
 * Wrap an element for the inno-footer parent.
 *
 * See the InnoFooter docs for more information.
 */
export declare class InnoFooterItem {
    hostElement: HTMLElement;
    /**
     * Theme variant property.
     * Inherited from the parent.
     * Can be overridden if explicitly defined.
     */
    variant: 'light' | 'dark';
    watchVariant(newVariant: 'light' | 'dark'): void;
    componentDidLoad(): void;
    propagateStyle(): void;
    variantStyle(): {
        light: boolean;
        dark: boolean;
    };
    render(): any;
}
