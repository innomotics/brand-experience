import { Host, h } from "@stencil/core";
import sanitizeHtml from "sanitize-html";
export class InnoInput {
    constructor() {
        this.isActive = undefined;
        this.shouldFloat = undefined;
        this.textareaMode = false;
        this.isFocused = undefined;
        this.disabled = false;
        this.label = undefined;
        this.variant = 'light';
        this.error = undefined;
        this.errortype = undefined;
        this.valuePropReDefine = true;
        this.selectOnFocus = false;
        this.caretPosEndOnFocus = false;
        this.resizeable = false;
        this.resizeMode = 'both';
        this.disableFloatingLabelAutoResize = false;
        this.isValid = true;
    }
    hostElement;
    inputElementRef;
    seizerElementRef;
    mutationObserver;
    resizeObserver;
    /**
     * Fired when the new value is valid.
     */
    valueChanged;
    floatingLabel;
    resizeTimeout;
    get errorElements() {
        return [...Array.from(this.hostElement.querySelectorAll('inno-error:not(.explicit-error)'))];
    }
    inputChanged(event) {
        this.shouldFloat = true;
        this.isActive = true;
        this.setErrors(event.target);
        this.synchSeizerPosition();
    }
    setErrors(element) {
        if (this.error != null && this.error !== '') {
            //if error is specified skip the manually added errors
            return;
        }
        this.errorElements.forEach(ee => (ee.active = false));
        if (!element.validity.valid) {
            this.isValid = false;
            //set everything off;
            let property; // Type is 'foo' | 'bar'
            for (property in element.validity) {
                if (element.validity[property]) {
                    let definedErrorElement = this.errorElements.find(ee => ee.type == property);
                    if (definedErrorElement) {
                        definedErrorElement.active = true;
                    }
                }
            }
        }
        else {
            this.isValid = true;
        }
        if (this.isValid) {
            this.valueChanged.emit(this.value);
        }
    }
    isValueEmpty() {
        return this.value === '' || this.value === undefined || this.value === null;
    }
    get value() {
        return this.inputElementRef?.value;
    }
    setFloatingLabelMaxWidth() {
        if (this.disableFloatingLabelAutoResize) {
            return;
        }
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            if (!this.floatingLabel || !this.hostElement) {
                return;
            }
            this.floatingLabel.style.maxWidth = `${this.hostElement.getBoundingClientRect().width - 20}px`;
        }, 200);
    }
    //when we programatically change the input's value (e.g. with Angular's formControl's setValue(...)), no events are generated
    //we redefine the input value setter, so an event will be fired besides the original setter function
    //if we disable this then we have to manually send input events to the input
    reDefineInputValueProperty() {
        if (!this.inputElementRef || !this.valuePropReDefine) {
            return;
        }
        let elementPrototype = Object.getPrototypeOf(this.inputElementRef);
        let descriptor = Object.getOwnPropertyDescriptor(elementPrototype, 'value');
        let thisref = this;
        Object.defineProperty(this.inputElementRef, 'value', {
            get: function () {
                return descriptor.get.apply(this, arguments);
            },
            set: function () {
                descriptor.set.apply(this, arguments);
                setTimeout(() => thisref.hostElement.dispatchEvent(new globalThis.Event('reCheckInnoInputValue', { bubbles: true })), 0);
            },
        });
    }
    startMutationObserver() {
        if (!!this.inputElementRef) {
            this.mutationObserver = new MutationObserver((mutations) => {
                let isDisabled = false;
                let isReadOnly = false;
                for (var i = 0, mutation; (mutation = mutations[i]); i++) {
                    if (mutation.attributeName == 'disabled') {
                        isDisabled = mutation.target.disabled;
                    }
                    else if (mutation.attributeName == 'readonly') {
                        isReadOnly = mutation.target.readOnly;
                    }
                }
                this.disabled = isDisabled || isReadOnly;
            });
            this.mutationObserver.observe(this.inputElementRef, { attributes: true });
        }
    }
    startResizeObserver() {
        if (!this.hostElement) {
            return;
        }
        this.resizeObserver = new ResizeObserver(() => {
            this.setFloatingLabelMaxWidth();
        });
        this.resizeObserver.observe(this.hostElement, { box: "border-box" });
    }
    componentDidLoad() {
        this.inputElementRef = this.hostElement.querySelector('input') ?? this.hostElement.querySelector('textarea');
        this.textareaMode = this.inputElementRef instanceof HTMLTextAreaElement;
        this.reDefineInputValueProperty();
        this.startMutationObserver();
        this.startResizeObserver();
        setTimeout(() => {
            if (!this.isValueEmpty()) {
                this.shouldFloat = true;
            }
            this.disabled = this.inputElementRef?.disabled || this.inputElementRef?.readOnly;
        });
        this.errorElements.forEach(ee => ee.classList.add(this.variant));
        this.synchSeizerPosition();
        this.setFloatingLabelMaxWidth();
    }
    disconnectedCallback() {
        this.mutationObserver?.disconnect();
        this.mutationObserver = null;
        this.resizeObserver?.disconnect();
        this.resizeObserver = null;
    }
    reCheckValue() {
        this.setErrors(this.inputElementRef);
        this.shouldFloat = !this.isValueEmpty();
    }
    onFocus() {
        this.shouldFloat = true;
        this.isActive = true;
        this.isFocused = true;
    }
    onFocusout() {
        if (this.isValueEmpty()) {
            this.shouldFloat = false;
        }
        this.isActive = false;
        this.isFocused = false;
    }
    activateInput() {
        this.isActive = true;
        this.inputElementRef.focus();
        if (this.inputElementRef.value !== null && this.inputElementRef.value !== undefined && this.inputElementRef.value.length > 0) {
            if (this.selectOnFocus) {
                this.inputElementRef.select();
                return;
            }
            if (this.caretPosEndOnFocus && this.inputElementRef.type == 'text') {
                this.inputElementRef.selectionStart = this.inputElementRef.selectionEnd = this.inputElementRef.value.length;
            }
        }
    }
    synchSeizerPosition() {
        if (!this.seizerElementRef) {
            return;
        }
        if (this.inputElementRef.scrollHeight > this.inputElementRef.clientHeight) {
            this.seizerElementRef.classList.add('seizer-with-scrollbar');
        }
        else {
            this.seizerElementRef.classList.remove('seizer-with-scrollbar');
        }
    }
    onSeizerMouseDown(_event) {
        const seizerMove = (event) => this.onSeizerMove(event);
        const mouseUpListener = () => {
            window.removeEventListener('mousemove', seizerMove);
            window.removeEventListener('mouseup', mouseUpListener);
            this.inputElementRef.removeEventListener('mouseup', mouseUpListener);
        };
        window.addEventListener('mouseup', mouseUpListener);
        this.inputElementRef.addEventListener('mouseup', mouseUpListener);
        window.addEventListener('mousemove', seizerMove);
    }
    onSeizerMove(event) {
        if (this.resizeMode === 'both' || this.resizeMode === 'horizontal') {
            const width = event.clientX < 100 ? 100 : event.clientX;
            this.hostElement.style.width = `${width}px`;
        }
        if (this.resizeMode === 'both' || this.resizeMode === 'vertical') {
            const height = event.clientY < 100 ? 100 : event.clientY;
            this.hostElement.style.height = `${height}px`;
        }
        this.synchSeizerPosition();
    }
    seizerElement() {
        const classes = {
            'seizer': true,
            'seizer-horizontal': this.resizeMode === 'horizontal',
            'seizer-vertical': this.resizeMode === 'vertical',
            'seizer-both': this.resizeMode === 'both',
        };
        if (this.resizeable) {
            return h("inno-icon", { icon: "resize", size: 32, class: classes, ref: ref => (this.seizerElementRef = ref), onMouseDown: event => this.onSeizerMouseDown(event) });
        }
        else {
            return null;
        }
    }
    errorElement() {
        const errorSpecified = this.error != null && this.error !== '';
        if (errorSpecified) {
            return (h("inno-error", { class: "explicit-error", type: this.errortype, variant: this.variant, active: true }, this.error));
        }
        else {
            return null;
        }
    }
    render() {
        let errorSpecified = this.error != null && this.error !== '';
        let canShowErrors = this.errorElements?.length > 0 || errorSpecified;
        let shouldDisable = this.disabled || this.inputElementRef?.disabled || this.inputElementRef?.readOnly;
        this.setFloatingLabelMaxWidth();
        return (h(Host, { key: '02e1e8183e22bdc6a74da9a757d30dacd97e8d9a', class: {
                'input-container': true,
                'isactive': this.isActive,
                'focused': this.isFocused,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                'disabled': shouldDisable,
                'invalid': !this.isValid || errorSpecified,
                'can-show-errors': canShowErrors,
                'textareamode': this.textareaMode,
            }, onClick: () => this.activateInput() }, h("span", { key: 'ee5073f0c310c182c798f3ed00d19b4f03a43881', class: {
                label: true,
                float: this.shouldFloat && !this.textareaMode,
                floatarea: this.shouldFloat && this.textareaMode,
                disabled: shouldDisable,
                light: this.variant === 'light',
                dark: this.variant === 'dark',
                invalid: !this.isValid || errorSpecified,
                textareamode: this.textareaMode,
            }, ref: el => this.floatingLabel = el, innerHTML: sanitizeHtml(this.label) }), h("slot", { key: 'f02829a55a464af79773e72aa452de2f3d52ff6a' }), this.seizerElement(), this.errorElement()));
    }
    static get is() { return "inno-input"; }
    static get encapsulation() { return "scoped"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-input.css"]
        };
    }
    static get properties() {
        return {
            "isFocused": {
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
                    "text": "Whether the input is focused or not."
                },
                "attribute": "is-focused",
                "reflect": false
            },
            "disabled": {
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
                    "text": "Whether the inno-input component is disabled or not. Probably not needed to be set since the component\r\nautomatically detects if the inserted input element is disabled or not.\r\nThe inno-input component will also be in a disabled state when the input element is readonly."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
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
                    "text": "Floating label for the input."
                },
                "attribute": "label",
                "reflect": false
            },
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'light' | 'dark'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color variant of the input."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "error": {
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
                    "text": "Error message to show. If you don't want to use this property you can manually add 'inno-error' components inside the 'inno-input' component.\r\nYou can either use this property or use the manually added errors. Can't use both at the same time."
                },
                "attribute": "error",
                "reflect": false
            },
            "errortype": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "| 'badInput'\r\n    | 'customError'\r\n    | 'patternMismatch'\r\n    | 'rangeOverflow'\r\n    | 'rangeUnderflow'\r\n    | 'stepMismatch'\r\n    | 'tooLong'\r\n    | 'tooShort'\r\n    | 'typeMismatch'\r\n    | 'valid'\r\n    | 'valueMissing'\r\n    | undefined",
                    "resolved": "\"badInput\" | \"customError\" | \"patternMismatch\" | \"rangeOverflow\" | \"rangeUnderflow\" | \"stepMismatch\" | \"tooLong\" | \"tooShort\" | \"typeMismatch\" | \"valid\" | \"valueMissing\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState\r\n<br/><br/>Only has an effect if 'error' has a value."
                },
                "attribute": "errortype",
                "reflect": false
            },
            "valuePropReDefine": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "value-prop-re-define",
                "reflect": false,
                "defaultValue": "true"
            },
            "selectOnFocus": {
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
                    "text": "When you click on the inno-input a focus() command is called on the input element.\r\nThis might cause that the caret position will be at the beginnging of the input's value.\r\nSet this to true if you want to select all of the text by default."
                },
                "attribute": "select-on-focus",
                "reflect": false,
                "defaultValue": "false"
            },
            "caretPosEndOnFocus": {
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
                    "text": "When you click on the inno-input a focus() command is called on the input element.\r\nThis might cause that the caret position will be at the beginnging of the input's value.\r\nSet this to true if you want the caret position to be at the end. Only has an effect if the input type is 'text'.\r\nHas no effect if 'selectOnFocus' is also true."
                },
                "attribute": "caret-pos-end-on-focus",
                "reflect": false,
                "defaultValue": "false"
            },
            "resizeable": {
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
                    "text": "Whether the textarea is resizeable.\r\nOnly has effect if textarea is provided as wrapped element."
                },
                "attribute": "resizeable",
                "reflect": false,
                "defaultValue": "false"
            },
            "resizeMode": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'vertical' | 'horizontal' | 'both'",
                    "resolved": "\"both\" | \"horizontal\" | \"vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the resize direction.\r\nOnly has effect if textarea is provided as wrapped element."
                },
                "attribute": "resize-mode",
                "reflect": false,
                "defaultValue": "'both'"
            },
            "disableFloatingLabelAutoResize": {
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
                    "text": "The floating label is an absolutely positioned element meaning if it is too long it will grow out of the boundaries of the InnoInput component.\r\nBy default the InnoInput component automatically resizes the floating label so it will fit inside.\r\nYou can turn this behavior off e.g. if you are sure the label will always fit or it causes some issues."
                },
                "attribute": "disable-floating-label-auto-resize",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isActive": {},
            "shouldFloat": {},
            "textareaMode": {},
            "isValid": {}
        };
    }
    static get events() {
        return [{
                "method": "valueChanged",
                "name": "valueChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the new value is valid."
                },
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "input",
                "method": "inputChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "reCheckInnoInputValue",
                "method": "reCheckValue",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "onFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=inno-input.js.map
