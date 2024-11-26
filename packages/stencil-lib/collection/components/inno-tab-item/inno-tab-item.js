import { h, Host } from "@stencil/core";
/**
 * Represents an inno-tab item.
 *
 * Wraps the provided content.
 *
 * See the InnoTab component for more information about how to use the tab component.
 */
export class InnoTabItem {
    constructor() {
        this.theme = 'light';
        this.layout = 'auto';
        this.selected = false;
        this.disabled = false;
        this.alwaysEmphasized = false;
        this.minimalDecorator = false;
    }
    /**
     * On tab click.
     */
    tabClick;
    themeClasses() {
        return {
            light: this.theme === 'light',
            dark: this.theme === 'dark',
        };
    }
    hostClasses() {
        return {
            ...this.themeClasses(),
            'selected': this.selected,
            'disabled': this.disabled,
            'stretched': this.layout === 'stretched',
            'emphasized': this.alwaysEmphasized,
            'minimal-decorator': this.minimalDecorator,
        };
    }
    slotContainerClasses() {
        return {
            ...this.themeClasses(),
            'slot-container': true,
            'selected': this.selected,
            'disabled': this.disabled,
        };
    }
    render() {
        return (h(Host, { key: '4103149e09aff4801c25e8e36e97af718c6e0bc4', class: this.hostClasses(), tabIndex: 0, onClick: (event) => {
                const clientEvent = this.tabClick.emit({
                    nativeEvent: event,
                });
                if (clientEvent.defaultPrevented) {
                    event.stopPropagation();
                }
            } }, h("div", { key: '37d613687fd9e1990eb093d2d71817123e3c724b', class: this.slotContainerClasses() }, h("slot", { key: '8751c5d516cdf803ac080072424ba4dafc79bdc2' }))));
    }
    static get is() { return "inno-tab-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-tab-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-tab-item.css"]
        };
    }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "mutable": false,
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
                "attribute": "theme",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'auto' | 'stretched'",
                    "resolved": "\"auto\" | \"stretched\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set layout width style.\r\nAuto: Item has the same width as the enclosed item in slot.\r\nStretched: Item has the maximum available width."
                },
                "attribute": "layout",
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "selected": {
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
                    "text": "Set selected tab."
                },
                "attribute": "selected",
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "Set disabled tab."
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "alwaysEmphasized": {
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
                    "text": "Make the non-selected items always vivid without any opacity effect."
                },
                "attribute": "always-emphasized",
                "reflect": false,
                "defaultValue": "false"
            },
            "minimalDecorator": {
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
                    "text": "Minimalize the bottom decorator for the tab items.\r\nShow only if the given item is interracted or selected."
                },
                "attribute": "minimal-decorator",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "tabClick",
                "name": "tabClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "On tab click."
                },
                "complexType": {
                    "original": "TabClickDetail",
                    "resolved": "{ nativeEvent: MouseEvent; }",
                    "references": {
                        "TabClickDetail": {
                            "location": "local",
                            "path": "C:/Github/brand-experience/packages/stencil-lib/src/components/inno-tab-item/inno-tab-item.tsx",
                            "id": "src/components/inno-tab-item/inno-tab-item.tsx::TabClickDetail"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=inno-tab-item.js.map
