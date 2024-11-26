import SimpleBar from 'simplebar';
/**
 * Basic wrapper element for html tables. Adds some basic styling to the table and a custom scrollbar with fade-out effect.
 * Can be used without html table as well, in that case only the custom scrollbar with fade-out effect will be applied to the html element.
 */
export declare class InnoTableBase {
    /**
     * Color variant of the table;
     */
    variant: 'light' | 'dark';
    /**
     * The fade-out effect while scrolling is achieved by using mask-image and linear-gradient.
     * For it to work properly a color must be set to be the same as the table's background color.
     */
    maskColor: string;
    hostElement: HTMLInnoTableBaseElement;
    maskElement: HTMLDivElement;
    scrollBar: SimpleBar;
    /**
     * The component tries its best to always apply the custom scrollbar and the fade-out effect automatically but there might be some cases
     * (especially during/after initalization) where it just simply won't work. In those cases you can call this method manually.
     */
    refresh(): Promise<void>;
    recalculateScrollbar(): void;
    onWindowResize(): void;
    setMask(el: HTMLElement): void;
    scrollListener: (event: any) => void;
    componentDidLoad(): void;
    componentWillUnload(): void;
    render(): any;
}
