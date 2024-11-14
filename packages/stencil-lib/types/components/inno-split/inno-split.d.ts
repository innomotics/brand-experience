/**
 * Experimental component that lets the user separate and resize panels. Should only contain inno-split-item children components.
 * The inno-split-item components can contain inno-split component for nesting.
 */
export declare class InnoSplit {
    hostElement: HTMLInnoSplitElement;
    orientation: 'horizontal' | 'vertical';
    /**
     * Default size of each contained inno-split-item in percentage (width if 'horizontal', height if 'vertical'). If omitted they will have equal sizes.
     */
    splitAreasDefaultSizes: number[];
    splitAreasCurrentSizes: number[];
    isMouseDown: boolean;
    /**
     * Required property. Unique slot names for the inno-split-items to insert into. Length must be equal to the number of inserted inno-split-items.
     */
    slotNames: string[];
    private splitAreasIndices;
    private originalPos;
    private gutterIndex;
    private splitSize;
    private splitItemSize;
    private nextSplitItemSize;
    private minSize;
    private maxSize;
    private abortController;
    private get isHorizontal();
    handleMouseDown(event: MouseEvent, gutterIndex: number): void;
    handleMouseUp(): void;
    handleMouseMove(event: MouseEvent): void;
    private startListening;
    /**
     * Reinit the component. Can be used if the number of inno-split-items change.
     */
    reInit(): Promise<void>;
    private init;
    componentWillLoad(): void;
    render(): any;
}
