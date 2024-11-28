import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f9444b6c.js';
import { D as DateTime_1 } from './p-1370a3b4.js';
import { d as defineCustomElement$3 } from './p-23c6263d.js';
import { d as defineCustomElement$2 } from './p-a043038e.js';

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
const InnoTimePicker$1 = /*@__PURE__*/ proxyCustomElement(class InnoTimePicker extends H {
    constructor() {
        super();
        this.__registerHost();
        this.valueChange = createEvent(this, "valueChange", 7);
        this.theme = 'light';
        this.texts = undefined;
        this.format = 'HH:mm:ss';
        this.time = undefined;
        this.selectedHour = undefined;
        this.selectedMinute = undefined;
        this.selectedSecond = undefined;
    }
    get hostElement() { return this; }
    /**
     *
     */
    valueChange;
    componentDidLoad() {
        const button = this.hostElement.querySelector('.confirm-container button');
        button.style.width = '100%';
    }
    sendValueChange() {
        const time = DateTime_1.fromObject({ hour: this.selectedHour, minute: this.selectedMinute, second: this.selectedSecond });
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
    static get style() { return InnoTimePickerStyle0; }
}, [2, "inno-time-picker", {
        "theme": [1],
        "texts": [16],
        "format": [1],
        "time": [1],
        "selectedHour": [32],
        "selectedMinute": [32],
        "selectedSecond": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-time-picker", "inno-button", "inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-time-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoTimePicker$1);
            }
            break;
        case "inno-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoTimePicker = InnoTimePicker$1;
const defineCustomElement = defineCustomElement$1;

export { InnoTimePicker, defineCustomElement };

//# sourceMappingURL=inno-time-picker.js.map