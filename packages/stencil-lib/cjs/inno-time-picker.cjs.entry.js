'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-543bf53b.js');
const luxon = require('./luxon-9a5412ce.js');

const innoTimePickerCss = ".sc-inno-time-picker-h{height:400px;width:280px;display:flex;flex-direction:column;background-color:#2a3b40}@media screen and (max-width: 800px){.sc-inno-time-picker-h{width:100%}}.title-container.sc-inno-time-picker{height:64px;padding:24px 30px 24px 30px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:#ffffff;font-size:12px;line-height:18px}.picker-container.sc-inno-time-picker{display:flex;flex-direction:row;justify-content:space-between;padding-left:24px;padding-right:24px}.entry.sc-inno-time-picker{width:36px;height:36px;background-color:transparent;color:#ffffff;display:flex;justify-content:center;align-items:center;cursor:pointer;font-size:16px;line-height:25px;font-family:\"InnomoticsHafferSQ\";font-weight:200}.entry.active.sc-inno-time-picker{background-color:#e1f000;color:#08191f;font-weight:800}.entry.sc-inno-time-picker:hover{background-color:#b2c1c7;color:#08191f}.column-container.sc-inno-time-picker{overflow-y:scroll;max-height:240px}.column-container.sc-inno-time-picker::-webkit-scrollbar{display:none}.column.sc-inno-time-picker::-webkit-scrollbar{display:none}.confirm-container.sc-inno-time-picker{height:96px;padding:24px;padding-bottom:12px;display:flex;justify-content:center;align-items:center}.confirm-container.sc-inno-time-picker inno-button.sc-inno-time-picker,.confirm-container.sc-inno-time-picker inno-button.sc-inno-time-picker>button.sc-inno-time-picker{width:100% !important}";
const InnoTimePickerStyle0 = innoTimePickerCss;

const HOURS = [...Array(24).keys()];
const MINUTES = [...Array(60).keys()];
const SECONDS = [...Array(60).keys()];
const DEFAULT_TEXTS = {
    confirmLabel: 'Ok',
    hourLabel: 'Hr',
    minuteLabel: 'Min',
    secondLabel: 'Sec',
};
const InnoTimePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.valueChange = index.createEvent(this, "valueChange", 7);
        this.theme = 'light';
        this.texts = undefined;
        this.format = 'HH:mm:ss';
        this.time = undefined;
        this.selectedHour = undefined;
        this.selectedMinute = undefined;
        this.selectedSecond = undefined;
    }
    get hostElement() { return index.getElement(this); }
    /**
     *
     */
    valueChange;
    componentDidLoad() {
        const button = this.hostElement.querySelector('.confirm-container button');
        button.style.width = '100%';
    }
    sendValueChange() {
        const time = luxon.DateTime_1.fromObject({ hour: this.selectedHour, minute: this.selectedMinute, second: this.selectedSecond });
        this.valueChange.emit(time.toFormat(this.format));
    }
    titleContainer() {
        return (index.h("div", { class: "title-container" }, index.h("div", null, this.texts?.hourLabel ?? DEFAULT_TEXTS.hourLabel), index.h("div", null, this.texts?.minuteLabel ?? DEFAULT_TEXTS.minuteLabel), index.h("div", null, this.texts?.secondLabel ?? DEFAULT_TEXTS.secondLabel)));
    }
    hourColumn() {
        return (index.h("div", { class: "column-container" }, index.h("div", { class: "column" }, HOURS.map(hour => {
            const classes = { entry: true, active: hour === this.selectedHour };
            return (index.h("div", { class: classes, key: hour, onClick: () => (this.selectedHour = hour) }, hour));
        }))));
    }
    minuteColumn() {
        return (index.h("div", { class: "column-container" }, index.h("div", { class: "column" }, MINUTES.map(minute => {
            const classes = { entry: true, active: minute === this.selectedMinute };
            return (index.h("div", { class: classes, key: minute, onClick: () => (this.selectedMinute = minute) }, minute));
        }))));
    }
    secondColumn() {
        return (index.h("div", { class: "column-container" }, index.h("div", { class: "column" }, SECONDS.map(second => {
            const classes = { entry: true, active: second === this.selectedSecond };
            return (index.h("div", { class: classes, key: second, onClick: () => (this.selectedSecond = second) }, second));
        }))));
    }
    valuesContainer() {
        return (index.h("div", { class: "picker-container" }, this.hourColumn(), this.minuteColumn(), this.secondColumn()));
    }
    confirmContainer() {
        return (index.h("div", { class: "confirm-container" }, index.h("inno-button", { variant: "secondary", onClick: () => this.sendValueChange() }, this.texts?.confirmLabel ?? DEFAULT_TEXTS.confirmLabel)));
    }
    render() {
        return (index.h(index.Host, { key: '35b9ccc70e074c9e5ca8fb10adb2ce5b0b0f19b2' }, this.titleContainer(), this.valuesContainer(), this.confirmContainer()));
    }
};
InnoTimePicker.style = InnoTimePickerStyle0;

exports.inno_time_picker = InnoTimePicker;

//# sourceMappingURL=inno-time-picker.cjs.entry.js.map