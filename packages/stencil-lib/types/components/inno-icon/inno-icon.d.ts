export declare class InnoIcon {
    /**
     * The icon name.
     * Use either this or the iconFont property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/icons/
     */
    icon: string;
    /**
     * Font icon code for the InnomoticsUiIcons font.
     * Use either this or the icon property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont
     */
    iconFont: string;
    size: number;
    /**
     * Color style of the icon.
     */
    variant: 'light' | 'dark';
    content?: string;
    iconChanged(): Promise<void>;
    fontChanged(): Promise<void>;
    componentWillLoad(): void;
    render(): any;
    resolveIcon(isIconFont: boolean): Promise<string | null>;
}
