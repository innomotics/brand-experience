import { Host, h } from "@stencil/core";
import { a11yBoolean } from "../../utils/a11y";
import { isNotPresent } from "../../utils/utils";
/**
 * Represents the default radio button for the Innomics applications.
 */
export class InnoRadio {
    constructor() {
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
    hostElement;
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
        return (h(Host, { key: '4f42f4af697c47f10fa1007244ce9aec2eeefae2', role: "radio", tabIndex: tabIndexValue, "aria-checked": a11yBoolean(this.checked) }, this.inputElement(), this.checkboxComponent(), this.labelComponent()));
    }
    static get is() { return "inno-radio"; }
    static get encapsulation() { return "scoped"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-radio.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-radio.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'dark' | 'light'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme variant of the component."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "tabIdx": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The tab index."
                },
                "attribute": "tab-idx",
                "reflect": false,
                "defaultValue": "0"
            },
            "name": {
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
                    "text": "Form entry group name."
                },
                "attribute": "name",
                "reflect": false
            },
            "value": {
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
                    "text": "Radio button value."
                },
                "attribute": "value",
                "reflect": false
            },
            "label": {
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
                    "text": "Label to show."
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "''"
            },
            "checked": {
                "type": "boolean",
                "mutable": true,
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
                "attribute": "checked",
                "reflect": true
            },
            "disabled": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether component is disabled.\r\nIn this state no other state effects are applied to the element like error."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "readonly": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the component is readonly.\r\nIn this state no other state effects are applied to the element like error."
                },
                "attribute": "readonly",
                "reflect": true,
                "defaultValue": "false"
            },
            "required": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Mark the component as required and show the required marker.\r\nValidation is performed with this property."
                },
                "attribute": "required",
                "reflect": true,
                "defaultValue": "false"
            },
            "error": {
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
                    "text": "Whether the element is in error state.\r\nError state can be defined if manual error handling is required."
                },
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isFocused": {}
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
                    "text": "Emits the associated value when the element is clicked."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "unselect": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Remove the selection from the given control.\r\nCan be used to synchronize the selection state\r\nbetween the radio group elements if manual control is required.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "focusin",
                "method": "onFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusOut",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "elementInternals"; }
}
//# sourceMappingURL=inno-radio.js.map
