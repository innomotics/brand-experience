import { Host, h } from "@stencil/core";
export class InnoButton {
    constructor() {
        this.variant = 'primary';
        this.colorVariant = 'light';
        this.type = 'button';
        this.tabIdx = 0;
        this.disabled = false;
        this.icon = undefined;
        this.iconFont = undefined;
        this.iconPosition = 'right';
        this.navDirection = 'right';
        this.iconOnly = false;
        this.listType = false;
    }
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
                "attribute": "list-type",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-button.js.map
