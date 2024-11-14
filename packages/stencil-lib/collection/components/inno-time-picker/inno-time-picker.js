import { Host, h } from "@stencil/core";
import { DateTime } from "luxon";
const HOURS = [...Array(24).keys()];
const MINUTES = [...Array(60).keys()];
const SECONDS = [...Array(60).keys()];
const DEFAULT_TEXTS = {
    confirmLabel: 'Ok',
    hourLabel: 'Hr',
    minuteLabel: 'Min',
    secondLabel: 'Sec',
};
/**
 *
 */
export class InnoTimePicker {
    constructor() {
        this.theme = 'light';
        this.texts = undefined;
        this.format = 'HH:mm:ss';
        this.time = undefined;
        this.selectedHour = undefined;
        this.selectedMinute = undefined;
        this.selectedSecond = undefined;
    }
    hostElement;
    /**
     *
     */
    valueChange;
    componentDidLoad() {
        const button = this.hostElement.querySelector('.confirm-container button');
        button.style.width = '100%';
    }
    sendValueChange() {
        const time = DateTime.fromObject({ hour: this.selectedHour, minute: this.selectedMinute, second: this.selectedSecond });
        this.valueChange.emit(time.toFormat(this.format));
    }
    titleContainer() {
        return (h("div", { class: "title-container" }, h("div", null, this.texts?.hourLabel ?? DEFAULT_TEXTS.hourLabel), h("div", null, this.texts?.minuteLabel ?? DEFAULT_TEXTS.minuteLabel), h("div", null, this.texts?.secondLabel ?? DEFAULT_TEXTS.secondLabel)));
    }
    hourColumn() {
        return (h("div", { class: "column-container" }, h("div", { class: "column" }, HOURS.map(hour => {
            const classes = { entry: true, active: hour === this.selectedHour };
            return (h("div", { class: classes, key: hour, onClick: () => (this.selectedHour = hour) }, hour));
        }))));
    }
    minuteColumn() {
        return (h("div", { class: "column-container" }, h("div", { class: "column" }, MINUTES.map(minute => {
            const classes = { entry: true, active: minute === this.selectedMinute };
            return (h("div", { class: classes, key: minute, onClick: () => (this.selectedMinute = minute) }, minute));
        }))));
    }
    secondColumn() {
        return (h("div", { class: "column-container" }, h("div", { class: "column" }, SECONDS.map(second => {
            const classes = { entry: true, active: second === this.selectedSecond };
            return (h("div", { class: classes, key: second, onClick: () => (this.selectedSecond = second) }, second));
        }))));
    }
    valuesContainer() {
        return (h("div", { class: "picker-container" }, this.hourColumn(), this.minuteColumn(), this.secondColumn()));
    }
    confirmContainer() {
        return (h("div", { class: "confirm-container" }, h("inno-button", { variant: "secondary", onClick: () => this.sendValueChange() }, this.texts?.confirmLabel ?? DEFAULT_TEXTS.confirmLabel)));
    }
    render() {
        return (h(Host, { key: '35b9ccc70e074c9e5ca8fb10adb2ce5b0b0f19b2' }, this.titleContainer(), this.valuesContainer(), this.confirmContainer()));
    }
    static get is() { return "inno-time-picker"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-time-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-time-picker.css"]
        };
    }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'light' | 'dark'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme variant of the component."
                },
                "attribute": "theme",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "texts": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "InnoTimePickerTexts | undefined",
                    "resolved": "InnoTimePickerTexts",
                    "references": {
                        "InnoTimePickerTexts": {
                            "location": "import",
                            "path": "./inno-time-picker.api",
                            "id": "src/components/inno-time-picker/inno-time-picker.api.ts::InnoTimePickerTexts"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Component text configuration."
                }
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
                    "text": "Date format string.\r\nSee \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\" for all available tokens."
                },
                "attribute": "format",
                "reflect": false,
                "defaultValue": "'HH:mm:ss'"
            },
            "time": {
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
                    "text": ""
                },
                "attribute": "time",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedHour": {},
            "selectedMinute": {},
            "selectedSecond": {}
        };
    }
    static get events() {
        return [{
                "method": "valueChange",
                "name": "valueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-time-picker.js.map
