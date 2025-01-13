import { autoUpdate, computePosition, flip, shift } from "@floating-ui/dom";
import { Host, h } from "@stencil/core";
import { isPresent } from "../../utils/utils";
import { DateTime } from "luxon";
/**
 * Date-picker with dropdown.
 */
export class InnoDatePickerDropdown {
    hostElement;
    /**
     * Color variant of the component.
     */
    variant = 'dark';
    /**
     * Date format string.
     * See the date-picker component for more information.
     */
    format = 'yyyy/LL/dd';
    /**
     * If true a date-range can be selected.
     * See the date-picker component for more information.
     */
    range = false;
    /**
     * The selected starting range.
     * See the date-picker component for more information.
     */
    from;
    /**
     * The selected end date.
     * See the date-picker component for more information.
     */
    to;
    /**
     * The earliest date that can be selected by the date picker.
     * See the date-picker component for more information.
     */
    minDate;
    /**
     * The latest date that can be selected by the date picker.
     * See the date-picker component for more information.
     */
    maxDate;
    /**
     * The index of which day to start the week on.
     * See the date-picker component for more information.
     */
    weekStartIndex = 0;
    /**
     * Format of the date strings.
     * See the date-picker component for more information.
     */
    locale = undefined;
    /**
     * Show the days outside the selected month.
     * See the date-picker component for more information.
     */
    showOuterDays = true;
    /**
     * Label of the dropdown component.
     */
    label;
    closeOnSelection = true;
    /**
     * Triggers if the date selection changes.
     * See the date-picker component for more information.
     */
    dateChange;
    show = false;
    isOpen = false;
    value;
    selectedRange;
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
        let fromDate = newValue ? DateTime.fromFormat(newValue, this.format) : undefined;
        if (fromDate?.isValid) {
            this.onDateChange({ from: newValue, to: this.to });
        }
    }
    watchToPropHandler(newValue) {
        let toDate = newValue ? DateTime.fromFormat(newValue, this.format) : undefined;
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
        return (h(Host, { key: 'ac08815d9da7fed4ea3ac444de687d0d903b366b' }, this.picker(), this.calendarContainer()));
    }
    static get is() { return "inno-date-picker-dropdown"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-date-picker-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-date-picker-dropdown.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'dark' | 'light'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color variant of the component."
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'dark'"
            },
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
                    "text": "Date format string.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
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
                    "text": "If true a date-range can be selected.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
                "attribute": "range",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "The selected starting range.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
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
                    "text": "The selected end date.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
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
                    "text": "The earliest date that can be selected by the date picker.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
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
                    "text": "The latest date that can be selected by the date picker.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
                "attribute": "max-date",
                "reflect": false
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
                    "text": "The index of which day to start the week on.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
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
                    "text": "Format of the date strings.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
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
                    "text": "Show the days outside the selected month.\r\nSee the date-picker component for more information."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-outer-days",
                "reflect": false,
                "defaultValue": "true"
            },
            "label": {
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
                    "text": "Label of the dropdown component."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "closeOnSelection": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "close-on-selection",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "show": {},
            "isOpen": {},
            "value": {},
            "selectedRange": {}
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
                    "text": "Triggers if the date selection changes.\r\nSee the date-picker component for more information."
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
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }, {
                "propName": "from",
                "methodName": "watchFromPropHandler"
            }, {
                "propName": "to",
                "methodName": "watchToPropHandler"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "keyboardHandler",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "onClick",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=inno-date-picker-dropdown.js.map
