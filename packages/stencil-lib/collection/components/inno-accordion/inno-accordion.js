import { h, Host } from "@stencil/core";
import sanitizeHtml from "sanitize-html";
export class InnoAccordion {
    /**
     * Color variant of the accordion.
     */
    variant = 'light';
    /**
     * You can programatically open/close the accordion with this property.
     */
    collapsed = false;
    /**
     * Whether the accordion is the last in a group of accordions. Needed for styling.
     */
    last = false;
    /**
     * Whether it is an accordion inside another accordion. Gives a different style then the main one.
     */
    inner = false;
    /**
     * Text to display for the accordion. Always visible whether the accordion is opened or closed.
     */
    label;
    /**
     * Secondary text for the accordion. Always visible whether the accordion is opened or closed.
     */
    secondLabel;
    /**
     * This event is fired whenever the accordion is opened/closed via user interaction.
     */
    collapsedChanged;
    hostElement;
    anchorElementRef;
    onHeaderClick() {
        this.collapsed = !this.collapsed;
        this.collapsedChanged.emit({ element: this.hostElement, collapsed: this.collapsed });
    }
    toggleHoveredClass(hovered) {
        if (hovered) {
            this.anchorElementRef.classList.add("hovered");
            this.anchorElementRef.querySelectorAll("inno-accordion a.accordion").forEach(accordion => {
                accordion.classList.add("hovered");
            });
        }
        else {
            this.anchorElementRef.classList.remove("hovered");
            this.anchorElementRef.querySelectorAll("inno-accordion a.accordion").forEach(accordion => {
                accordion.classList.remove("hovered");
            });
        }
    }
    render() {
        let iconSize = 24;
        let icon = this.collapsed ? this.inner ? 'chevron_down_small' : 'plus' : this.inner ? 'chevron_up_small' : 'minus';
        let headerTitle = h("div", { key: '7f07c0cbad73e993d2cdb49e9ddb3091abc9cdc6', class: "accordion-header-titles" }, h("span", { key: '3dd676da67c4653ffde14ff97958d2899737f96e', class: {
                'accordion-header-title': true,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                'inner': this.inner
            }, innerHTML: sanitizeHtml(this.label) }), h("span", { key: '7ee3d8ffc6e31e5f5369ae577548d28551e1dcec', class: {
                'accordion-header-title': true,
                'second-label': true,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                'inner': this.inner
            }, innerHTML: sanitizeHtml(this.secondLabel) }));
        return (h(Host, { key: 'f555ac627f2568c7a7c7e40fdd3b254d57e4ec4b' }, h("a", { key: '37cd7048c6c5f57b43c1129f413e830a8641afc3', class: {
                'accordion': true,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                'last': this.last,
                'open': !this.collapsed,
                'inner': this.inner,
            }, ref: (ref) => (this.anchorElementRef = ref) }, h("div", { key: '82b0fd14876f5893144c9e75a40b51ef5d9b75b3', class: {
                'accordion-header': true,
                'inner': this.inner,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
            }, onClick: () => this.onHeaderClick(), onMouseEnter: () => this.toggleHoveredClass(true), onMouseLeave: () => this.toggleHoveredClass(false) }, !this.inner ? headerTitle : null, h("inno-icon", { key: 'b02d4aff65eb1f6abd5b7145c1d4f27eedf54eaf', class: {
                'inner': this.inner,
            }, icon: icon, size: iconSize, variant: this.variant }), this.inner ? headerTitle : null), h("section", { key: 'fab3e6b48754d350266e87e0ea058115f6d649cb', class: {
                'accordion-content': true,
                'inner': this.inner,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                hide: this.collapsed,
            } }, h("slot", { key: '5bd2b7456e61444fd30337ec105cd1da2f113a19' })))));
    }
    static get is() { return "inno-accordion"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-accordion.css"]
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
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "collapsed": {
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
                    "text": "You can programatically open/close the accordion with this property."
                },
                "getter": false,
                "setter": false,
                "attribute": "collapsed",
                "reflect": false,
                "defaultValue": "false"
            },
            "last": {
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
                    "text": "Whether the accordion is the last in a group of accordions. Needed for styling."
                },
                "getter": false,
                "setter": false,
                "attribute": "last",
                "reflect": false,
                "defaultValue": "false"
            },
            "inner": {
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
                    "text": "Whether it is an accordion inside another accordion. Gives a different style then the main one."
                },
                "getter": false,
                "setter": false,
                "attribute": "inner",
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
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
                    "text": "Text to display for the accordion. Always visible whether the accordion is opened or closed."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "secondLabel": {
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
                    "text": "Secondary text for the accordion. Always visible whether the accordion is opened or closed."
                },
                "getter": false,
                "setter": false,
                "attribute": "second-label",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "collapsedChanged",
                "name": "collapsedChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired whenever the accordion is opened/closed via user interaction."
                },
                "complexType": {
                    "original": "{ element: HTMLInnoAccordionElement, collapsed: boolean }",
                    "resolved": "{ element: HTMLInnoAccordionElement; collapsed: boolean; }",
                    "references": {
                        "HTMLInnoAccordionElement": {
                            "location": "global",
                            "id": "global::HTMLInnoAccordionElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-accordion.js.map
