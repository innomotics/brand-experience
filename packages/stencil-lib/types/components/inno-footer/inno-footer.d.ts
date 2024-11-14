/**
 * Represents the general footer for the Innomotics applications.
 *
 * @slot links - containing the links elements
 * @slot icons - containing the icon elements
 */
export declare class InnoFooter {
    hostElement: HTMLElement;
    /**
     * Theme variant property.
     */
    variant: 'light' | 'dark';
    /**
     * The copyright label.
     */
    copyright: string;
    componentDidLoad(): void;
    watchVariant(): void;
    cascadeFooterStyle(): void;
    variantStyle(): {
        light: boolean;
        dark: boolean;
    };
    createCopyrightNode(): any;
    linkNodes(): any;
    iconNodes(): any;
    render(): any;
}
