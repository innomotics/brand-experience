import { EventEmitter } from '../../stencil-public-runtime';
import { DateTime } from 'luxon';
import { DateChange } from '../inno-date-context-api/inno-date-api';
/**
 * Innomotics date-picker.
 */
export declare class InnoDatePicker {
    hostElement: HTMLElement & InnoDatePicker;
    /**
     * Date format string.
     * See "https://moment.github.io/luxon/#/formatting?id=table-of-tokens" for all available tokens.
     */
    format: string;
    /**
     * If true a date-range can be selected (from/to).
     */
    range: boolean;
    /**
     * The selected starting date. If the date-picker is not in range mode this is the selected date.
     * Format has to match the `format` property.
     */
    from: string | undefined;
    watchFromPropHandler(newValue: string): void;
    /**
     * The selected end date. If the date-picker is not in range mode this property has no impact.
     * Format has to match the `format` property.
     */
    to: string | undefined;
    watchToPropHandler(newValue: string): void;
    /**
     * The earliest date that can be selected by the date picker.
     * If not set there will be no restriction.
     */
    minDate: string;
    /**
     * The latest date that can be selected by the date picker.
     * If not set there will be no restriction.
     */
    maxDate: string;
    /**
     * Text of date select button
     */
    i18nDone: string;
    /**
     * The index of which day to start the week on, based on the Locale#weekdays array.
     * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
     */
    weekStartIndex: number;
    /**
     * Format of time string
     * See "https://moment.github.io/luxon/#/formatting?id=table-of-tokens" for all available tokens.
     */
    locale: string;
    /**
     * Show the days outside the selected month.
     */
    showOuterDays: boolean;
    onLocaleChange(): void;
    /** @internal */
    standaloneAppearance: boolean;
    /** @internal */
    today: string;
    /**
     * Triggers if the date selection changes.
     */
    dateChange: EventEmitter<DateChange>;
    /**
     * Get the currently selected date-range.
     */
    getCurrentDate(): Promise<{
        from: string;
        to: string;
    }>;
    currFromDate: DateTime;
    currToDate: DateTime;
    selectedYear: number;
    tempYear: number;
    startYear: number;
    endYear: number;
    selectedMonth: number;
    tempMonth: number;
    dropdownButtonRef: HTMLElement;
    dropdownContainerRef: HTMLElement;
    showDropdown: boolean;
    yearContainerRef: HTMLElement;
    dayNames: string[];
    monthNames: string[];
    firstMonthRef: HTMLElement;
    focusedDay: DateTime;
    focusedDayElem: HTMLElement;
    private isDayFocus;
    private monthChangedFromFocus;
    private readonly DAYS_IN_WEEK;
    private calendar;
    handleKeyUp(event: KeyboardEvent): void;
    private getDateTimeNow;
    onDayBlur(): void;
    onDayFocus(): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    componentDidRender(): void;
    private setTranslations;
    private calculateIdForCell;
    /**
     * Rotate the WeekdayNames array.
     * Based on the position that should be the new 0-index.
     */
    private rotateWeekDayNames;
    private calculateCalendar;
    private selectTempYear;
    private focusMonth;
    private infiniteScrollYears;
    private selectMonth;
    private changeToAdjacentMonth;
    private selectDay;
    private onDateChange;
    private getDayClasses;
    private isWithinMinMaxYear;
    private isWithinMinMaxMonth;
    private isWithinMinMaxDate;
    private openDropdownSelector;
    private dropDown;
    private renderYears;
    private dropdownMonths;
    private header;
    private calendarGrid;
    createCalendarWeekNamesLayout(): any[];
    createCalendarDaysLayout(): any[];
    render(): any;
}
