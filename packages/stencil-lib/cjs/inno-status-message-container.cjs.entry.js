'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-317c665c.js');
const typedEvent = require('./typed-event-a53f2801.js');

const innoStatusMessageContainerCss = "#status-message-container.sc-inno-status-message-container{z-index:1000}#status-message-container.sc-inno-status-message-container>.sc-inno-status-message-container:not(:last-child){margin-block-end:1rem}.status-message-container.sc-inno-status-message-container{display:block;position:fixed}.status-message-container--top-right.sc-inno-status-message-container{right:1rem;top:2rem}.status-message-container--bottom-right.sc-inno-status-message-container{right:1rem;bottom:2rem}.status-message-container--bottom-left.sc-inno-status-message-container{left:1rem;bottom:2rem}.status-message-container--top-left.sc-inno-status-message-container{left:1rem;top:2rem}";
const InnoStatusMessageContainerStyle0 = innoStatusMessageContainerCss;

const InnoStatusMessageContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        const onClose = new typedEvent.TypedEvent();
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
        return (index.h(index.Host, { key: '5a6f762051aab38c282dbe33eff45b65fa8cfb1c', class: {
                [`${this.PREFIX_POSITION_CLASS}top-right`]: this.position === 'top-right',
                [`${this.PREFIX_POSITION_CLASS}bottom-right`]: this.position === 'bottom-right',
                [`${this.PREFIX_POSITION_CLASS}bottom-left`]: this.position === 'bottom-left',
                [`${this.PREFIX_POSITION_CLASS}top-left`]: this.position === 'top-left',
            } }, index.h("slot", { key: '234619e82a726d0d38ea314a79b59f0fa9eb5603' })));
    }
    static get watchers() { return {
        "position": ["onPositionChange"]
    }; }
};
InnoStatusMessageContainer.style = InnoStatusMessageContainerStyle0;

exports.inno_status_message_container = InnoStatusMessageContainer;

//# sourceMappingURL=inno-status-message-container.cjs.entry.js.map