import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';
import { a as autoUpdate, c as computePosition, s as shift, f as flip } from './floating-ui.dom.esm-f11f0749.js';
import { a as isPresent } from './utils-ee7eba95.js';
import { D as DateTime_1 } from './luxon-a51b373a.js';
import './_commonjsHelpers-6cbf8316.js';

const innoDatePickerDropdownCss = ".sc-inno-date-picker-dropdown-h{display:block;position:relative;width:100%;max-width:380px;height:56px}.picker.sc-inno-date-picker-dropdown{width:100%;height:56px;padding-left:16px;padding-right:16px;display:flex;flex-direction:row;align-items:center;position:relative;font-size:16px;font-family:\"InnomoticsHafferSQ\";cursor:pointer}.picker.light.sc-inno-date-picker-dropdown{border:1px solid #9aacb4;color:#40545b}.picker.dark.sc-inno-date-picker-dropdown{border:1px solid #9aacb4;background-color:#08191f;color:#b2c1c7}.picker.sc-inno-date-picker-dropdown .picker-label--hasvalue.sc-inno-date-picker-dropdown{position:absolute;top:6px;left:16px;font-size:12px}.picker.sc-inno-date-picker-dropdown .picker-value.sc-inno-date-picker-dropdown{position:relative;top:7px}.picker.sc-inno-date-picker-dropdown .picker-icon.sc-inno-date-picker-dropdown{margin-left:auto}.picker.sc-inno-date-picker-dropdown .picker-icon.light.sc-inno-date-picker-dropdown{color:#08191f}.picker.sc-inno-date-picker-dropdown .picker-icon.dark.sc-inno-date-picker-dropdown{color:#ffffff}.dropdown-container.sc-inno-date-picker-dropdown{display:none;z-index:10;position:fixed}.show.sc-inno-date-picker-dropdown{display:block}";

const InnoDatePickerDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChange = createEvent(this, "dateChange", 7);
        this.variant = 'dark';
        this.format = 'yyyy/LL/dd';
        this.range = false;
        this.from = undefined;
        this.to = undefined;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.weekStartIndex = 0;
        this.locale = undefined;
        this.showOuterDays = true;
        this.label = undefined;
        this.closeOnSelection = true;
        this.show = false;
        this.isOpen = false;
        this.value = undefined;
        this.selectedRange = undefined;
    }
    get hostElement() { return getElement(this); }
    /**
     * Triggers if the date selection changes.
     * See the date-picker component for more information.
     */
    dateChange;
    dropdownHost;
    datePicker;
    disposeAutoUpdate;
    destroyAutoUpdate() {
        if (this.disposeAutoUpdate != undefined) {
            this.disposeAutoUpdate();
        }
    }
    async computeTooltipPositionWithAutoUpdate() {
        await this.computeTooltipPos();
        return new Promise((resolve) => {
            this.disposeAutoUpdate = autoUpdate(this.dropdownHost, this.datePicker, async () => {
                await this.computeTooltipPos();
                resolve();
            }, {
                ancestorResize: true,
                ancestorScroll: true,
                elementResize: true,
                layoutShift: true
            });
        });
    }
    async computeTooltipPos() {
        return new Promise(async (resolve) => {
            const positionConfig = await computePosition(this.dropdownHost, this.datePicker, {
                placement: 'bottom',
                strategy: 'fixed',
                middleware: [
                    shift(),
                    flip({
                        mainAxis: true,
                        crossAxis: true,
                        fallbackAxisSideDirection: 'start',
                        fallbackStrategy: 'bestFit',
                        padding: 5
                    })
                ]
            });
            this.datePicker.style.left = `${positionConfig.x}`;
            this.datePicker.style.top = `${positionConfig.y}`;
            const { x, y } = positionConfig;
            Object.assign(this.datePicker.style, {
                left: x !== null ? `${x}px` : '',
                top: y !== null ? `${y - 1}px` : ''
            });
            resolve();
        });
    }
    changeVisibility() {
        this.isOpen = !this.isOpen;
    }
    isOpenChanged() {
        if (this.isOpen) {
            this.computeTooltipPositionWithAutoUpdate().then(() => {
                this.show = true;
            });
        }
        else {
            this.show = false;
            this.destroyAutoUpdate();
        }
    }
    keyboardHandler(ev) {
        if (ev.key == 'Escape' && this.isOpen) {
            this.isOpen = false;
        }
    }
    async onClick(event) {
        if (this.isOpen && this.show) {
            if (event.target !== this.hostElement && !this.hostElement.contains(event.target)) {
                this.isOpen = false;
            }
        }
    }
    onDateChange(range) {
        if (range.to) {
            this.value = `${range.from} - ${range.to}`;
        }
        else {
            this.value = range.from;
        }
        if (this.closeOnSelection) {
            // close if not in range mode and value is selected
            if (!this.range) {
                this.isOpen = false;
            }
            // close if range mode and both values are selected
            else if (this.range && range.to) {
                this.isOpen = false;
            }
        }
        this.dateChange.emit(range);
    }
    watchFromPropHandler(newValue) {
        let fromDate = newValue ? DateTime_1.fromFormat(newValue, this.format) : undefined;
        if (fromDate?.isValid) {
            this.onDateChange({ from: newValue, to: this.to });
        }
    }
    watchToPropHandler(newValue) {
        let toDate = newValue ? DateTime_1.fromFormat(newValue, this.format) : undefined;
        if (toDate?.isValid) {
            this.onDateChange({ from: this.from, to: newValue });
        }
    }
    disconnectedCallback() {
        this.destroyAutoUpdate();
    }
    variantClasses() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
        };
    }
    picker() {
        const pickerClasses = {
            ...this.variantClasses(),
            picker: true,
        };
        const label = isPresent(this.label) ? this.label : 'Starting date*';
        const labelClasses = {
            ...this.variantClasses(),
            'picker-label': true,
            'picker-label--hasvalue': this.value !== undefined,
        };
        const valueClasses = {
            'picker-value': true,
        };
        const iconName = this.show ? 'chevron_up_small' : 'calendar';
        const pickerIconClasses = {
            ...this.variantClasses(),
            'picker-icon': true,
        };
        return (h("div", { class: pickerClasses, ref: ref => (this.dropdownHost = ref), onClick: _ => this.changeVisibility() }, h("div", { class: labelClasses }, h("span", null, label)), h("div", { class: valueClasses }, this.value), h("div", { class: pickerIconClasses }, h("inno-icon", { icon: iconName, size: 32 }))));
    }
    calendarContainer() {
        const dropdownContainerClasses = {
            ...this.variantClasses(),
            'dropdown-container': true,
            'show': this.show,
        };
        return (h("div", { class: dropdownContainerClasses, ref: ref => (this.datePicker = ref) }, h("inno-date-picker", { format: this.format, range: this.range, from: this.from, to: this.to, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, locale: this.locale, showOuterDays: this.showOuterDays, onDateChange: event => this.onDateChange(event.detail) })));
    }
    render() {
        return (h(Host, { key: '04988b028eaebd130ed272260d34d3a58c589ee3' }, this.picker(), this.calendarContainer()));
    }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"],
        "from": ["watchFromPropHandler"],
        "to": ["watchToPropHandler"]
    }; }
};
InnoDatePickerDropdown.style = innoDatePickerDropdownCss;

export { InnoDatePickerDropdown as inno_date_picker_dropdown };

//# sourceMappingURL=inno-date-picker-dropdown.entry.js.map