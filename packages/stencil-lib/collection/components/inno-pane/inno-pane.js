import { Host, h } from "@stencil/core";
import anime from "animejs";
export class InnoPane {
    hostElement;
    /**
     * Position of the pane.
     */
    position = 'right';
    /**
     * Programatically control whether the pane is opened or closed.
     */
    expanded = false;
    /**
     * The pane comes with a close button by default. Hide it with this property.
     */
    hideCloseButton = false;
    /**
     * Title of the pane.
     */
    titleText;
    /**
     * Whether the pane is closeable by clicking outside of it.
     */
    closeOnBackdropClick = true;
    /**
     * Size of the pane. It is a width value in case of 'left' and 'right' position, and a height value in case of 'top' and 'bottom' position.
     * All css units are supported which are supported by width and height css properties.
     */
    paneSize = '100%';
    /**
     * This event is fired when the pane is opened or closed.
     */
    expandedChanged;
    showContent = false;
    closeViaBackdrop(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.closeOnBackdropClick) {
            this.expanded = false;
        }
    }
    emitExpandedChangedEvent() {
        this.expandedChanged.emit({
            expanded: this.expanded
        });
    }
    onExpandedChange() {
        this.showContent = false;
        if (this.position === 'top' || this.position === 'bottom') {
            this.animateVerticalPane(this.expanded ? this.paneSize : '0');
        }
        else {
            this.animateHorizontalPane(this.expanded ? this.paneSize : '0');
        }
    }
    animateHorizontalPane(width) {
        anime({
            targets: this.hostElement.querySelector(".pane-content-container"),
            duration: 300,
            width: width,
            easing: 'cubicBezier(0.84, 0, 0.58, 1)',
            delay: 0,
            complete: () => {
                this.showContent = true;
                this.emitExpandedChangedEvent();
            }
        });
    }
    animateVerticalPane(height) {
        anime({
            targets: this.hostElement.querySelector(".pane-content-container"),
            duration: 300,
            height: height,
            easing: 'cubicBezier(0.84, 0, 0.58, 1)',
            delay: 0,
            complete: () => {
                this.showContent = true;
                this.emitExpandedChangedEvent();
            }
        });
    }
    render() {
        return (h(Host, { key: '2e1ac2b17bc8fdfda3ea21855ddd9170baef2a13', class: {
                'not-visible': !this.expanded
            } }, h("div", { key: '726c734902ca0bde9c00871fe4e878f49ffa311f', class: 'pane-backdrop', onClick: (e) => this.closeViaBackdrop(e) }), h("div", { key: '6fd6859f0dcf42d956e57e751c22e4cdf501b9a2', class: {
                'pane-content-container': true,
                'pane-pos-top': this.position === 'top',
                'pane-pos-left': this.position === 'left',
                'pane-pos-bottom': this.position === 'bottom',
                'pane-pos-right': this.position === 'right'
            } }, h("div", { key: '92d28c9ca8c847447fd607a1c0a878e5d409dd63', class: {
                'pane-title-container': true,
                'no-title': this.titleText == null
            }, hidden: !this.showContent || !this.expanded }, this.titleText != null ? h("h2", null, this.titleText) : null, !this.hideCloseButton
            ? h("inno-button", { id: 'innoPaneClose', icon: 'close', variant: 'tertiary', iconOnly: true, colorVariant: 'light', onClick: () => this.expanded = !this.expanded })
            : null), h("div", { key: '3c099a70a3332de5bae1af024eadb449506dee66', hidden: !this.showContent || !this.expanded }, h("slot", { key: 'acf717f68b21d6635e78d38c8e2b26070fb004b5' })))));
    }
    static get is() { return "inno-pane"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-pane.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-pane.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'top' | 'left' | 'bottom' | 'right'",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the pane."
                },
                "getter": false,
                "setter": false,
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'right'"
            },
            "expanded": {
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
                    "text": "Programatically control whether the pane is opened or closed."
                },
                "getter": false,
                "setter": false,
                "attribute": "expanded",
                "reflect": false,
                "defaultValue": "false"
            },
            "hideCloseButton": {
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
                    "text": "The pane comes with a close button by default. Hide it with this property."
                },
                "getter": false,
                "setter": false,
                "attribute": "hide-close-button",
                "reflect": false,
                "defaultValue": "false"
            },
            "titleText": {
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
                    "text": "Title of the pane."
                },
                "getter": false,
                "setter": false,
                "attribute": "title-text",
                "reflect": false
            },
            "closeOnBackdropClick": {
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
                    "text": "Whether the pane is closeable by clicking outside of it."
                },
                "getter": false,
                "setter": false,
                "attribute": "close-on-backdrop-click",
                "reflect": false,
                "defaultValue": "true"
            },
            "paneSize": {
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
                    "text": "Size of the pane. It is a width value in case of 'left' and 'right' position, and a height value in case of 'top' and 'bottom' position. \r\nAll css units are supported which are supported by width and height css properties."
                },
                "getter": false,
                "setter": false,
                "attribute": "pane-size",
                "reflect": false,
                "defaultValue": "'100%'"
            }
        };
    }
    static get states() {
        return {
            "showContent": {}
        };
    }
    static get events() {
        return [{
                "method": "expandedChanged",
                "name": "expandedChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired when the pane is opened or closed."
                },
                "complexType": {
                    "original": "ExpandedChangedEvent",
                    "resolved": "{ expanded: boolean; }",
                    "references": {
                        "ExpandedChangedEvent": {
                            "location": "local",
                            "path": "C:/brandex/packages/stencil-lib/src/components/inno-pane/inno-pane.tsx",
                            "id": "src/components/inno-pane/inno-pane.tsx::ExpandedChangedEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "expanded",
                "methodName": "onExpandedChange"
            }];
    }
}
//# sourceMappingURL=inno-pane.js.map
