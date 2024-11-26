import { p as proxyCustomElement, H, c as createEvent, h, F as Fragment, d as Host } from './p-f9444b6c.js';
import { D as DateTime_1, I as Info_1 } from './p-1370a3b4.js';
import { c as computePosition } from './p-ae69ea43.js';
import { d as defineCustomElement$2 } from './p-4e62a2d1.js';
import { d as defineCustomElement$1 } from './p-a043038e.js';

/*
 Stencil Client Platform v4.22.3 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var getElement = (ref) => ref;

const defaultOptions = {
    target: 'window',
    defaultEnabled: true,
};
function createListener(event, options = {}) {
    const opts = {
        ...defaultOptions,
        ...options,
    };
    let callback;
    const onEvent = (event) => {
        callback(event);
    };
    const resultObject = {
        on: (onEventCallback) => {
            callback = onEventCallback;
        },
        isEnabled: opts.defaultEnabled,
        enable: (state) => {
            resultObject.isEnabled = state;
            if (state) {
                addEventListener(event, onEvent);
            }
            else {
                removeEventListener(event, onEvent);
            }
        },
        destroy: () => {
            resultObject.enable(false);
        },
    };
    resultObject.enable(opts.defaultEnabled);
    return resultObject;
}
function OnListener(event, fnExp) {
    return (proto, methodName) => {
        const { componentWillLoad, componentWillRender, disconnectedCallback } = proto;
        if (fnExp) {
            proto.componentWillRender = function () {
                const host = getElement(this);
                host[`__ix__${methodName}`]?.enable(fnExp(this));
                return componentWillRender && componentWillRender.call(this);
            };
        }
        proto.componentWillLoad = function () {
            const listener = createListener(event);
            const host = getElement(this);
            const method = this[methodName];
            host[`__ix__${methodName}`] = listener;
            listener.on(method.bind(this));
            return componentWillLoad && componentWillLoad.call(this);
        };
        proto.disconnectedCallback = function () {
            const host = getElement(this);
            if (host && host[`__ix__${methodName}`]) {
                host[`__ix__${methodName}`]?.destroy();
                host[`__ix__${methodName}`] = null;
            }
            return disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}

const innoDatePickerCss = ".sc-inno-date-picker-h{display:block;position:relative;width:380px}.sc-inno-date-picker-h .hidden.sc-inno-date-picker{display:none}.header.sc-inno-date-picker{display:flex;align-items:center;justify-content:space-between}.header.sc-inno-date-picker .selector.sc-inno-date-picker{display:flex;align-items:center;justify-content:center;flex-basis:100%;padding:0.25rem 1rem;color:#e1f000;font-size:20px;font-family:\"InnomoticsHafferSQ\";cursor:pointer}.header.sc-inno-date-picker .navigation.sc-inno-date-picker{color:#ffffff;cursor:pointer}.dropdown.sc-inno-date-picker{display:none;position:absolute;z-index:15;border-radius:10px;box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 12px 18px 0 rgba(0, 0, 0, 0.1);background-color:#2a3b40;color:#ffffff;font-family:\"InnomoticsHafferSQ\";font-size:14px;line-height:20px}.dropdown.sc-inno-date-picker .sc-inno-date-picker::-webkit-scrollbar-button{display:none}.dropdown.sc-inno-date-picker .sc-inno-date-picker::-webkit-scrollbar{width:0.5rem;height:0.5rem}.dropdown.sc-inno-date-picker .sc-inno-date-picker::-webkit-scrollbar-track{border-radius:5px;background:#2a3b40}.dropdown.sc-inno-date-picker .sc-inno-date-picker::-webkit-scrollbar-track:hover{background:#2a3b40}.dropdown.sc-inno-date-picker .sc-inno-date-picker::-webkit-scrollbar-thumb{border-radius:5px;background:#566b73}.dropdown.sc-inno-date-picker .sc-inno-date-picker::-webkit-scrollbar-thumb:hover{background:#566b73}.dropdown.sc-inno-date-picker .sc-inno-date-picker::-webkit-scrollbar-corner{display:none}.dropdown.show.sc-inno-date-picker{display:block}.dropdown.sc-inno-date-picker .wrapper.sc-inno-date-picker{display:flex}.dropdown.sc-inno-date-picker .wrapper.sc-inno-date-picker .overflow.sc-inno-date-picker{overflow-y:scroll;max-height:250px}.dropdown.sc-inno-date-picker .month-dropdown-item.sc-inno-date-picker{margin-left:4px;margin-right:4px;text-wrap:nowrap}.dropdown.sc-inno-date-picker .month-dropdown-item.sc-inno-date-picker:focus-visible{outline:1px solid #ffffff;outline-offset:1px}.dropdown.sc-inno-date-picker .disabled-item.sc-inno-date-picker{pointer-events:none;background-color:#566b73;color:#08191f;cursor:default}.arrowYear.sc-inno-date-picker{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}.arrowYear.sc-inno-date-picker:hover{background-color:#40545b}.arrowYear.selected.sc-inno-date-picker{background-color:#566b73}.arrowYear.sc-inno-date-picker .arrowPosition.sc-inno-date-picker{position:absolute;left:calc(1rem - 6px);top:31%}.arrowYear.sc-inno-date-picker .checkPosition.sc-inno-date-picker{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}.arrowYear.sc-inno-date-picker .monthMargin.sc-inno-date-picker{margin-left:10px}.grid.sc-inno-date-picker{display:grid;grid-template-columns:repeat(8, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center;row-gap:8px;color:#ffffff}.grid.sc-inno-date-picker .calendar-item.sc-inno-date-picker{width:40px;height:40px;position:relative;display:flex;justify-content:center;align-items:center;border:1px solid transparent;background-color:transparent;cursor:pointer}.grid.sc-inno-date-picker .calendar-item.sc-inno-date-picker:focus-visible{outline:1px solid #6d818a;outline-offset:1px}.grid.sc-inno-date-picker .calendar-item.outer-day.sc-inno-date-picker{color:#b2c1c7}.grid.sc-inno-date-picker .calendar-item.today.sc-inno-date-picker{border:2px solid #ffffff}.grid.sc-inno-date-picker .calendar-item.today.sc-inno-date-picker:hover{background-color:#b2c1c7}.grid.sc-inno-date-picker .calendar-item.today.sc-inno-date-picker:active{background-color:#e1f000}.grid.sc-inno-date-picker .calendar-item.today.selected.disabled.sc-inno-date-picker{pointer-events:none;color:#08191f}.grid.sc-inno-date-picker .calendar-item.today.range.sc-inno-date-picker{background-color:#40545b;color:#ffffff}.grid.sc-inno-date-picker .calendar-item.today.range.sc-inno-date-picker:hover{background-color:#b2c1c7}.grid.sc-inno-date-picker .calendar-item.today.range.sc-inno-date-picker:active{background-color:#e1f000}.grid.sc-inno-date-picker .calendar-item.today.range.disabled.sc-inno-date-picker{color:#08191f}.grid.sc-inno-date-picker .calendar-item.today.disabled.sc-inno-date-picker{pointer-events:none;color:#08191f;cursor:default}.grid.sc-inno-date-picker .calendar-item.sc-inno-date-picker:hover{background-color:#b2c1c7;color:#08191f}.grid.sc-inno-date-picker .calendar-item.sc-inno-date-picker:active{background-color:#e1f000;color:#08191f}.grid.sc-inno-date-picker .calendar-item.selected.sc-inno-date-picker{background-color:#e1f000;color:#08191f}.grid.sc-inno-date-picker .calendar-item.selected.sc-inno-date-picker:hover{background-color:#e1f000}.grid.sc-inno-date-picker .calendar-item.selected.sc-inno-date-picker:active{background-color:#e1f000}.grid.sc-inno-date-picker .calendar-item.selected.disabled.sc-inno-date-picker{pointer-events:none;background-color:#2a3b40;color:#08191f}.grid.sc-inno-date-picker .calendar-item.range.sc-inno-date-picker{background-color:#40545b;color:#ffffff}.grid.sc-inno-date-picker .calendar-item.range.sc-inno-date-picker:hover{background-color:#b2c1c7;color:#ffffff}.grid.sc-inno-date-picker .calendar-item.range.sc-inno-date-picker:active{background-color:#40545b;color:#ffffff}.grid.sc-inno-date-picker .calendar-item.range.disabled.sc-inno-date-picker{pointer-events:none;color:#08191f}.grid.sc-inno-date-picker .calendar-item.disabled.sc-inno-date-picker{pointer-events:none;color:#08191f}.grid.sc-inno-date-picker .calendar-item.week-day.sc-inno-date-picker{color:#ffffff;font-size:12px;line-height:20px;border:none;background:none;cursor:initial}.grid.sc-inno-date-picker .calendar-item.empty-day.sc-inno-date-picker{border:none;background:none;cursor:initial}.grid.sc-inno-date-picker .calendar-item.week-number.sc-inno-date-picker{font-size:12px;line-height:14px;color:#b2c1c7;border:none;background:none;cursor:initial}.grid.sc-inno-date-picker .calendar-item.sc-inno-date-picker:focus-visible{border:inset 1px solid #40545b}.button.sc-inno-date-picker{display:flex;justify-content:flex-end}@media screen and (max-width: 768px){.sc-inno-date-picker-h{width:100%}}";
const InnoDatePickerStyle0 = innoDatePickerCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const InnoDatePicker = /*@__PURE__*/ proxyCustomElement(class InnoDatePicker extends H {
    constructor() {
        super();
        this.__registerHost();
        this.dateChange = createEvent(this, "dateChange", 7);
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
        this.today = DateTime_1.now().toISO();
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
        this.focusedDay = DateTime_1.now();
        this.focusedDayElem = undefined;
    }
    get hostElement() { return this; }
    watchFromPropHandler(newValue) {
        this.currFromDate = newValue ? DateTime_1.fromFormat(newValue, this.format) : undefined;
        if (this.currFromDate?.isValid) {
            this.selectedYear = this.currFromDate.year;
            this.selectedMonth = this.currFromDate.month - 1;
        }
    }
    watchToPropHandler(newValue) {
        this.currToDate = newValue ? DateTime_1.fromFormat(newValue, this.format) : undefined;
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
        const selected = DateTime_1.fromObject({ year: this.selectedYear, month: this.selectedMonth + 1, day: 1 });
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
        return DateTime_1.fromISO(this.today);
    }
    onDayBlur() {
        this.isDayFocus = false;
    }
    onDayFocus() {
        this.isDayFocus = true;
    }
    componentWillLoad() {
        this.setTranslations();
        this.currFromDate = this.from ? DateTime_1.fromFormat(this.from, this.format) : undefined;
        this.currToDate = this.to ? DateTime_1.fromFormat(this.to, this.format) : undefined;
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
        this.dayNames = this.rotateWeekDayNames(Info_1.weekdays('long', {
            locale: this.locale,
        }), this.weekStartIndex);
        this.monthNames = Info_1.months('long', {
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
        const month = DateTime_1.utc(this.selectedYear, this.selectedMonth + 1);
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
        const minDateYear = this.minDate ? DateTime_1.fromFormat(this.minDate, this.format).year : undefined;
        const maxDateYear = this.maxDate ? DateTime_1.fromFormat(this.maxDate, this.format).year : undefined;
        const isBefore = minDateYear ? year < minDateYear : false;
        const isAfter = maxDateYear ? year > maxDateYear : false;
        return !isBefore && !isAfter;
    }
    isWithinMinMaxMonth(month) {
        const minDateObj = this.minDate ? DateTime_1.fromFormat(this.minDate, this.format) : undefined;
        const maxDateObj = this.maxDate ? DateTime_1.fromFormat(this.maxDate, this.format) : undefined;
        const minDateMonth = minDateObj?.month;
        const maxDateMonth = maxDateObj?.month;
        const isBefore = minDateMonth ? this.tempYear === minDateObj.year && month < minDateMonth : false;
        const isAfter = maxDateMonth ? this.tempYear === maxDateObj.year && month > maxDateMonth : false;
        return !isBefore && !isAfter;
    }
    isWithinMinMaxDate(date) {
        const _minDate = this.minDate ? DateTime_1.fromFormat(this.minDate, this.format) : undefined;
        const _maxDate = this.maxDate ? DateTime_1.fromFormat(this.maxDate, this.format) : undefined;
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
    static get watchers() { return {
        "from": ["watchFromPropHandler"],
        "to": ["watchToPropHandler"],
        "locale": ["onLocaleChange"]
    }; }
    static get style() { return InnoDatePickerStyle0; }
}, [2, "inno-date-picker", {
        "format": [1],
        "range": [4],
        "from": [1],
        "to": [1],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "i18nDone": [1, "i18n-done"],
        "weekStartIndex": [2, "week-start-index"],
        "locale": [1],
        "showOuterDays": [4, "show-outer-days"],
        "standaloneAppearance": [4, "standalone-appearance"],
        "today": [1],
        "currFromDate": [32],
        "currToDate": [32],
        "selectedYear": [32],
        "tempYear": [32],
        "startYear": [32],
        "endYear": [32],
        "selectedMonth": [32],
        "tempMonth": [32],
        "dropdownButtonRef": [32],
        "dropdownContainerRef": [32],
        "showDropdown": [32],
        "yearContainerRef": [32],
        "dayNames": [32],
        "monthNames": [32],
        "firstMonthRef": [32],
        "focusedDay": [32],
        "focusedDayElem": [32],
        "getCurrentDate": [64]
    }, undefined, {
        "from": ["watchFromPropHandler"],
        "to": ["watchToPropHandler"],
        "locale": ["onLocaleChange"]
    }]);
__decorate([
    OnListener('keydown')
], InnoDatePicker.prototype, "handleKeyUp", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-date-picker", "inno-date-time-card", "inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-date-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoDatePicker);
            }
            break;
        case "inno-date-time-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { InnoDatePicker as I, defineCustomElement as d };

//# sourceMappingURL=p-ed834ff2.js.map