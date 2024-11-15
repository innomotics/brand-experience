import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';
import { a as anime } from './anime.es-2bde7b5f.js';
import { b as a11yHostAttributes, a as a11yBoolean } from './a11y-450a9649.js';

/**
 * Commonly used animation duration values in ms.
 */
class Animation {
    static shortTime = 0;
    static defaultTime = 150;
    static mediumTime = 300;
    static slowTime = 500;
    static xSlowTime = 1000;
}

function waitForElement(selector, doc, timeout = 3000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const checkIfElementExist = () => {
            const dialog = doc.querySelector(selector);
            if (dialog) {
                resolve(dialog);
            }
            else {
                if (Date.now() - startTime < timeout) {
                    setTimeout(checkIfElementExist);
                }
                else {
                    reject();
                }
            }
        };
        checkIfElementExist();
    });
}

const innoModalCss = ".sc-inno-modal:focus-visible{outline:none !important}.sc-inno-modal-h{display:none}.sc-inno-modal-h dialog.sc-inno-modal{margin:0;padding:32px;left:50%}.sc-inno-modal-h dialog.sc-inno-modal::backdrop{backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);background:rgba(0, 0, 0, 0.6)}.sc-inno-modal-h .modal.sc-inno-modal{display:flex;flex-direction:column;position:relative;border:none;background:#08191f;overflow:visible;max-height:100vh;pointer-events:all}.sc-inno-modal-h .modal.fixed.sc-inno-modal{position:fixed}.sc-inno-modal-h .modal-size-360.sc-inno-modal{width:22.5rem}.sc-inno-modal-h .modal-size-480.sc-inno-modal{width:30rem}.sc-inno-modal-h .modal-size-600.sc-inno-modal{width:37.5rem}.sc-inno-modal-h .modal-size-720.sc-inno-modal{width:45rem}.sc-inno-modal-h .modal-size-840.sc-inno-modal{width:52.5rem}.sc-inno-modal-h .modal-size-full-width.sc-inno-modal{width:95%}.sc-inno-modal-h .modal-size-fit-content.sc-inno-modal{width:-moz-fit-content;width:fit-content}.sc-inno-modal-h .modal-size-full-screen.sc-inno-modal{left:0 !important;top:0 !important;transform:none !important;width:calc(100% - 28px);min-width:calc(100% - 28px);max-width:calc(100% - 28px);height:calc(100% - 28px);min-height:calc(100% - 28px);max-height:calc(100% - 28px)}.sc-inno-modal-h .dialog-backdrop.sc-inno-modal{display:block;position:fixed;width:100vw;height:100vh;top:0;left:0;pointer-events:none}.sc-inno-modal-h.sc-inno-modal-s>inno-modal-footer,.sc-inno-modal-h .sc-inno-modal-s>inno-modal-footer{margin-top:auto}.visible.sc-inno-modal-h{display:block}.align-center.sc-inno-modal-h dialog.sc-inno-modal{margin:0;left:50%;top:50%}.no-backdrop.sc-inno-modal-h dialog.sc-inno-modal::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}.sc-inno-modal-h.with-icon.sc-inno-modal-s>inno-modal-footer,.sc-inno-modal-h.with-icon .sc-inno-modal-s>inno-modal-footer,.sc-inno-modal-h.with-icon.sc-inno-modal-s>inno-modal-content,.sc-inno-modal-h.with-icon .sc-inno-modal-s>inno-modal-content{margin-left:2.5rem}@media screen and (max-width: 768px){.sc-inno-modal-h dialog.sc-inno-modal{margin:0;left:50%;top:50%;transform:translate(-50%, -50%) !important}.sc-inno-modal-h .modal.sc-inno-modal{width:95%}}";

const InnoModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dialogClose = createEvent(this, "dialogClose", 7);
        this.dialogDismiss = createEvent(this, "dialogDismiss", 7);
        this.modalVisible = false;
        this.variant = 'light';
        this.size = '720';
        this.animation = true;
        this.backdrop = true;
        this.closeOnBackdropClick = true;
        this.centered = false;
        this.fixed = false;
        this.closeOnEscape = true;
    }
    ariaAttributes = {};
    get hostElement() { return getElement(this); }
    /**
     * Dialog close
     */
    dialogClose;
    /**
     * Dialog cancel
     */
    dialogDismiss;
    clickStartedInsideDialog = undefined;
    get dialog() {
        return this.hostElement.querySelector('dialog');
    }
    componentDidLoad() {
        this.slideInModal();
    }
    componentWillLoad() {
        this.ariaAttributes = a11yHostAttributes(this.hostElement);
    }
    // Handle keydown on modal content window
    onKey(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            if (this.closeOnEscape) {
                this.dismissModal();
            }
            else {
                e.stopPropagation();
            }
        }
        else {
            e.stopPropagation();
        }
    }
    /**
     * Show the dialog.
     */
    async showModal() {
        try {
            const dialog = await waitForElement('dialog', this.hostElement);
            this.modalVisible = true;
            dialog.showModal();
            if (!this.fixed) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        catch (e) {
            console.error('HTMLDialogElement not existing');
        }
    }
    /**
     * Dismiss the dialog
     */
    async dismissModal(reason) {
        this.slideOutModal(() => {
            this.modalVisible = false;
            this.dialog.close(JSON.stringify({ type: 'dismiss', reason }));
            this.dialogDismiss.emit(reason);
        });
    }
    /**
     * Close the dialog
     */
    async closeModal(reason) {
        this.slideOutModal(() => {
            this.dialog.close(JSON.stringify({ type: 'close', reason }));
            this.dialogClose.emit(reason);
        });
    }
    slideInModal() {
        const duration = this.animation ? Animation.mediumTime : 0;
        let transformY = this.centered ? '-50%' : 40;
        anime({
            targets: this.dialog,
            duration,
            opacity: [0, 1],
            translateY: [0, transformY],
            translateX: ['-50%', '-50%'],
            easing: 'easeOutSine',
        });
    }
    slideOutModal(completeCallback) {
        const duration = this.animation ? Animation.mediumTime : 0;
        let transformY = this.centered ? '-50%' : 40;
        anime({
            targets: this.dialog,
            duration,
            opacity: [1, 0],
            translateY: [transformY, 0],
            translateX: ['-50%', '-50%'],
            easing: 'easeInSine',
            complete: () => {
                if (completeCallback) {
                    completeCallback();
                }
            },
        });
    }
    onDialogCancel(event) {
        // Check escape default behavior on modal backdrop
        if (!this.closeOnEscape) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        // Cancel the default dialog close behaviour
        event.preventDefault();
        this.dismissModal();
    }
    onModalClick(event) {
        if (event.target !== this.dialog) {
            return;
        }
        if (!this.isClickInsideDialog(event) && this.closeOnBackdropClick && !this.clickStartedInsideDialog) {
            this.clickStartedInsideDialog = undefined;
            this.dismissModal();
        }
        this.clickStartedInsideDialog = undefined;
    }
    onMouseDown(event) {
        if (this.closeOnBackdropClick && this.isClickInsideDialog(event)) {
            this.clickStartedInsideDialog = true;
        }
        else {
            this.clickStartedInsideDialog = false;
        }
    }
    isClickInsideDialog(event) {
        const rect = this.dialog.getBoundingClientRect();
        return rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
    }
    dialogElement() {
        const classes = {
            modal: true,
            fixed: this.fixed,
            [`modal-size-${this.size}`]: true,
        };
        return (h("div", { class: "dialog-backdrop" }, h("dialog", { "aria-modal": a11yBoolean(true), "aria-describedby": this.ariaAttributes['aria-describedby'], "aria-labelledby": this.ariaAttributes['aria-labelledby'], class: classes, onClick: e => this.onModalClick(e), onCancel: e => this.onDialogCancel(e), onMouseDown: e => this.onMouseDown(e) }, h("slot", null))));
    }
    render() {
        const hostClasses = {
            'visible': this.modalVisible,
            'no-backdrop': !this.backdrop,
            'align-center': this.centered,
        };
        return h(Host, { key: '53b3f903cf2310218df9e9fbd9053f5c8f1ea40f', class: hostClasses }, this.dialogElement());
    }
};
InnoModal.style = innoModalCss;

export { InnoModal as inno_modal };

//# sourceMappingURL=inno-modal.entry.js.map