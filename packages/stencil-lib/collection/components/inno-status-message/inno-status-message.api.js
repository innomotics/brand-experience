export function getStatusMessageContainer() {
    const containerList = Array.from(document.querySelectorAll('inno-status-message-container'));
    const [container] = containerList;
    if (containerList.length > 1) {
        console.warn('Multiple toast containers were found. Only the first one will be used.');
        return container;
    }
    if (!container) {
        const statusMessageContainer = document.createElement('inno-status-message-container');
        document.body.appendChild(statusMessageContainer);
        return statusMessageContainer;
    }
    return container;
}
export function setStatusMessagePosition(position) {
    const container = getStatusMessageContainer();
    container.position = position;
}
function statusMessage(config) {
    const container = getStatusMessageContainer();
    return container.showStatusMessage(config);
}
statusMessage.info = (config) => {
    return statusMessage({
        ...config,
        type: 'info',
    });
};
statusMessage.error = (config) => {
    return statusMessage({
        ...config,
        type: 'error',
    });
};
statusMessage.success = (config) => {
    return statusMessage({
        ...config,
        type: 'success',
    });
};
statusMessage.warning = (config) => {
    return statusMessage({
        ...config,
        type: 'warning',
    });
};
export { statusMessage };
//# sourceMappingURL=inno-status-message.api.js.map
