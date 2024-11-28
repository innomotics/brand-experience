////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
/// Modified for the Innomotics project.
/// Provides a publicly available API to manage the modal functionality.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/modal/modal.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { getCoreDelegate, resolveDelegate } from "../../utils/delegate";
import { TypedEvent } from "../../utils/typed-event";
export function setA11yAttributes(element, config) {
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
export function closeModal(element, closeResult) {
    const dialog = getInnoModal(element);
    if (dialog) {
        dialog.closeModal(closeResult);
    }
}
export function dismissModal(element, dismissResult) {
    const dialog = getInnoModal(element);
    if (dialog) {
        dialog.dismissModal(dismissResult);
    }
}
export async function showModal(config) {
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
//# sourceMappingURL=inno-modal.api.js.map
