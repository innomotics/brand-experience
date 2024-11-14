/*
 * SPDX-FileCopyrightText: 2024 Innomotics GmbH
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class BreadcrumbItem {
    constructor() {
        this.label = undefined;
        this.icon = undefined;
        this.itemIndex = undefined;
        this.iconSize = 16;
        this.visible = true;
        this.showChevron = true;
    }
    hostElement;
    /**@internal */
    breadcrumbItemClick;
    render() {
        if (!this.visible) {
            return h(Host, { class: 'invisible' });
        }
        return (h(Host, { class: {
                'hide-chevron': !this.showChevron,
            }, onClick: () => this.breadcrumbItemClick.emit({ itemIndex: this.itemIndex, label: this.label }) }, h("li", null, h("a", null, this.icon ? (h("inno-icon", { icon: this.icon, size: this.iconSize })) : this.label, h("slot", null), this.showChevron ? (h("inno-icon", { icon: "chevron_right", class: "chevron", size: this.iconSize })) : null))));
    }
    static get is() { return "inno-breadcrumb-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-breadcrumb-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-breadcrumb-item.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                    "text": "Breadcrumb label"
                },
                "attribute": "label",
                "reflect": false
            },
            "icon": {
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
                    "text": "Icon to be displayed next ot the label"
                },
                "attribute": "icon",
                "reflect": false
            },
            "itemIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "item-index",
                "reflect": false
            },
            "iconSize": {
                "type": "number",
                "mutable": false,
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
                "attribute": "icon-size",
                "reflect": false,
                "defaultValue": "16"
            },
            "visible": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "visible",
                "reflect": false,
                "defaultValue": "true"
            },
            "showChevron": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "show-chevron",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get events() {
        return [{
                "method": "breadcrumbItemClick",
                "name": "breadcrumbItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "complexType": {
                    "original": "{ itemIndex: number, label: string }",
                    "resolved": "{ itemIndex: number; label: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-breadcrumb-item.js.map
