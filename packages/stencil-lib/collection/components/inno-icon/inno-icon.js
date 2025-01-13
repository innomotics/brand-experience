import { Host, h } from "@stencil/core";
export class InnoIcon {
    /**
     * The icon name.
     * Use either this or the iconFont property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/icons/
     */
    icon;
    /**
     * Font icon code for the InnomoticsUiIcons font.
     * Use either this or the icon property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont
     */
    iconFont;
    /*
     * The icon size.
     */
    size = 16;
    /**
     * Color style of the icon.
     */
    variant = 'light';
    content;
    async iconChanged() {
        this.content = await this.resolveIcon(false);
    }
    async fontChanged() {
        this.content = await this.resolveIcon(true);
    }
    componentWillLoad() {
        if (!this.iconFont) {
            this.iconChanged();
        }
        else {
            this.fontChanged();
        }
    }
    render() {
        if (this.iconFont) {
            return h(Host, { class: `icon-${this.size} icon-inno-${this.icon}` }, this.content);
        }
        return (h(Host, { class: `icon-${this.size} icon-inno-${this.icon}` }, h("div", { class: `icon-${this.size} icon-${this.variant}`, innerHTML: this.content })));
    }
    async resolveIcon(isIconFont) {
        if (this.icon && !isIconFont) {
            const svgIcon = await import(`@innomotics/brand-experience-icons/lib/inno-icons`);
            const iconname = 'inno_' + this.icon;
            const resolvedIcon = svgIcon[iconname];
            if (resolvedIcon == null) {
                console.error(`No content for icon "${this.icon}"! Maybe the icon was renamed or no longer exists.`);
            }
            return resolvedIcon;
        }
        if (this.iconFont && isIconFont) {
            return (h("span", { class: `icon-${this.size} icon-${this.variant} icon-font`, style: { fontSize: `${this.size}px` } }, String.fromCodePoint(parseInt(this.iconFont, 16))));
        }
        return null;
    }
    static get is() { return "inno-icon"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-icon.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
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
                    "text": "The icon name.\r\nUse either this or the iconFont property.\r\nFor possible values, see: https://innomotics.github.io/brand-experience/docs/icons/"
                },
                "getter": false,
                "setter": false,
                "attribute": "icon",
                "reflect": false
            },
            "iconFont": {
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
                    "text": "Font icon code for the InnomoticsUiIcons font.\r\nUse either this or the icon property.\r\nFor possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont"
                },
                "getter": false,
                "setter": false,
                "attribute": "icon-font",
                "reflect": false
            },
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false,
                "defaultValue": "16"
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
                    "text": "Color style of the icon."
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            }
        };
    }
    static get states() {
        return {
            "content": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "icon",
                "methodName": "iconChanged"
            }, {
                "propName": "iconFont",
                "methodName": "fontChanged"
            }];
    }
}
//# sourceMappingURL=inno-icon.js.map
