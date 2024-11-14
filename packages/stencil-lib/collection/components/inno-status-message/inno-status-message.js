import { Host, h } from "@stencil/core";
import { getDetailsForStatusMessage } from "./inno-status-message.values";
/**
 * Represents a status message entry.
 */
export class InnoStatusMessage {
    constructor() {
        this.progress = 0;
        this.touched = false;
        this.theme = 'light';
        this.messageType = 'info';
        this.autoClose = false;
        this.autoCloseDelay = 3000;
        this.showProgress = false;
        this.icon = undefined;
        this.iconColor = undefined;
    }
    hostElement;
    /**
     * Status message is closed.
     */
    closeMessage;
    componentDidLoad() {
        if (this.autoClose) {
            setTimeout(() => this.closeProcess(), this.autoCloseDelay);
        }
    }
    themeClasses() {
        return {
            light: this.theme === 'light',
            dark: this.theme === 'dark',
        };
    }
    messageTypeDetails() {
        return getDetailsForStatusMessage(this.messageType);
    }
    closeProcess() {
        if (this.hostElement) {
            this.hostElement.classList.add('fadeOut');
        }
        setTimeout(() => {
            this.closeMessage.emit();
        }, 250);
    }
    messageIcon(typeInfo, themeClasses) {
        const classes = {
            ...themeClasses,
            'icon-container': true,
            [typeInfo.typeClass]: true,
        };
        const iconName = this.icon ?? typeInfo.icon;
        const iconStyle = this.iconColor ? { color: this.iconColor } : {};
        return (h("div", { class: classes }, h("inno-icon", { icon: iconName, size: 48, style: iconStyle })));
    }
    messageContainer(typeDetails, themeClasses) {
        const classes = {
            ...themeClasses,
            'message-container': true,
            [typeDetails.typeClass]: true,
        };
        return (h("div", { class: classes }, h("slot", null)));
    }
    closeControl(typeDetails, themeClasses) {
        const classes = {
            ...themeClasses,
            'close-container': true,
            [typeDetails.typeClass]: true,
        };
        return (h("div", { class: classes }, h("inno-icon", { icon: "close_small", size: 32, onClick: () => this.closeMessage.emit() })));
    }
    progressBar(typeDetails, themeClasses) {
        const classes = {
            ...themeClasses,
            [typeDetails.typeClass]: true,
            'progress-bar': true,
            'progress-bar--animated': this.showProgress,
        };
        const progressBarStyle = {
            animationDuration: `${this.autoCloseDelay}ms`,
            animationPlayState: this.touched ? 'paused' : 'running',
        };
        return (h("div", { class: classes, style: progressBarStyle, onAnimationEnd: () => this.closeProcess(), onTransitionEnd: () => {
                if (this.progress === 0) {
                    this.closeProcess();
                }
            } }));
    }
    render() {
        const typeDetails = this.messageTypeDetails();
        const themeClasses = this.themeClasses();
        const hostClasses = {
            ...themeClasses,
            [typeDetails.typeClass]: true,
            'sm-fade-in': true,
        };
        return (h(Host, { key: 'c2bd7f44c144b8c453442c07da179863fd3cc8a9', class: hostClasses, onPointerEnter: () => (this.touched = true), onPointerLeave: () => (this.touched = false) }, this.messageIcon(typeDetails, themeClasses), this.messageContainer(typeDetails, themeClasses), this.closeControl(typeDetails, themeClasses), this.progressBar(typeDetails, themeClasses)));
    }
    static get is() { return "inno-status-message"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-status-message.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-status-message.css"]
        };
    }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InnoStatusMessageTheme",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {
                        "InnoStatusMessageTheme": {
                            "location": "import",
                            "path": "./inno-status-message.api",
                            "id": "src/components/inno-status-message/inno-status-message.api.ts::InnoStatusMessageTheme"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme variant of the component."
                },
                "attribute": "theme",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "messageType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InnoStatusMessageType",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "InnoStatusMessageType": {
                            "location": "import",
                            "path": "./inno-status-message.api",
                            "id": "src/components/inno-status-message/inno-status-message.api.ts::InnoStatusMessageType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of the status message."
                },
                "attribute": "message-type",
                "reflect": false,
                "defaultValue": "'info'"
            },
            "autoClose": {
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
                    "text": "Autoclose message after the given delay.\r\nThe message will be closed independently from showProgress property."
                },
                "attribute": "auto-close",
                "reflect": false,
                "defaultValue": "false"
            },
            "autoCloseDelay": {
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
                    "text": "Autoclose delay."
                },
                "attribute": "auto-close-delay",
                "reflect": false,
                "defaultValue": "3000"
            },
            "showProgress": {
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
                    "text": "Animate progressbar and close after animation ends.\r\nThe message will be closed independently from autoClose property."
                },
                "attribute": "show-progress",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Icon of toast"
                },
                "attribute": "icon",
                "reflect": false
            },
            "iconColor": {
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
                    "text": "Icon color of toast"
                },
                "attribute": "icon-color",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "progress": {},
            "touched": {}
        };
    }
    static get events() {
        return [{
                "method": "closeMessage",
                "name": "closeMessage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Status message is closed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-status-message.js.map
