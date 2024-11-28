import { Host, h } from "@stencil/core";
/**
 * Represents the general footer for the Innomotics applications.
 *
 * @slot links - containing the links elements
 * @slot icons - containing the icon elements
 */
export class InnoFooter {
    constructor() {
        this.variant = 'light';
        this.copyright = '';
    }
    hostElement;
    componentDidLoad() {
        this.cascadeFooterStyle();
    }
    watchVariant() {
        this.cascadeFooterStyle();
    }
    cascadeFooterStyle() {
        this.hostElement.querySelectorAll('inno-footer-item').forEach(item => {
            // Set only for those children which not specified explicitly
            if (!item.hasAttribute('variant')) {
                item.variant = this.variant;
            }
        });
    }
    variantStyle() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
        };
    }
    createCopyrightNode() {
        const classes = {
            ...this.variantStyle(),
            'ix-footer-copyright': true,
        };
        return h("div", { class: classes }, this.copyright);
    }
    linkNodes() {
        return (h("div", { class: { links: true } }, h("slot", { name: "links" })));
    }
    iconNodes() {
        return (h("div", { class: { icons: true } }, h("slot", { name: "icons" })));
    }
    render() {
        return (h(Host, { key: '13e14919d147dacc1aa5c1276801ae882a010cc8', class: this.variantStyle() }, this.createCopyrightNode(), this.linkNodes(), this.iconNodes()));
    }
    static get is() { return "inno-footer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-footer.css"]
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
                    "text": "Theme variant property."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "copyright": {
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
                    "text": "The copyright label."
                },
                "attribute": "copyright",
                "reflect": false,
                "defaultValue": "''"
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
//# sourceMappingURL=inno-footer.js.map
