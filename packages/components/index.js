import './p-cf0ba765.js';
export { g as getAssetPath, s as setAssetPath, a as setNonce, b as setPlatformOptions } from './p-f9444b6c.js';
import { T as TypedEvent } from './p-90b661dd.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
/// Represents an abstraction how to add the view to the different containers.
/// The default delegator uses the HTML DOM API to attach the element to the DOM tree.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/delegate.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class DefaultFrameworkDelegate {
    async attachView(view, config) {
        const attachToElement = config?.parentElement ?? document.body;
        attachToElement.appendChild(view);
        return view;
    }
    async removeView(view) {
        view.remove();
    }
}
const coreDelegate = new DefaultFrameworkDelegate();
let currentDelegate = coreDelegate;
function registerFrameworkDelegate(delegate) {
    currentDelegate = delegate;
}
const resolveDelegate = () => {
    return currentDelegate;
};
const getCoreDelegate = () => coreDelegate;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setA11yAttributes(element, config) {
    const ariaDescribedby = config.ariaDescribedby;
    const ariaLabelledby = config.ariaLabelledby;
    delete config['ariaDescribedby'];
    delete config['ariaLabelledby'];
    if (ariaDescribedby) {
        element.setAttribute('aria-describedby', ariaDescribedby);
    }
    if (ariaLabelledby) {
        element.setAttribute('aria-labelledby', ariaLabelledby);
    }
}
function getInnoModal(element) {
    return element.closest('inno-modal');
}
function closeModal(element, closeResult) {
    const dialog = getInnoModal(element);
    if (dialog) {
        dialog.closeModal(closeResult);
    }
}
function dismissModal(element, dismissResult) {
    const dialog = getInnoModal(element);
    if (dialog) {
        dialog.dismissModal(dismissResult);
    }
}
async function showModal(config) {
    const delegate = resolveDelegate();
    let dialogRef;
    const onClose = new TypedEvent();
    const onDismiss = new TypedEvent();
    // Direct string content to load inticator content
    if (typeof config.content === 'string') {
        const dialog = document.createElement('inno-modal');
        dialog.innerText = config.content;
        dialogRef = await getCoreDelegate().attachView(dialog);
    }
    // Provided only the body of the modal
    if (config.content instanceof HTMLElement && config.content.tagName !== 'INNO-MODAL') {
        const dialog = document.createElement('inno-modal');
        dialog.appendChild(config.content);
        dialogRef = await getCoreDelegate().attachView(dialog);
    }
    // Full inno-modal content is provided
    if (!dialogRef) {
        dialogRef = await delegate.attachView(config.content);
    }
    setA11yAttributes(dialogRef, config);
    Object.assign(dialogRef, config);
    await dialogRef.showModal();
    dialogRef.addEventListener('dialogClose', async ({ detail }) => {
        onClose.emit(detail);
        await delegate.removeView(dialogRef);
    });
    dialogRef.addEventListener('dialogDismiss', async ({ detail }) => {
        onDismiss.emit(detail);
        await delegate.removeView(dialogRef);
    });
    return {
        htmlElement: dialogRef,
        onClose,
        onDismiss,
    };
}

function getStatusMessageContainer() {
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
function setStatusMessagePosition(position) {
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

export { closeModal, dismissModal, getCoreDelegate, getStatusMessageContainer, registerFrameworkDelegate, resolveDelegate, setA11yAttributes, setStatusMessagePosition, showModal, statusMessage };

//# sourceMappingURL=index.js.map