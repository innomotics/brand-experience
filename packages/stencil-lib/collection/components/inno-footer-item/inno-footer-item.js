import { Host, h } from "@stencil/core";
const IGNORED_ELEMENTS = ['A', 'P', 'inno-icon', 'SPAN'];
/**
 * Represents an inno-footer item.
 *
 * Wrap an element for the inno-footer parent.
 *
 * See the InnoFooter docs for more information.
 */
export class InnoFooterItem {
    constructor() {
        this.variant = 'light';
    }
    hostElement;
    watchVariant(newVariant) {
        this.variant = newVariant;
        this.propagateStyle();
    }
    componentDidLoad() {
        this.propagateStyle();
    }
    propagateStyle() {
        const children = this.hostElement.children;
        for (let index = 0; index < children.length; index++) {
            const element = children[index];
            if (element?.tagName && !IGNORED_ELEMENTS.includes(element.tagName)) {
                element.dataset.innoFooterItemStyle = this.variant;
            }
        }
    }
    variantStyle() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
        };
    }
    render() {
        return (h(Host, { key: 'fabc0434f63407bdd395843921e6c52142ac0306', class: this.variantStyle() }, h("slot", { key: '78dc65fe844048d21ba51897c1cdaa535abc9348' })));
    }
    static get is() { return "inno-footer-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-footer-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-footer-item.css"]
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
                    "text": "Theme variant property.\r\nInherited from the parent.\r\nCan be overridden if explicitly defined."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "variant",
                "methodName": "watchVariant"
            }];
    }
}
//# sourceMappingURL=inno-footer-item.js.map
