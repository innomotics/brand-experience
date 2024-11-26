/*
 * SPDX-FileCopyrightText: 2024 Innomotics GmbH
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class Breadcrumb {
    constructor() {
        this.variant = 'light';
    }
    hostElement;
    /**
     * Crumb item clicked event. The event contains the label and the zero-based index of the breadcrumb item inside the breadcrumb.
     */
    itemClick;
    onBreadcrumbItemClicked(event) {
        this.itemClick.emit(event.detail);
    }
    get items() {
        return [...Array.from(this.hostElement.querySelectorAll('inno-breadcrumb-item'))];
    }
    removeLastItemChevron(children) {
        if (children.length > 0) {
            children[children.length - 1].showChevron = false;
            let childrenId = 1;
            children.forEach(c => c.itemIndex = childrenId++);
        }
    }
    render() {
        this.removeLastItemChevron(this.items);
        return (h(Host, { key: '24445c39cd58e0430b33ab877ec9d01c0eec71a4', class: {
                'light': this.variant === 'light',
                'dark': this.variant === 'dark'
            } }, h("ol", { key: '2cbb0716c60fe67e5e533224352ba3093eecf636' }, this.items?.length > 0 ? (h("inno-breadcrumb-item", { label: "home", icon: "home", itemIndex: 0, showChevron: this.items.length > 0 })) : null, h("slot", { key: '1582cd4b497bbf16b982e9824ac07da95838afd8' }))));
    }
    static get is() { return "inno-breadcrumb"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-breadcrumb.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-breadcrumb.css"]
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
                    "text": "Color variant of the accordion."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            }
        };
    }
    static get events() {
        return [{
                "method": "itemClick",
                "name": "itemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Crumb item clicked event. The event contains the label and the zero-based index of the breadcrumb item inside the breadcrumb."
                },
                "complexType": {
                    "original": "{itemIndex: number, label: string}",
                    "resolved": "{ itemIndex: number; label: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "breadcrumbItemClick",
                "method": "onBreadcrumbItemClicked",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=inno-breadcrumb.js.map
