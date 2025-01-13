import { Host, h } from "@stencil/core";
import anime from "animejs";
import { a11yBoolean, a11yHostAttributes } from "../../utils/a11y";
import Animation from "../../utils/animation";
import { waitForElement } from "../../utils/waitForElement";
/**
 * Represents the main frame of the modal component.
 */
export class InnoModal {
    ariaAttributes = {};
    hostElement;
    modalVisible = false;
    /**
     * Theme variant of the component.
     */
    variant = 'light';
    /**
     * Modal size
     */
    size = '720';
    /**
     * Should the modal be animated
     */
    animation = true;
    /**
     * Show a backdrop behind the modal dialog
     */
    backdrop = true;
    /**
     * Dismiss modal on backdrop click
     */
    closeOnBackdropClick = true;
    /**
     * Centered modal
     */
    centered = false;
    /**
     * By default the modal always opens at the top and the InnoModal component automatically scrolls to it.
     * Set this to true if you want the modal to be always in a fixed position no matter where you scroll.
     */
    fixed = false;
    /**
     * If set to true the modal can be closed by pressing the Escape key
     */
    closeOnEscape = true;
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
        return h(Host, { key: 'de8c8ba6d532f44d9ac377b9459c68fa759babd0', class: hostClasses }, this.dialogElement());
    }
    static get is() { return "inno-modal"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-modal.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'dark' | 'light'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme variant of the component."
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InnoModalSize",
                    "resolved": "\"360\" | \"480\" | \"600\" | \"720\" | \"840\" | \"fit-content\" | \"full-screen\" | \"full-width\"",
                    "references": {
                        "InnoModalSize": {
                            "location": "import",
                            "path": "./inno-modal.model",
                            "id": "src/components/inno-modal/inno-modal.model.ts::InnoModalSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Modal size"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'720'"
            },
            "animation": {
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
                    "text": "Should the modal be animated"
                },
                "getter": false,
                "setter": false,
                "attribute": "animation",
                "reflect": false,
                "defaultValue": "true"
            },
            "backdrop": {
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
                    "text": "Show a backdrop behind the modal dialog"
                },
                "getter": false,
                "setter": false,
                "attribute": "backdrop",
                "reflect": false,
                "defaultValue": "true"
            },
            "closeOnBackdropClick": {
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
                    "text": "Dismiss modal on backdrop click"
                },
                "getter": false,
                "setter": false,
                "attribute": "close-on-backdrop-click",
                "reflect": false,
                "defaultValue": "true"
            },
            "centered": {
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
                    "text": "Centered modal"
                },
                "getter": false,
                "setter": false,
                "attribute": "centered",
                "reflect": false,
                "defaultValue": "false"
            },
            "fixed": {
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
                    "text": "By default the modal always opens at the top and the InnoModal component automatically scrolls to it.\r\nSet this to true if you want the modal to be always in a fixed position no matter where you scroll."
                },
                "getter": false,
                "setter": false,
                "attribute": "fixed",
                "reflect": false,
                "defaultValue": "false"
            },
            "closeOnEscape": {
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
                    "text": "If set to true the modal can be closed by pressing the Escape key"
                },
                "getter": false,
                "setter": false,
                "attribute": "close-on-escape",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "modalVisible": {}
        };
    }
    static get events() {
        return [{
                "method": "dialogClose",
                "name": "dialogClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Dialog close"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "dialogDismiss",
                "name": "dialogDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Dialog cancel"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "showModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLDialogElement": {
                            "location": "global",
                            "id": "global::HTMLDialogElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Show the dialog.",
                    "tags": []
                }
            },
            "dismissModal": {
                "complexType": {
                    "signature": "<T = any>(reason?: T) => Promise<void>",
                    "parameters": [{
                            "name": "reason",
                            "type": "T",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "T": {
                            "location": "global",
                            "id": "global::T"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Dismiss the dialog",
                    "tags": []
                }
            },
            "closeModal": {
                "complexType": {
                    "signature": "<T = any>(reason: T) => Promise<void>",
                    "parameters": [{
                            "name": "reason",
                            "type": "T",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "T": {
                            "location": "global",
                            "id": "global::T"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Close the dialog",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKey",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=inno-modal.js.map
