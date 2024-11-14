import { EventEmitter } from '../../stencil-public-runtime';
import { DateChange } from '../inno-date-context-api/inno-date-api';
/**
 * Date-picker with dropdown.
 */
export declare class InnoDatePickerDropdown {
    hostElement: HTMLElement;
    /**
     * Color variant of the component.
     */
    variant: 'dark' | 'light';
    /**
     * Date format string.
     * See the date-picker component for more information.
     */
    format: string;
    /**
     * If true a date-range can be selected.
     * See the date-picker component for more information.
     */
    range: boolean;
    /**
     * The selected starting range.
     * See the date-picker component for more information.
     */
    from: string | undefined;
    /**
     * The selected end date.
     * See the date-picker component for more information.
     */
    to: string | undefined;
    /**
     * The earliest date that can be selected by the date picker.
     * See the date-picker component for more information.
     */
    minDate: string;
    /**
     * The latest date that can be selected by the date picker.
     * See the date-picker component for more information.
     */
    maxDate: string;
    /**
     * The index of which day to start the week on.
     * See the date-picker component for more information.
     */
    weekStartIndex: number;
    /**
     * Format of the date strings.
     * See the date-picker component for more information.
     */
    locale: string;
    /**
     * Show the days outside the selected month.
     * See the date-picker component for more information.
     */
    showOuterDays: boolean;
    /**
     * Label of the dropdown component.
     */
    label: string | undefined;
    closeOnSelection: boolean;
    /**
     * Triggers if the date selection changes.
     * See the date-picker component for more information.
     */
    dateChange: EventEmitter<DateChange>;
    show: boolean;
    isOpen: boolean;
    value: string | undefined;
    selectedRange: DateChange | undefined;
    private dropdownHost;
    private datePicker;
    private disposeAutoUpdate?;
    private destroyAutoUpdate;
    private computeTooltipPositionWithAutoUpdate;
    computeTooltipPos(): Promise<void>;
    private changeVisibility;
    isOpenChanged(): void;
    keyboardHandler(ev: KeyboardEvent): void;
    onClick(event: globalThis.Event): Promise<void>;
    private onDateChange;
    watchFromPropHandler(newValue: string): void;
    watchToPropHandler(newValue: string): void;
    disconnectedCallback(): void;
    private variantClasses;
    private picker;
    private calendarContainer;
    render(): any;
}
