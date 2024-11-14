import { Host, h } from "@stencil/core";
/**
 *@internal
 */
export class InnoDateTimeCard {
    constructor() {
        this.standaloneAppearance = false;
    }
    render() {
        const cardClasses = {
            card: true,
            standaloneAppearance: this.standaloneAppearance,
        };
        return (h(Host, { key: '91a18cf5910f6cea2833656ef71e900714a2542e' }, h("div", { key: '92313ffdd18ca6d215e03949cbb40c27af0813ab', class: cardClasses }, h("div", { key: 'e9d87672e62a06dc087f4652726918802aff4114', class: "header" }, h("slot", { key: '7c5b3e7a821a272e392995f76742ced0c2dd9ce1', name: "header" })), h("div", { key: '46498d626c5ac5a09b54d2388c2eb1abf715c83d', class: "separator" }), h("div", { key: '1a092bab70256c3844d0dc516dc1ee77a241aecd', class: "content" }, h("slot", { key: '44cd49f3278cf2af8e2b5749ecf99f002de721f1' })))));
    }
    static get is() { return "inno-date-time-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-date-time-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-date-time-card.css"]
        };
    }
    static get properties() {
        return {
            "standaloneAppearance": {
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
                    "text": ""
                },
                "attribute": "standalone-appearance",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=inno-date-time-card.js.map
