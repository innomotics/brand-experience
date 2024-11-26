import { Host, h } from "@stencil/core";
/**
 * Gutter for the inno-split component. Inserted automatically. Should not be used as a standalone component.
 */
export class InnoSplitGutter {
    constructor() {
        this.orientation = 'horizontal';
    }
    render() {
        return (h(Host, { key: 'cb2903d44e69ae4e935ad918acdba015452d26d1', class: {
                'split-gutter': true,
                'horizontal': this.orientation === 'horizontal',
                'vertical': this.orientation === 'vertical'
            } }, h("div", { key: '3bc672f46cf22601e2737938e94ef40065385630', class: "handle" })));
    }
    static get is() { return "inno-split-gutter"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-split-gutter.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-split-gutter.css"]
        };
    }
    static get properties() {
        return {
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'horizontal' | 'vertical'",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "orientation",
                "reflect": false,
                "defaultValue": "'horizontal'"
            }
        };
    }
}
//# sourceMappingURL=inno-split-gutter.js.map
