export declare class InnoLoader {
    /**
     * Size of the loader. Valid values are: 16, 24, 32, 64.
     */
    size: number;
    /**
     * Theme variant property.
     */
    variant: 'light' | 'dark';
    /**
     * Loader bar width.
     */
    strokeWidth: 'thin' | 'thick';
    getStlyes(): {
        [x: string]: boolean;
        light: boolean;
        dark: boolean;
        thin: boolean;
    };
    componentWillLoad(): void;
    render(): any;
}
