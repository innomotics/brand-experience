import { Host, h } from "@stencil/core";
import { a11yBoolean } from "../../utils/a11y";
import { isNotPresent } from "../../utils/utils";
/**
 * Checkbox for Innomatics design system.
 */
export class InnoCheckbox {
    constructor() {
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
    hostElement;
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
        return (h("span", { class: classes, onClick: () => this.changeCheckedState(!this.checked) }, this.label));
    }
    render() {
        const tabIndexValue = this.elementInDisabledInteractionMode() ? -1 : this.tabIdx;
        return (h(Host, { key: '03db3b52afa5cb0ca081c857576c04f7c48ecd5f', tabIndex: tabIndexValue, role: "checkbox", "aria-checked": a11yBoolean(this.checked) }, this.inputElement(), this.checkboxComponent(), this.labelComponent()));
    }
    static get is() { return "inno-checkbox"; }
    static get encapsulation() { return "scoped"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-checkbox.css"]
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
                    "text": "Form entry name."
                },
                "attribute": "name",
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
                    "original": "boolean | undefined",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether element is checked."
                },
                "attribute": "checked",
                "reflect": true
            },
            "indeterminate": {
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
                    "text": "Whether indeterminate state is enabled for the component.\r\nThe component is in indeterminate state if\r\nit is explicity requested\r\nand the checked status is not defined"
                },
                "attribute": "indeterminate",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Checked status has been changed."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
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
//# sourceMappingURL=inno-checkbox.js.map
