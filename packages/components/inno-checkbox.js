import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-f9444b6c.js';
import { a as a11yBoolean } from './p-df111cda.js';
import { i as isNotPresent } from './p-565004a9.js';

const innoCheckboxCss = ".sc-inno-checkbox-h{height:25px;display:inline-flex;justify-content:flex-start;align-items:center;font-weight:300;font-style:normal;outline-width:0}.sc-inno-checkbox-h input.sc-inno-checkbox{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-inno-checkbox-h input.sc-inno-checkbox{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.checkbox.sc-inno-checkbox{width:20px;height:20px;position:relative;display:flex;justify-content:center;align-items:center;cursor:pointer}.checkbox.focus.sc-inno-checkbox{transition:outline 300ms cubic-bezier(0.84, 0, 0.58, 1);outline:1px solid #1491EB;outline-offset:2px}.checkbox.light.sc-inno-checkbox{background-color:#ffffff;border:1px solid #08191f}.checkbox.dark.sc-inno-checkbox{background-color:#08191f;border:1px solid #ffffff}.checkbox.sc-inno-checkbox:hover.light{background-color:#ffffff;border:1px solid #6d818a}.checkbox.sc-inno-checkbox:hover.dark{background-color:#08191f;border:1px solid #9aacb4}.checkbox.sc-inno-checkbox:active.light{background-color:#ffffff;border:1px solid #6d818a}.checkbox.sc-inno-checkbox:active.dark{background-color:#08191f;border:1px solid #9aacb4}.checkbox.error.light.sc-inno-checkbox{background-color:#ffffff;border:1px solid #CB0E0E}.checkbox.error.dark.sc-inno-checkbox{background-color:#08191f;border:1px solid #FF88AB}.checkbox.readonly.sc-inno-checkbox{cursor:default}.checkbox.readonly.light.sc-inno-checkbox{background-color:#ffffff;border:1px solid #9aacb4}.checkbox.readonly.dark.sc-inno-checkbox{background-color:#08191f;border:1px solid #b2c1c7}.checkbox.disabled.sc-inno-checkbox{cursor:default}.checkbox.disabled.light.sc-inno-checkbox{background-color:#cad5da;border:1px solid #cad5da}.checkbox.disabled.dark.sc-inno-checkbox{background-color:#40545b;border:1px solid #40545b}.checkbox.checked.light.sc-inno-checkbox{background-color:#08191f;border:1px solid #08191f}.checkbox.checked.dark.sc-inno-checkbox{background-color:#e1f000;border:1px solid #08191f}.checkbox.checked.sc-inno-checkbox:hover.light{background-color:#6d818a;border:1px solid #6d818a}.checkbox.checked.sc-inno-checkbox:hover.dark{background-color:#b2c1c7;border:1px solid #b2c1c7}.checkbox.checked.error.light.sc-inno-checkbox{background-color:#08191f;border:1px solid #08191f}.checkbox.checked.error.dark.sc-inno-checkbox{background-color:#e1f000;border:1px solid #e1f000}.checkbox.checked.sc-inno-checkbox:active.light{background-color:#6d818a;border:1px solid #6d818a}.checkbox.checked.sc-inno-checkbox:active.dark{background-color:#9aacb4;border:1px solid #9aacb4}.checkbox.checked.readonly.sc-inno-checkbox{cursor:default}.checkbox.checked.readonly.light.sc-inno-checkbox{background-color:#ffffff;border:1px solid #ffffff}.checkbox.checked.readonly.dark.sc-inno-checkbox{background-color:#08191f;border:1px solid #08191f}.checkbox.checked.disabled.sc-inno-checkbox{cursor:default}.checkbox.checked.disabled.light.sc-inno-checkbox{background-color:#cad5da;border:1px solid #cad5da}.checkbox.checked.disabled.dark.sc-inno-checkbox{background-color:#40545b;border:1px solid #40545b}.checkbox.indeterminate.light.sc-inno-checkbox{background-color:#08191f;border:1px solid #08191f}.checkbox.indeterminate.dark.sc-inno-checkbox{background-color:#e1f000;border:1px solid #08191f}.checkbox.indeterminate.sc-inno-checkbox:hover.light{background-color:#6d818a;border:1px solid #6d818a}.checkbox.indeterminate.sc-inno-checkbox:hover.dark{background-color:#b2c1c7;border:1px solid #b2c1c7}.checkbox.indeterminate.error.light.sc-inno-checkbox{background-color:#08191f;border:1px solid #08191f}.checkbox.indeterminate.error.dark.sc-inno-checkbox{background-color:#e1f000;border:1px solid #e1f000}.checkbox.indeterminate.sc-inno-checkbox:active.light{background-color:#6d818a;border:1px solid #6d818a}.checkbox.indeterminate.sc-inno-checkbox:active.dark{background-color:#9aacb4;border:1px solid #9aacb4}.checkbox.indeterminate.readonly.sc-inno-checkbox{cursor:default}.checkbox.indeterminate.readonly.light.sc-inno-checkbox{background-color:#ffffff;border:1px solid #ffffff}.checkbox.indeterminate.readonly.dark.sc-inno-checkbox{background-color:#08191f;border:1px solid #08191f}.checkbox.indeterminate.disabled.sc-inno-checkbox{cursor:default}.checkbox.indeterminate.disabled.light.sc-inno-checkbox{background-color:#cad5da;border:1px solid #cad5da}.checkbox.indeterminate.disabled.dark.sc-inno-checkbox{background-color:#40545b;border:1px solid #40545b}.checksign.sc-inno-checkbox{display:none}.checksign.checked.sc-inno-checkbox{width:5px;height:3px;display:block;position:absolute;border-top:none;border-right:none;border-bottom-width:0.0825rem;border-bottom-style:solid;border-left-width:0.0825rem;border-left-style:solid;transform:translate(0px, -1px) rotate(-53deg) scale(2) skew(-8deg, -3deg);display:unset}.checksign.checked.light.sc-inno-checkbox{border-bottom-color:#ffffff;border-left-color:#ffffff}.checksign.checked.dark.sc-inno-checkbox{border-bottom-color:#08191f;border-left-color:#08191f}.checksign.checked.sc-inno-checkbox:hover.light{border-bottom-color:#ffffff;border-left-color:#ffffff}.checksign.checked.sc-inno-checkbox:hover.dark{border-bottom-color:#08191f;border-left-color:#08191f}.checksign.checked.sc-inno-checkbox:active.light{border-bottom-color:#ffffff;border-left-color:#ffffff}.checksign.checked.sc-inno-checkbox:active.dark{border-bottom-color:#08191f;border-left-color:#08191f}.checksign.checked.readonly.sc-inno-checkbox{cursor:default}.checksign.checked.readonly.light.sc-inno-checkbox{border-bottom-color:#08191f;border-left-color:#08191f}.checksign.checked.readonly.dark.sc-inno-checkbox{border-bottom-color:#ffffff;border-left-color:#ffffff}.checksign.checked.error.light.sc-inno-checkbox{border-bottom-color:#ffffff;border-left-color:#ffffff}.checksign.checked.error.dark.sc-inno-checkbox{border-bottom-color:#08191f;border-left-color:#08191f}.checksign.checked.disabled.sc-inno-checkbox{cursor:default}.checksign.checked.disabled.light.sc-inno-checkbox{border-bottom-color:#9aacb4;border-left-color:#9aacb4}.checksign.checked.disabled.dark.sc-inno-checkbox{border-bottom-color:#9aacb4;border-left-color:#9aacb4}.checksign.indeterminate.sc-inno-checkbox{display:block;width:10px;height:2px;border:none;position:absolute;transform:none}.checksign.indeterminate.light.sc-inno-checkbox{background-color:#ffffff}.checksign.indeterminate.dark.sc-inno-checkbox{background-color:#08191f}.checksign.indeterminate.sc-inno-checkbox:hover.light{background-color:#ffffff}.checksign.indeterminate.sc-inno-checkbox:hover.dark{background-color:#08191f}.checksign.indeterminate.sc-inno-checkbox:active.light{background-color:#ffffff}.checksign.indeterminate.sc-inno-checkbox:active.dark{background-color:#08191f}.checksign.indeterminate.readonly.sc-inno-checkbox{cursor:default}.checksign.indeterminate.readonly.light.sc-inno-checkbox{background-color:#08191f}.checksign.indeterminate.readonly.dark.sc-inno-checkbox{background-color:#ffffff}.checksign.indeterminate.error.light.sc-inno-checkbox{background-color:#ffffff}.checksign.indeterminate.error.dark.sc-inno-checkbox{background-color:#08191f}.checksign.indeterminate.disabled.sc-inno-checkbox{cursor:default}.checksign.indeterminate.disabled.light.sc-inno-checkbox{background-color:#9aacb4}.checksign.indeterminate.disabled.dark.sc-inno-checkbox{background-color:#9aacb4}.label.sc-inno-checkbox{font-size:16px;cursor:pointer;margin-left:8px}.label.light.sc-inno-checkbox{color:#08191f}.label.dark.sc-inno-checkbox{color:#ffffff}.label.required.sc-inno-checkbox::after{content:\"*\"}.label.error.light.sc-inno-checkbox{color:#CB0E0E}.label.error.dark.sc-inno-checkbox{color:#FF88AB}.label.readonly.sc-inno-checkbox{cursor:default}.label.readonly.light.sc-inno-checkbox{color:#08191f}.label.readonly.dark.sc-inno-checkbox{color:#ffffff}.label.disabled.sc-inno-checkbox{cursor:default}.label.disabled.light.sc-inno-checkbox{color:#9aacb4}.label.disabled.dark.sc-inno-checkbox{color:#9aacb4}.label.checked.error.light.sc-inno-checkbox{color:#08191f}.label.checked.error.dark.sc-inno-checkbox{color:#ffffff}.label.indeterminate.readonly.light.sc-inno-checkbox{color:#08191f}.label.indeterminate.readonly.dark.sc-inno-checkbox{color:#ffffff}";
const InnoCheckboxStyle0 = innoCheckboxCss;

const InnoCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class InnoCheckbox extends H {
    constructor() {
        super();
        this.__registerHost();
        this.valueChange = createEvent(this, "valueChange", 7);
        this.elementInternals = this.attachInternals();
        this.isFocused = false;
        this.variant = 'light';
        this.tabIdx = 0;
        this.name = undefined;
        this.label = '';
        this.checked = undefined;
        this.indeterminate = false;
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.error = false;
    }
    get hostElement() { return this; }
    elementInternals;
    /**
     * Checked status has been changed.
     */
    valueChange;
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
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
            this.changeCheckedState(!this.checked);
        }
    }
    // Check whether the component cannot be interacted
    // Like disabled or readonly modes.
    elementInDisabledInteractionMode() {
        return this.disabled || this.readonly;
    }
    changeCheckedState(newState) {
        if (this.elementInDisabledInteractionMode()) {
            return;
        }
        this.checked = newState;
        this.valueChange.emit(this.checked);
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
        if (this.checked || this.checkIndeterminateState()) {
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
    // Value is undefined (no exact value or interaction)
    // and indeterminate is explicitly requested
    checkIndeterminateState() {
        return isNotPresent(this.checked) && this.indeterminate;
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
            indeterminate: this.checkIndeterminateState(),
        };
    }
    inputElement() {
        return (h("input", { type: "checkbox", "aria-checked": a11yBoolean(this.checked), tabIndex: -1, name: this.name, disabled: this.disabled, checked: this.checked, required: this.required, onChange: event => this.changeCheckedState(event.target.checked) }));
    }
    checkboxComponent() {
        const classes = {
            ...this.commonStyles(),
            checkbox: true,
        };
        return (h("div", { class: classes, onClick: () => this.changeCheckedState(!this.checked) }, this.checkSignComponent()));
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
        if (this.label != null && this.label !== '') {
            return (h("span", { class: classes, onClick: () => this.changeCheckedState(!this.checked) }, this.label));
        }
    }
    render() {
        const tabIndexValue = this.elementInDisabledInteractionMode() ? -1 : this.tabIdx;
        return (h(Host, { key: '8912943a46613e1d14c29bde5978357a52eb5e02', tabIndex: tabIndexValue, role: "checkbox", "aria-checked": a11yBoolean(this.checked) }, this.inputElement(), this.checkboxComponent(), this.labelComponent()));
    }
    static get formAssociated() { return true; }
    static get style() { return InnoCheckboxStyle0; }
}, [66, "inno-checkbox", {
        "variant": [1025],
        "tabIdx": [1026, "tab-idx"],
        "name": [1],
        "label": [1],
        "checked": [1540],
        "indeterminate": [4],
        "disabled": [1540],
        "readonly": [1540],
        "required": [1540],
        "error": [4],
        "isFocused": [32]
    }, [[0, "focusin", "onFocus"], [0, "focusout", "onFocusOut"], [0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoCheckbox$1);
            }
            break;
    } });
}

const InnoCheckbox = InnoCheckbox$1;
const defineCustomElement = defineCustomElement$1;

export { InnoCheckbox, defineCustomElement };

//# sourceMappingURL=inno-checkbox.js.map