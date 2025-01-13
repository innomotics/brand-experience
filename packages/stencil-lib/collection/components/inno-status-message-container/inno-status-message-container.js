import { h, Host } from "@stencil/core";
import { TypedEvent } from "../../utils/typed-event";
/**
 * Container to hold the status messages.
 *
 * @internal
 */
export class InnoStatusMessageContainer {
    /**
     * Customizable container id.
     */
    containerId = 'status-message-container';
    /**
     * Customizable container class.
     */
    containerClass = 'status-message-container';
    /**
     * Position of container.
     */
    position = 'top-right';
    PREFIX_POSITION_CLASS = 'status-message-container--';
    get hostContainer() {
        return new Promise(resolve => {
            const interval = setInterval(() => {
                const containerElement = document.getElementById(this.containerId);
                if (containerElement) {
                    clearInterval(interval);
                    resolve(containerElement);
                }
            });
        });
    }
    componentDidLoad() {
        if (!document.getElementById(this.containerId)) {
            const container = document.createElement('div');
            container.id = this.containerId;
            container.classList.add(this.containerClass);
            container.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`);
            document.body.appendChild(container);
        }
    }
    onPositionChange(newPosition, oldPosition) {
        const container = document.getElementById(this.containerId);
        container.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
        container.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
    }
    /**
     * Display a toast message
     * @param config
     */
    async showStatusMessage(config) {
        const statusMessage = document.createElement('inno-status-message');
        const onClose = new TypedEvent();
        function removeStatusMessage(result) {
            statusMessage.remove();
            onClose.emit(result);
        }
        // Config status message
        if (config.type) {
            statusMessage.messageType = config.type;
        }
        if (config.theme) {
            statusMessage.theme = config.theme;
        }
        statusMessage.autoClose = config.autoClose;
        statusMessage.autoCloseDelay = config.autoCloseDelay ?? 3000;
        statusMessage.showProgress = config.showProgress;
        statusMessage.icon = config.icon;
        statusMessage.iconColor = config.iconColor;
        // Subscribe to close event
        statusMessage.addEventListener('closeMessage', (event) => {
            const { detail } = event;
            removeStatusMessage(detail);
        });
        // Set stasus message content
        if (typeof config.message === 'string') {
            statusMessage.innerText = config.message;
        }
        else {
            statusMessage.appendChild(config.message);
        }
        (await this.hostContainer).appendChild(statusMessage);
        return {
            onClose,
            close: (result) => {
                removeStatusMessage(result);
            },
        };
    }
    render() {
        return (h(Host, { key: '5a6f762051aab38c282dbe33eff45b65fa8cfb1c', class: {
                [`${this.PREFIX_POSITION_CLASS}top-right`]: this.position === 'top-right',
                [`${this.PREFIX_POSITION_CLASS}bottom-right`]: this.position === 'bottom-right',
                [`${this.PREFIX_POSITION_CLASS}bottom-left`]: this.position === 'bottom-left',
                [`${this.PREFIX_POSITION_CLASS}top-left`]: this.position === 'top-left',
            } }, h("slot", { key: '234619e82a726d0d38ea314a79b59f0fa9eb5603' })));
    }
    static get is() { return "inno-status-message-container"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./inno-status-message-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-status-message-container.css"]
        };
    }
    static get properties() {
        return {
            "containerId": {
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
                    "text": "Customizable container id."
                },
                "getter": false,
                "setter": false,
                "attribute": "container-id",
                "reflect": false,
                "defaultValue": "'status-message-container'"
            },
            "containerClass": {
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
                    "text": "Customizable container class."
                },
                "getter": false,
                "setter": false,
                "attribute": "container-class",
                "reflect": false,
                "defaultValue": "'status-message-container'"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InnoStatusMessagePosition",
                    "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "InnoStatusMessagePosition": {
                            "location": "import",
                            "path": "./inno-status-message/inno-status-message.api",
                            "id": "src/components/inno-status-message-container/inno-status-message/inno-status-message.api.ts::InnoStatusMessagePosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of container."
                },
                "getter": false,
                "setter": false,
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'top-right'"
            }
        };
    }
    static get methods() {
        return {
            "showStatusMessage": {
                "complexType": {
                    "signature": "(config: InnoStatusMessageConfig) => Promise<ShowStatusMessageResult>",
                    "parameters": [{
                            "name": "config",
                            "type": "InnoStatusMessageConfig",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "ShowStatusMessageResult": {
                            "location": "import",
                            "path": "./inno-status-message/inno-status-message.api",
                            "id": "src/components/inno-status-message-container/inno-status-message/inno-status-message.api.ts::ShowStatusMessageResult"
                        },
                        "InnoStatusMessageConfig": {
                            "location": "import",
                            "path": "./inno-status-message/inno-status-message.api",
                            "id": "src/components/inno-status-message-container/inno-status-message/inno-status-message.api.ts::InnoStatusMessageConfig"
                        },
                        "CustomEvent": {
                            "location": "global",
                            "id": "global::CustomEvent"
                        }
                    },
                    "return": "Promise<ShowStatusMessageResult>"
                },
                "docs": {
                    "text": "Display a toast message",
                    "tags": [{
                            "name": "param",
                            "text": "config"
                        }]
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "position",
                "methodName": "onPositionChange"
            }];
    }
}
//# sourceMappingURL=inno-status-message-container.js.map
