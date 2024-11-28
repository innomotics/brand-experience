import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f9444b6c.js';
import { a as a11yBoolean } from './p-df111cda.js';
import { i as isNotPresent } from './p-565004a9.js';

const innoRadioCss = "*.sc-inno-radio{box-sizing:border-box}.sc-inno-radio-h{height:25px;display:inline-flex;justify-content:flex-start;align-items:center;font-family:\"InnomoticsHafferSQ\";font-weight:300;position:relative;outline-width:0}input.sc-inno-radio{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.checkbox.sc-inno-radio{width:20px;height:20px;min-width:20px;min-height:20px;border-radius:50%;position:relative;display:flex;justify-content:center;align-items:center;cursor:pointer}.checkbox.focus.sc-inno-radio{outline:1.5px solid #1491EB;outline-offset:2px}.checkbox.light.sc-inno-radio{background-color:#ffffff;border:1.5px solid #08191f}.checkbox.dark.sc-inno-radio{background-color:#08191f;border:1.5px solid #ffffff}.checkbox.sc-inno-radio:hover.light{background-color:#ffffff;border:1.5px solid #6d818a}.checkbox.sc-inno-radio:hover.dark{background-color:#08191f;border:1.5px solid #9aacb4}.checkbox.sc-inno-radio:active.light{background-color:#ffffff;border:1.5px solid #6d818a}.checkbox.sc-inno-radio:active.dark{background-color:#08191f;border:1.5px solid #9aacb4}.checkbox.error.light.sc-inno-radio{background-color:#ffffff;border:1.5px solid #CB0E0E}.checkbox.error.dark.sc-inno-radio{background-color:#08191f;border:1.5px solid #FF88AB}.checkbox.readonly.sc-inno-radio{cursor:default}.checkbox.readonly.light.sc-inno-radio{background-color:#ffffff;border:1.5px solid #9aacb4}.checkbox.readonly.dark.sc-inno-radio{background-color:#08191f;border:1.5px solid #b2c1c7}.checkbox.disabled.sc-inno-radio{cursor:default}.checkbox.disabled.light.sc-inno-radio{background-color:#ffffff;border:1.5px solid #9aacb4}.checkbox.disabled.dark.sc-inno-radio{background-color:#08191f;border:1.5px solid #b2c1c7}.checkbox.checked.light.sc-inno-radio{background-color:#ffffff;border:1.5px solid #08191f}.checkbox.checked.dark.sc-inno-radio{background-color:#08191f;border:1.5px solid #e1f000}.checkbox.checked.sc-inno-radio:hover.light{background-color:#ffffff;border:1.5px solid #08191f}.checkbox.checked.sc-inno-radio:hover.dark{background-color:#08191f;border:1.5px solid #e1f000}.checkbox.checked.error.light.sc-inno-radio{background-color:#08191f;border:1.5px solid #08191f}.checkbox.checked.error.dark.sc-inno-radio{background-color:#e1f000;border:1.5px solid #e1f000}.checkbox.checked.sc-inno-radio:active.light{background-color:#ffffff;border:1.5px solid #08191f}.checkbox.checked.sc-inno-radio:active.dark{background-color:#08191f;border:1.5px solid #e1f000}.checkbox.checked.readonly.sc-inno-radio{cursor:default}.checkbox.checked.readonly.light.sc-inno-radio{background-color:#ffffff;border:1.5px solid #ffffff}.checkbox.checked.readonly.dark.sc-inno-radio{background-color:#08191f;border:1.5px solid #08191f}.checkbox.checked.disabled.sc-inno-radio{cursor:default}.checkbox.checked.disabled.light.sc-inno-radio{background-color:#cad5da;border:1.5px solid #cad5da}.checkbox.checked.disabled.dark.sc-inno-radio{background-color:#08191f;border:1.5px solid #9aacb4}.checksign.sc-inno-radio{width:14px;height:14px;background-color:#08191f;border-radius:50%;display:inline-block;visibility:hidden}.checksign.checked.sc-inno-radio{visibility:visible}.checksign.checked.light.sc-inno-radio{background-color:#08191f}.checksign.checked.dark.sc-inno-radio{background-color:#e1f000}.checksign.checked.sc-inno-radio:hover.light{background-color:#08191f}.checksign.checked.sc-inno-radio:hover.dark{background-color:#e1f000}.checksign.checked.sc-inno-radio:active.light{background-color:#08191f}.checksign.checked.sc-inno-radio:active.dark{background-color:#e1f000}.checksign.checked.readonly.sc-inno-radio{cursor:default}.checksign.checked.readonly.light.sc-inno-radio{background-color:#08191f}.checksign.checked.readonly.dark.sc-inno-radio{background-color:#ffffff}.checksign.checked.error.light.sc-inno-radio{background-color:#ffffff}.checksign.checked.error.dark.sc-inno-radio{background-color:#08191f}.checksign.checked.disabled.sc-inno-radio{cursor:default}.checksign.checked.disabled.light.sc-inno-radio{background-color:#9aacb4}.checksign.checked.disabled.dark.sc-inno-radio{background-color:#9aacb4}.label.sc-inno-radio{font-size:16px;cursor:pointer;margin-left:12px}.label.light.sc-inno-radio{color:#08191f}.label.dark.sc-inno-radio{color:#ffffff}.label.required.sc-inno-radio::after{content:\"*\"}.label.error.light.sc-inno-radio{color:#CB0E0E}.label.error.dark.sc-inno-radio{color:#FF88AB}.label.readonly.sc-inno-radio{cursor:default}.label.readonly.light.sc-inno-radio{color:#9aacb4}.label.readonly.dark.sc-inno-radio{color:#9aacb4}.label.disabled.sc-inno-radio{cursor:default}.label.disabled.light.sc-inno-radio{color:#9aacb4}.label.disabled.dark.sc-inno-radio{color:#9aacb4}.label.checked.error.light.sc-inno-radio{color:#08191f}.label.checked.error.dark.sc-inno-radio{color:#ffffff}";
const InnoRadioStyle0 = innoRadioCss;

