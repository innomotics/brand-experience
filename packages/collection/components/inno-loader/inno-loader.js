import { Host, h } from "@stencil/core";
import { adjustValueToRange } from "../../utils/utils";
export class InnoLoader {
    constructor() {
        this.size = 64;
        this.variant = 'light';
        this.strokeWidth = 'thick';
    }
    getStlyes() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
            thin: this.strokeWidth === 'thin',
            [`icon-${this.size}`]: true,
        };
    }
    componentWillLoad() {
        this.size = adjustValueToRange(this.size, 16, 64);
    }
    render() {
        return h(Host, { key: 'd75126a1af249dec321e2ddcd21a15a9a3e67e12', class: this.getStlyes() });
    }
    static get is() { return "inno-loader"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-loader.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-loader.css"]
        };
    }
    static get properties() {
        return {
            "size": {
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
                    "text": "Size of the loader. Valid values are: 16, 24, 32, 64."
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "64"
            },
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
                    "text": "Theme variant property."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "strokeWidth": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'thin' | 'thick'",
                    "resolved": "\"thick\" | \"thin\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Loader bar width."
                },
                "attribute": "stroke-width",
                "reflect": false,
                "defaultValue": "'thick'"
            }
        };
    }
}
//# sourceMappingURL=inno-loader.js.map
