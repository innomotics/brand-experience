import { p as proxyCustomElement, H, h, d as Host } from './p-f47e640c.js';
import { T as TypedEvent } from './p-90b661dd.js';
import { d as defineCustomElement$3 } from './p-d4b96023.js';
import { d as defineCustomElement$2 } from './p-fd5a20e9.js';

const innoStatusMessageContainerCss = "#status-message-container.sc-inno-status-message-container{z-index:1000}#status-message-container.sc-inno-status-message-container>.sc-inno-status-message-container:not(:last-child){margin-block-end:1rem}.status-message-container.sc-inno-status-message-container{display:block;position:fixed}.status-message-container--top-right.sc-inno-status-message-container{right:1rem;top:2rem}.status-message-container--bottom-right.sc-inno-status-message-container{right:1rem;bottom:2rem}.status-message-container--bottom-left.sc-inno-status-message-container{left:1rem;bottom:2rem}.status-message-container--top-left.sc-inno-status-message-container{left:1rem;top:2rem}";
const InnoStatusMessageContainerStyle0 = innoStatusMessageContainerCss;

const InnoStatusMessageContainer$1 = /*@__PURE__*/ proxyCustomElement(class InnoStatusMessageContainer extends H {
    constructor() {
        super();
        this.__registerHost();
        this.containerId = 'status-message-container';
        this.containerClass = 'status-message-container';
        this.position = 'top-right';
    }
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
        return (h(Host, { key: '59ebda0fe718332b74e4ba367e770b7f7624801c', class: {
                [`${this.PREFIX_POSITION_CLASS}top-right`]: this.position === 'top-right',
                [`${this.PREFIX_POSITION_CLASS}bottom-right`]: this.position === 'bottom-right',
                [`${this.PREFIX_POSITION_CLASS}bottom-left`]: this.position === 'bottom-left',
                [`${this.PREFIX_POSITION_CLASS}top-left`]: this.position === 'top-left',
            } }, h("slot", { key: '200262644a8c465a50cae237e3b2598c4100c60d' })));
    }
    static get watchers() { return {
        "position": ["onPositionChange"]
    }; }
    static get style() { return InnoStatusMessageContainerStyle0; }
}, [6, "inno-status-message-container", {
        "containerId": [1, "container-id"],
        "containerClass": [1, "container-class"],
        "position": [1],
        "showStatusMessage": [64]
    }, undefined, {
        "position": ["onPositionChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-status-message-container", "inno-icon", "inno-status-message"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-status-message-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoStatusMessageContainer$1);
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "inno-status-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoStatusMessageContainer = InnoStatusMessageContainer$1;
const defineCustomElement = defineCustomElement$1;

export { InnoStatusMessageContainer, defineCustomElement };

//# sourceMappingURL=inno-status-message-container.js.map