const InnoRadio$1 = /*@__PURE__*/ proxyCustomElement(class InnoRadio extends H {
    constructor() {
        super();
        this.__registerHost();
        this.valueChange = createEvent(this, "valueChange", 7);
        this.elementInternals = this.attachInternals();
        this.isFocused = false;
        this.variant = 'light';
        this.tabIdx = 0;
        this.name = undefined;
        this.value = undefined;
        this.label = '';
        this.checked = undefined;
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.error = false;
    }
    get hostElement() { return this; }
    elementInternals;
    /**
     * Emits the associated value when the element is clicked.
     */
    valueChange;
    onFocus() {
        if (this.elementInDisabledInteractionMode()) {
            this.isFocused = false;
        }
        else {
            this.isFocused = true;
        }
    }
    onFocusOut() {
        this.isFocused = false;
    }
    handleKeyDown(ev) {
        if (ev.key === 'Enter') {
            this.changeCheckedState(true);
        }
    }
    /**
     * Remove the selection from the given control.
     * Can be used to synchronize the selection state
     * between the radio group elements if manual control is required.
     */
    async unselect() {
        this.checked = false;
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    // Value change is not propagated to the components
    // and the components should be notified explicitly.
    // Dispatch the form value among the form elements
    // Iterate over the control which have the same name as this control
    // and clear the form state and selection
    handleHtmlForm() {
        // this.elementInternals.setFormValue(this.value, 'checked');
        const form = this.elementInternals.form;
        if (isNotPresent(form)) {
            return;
        }
        const elements = form.elements.namedItem(this.name);
        elements.forEach(node => {
            const radioControl = node;
            if (radioControl.tagName === 'INNO-RADIO' && radioControl.value !== this.value) {
                radioControl.unselect();
            }
        });
    }
    // Check whether the component cannot be interacted
    // Like disabled or readonly modes.
    elementInDisabledInteractionMode() {
        return this.disabled || this.readonly;
    }
    changeCheckedState(_newValue) {
        if (this.elementInDisabledInteractionMode()) {
            return;
        }
        this.checked = true;
        this.valueChange.emit(this.value);
        this.handleHtmlForm();
    }
    checkRequiredState() {
        if (this.elementInDisabledInteractionMode()) {
            return false;
        }
        return this.required;
    }
    checkErrorState() {
        if (this.elementInDisabledInteractionMode()) {
            return false;
        }
        // No error state for checked state
        // Only valid error state for now is the required and not checked case
        // The error class interferes with the hover and active classes
        if (this.checked) {
            return false;
        }
        if (this.error) {
            return true;
        }
        return !this.elementInternals.validity.valid;
    }
    checkReadonlyState() {
        return this.disabled ? false : this.readonly;
    }
    commonStyles() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
            checked: this.checked,
            focus: this.isFocused,
            disabled: this.disabled,
            error: this.checkErrorState(),
            readonly: this.checkReadonlyState(),
            required: this.checkRequiredState(),
        };
    }
    inputElement() {
        return (h("input", { type: "radio", "aria-checked": a11yBoolean(this.checked), tabindex: -1, name: this.name, value: this.value, disabled: this.disabled, checked: this.checked, required: this.required }));
    }
    checkboxComponent() {
        const classes = {
            ...this.commonStyles(),
            checkbox: true,
        };
        return (h("div", { class: classes, onClick: () => this.changeCheckedState(true) }, this.checkSignComponent()));
    }
    checkSignComponent() {
        const classes = {
            ...this.commonStyles(),
            checksign: true,
        };
        return h("div", { class: classes });
    }
    labelComponent() {
        const classes = {
            ...this.commonStyles(),
            label: true,
        };
        return (h("span", { class: classes, onClick: () => this.changeCheckedState(true) }, this.label));
    }
    render() {
        const tabIndexValue = this.elementInDisabledInteractionMode() ? -1 : this.tabIdx;
        return (h(Host, { key: '565205be3df9581ef18226db152408327551c627', role: "radio", tabIndex: tabIndexValue, "aria-checked": a11yBoolean(this.checked) }, this.inputElement(), this.checkboxComponent(), this.labelComponent()));
    }
    static get formAssociated() { return true; }
    static get style() { return InnoRadioStyle0; }
}, [66, "inno-radio", {
        "variant": [1025],
        "tabIdx": [1026, "tab-idx"],
        "name": [1],
        "value": [1],
        "label": [1],
        "checked": [1540],
        "disabled": [1540],
        "readonly": [1540],
        "required": [1540],
        "error": [4],
        "isFocused": [32],
        "unselect": [64]
    }, [[0, "focusin", "onFocus"], [0, "focusout", "onFocusOut"], [0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-radio"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoRadio$1);
            }
            break;
    } });
}

const InnoRadio = InnoRadio$1;
const defineCustomElement = defineCustomElement$1;

export { InnoRadio, defineCustomElement };

//# sourceMappingURL=inno-radio.js.map