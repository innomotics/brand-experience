import { Host, h } from "@stencil/core";
export class InnoError {
    constructor() {
        this.active = false;
        this.type = undefined;
        this.variant = 'light';
    }
    render() {
        return (h(Host, { key: '23ba9413e7dc64c641b26f7fbe4713045383baa8', active: this.active, class: { 'dark': this.variant === 'dark', 'light': this.variant === 'light' } }, h("slot", { key: '0306943c62030ee72c154d42f2f7f15aebeed8a4' })));
    }
    static get is() { return "inno-error"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-error.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-error.css"]
        };
    }
    static get properties() {
        return {
            "active": {
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
                    "text": "Show the error or not."
                },
                "attribute": "active",
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'badInput' | 'customError' | 'patternMismatch' | 'rangeOverflow' | 'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valid' | 'valueMissing' | undefined",
                    "resolved": "\"badInput\" | \"customError\" | \"patternMismatch\" | \"rangeOverflow\" | \"rangeUnderflow\" | \"stepMismatch\" | \"tooLong\" | \"tooShort\" | \"typeMismatch\" | \"valid\" | \"valueMissing\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState"
                },
                "attribute": "type",
                "reflect": false
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
                    "text": "Theme variant of the input."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            }
        };
    }
}
//# sourceMappingURL=inno-error.js.map
