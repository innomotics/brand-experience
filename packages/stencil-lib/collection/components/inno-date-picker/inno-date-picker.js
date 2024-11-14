var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h, Fragment } from "@stencil/core";
import { DateTime, Info } from "luxon";
import { OnListener } from "../../utils/listener";
import { computePosition } from "@floating-ui/dom";
/**
 * Innomotics date-picker.
 */
export class InnoDatePicker {
    constructor() {
        this.format = 'yyyy/LL/dd';
        this.range = true;
        this.from = undefined;
        this.to = undefined;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.i18nDone = 'Done';
        this.weekStartIndex = 0;
        this.locale = undefined;
        this.showOuterDays = true;
        this.standaloneAppearance = true;
        this.today = DateTime.now().toISO();
        this.currFromDate = undefined;
        this.currToDate = undefined;
        this.selectedYear = undefined;
        this.tempYear = undefined;
        this.startYear = undefined;
        this.endYear = undefined;
        this.selectedMonth = undefined;
        this.tempMonth = undefined;
        this.dropdownButtonRef = undefined;
        this.dropdownContainerRef = undefined;
        this.showDropdown = false;
        this.yearContainerRef = undefined;
        this.dayNames = undefined;
        this.monthNames = undefined;
        this.firstMonthRef = undefined;
        this.focusedDay = DateTime.now();
        this.focusedDayElem = undefined;
    }
    hostElement;
    watchFromPropHandler(newValue) {
        this.currFromDate = newValue ? DateTime.fromFormat(newValue, this.format) : undefined;
        if (this.currFromDate?.isValid) {
            this.selectedYear = this.currFromDate.year;
            this.selectedMonth = this.currFromDate.month - 1;
        }
    }
    watchToPropHandler(newValue) {
        this.currToDate = newValue ? DateTime.fromFormat(newValue, this.format) : undefined;
        if (this.currToDate?.isValid) {
            this.selectedYear = this.currToDate.year;
            this.selectedMonth = this.currToDate.month - 1;
        }
    }
    onLocaleChange() {
        this.setTranslations();
    }
    /**
     * Triggers if the date selection changes.
     */
    dateChange;
    /**
     * Get the currently selected date-range.
     */
    async getCurrentDate() {
        const _from = this.currFromDate?.isValid ? this.currFromDate?.toFormat(this.format) : undefined;
        const _to = this.currToDate?.isValid ? this.currToDate?.toFormat(this.format) : undefined;
        if (this.range) {
            return {
                from: _from,
                to: _to,
            };
        }
        return {
            from: _from,
            to: undefined,
        };
    }
    isDayFocus;
    monthChangedFromFocus;
    DAYS_IN_WEEK = 7;
    calendar;
    handleKeyUp(event) {
        if (!this.isDayFocus) {
            return;
        }
        let _focusedDay = this.focusedDay;
        switch (event.key) {
            case 'ArrowLeft':
                _focusedDay = _focusedDay.minus({ day: 1 });
                break;
            case 'ArrowRight':
                _focusedDay = _focusedDay.plus({ day: 1 });
                break;
            case 'ArrowUp':
                _focusedDay = _focusedDay.minus({ day: this.DAYS_IN_WEEK });
                break;
            case 'ArrowDown':
                _focusedDay = _focusedDay.plus({ day: this.DAYS_IN_WEEK });
                break;
            default:
                return;
        }
        const selected = DateTime.fromObject({ year: this.selectedYear, month: this.selectedMonth + 1, day: 1 });
        if (_focusedDay.month > selected.month) {
            this.changeToAdjacentMonth(1);
            this.monthChangedFromFocus = true;
        }
        else if (_focusedDay.month < selected.month) {
            this.changeToAdjacentMonth(-1);
            this.monthChangedFromFocus = true;
        }
        this.focusedDay = _focusedDay;
    }
    getDateTimeNow() {
        return DateTime.fromISO(this.today);
    }
    onDayBlur() {
        this.isDayFocus = false;
    }
    onDayFocus() {
        this.isDayFocus = true;
    }
    componentWillLoad() {
        this.setTranslations();
        this.currFromDate = this.from ? DateTime.fromFormat(this.from, this.format) : undefined;
        this.currToDate = this.to ? DateTime.fromFormat(this.to, this.format) : undefined;
        const year = this.currFromDate?.year ?? this.getDateTimeNow().year;
        this.startYear = year - 5;
        this.endYear = year + 5;
        this.selectedMonth = (this.currFromDate?.month ?? this.getDateTimeNow().month) - 1;
        this.selectedYear = year;
        this.tempMonth = this.selectedMonth;
        this.tempYear = this.selectedYear;
    }
    componentWillRender() {
        this.calculateCalendar();
    }
    componentDidRender() {
        if (!this.monthChangedFromFocus && !this.isDayFocus) {
            return;
        }
        const dayElem = this.hostElement.querySelector(`[id=${this.calculateIdForCell(this.focusedDay)}]`);
        dayElem?.focus();
    }
    setTranslations() {
        this.dayNames = this.rotateWeekDayNames(Info.weekdays('long', {
            locale: this.locale,
        }), this.weekStartIndex);
        this.monthNames = Info.months('long', {
            locale: this.locale,
        });
    }
    calculateIdForCell(dateTime) {
        return `day-cell-${dateTime.year}-${dateTime.month}-${dateTime.day}`;
    }
    /**
     * Rotate the WeekdayNames array.
     * Based on the position that should be the new 0-index.
     */
    rotateWeekDayNames(weekdays, index) {
        const clone = [...weekdays];
        if (index === 0) {
            return clone;
        }
        index = -index;
        const len = weekdays.length;
        clone.push(...clone.splice(0, ((-index % len) + len) % len));
        return clone;
    }
    calculateCalendar() {
        const calendar = [];
        const month = DateTime.utc(this.selectedYear, this.selectedMonth + 1);
        let monthStartDay = month.startOf('day');
        let currentWeek = { weekNumber: monthStartDay.weekNumber, days: [] };
        // Calculate the missing previous month days
        if (monthStartDay.weekdayLong !== this.dayNames[0]) {
            // Get the index (offset) for the start day of the selected month
            const index = this.dayNames.indexOf(monthStartDay.weekdayLong);
            // Calculate the start day for the first week
            const startDay = monthStartDay.minus({ day: index });
            // Add the necessary days from previous month
            for (let i = 0; i < index; i++) {
                if (this.showOuterDays) {
                    currentWeek.days.push(startDay.plus({ day: i }));
                }
                else {
                    currentWeek.days.push(undefined);
                }
            }
        }
        // Create weeks from the days of the selected month
        const end = month.endOf('month');
        let currentDay = monthStartDay;
        while (currentDay <= end) {
            if (currentWeek.days.length === 7) {
                calendar.push(currentWeek);
                currentWeek = { weekNumber: currentWeek.weekNumber + 1, days: [currentDay] };
            }
            else {
                currentWeek.days.push(currentDay);
            }
            currentDay = currentDay.plus({ day: 1 });
        }
        // Calculate missing next month days
        const latestWeek = currentWeek.days;
        if (latestWeek.length !== 7 && this.showOuterDays) {
            const latestEntry = latestWeek[latestWeek.length - 1];
            const neededElements = 7 - latestWeek.length;
            for (let i = 0; i < neededElements; i++) {
                currentWeek.days.push(latestEntry.plus({ day: i + 1 }));
            }
        }
        calendar.push(currentWeek);
        this.calendar = calendar;
    }
    selectTempYear(event, year) {
        event?.stopPropagation();
        this.tempYear = year;
    }
    focusMonth() {
        this.firstMonthRef.focus();
    }
    infiniteScrollYears() {
        const scroll = this.yearContainerRef.scrollTop;
        const maxScroll = this.yearContainerRef.scrollHeight;
        const atTop = scroll === 0;
        const atBottom = Math.round(scroll + this.yearContainerRef.offsetHeight) >= maxScroll;
        const limit = 200;
        if (this.endYear - this.startYear > limit)
            return;
        if (atTop) {
            const first = this.yearContainerRef.firstElementChild;
            this.startYear -= 5;
            this.yearContainerRef.scrollTo(0, first.offsetTop);
            return;
        }
        if (atBottom) {
            const last = this.yearContainerRef.lastElementChild;
            this.endYear += 5;
            this.yearContainerRef.scrollTo(0, last.offsetTop);
        }
    }
    selectMonth(month) {
        this.selectedMonth = month;
        this.selectedYear = this.tempYear;
        this.tempMonth = month;
        // Schedule the operation to make it recognizeable for stencil state change handling
        setTimeout(() => (this.showDropdown = false));
    }
    changeToAdjacentMonth(number) {
        // Previous year
        if (this.selectedMonth + number < 0) {
            this.selectedYear--;
            this.selectedMonth = 11;
            return;
        }
        // Next year
        if (this.selectedMonth + number > 11) {
            this.selectedYear++;
            this.selectedMonth = 0;
            return;
        }
        this.selectedMonth += number;
    }
    selectDay(selectedDay) {
        const date = selectedDay;
        if (!this.range || this.currFromDate === undefined) {
            this.currFromDate = date;
            this.onDateChange();
            return;
        }
        // Reset the range selection
        if (this.currToDate !== undefined) {
            this.currFromDate = date;
            this.currToDate = undefined;
            this.onDateChange();
            return;
        }
        // Swap from/to if the second date is before the current date
        if (date < this.currFromDate) {
            this.currToDate = this.currFromDate;
            this.currFromDate = date;
            this.onDateChange();
            return;
        }
        // Set the range normally
        this.currToDate = date;
        this.onDateChange();
    }
    onDateChange() {
        this.getCurrentDate().then(date => {
            this.dateChange.emit(date);
            if (this.range) {
                this.dateChange.emit(date);
            }
        });
    }
    getDayClasses(day) {
        if (!day) {
            return;
        }
        const todayObj = this.getDateTimeNow();
        const selectedDayObj = day;
        return {
            'calendar-item': true,
            'empty-day': day === undefined,
            'today': todayObj.hasSame(selectedDayObj, 'day'),
            'selected': this.currFromDate?.hasSame(selectedDayObj, 'day') || this.currToDate?.hasSame(selectedDayObj, 'day'),
            'range': selectedDayObj.startOf('day') > this.currFromDate?.startOf('day') && this.currToDate !== undefined && selectedDayObj.startOf('day') < this.currToDate?.startOf('day'),
            'disabled': !this.isWithinMinMaxDate(selectedDayObj),
            'outer-day': day.year !== this.selectedYear || day.month - 1 !== this.selectedMonth,
        };
    }
    isWithinMinMaxYear(year) {
        const minDateYear = this.minDate ? DateTime.fromFormat(this.minDate, this.format).year : undefined;
        const maxDateYear = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format).year : undefined;
        const isBefore = minDateYear ? year < minDateYear : false;
        const isAfter = maxDateYear ? year > maxDateYear : false;
        return !isBefore && !isAfter;
    }
    isWithinMinMaxMonth(month) {
        const minDateObj = this.minDate ? DateTime.fromFormat(this.minDate, this.format) : undefined;
        const maxDateObj = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format) : undefined;
        const minDateMonth = minDateObj?.month;
        const maxDateMonth = maxDateObj?.month;
        const isBefore = minDateMonth ? this.tempYear === minDateObj.year && month < minDateMonth : false;
        const isAfter = maxDateMonth ? this.tempYear === maxDateObj.year && month > maxDateMonth : false;
        return !isBefore && !isAfter;
    }
    isWithinMinMaxDate(date) {
        const _minDate = this.minDate ? DateTime.fromFormat(this.minDate, this.format) : undefined;
        const _maxDate = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format) : undefined;
        const isBefore = _minDate ? date.startOf('day') < _minDate.startOf('day') : false;
        const isAfter = _maxDate ? date.startOf('day') > _maxDate.startOf('day') : false;
        return !isBefore && !isAfter;
    }
    async openDropdownSelector() {
        const result = await computePosition(this.dropdownButtonRef, this.dropdownContainerRef, { placement: 'bottom-start', strategy: 'absolute' });
        this.dropdownContainerRef.style.top = `${result.y}`;
        this.dropdownContainerRef.style.left = `${result.x}`;
        this.showDropdown = !this.showDropdown;
    }
    dropDown() {
        const classes = {
            dropdown: true,
            show: this.showDropdown,
        };
        return (h("div", { class: classes, ref: ref => (this.dropdownContainerRef = ref) }, h("div", { class: "wrapper" }, this.renderYears(), this.dropdownMonths())));
    }
    renderYears() {
        const rows = [];
        for (let year = this.startYear; year <= this.endYear; year++) {
            const yearClasses = {
                'arrowYear': true,
                'month-dropdown-item': true,
                'disabled-item': !this.isWithinMinMaxYear(year),
            };
            const iconClasses = {
                hidden: this.tempYear !== year,
                arrowPosition: true,
            };
            rows.push(h("div", { key: year, class: yearClasses, onClick: event => this.selectTempYear(event, year), onKeyUp: event => {
                    if (event.key === 'Enter') {
                        this.selectTempYear(null, year);
                        this.focusMonth();
                    }
                }, tabIndex: 0 }, h("inno-icon", { class: iconClasses, icon: "chevron_right_small", size: 16 }), h("div", { style: { 'min-width': 'max-content' } }, `${year}`)));
        }
        return (h("div", { class: "overflow", ref: ref => (this.yearContainerRef = ref), onScroll: () => this.infiniteScrollYears() }, rows));
    }
    dropdownMonths() {
        const months = this.monthNames.map((month, index) => {
            const classes = {
                'arrowYear': true,
                'month-dropdown-item': true,
                'selected': this.tempYear === this.selectedYear && this.tempMonth === index,
                'disabled-item': !this.isWithinMinMaxMonth(index),
            };
            const iconClasses = {
                hidden: this.tempYear !== this.selectedYear || this.tempMonth !== index,
                checkPosition: true,
            };
            return (h("div", { key: month, ref: ref => {
                    if (month === this.monthNames[0]) {
                        this.firstMonthRef = ref;
                    }
                }, class: classes, onClick: () => this.selectMonth(index), onKeyUp: event => event.key === 'Enter' && this.selectMonth(index), tabIndex: 0 }, h("inno-icon", { class: iconClasses, icon: "chevron_right_small", size: 16 }), h("div", null, h("span", null, `${month} ${this.tempYear}`))));
        });
        return h("div", { class: "overflow" }, months);
    }
    header() {
        return (h("div", { class: "header", slot: "header" }, h("inno-icon", { icon: "chevron_left_small", size: 24, class: "navigation", onClick: () => this.changeToAdjacentMonth(-1) }), h("div", { class: "selector" }, h("span", { ref: ref => (this.dropdownButtonRef = ref), onClick: () => this.openDropdownSelector() }, this.monthNames[this.selectedMonth], " ", this.selectedYear, this.dropDown())), h("inno-icon", { icon: "chevron_right_small", size: 24, class: "navigation", onClick: () => this.changeToAdjacentMonth(1) })));
    }
    calendarGrid() {
        return (h("div", { class: "grid" }, h("div", { class: "calendar-item week-day" }), this.createCalendarWeekNamesLayout(), this.createCalendarDaysLayout()));
    }
    createCalendarWeekNamesLayout() {
        return this.dayNames.map(name => (h("div", { key: name, class: "calendar-item week-day" }, name.slice(0, 3))));
    }
    createCalendarDaysLayout() {
        return this.calendar.map(week => {
            return (h(Fragment, null, h("div", { class: "calendar-item week-number" }, week.weekNumber), week.days.map(day => {
                if (day === undefined) {
                    return h("div", { "date-calender-day": true, class: this.getDayClasses(day) });
                }
                const focusedDay = day.month === this.focusedDay.month && day.day === this.focusedDay.day;
                const id = this.calculateIdForCell(day);
                return (h("div", { "date-calender-day": true, key: `${day.month}-${day.day}`, id: id, class: this.getDayClasses(day), onClick: () => this.selectDay(day), onKeyUp: e => e.key === 'Enter' && this.selectDay(day), tabIndex: focusedDay ? 0 : -1, onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur() }, day.day));
            })));
        });
    }
    // TBD: WHETHER THE BOTTOM CONTROL IS NEEDED
    // private footerPart() {
    //   const classes = {
    //     button: true,
    //     hidden: !this.range || !this.standaloneAppearance,
    //   };
    //   return (
    //     <div class={classes}>
    //       <inno-button onClick={() => this.onDone()}>{this.i18nDone}</inno-button>
    //     </div>
    //   );
    // }
    render() {
        return (h(Host, { key: '29f90dea98a269024181f9cd35a3a5b636e8bb36' }, h("inno-date-time-card", { key: 'f66b84ca14d1b3abb893bc48464569f3bc913f52', standaloneAppearance: this.standaloneAppearance }, this.header(), this.calendarGrid())));
    }
    static get is() { return "inno-date-picker"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-date-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-date-picker.css"]
        };
    }
    static get properties() {
        return {
            "format": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Date format string.\r\nSee \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\" for all available tokens."
                },
                "attribute": "format",
                "reflect": false,
                "defaultValue": "'yyyy/LL/dd'"
            },
            "range": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true a date-range can be selected (from/to)."
                },
                "attribute": "range",
                "reflect": false,
                "defaultValue": "true"
            },
            "from": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The selected starting date. If the date-picker is not in range mode this is the selected date.\r\nFormat has to match the `format` property."
                },
                "attribute": "from",
                "reflect": false
            },
            "to": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The selected end date. If the date-picker is not in range mode this property has no impact.\r\nFormat has to match the `format` property."
                },
                "attribute": "to",
                "reflect": false
            },
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The earliest date that can be selected by the date picker.\r\nIf not set there will be no restriction."
                },
                "attribute": "min-date",
                "reflect": false
            },
            "maxDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The latest date that can be selected by the date picker.\r\nIf not set there will be no restriction."
                },
                "attribute": "max-date",
                "reflect": false
            },
            "i18nDone": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text of date select button"
                },
                "attribute": "i18n-done",
                "reflect": false,
                "defaultValue": "'Done'"
            },
            "weekStartIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The index of which day to start the week on, based on the Locale#weekdays array.\r\nE.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday."
                },
                "attribute": "week-start-index",
                "reflect": false,
                "defaultValue": "0"
            },
            "locale": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Format of time string\r\nSee \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\" for all available tokens."
                },
                "attribute": "locale",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "showOuterDays": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show the days outside the selected month."
                },
                "attribute": "show-outer-days",
                "reflect": false,
                "defaultValue": "true"
            },
            "standaloneAppearance": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "standalone-appearance",
                "reflect": false,
                "defaultValue": "true"
            },
            "today": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "today",
                "reflect": false,
                "defaultValue": "DateTime.now().toISO()"
            }
        };
    }
    static get states() {
        return {
            "currFromDate": {},
            "currToDate": {},
            "selectedYear": {},
            "tempYear": {},
            "startYear": {},
            "endYear": {},
            "selectedMonth": {},
            "tempMonth": {},
            "dropdownButtonRef": {},
            "dropdownContainerRef": {},
            "showDropdown": {},
            "yearContainerRef": {},
            "dayNames": {},
            "monthNames": {},
            "firstMonthRef": {},
            "focusedDay": {},
            "focusedDayElem": {}
        };
    }
    static get events() {
        return [{
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggers if the date selection changes."
                },
                "complexType": {
                    "original": "DateChange",
                    "resolved": "{ from: string; to: string; }",
                    "references": {
                        "DateChange": {
                            "location": "import",
                            "path": "../inno-date-context-api/inno-date-api",
                            "id": "src/components/inno-date-context-api/inno-date-api.ts::DateChange"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "getCurrentDate": {
                "complexType": {
                    "signature": "() => Promise<{ from: string; to: string; }>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<{ from: string; to: string; }>"
                },
                "docs": {
                    "text": "Get the currently selected date-range.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "from",
                "methodName": "watchFromPropHandler"
            }, {
                "propName": "to",
                "methodName": "watchToPropHandler"
            }, {
                "propName": "locale",
                "methodName": "onLocaleChange"
            }];
    }
}
__decorate([
    OnListener('keydown')
], InnoDatePicker.prototype, "handleKeyUp", null);
//# sourceMappingURL=inno-date-picker.js.map
