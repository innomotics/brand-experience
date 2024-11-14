import { Host, h } from "@stencil/core";
export class InnoProgressBar {
    constructor() {
        this.variant = 'light';
        this.progressText = '';
        this.progressPercentage = 0;
        this.showPercentage = true;
        this.percentagePrecision = 0;
        this.trailingZeroes = false;
    }
    frontLayerRef;
    progressChangedhandler(newValue) {
        this.setClipPath(newValue);
    }
    componentDidLoad() {
        this.setClipPath(this.progressPercentage);
    }
    setClipPath(newValue) {
        this.validateProps();
        let newClipPath = `inset(0 0 0 ${newValue}%)`;
        this.frontLayerRef.style.clipPath = newClipPath;
        this.frontLayerRef.style['-webkit-clip-path'] = newClipPath;
    }
    progressNum() {
        this.validateProps();
        if (this.trailingZeroes) {
            return this.progressPercentage.toFixed(this.percentagePrecision);
        }
        else {
            return +this.progressPercentage.toFixed(this.percentagePrecision);
        }
    }
    validateProps() {
        if (this.progressPercentage < 0) {
            throw `progressPercentage is smaller than 0! The value is ${this.progressPercentage}`;
        }
        else if (this.progressPercentage > 100) {
            throw `progressPercentage is larger than 100! The value is ${this.progressPercentage}`;
        }
        if (this.percentagePrecision < 0) {
            throw `percentagePrecision is smaller than 0! The value is ${this.percentagePrecision}`;
        }
    }
    progressHtml() {
        let progressPercentage = `${this.progressNum()}%`;
        return (h("div", { class: "progress-text-container" }, this.showPercentage ? h("div", { class: "percentage" }, progressPercentage) : null, h("div", { class: "progress-text" }, this.progressText)));
    }
    render() {
        return (h(Host, { key: '3af01977cc2e05cf4b3e442245bd7d5727dcf333' }, h("div", { key: '18a294c8225ea16b07cb48f80952994a1d2e45bc', class: "progress-bar-container" }, h("div", { key: '36b49eb396fd35abb1c9443a98bf7d821f464d12', class: {
                'back-layer': true,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
            } }, this.progressHtml()), h("div", { key: 'ec5a3b8348c077074851cdd5d55b01686e021167', class: {
                'front-layer': true,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
            }, ref: (ref) => (this.frontLayerRef = ref) }, this.progressHtml()))));
    }
    static get is() { return "inno-progress-bar"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-progress-bar.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'light' | 'dark'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color variant of the progress bar."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "progressText": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text to display for the progress bar."
                },
                "attribute": "progress-text",
                "reflect": false,
                "defaultValue": "''"
            },
            "progressPercentage": {
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
                    "text": "Progress in percentage. Must be a number between 0 and 100."
                },
                "attribute": "progress-percentage",
                "reflect": false,
                "defaultValue": "0"
            },
            "showPercentage": {
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
                    "text": "Show the percentage number on the progress bar. The value is rounded according to the 'percentagePrecision' and 'trailingZeroes' properties."
                },
                "attribute": "show-percentage",
                "reflect": false,
                "defaultValue": "true"
            },
            "percentagePrecision": {
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
                    "text": "If the percentage number is shown, how many decimal places should be visible"
                },
                "attribute": "percentage-precision",
                "reflect": false,
                "defaultValue": "0"
            },
            "trailingZeroes": {
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
                    "text": "If 'percentagePrecision' is larger than 0, should we display the trailing zeroes.\r\nFor example if the progress is 1.5% and the 'percentagePrecision' is 2 then the displayed text will be '1.50%' \r\nif trailing zeroes are enabled and '1.5%' if trailing zeroes are disabled.\r\nUses the toFixed(..) function in the background."
                },
                "attribute": "trailing-zeroes",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "progressPercentage",
                "methodName": "progressChangedhandler"
            }];
    }
}
//# sourceMappingURL=inno-progress-bar.js.map