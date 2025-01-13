import { Host, h } from "@stencil/core";
/**
 *@internal
 */
export class InnoDateTimeCard {
    standaloneAppearance = false;
    render() {
        const cardClasses = {
            card: true,
            standaloneAppearance: this.standaloneAppearance,
        };
        return (h(Host, { key: 'f559853739d7e612ce31f13545f39087475ce5ce' }, h("div", { key: 'd94112848dfab3c6eb3f40249f357be0428a2dd3', class: cardClasses }, h("div", { key: 'fd3c1a2248017cbf026ccbc0cc14a60dd0d172ee', class: "header" }, h("slot", { key: 'd88f77dfb809e9014080bfc68df50b2833915bdc', name: "header" })), h("div", { key: '13e2389efa7ada5d6d6892cbdd15a71e584284d2', class: "separator" }), h("div", { key: '8480893d8c00aca85bc83f83e72ff9572483ac1f', class: "content" }, h("slot", { key: '1dd49a023a5a47050682e5c229fe2471825b6525' })))));
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
                "getter": false,
                "setter": false,
                "attribute": "standalone-appearance",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=inno-date-time-card.js.map
