import { Host, h } from "@stencil/core";
export class InnoButton {
    /**
     * Variant of the button.
     */
    variant = 'primary';
    /**
     * Color variant of the button.
     */
    colorVariant = 'light';
    /**
     * Type of the button.
     */
    type = 'button';
    /**
     * Tab index of the button.
     */
    tabIdx = 0;
    /**
     * Whether the button is disabled or not.
     */
    disabled = false;
    /**
     * Icon to use inside the button. Use either this or the 'iconFont' property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/icons/
     */
    icon;
    /**
     * Icon font to use inside the button. Use either this or the 'icon' property.
     * For possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont
     */
    iconFont;
    /**
     * Where to put the icon relative to the text.
     */
    iconPosition = 'right';
    /**
     * Direction of the navigation button. Only has effect if the variant is 'navigation'.
     */
    navDirection = 'right';
    /**
     * Only show an icon.
     */
    iconOnly = false;
    /**
     * Special style for button lists.
     */
    listType = false;
    hostElement;
    submitButtonElement;
    componentDidLoad() {
        if (this.type === 'submit') {
            const submitButton = document.createElement('button');
            submitButton.style.display = 'none';
            submitButton.type = 'submit';
            submitButton.tabIndex = -1;
            this.hostElement.appendChild(submitButton);
            this.submitButtonElement = submitButton;
        }
    }
    dispatchFormEvents() {
        if (this.type === 'submit' && this.submitButtonElement) {
            this.submitButtonElement.click();
        }
    }
    render() {
        let hasIcon = (this.icon != null && this.icon.trim() != '') || this.variant === 'navigation';
        let hasIconFont = this.iconFont != null && this.iconFont.trim() != '';
        let iconSize = this.variant === 'media' ? 32 : 24;
        let icon = this.variant === 'navigation'
            ? (this.navDirection === 'right' ? 'chevron_right_small' : 'chevron_left_small')
            : (this.icon ?? this.iconFont);
        return (h(Host, { key: '8b10c7f51248426077d1657733fc4ab56a2d66b0', class: {
                disabled: this.disabled,
                'list-type': this.listType
            } }, h("button", { key: 'a2a4d6d969a9d831dd0c5bfe74af5d0ff611bc31', class: {
                'primary': this.variant === 'primary',
                'secondary': this.variant === 'secondary',
                'tertiary': this.variant === 'tertiary',
                'delete': this.variant === 'delete',
                'media': this.variant === 'media',
                'navigation': this.variant === 'navigation',
                'icon-only': this.iconOnly,
                'light': this.colorVariant === 'light',
                'dark': this.colorVariant === 'dark',
                'display-reverse': this.iconPosition === 'left',
                'list-type': this.listType,
                disabled: this.disabled
            }, onClick: () => this.dispatchFormEvents(), type: this.type, tabIndex: this.disabled ? -1 : this.tabIdx ?? 0 }, h("slot", { key: '22b5f25e587d0fe291681e56264c1c5dff06428e' }), hasIcon ? h("inno-icon", { icon: icon, size: iconSize, variant: this.colorVariant }) : null, hasIconFont && !hasIcon ? h("inno-icon", { iconFont: icon, size: iconSize, variant: this.colorVariant }) : null)));
    }
    static get is() { return "inno-button"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'tertiary' | 'media' | 'navigation' | 'delete'",
                    "resolved": "\"delete\" | \"media\" | \"navigation\" | \"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of the button."
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "colorVariant": {
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
                    "text": "Color variant of the button."
                },
                "getter": false,
                "setter": false,
                "attribute": "color-variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit'",
                    "resolved": "\"button\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of the button."
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'button'"
            },
            "tabIdx": {
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
                    "text": "Tab index of the button."
                },
                "getter": false,
                "setter": false,
                "attribute": "tab-idx",
                "reflect": false,
                "defaultValue": "0"
            },
            "disabled": {
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
                    "text": "Whether the button is disabled or not."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
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
                    "text": "Icon to use inside the button. Use either this or the 'iconFont' property.\r\nFor possible values, see: https://innomotics.github.io/brand-experience/docs/icons/"
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
                    "text": "Icon font to use inside the button. Use either this or the 'icon' property.\r\nFor possible values, see: https://innomotics.github.io/brand-experience/docs/fonts/InnomoticsUiFont"
                },
                "getter": false,
                "setter": false,
                "attribute": "icon-font",
                "reflect": false
            },
            "iconPosition": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'left' | 'right'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Where to put the icon relative to the text."
                },
                "getter": false,
                "setter": false,
                "attribute": "icon-position",
                "reflect": false,
                "defaultValue": "'right'"
            },
            "navDirection": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'left' | 'right'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Direction of the navigation button. Only has effect if the variant is 'navigation'."
                },
                "getter": false,
                "setter": false,
                "attribute": "nav-direction",
                "reflect": false,
                "defaultValue": "'right'"
            },
            "iconOnly": {
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
                    "text": "Only show an icon."
                },
                "getter": false,
                "setter": false,
                "attribute": "icon-only",
                "reflect": false,
                "defaultValue": "false"
            },
            "listType": {
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
                    "text": "Special style for button lists."
                },
                "getter": false,
                "setter": false,
                "attribute": "list-type",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-button.js.map
