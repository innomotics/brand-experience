import { Host, h } from "@stencil/core";
import { a11yBoolean } from "../../utils/a11y";
export class InnoToggle {
    hostElement;
    /**
     * Whether the slide-toggle element is checked or not. Can be changed programatically, will emit a change event.
     */
    checked = false;
    /**
     * Whether the slide-toggle element is disabled or not.
     */
    disabled = false;
    /**
     * Color variant of the toggle component.
     */
    variant = 'dark';
    /**
     * The tab index of the toggle
     */
    tabIdx = 0;
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
    static get is() { return "inno-toggle"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-toggle.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-toggle.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Whether the slide-toggle element is checked or not. Can be changed programatically, will emit a change event."
                },
                "getter": false,
                "setter": false,
                "attribute": "checked",
                "reflect": true,
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
                    "text": "Whether the slide-toggle element is disabled or not."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
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
                    "text": "Color variant of the toggle component."
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'dark'"
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
                    "text": "The tab index of the toggle"
                },
                "getter": false,
                "setter": false,
                "attribute": "tab-idx",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get events() {
        return [{
                "method": "checkedChange",
                "name": "checkedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "An event will be dispatched each time the slide-toggle changes its value."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "checkedChangeHandler"
            }];
    }
}
//# sourceMappingURL=inno-toggle.js.map
