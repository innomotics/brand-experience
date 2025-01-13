import { Host, h } from "@stencil/core";
export class InnoError {
    /**
     * Show the error or not.
     */
    active = false;
    /**
     * The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
     */
    type;
    /**
     * Theme variant of the input.
     */
    variant = 'light';
    render() {
        return (h(Host, { key: '813db110a8ff0b88b66de47ec6e8c9562cdb73b6', active: this.active, class: { 'dark': this.variant === 'dark', 'light': this.variant === 'light' } }, h("slot", { key: '29e129d8a0dcabea73e687db8b6fba9b268bc4ba' })));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            }
        };
    }
}
//# sourceMappingURL=inno-error.js.map
