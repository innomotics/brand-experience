import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f47e640c.js';
import { a as a11yBoolean } from './p-df111cda.js';

const innoToggleCss = ".sc-inno-toggle-h{display:inline-flex;position:relative;height:24px;justify-content:flex-start;align-items:center}.sc-inno-toggle-h *.sc-inno-toggle,.sc-inno-toggle-h *.sc-inno-toggle::after,.sc-inno-toggle-h *.sc-inno-toggle::before{box-sizing:border-box}.sc-inno-toggle-h .switch.sc-inno-toggle{position:relative;display:inline-block;width:48px;min-width:48px;max-width:48px;height:20px}.sc-inno-toggle-h .switch.sc-inno-toggle input.sc-inno-toggle{opacity:0;width:0;height:0}.sc-inno-toggle-h .slider.sc-inno-toggle{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:all 300ms cubic-bezier(0.84, 0, 0.58, 1);border-radius:14px}.sc-inno-toggle-h .slider.dark.sc-inno-toggle{background-color:#cad5da}.sc-inno-toggle-h .slider.light.sc-inno-toggle{background-color:#40545b}.sc-inno-toggle-h .slider.sc-inno-toggle::before{position:absolute;content:\"\";height:24px;width:24px;left:-2px;bottom:-2px;background-color:#ffffff;box-shadow:0px 0px 3px 0px rgba(8, 25, 31, 0.4);transition:all 300ms cubic-bezier(0.84, 0, 0.58, 1);border-radius:50%}.sc-inno-toggle-h input.sc-inno-toggle{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-inno-toggle-h input.sc-inno-toggle:focus-visible+.switch.sc-inno-toggle>.slider.sc-inno-toggle{outline:2px solid #1491EB;outline-offset:5px}.sc-inno-toggle-h input.sc-inno-toggle:checked+.switch.sc-inno-toggle>.slider.dark.sc-inno-toggle{background-color:#08191f}.sc-inno-toggle-h input.sc-inno-toggle:checked+.switch.sc-inno-toggle>.slider.light.sc-inno-toggle{background-color:#e1f000}.sc-inno-toggle-h input.sc-inno-toggle:checked+.switch.sc-inno-toggle>.slider.sc-inno-toggle::before{transform:translateX(28px)}.sc-inno-toggle-h input.sc-inno-toggle+.switch.sc-inno-toggle:hover>.slider.dark.sc-inno-toggle{background-color:#40545b}.sc-inno-toggle-h input.sc-inno-toggle+.switch.sc-inno-toggle:hover>.slider.light.sc-inno-toggle{background-color:#b2c1c7}.disabled.sc-inno-toggle-h{pointer-events:none}.disabled.sc-inno-toggle-h input.sc-inno-toggle+.switch.sc-inno-toggle>.slider.dark.sc-inno-toggle{background-color:#cad5da}.disabled.sc-inno-toggle-h input.sc-inno-toggle+.switch.sc-inno-toggle>.slider.light.sc-inno-toggle{background-color:#40545b}.disabled.sc-inno-toggle-h input.sc-inno-toggle+.switch.sc-inno-toggle>.slider.sc-inno-toggle::before{background-color:#9aacb4}";
const InnoToggleStyle0 = innoToggleCss;

const InnoToggle$1 = /*@__PURE__*/ proxyCustomElement(class InnoToggle extends H {
    constructor() {
        super();
        this.__registerHost();
        this.checkedChange = createEvent(this, "checkedChange", 7);
        this.checked = false;
        this.disabled = false;
        this.variant = 'dark';
        this.tabIdx = 0;
    }
    get hostElement() { return this; }
    /**
     * An event will be dispatched each time the slide-toggle changes its value.
     */
    checkedChange;
    onCheckedChange(newChecked) {
        this.checked = newChecked;
    }
    checkedChangeHandler(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.checkedChange.emit(this.checked);
        }
    }
    render() {
        return (h(Host, { key: 'd2fdc860c45063b221d6527a62c49edbba5b89b8', class: {
                disabled: this.disabled
            }, onClick: () => this.onCheckedChange(!this.checked) }, h("input", { key: '929d6b4279155334e01ec397eb28048a92dd12d8', disabled: this.disabled, checked: this.checked, role: "switch", tabindex: this.disabled ? -1 : this.tabIdx, type: "checkbox", "aria-checked": a11yBoolean(this.checked), onChange: (event) => this.onCheckedChange(event.target.checked) }), h("label", { key: '648a9a799c33c536b60833073a26f6b7e57e297b', class: "switch", tabIndex: -1 }, h("span", { key: '5167f7a326934348584f1b2be3c83f72761604f0', class: {
                "slider": true,
                "dark": this.variant === "dark",
                "light": this.variant === "light"
            } }))));
    }
    static get watchers() { return {
        "checked": ["checkedChangeHandler"]
    }; }
    static get style() { return InnoToggleStyle0; }
}, [2, "inno-toggle", {
        "checked": [1540],
        "disabled": [1028],
        "variant": [1025],
        "tabIdx": [1026, "tab-idx"]
    }, undefined, {
        "checked": ["checkedChangeHandler"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-toggle"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoToggle$1);
            }
            break;
    } });
}

const InnoToggle = InnoToggle$1;
const defineCustomElement = defineCustomElement$1;

export { InnoToggle, defineCustomElement };

//# sourceMappingURL=inno-toggle.js.map