import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';
import { s as sanitizeHtml_1 } from './index-526702fd.js';
import './_commonjsHelpers-6cbf8316.js';

const innoInputCss = ".select-item.sc-inno-input{display:grid;grid-template-columns:minmax(0, 1fr) 16px;grid-template-rows:auto;align-items:center;border-width:0px;border-style:none;padding:0px 16px 0px 16px;height:56px;gap:10px;cursor:pointer}.select-item.icon-driven.sc-inno-input:not(.can-favorite){grid-template-columns:auto minmax(0, 1fr) 16px}.select-item.icon-driven.can-favorite.sc-inno-input{grid-template-columns:auto minmax(0, 1fr) 24px}.select-item.can-favorite.sc-inno-input .star.sc-inno-input{display:block;font-size:24px;position:relative}.select-item.separator.sc-inno-input{border-bottom:3px double #ffffff}.select-item.can-favorite.sc-inno-input:not(.selected):not(.icon-driven){grid-template-columns:minmax(0, 1fr) 24px}.select-item.can-favorite.selected.sc-inno-input:not(.icon-driven){grid-template-columns:minmax(0, 1fr) 16px 24px}.sc-inno-input-h{display:block;height:56px;min-height:56px;max-height:56px;padding:0px 16px 0px 16px;margin:5px 5px 8px 5px;border:1px solid #9aacb4;cursor:text;position:relative}.textareamode.sc-inno-input-h{height:100%;max-height:unset;margin:0;padding:16px 5px 20px 16px;position:relative;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;user-select:none}.can-show-errors.sc-inno-input-h{margin-bottom:23px}.light.sc-inno-input-h{background-color:#ffffff;color:#40545b;font-size:16px;font-weight:400}.light.sc-inno-input-h:hover:not(.disabled):not(:disabled){border:1px solid #40545b;box-shadow:inset 0px 0px 0px 1px #40545b}.light.isactive.sc-inno-input-h{border:1px solid #08191f;box-shadow:inset 0px 0px 0px 1px #08191f}.light.isactive.sc-inno-input-h:hover:not(.disabled):not(:disabled){box-shadow:inset 0px 0px 0px 1px #08191f;border:1px solid #08191f}.light.isactive.disabled.sc-inno-input-h,.light.isactive.sc-inno-input-h:disabled{box-shadow:inset 0px 0px 0px 1px #9aacb4;border:1px solid #9aacb4;background-color:rgba(8, 25, 31, 0.05)}.light.focused.sc-inno-input-h{outline-color:#1491EB;outline-style:solid;outline-width:2px;outline-offset:2px}.light.invalid.sc-inno-input-h{box-shadow:inset 0px 0px 0px 1px #CB0E0E;border:1px solid #CB0E0E}.light.disabled.sc-inno-input-h{background-color:rgba(8, 25, 31, 0.2);border:1px solid transparent}.dark.sc-inno-input-h{background-color:#08191f;color:#b2c1c7;font-size:16px;font-weight:400}.dark.sc-inno-input-h:hover:not(.disabled):not(:disabled){box-shadow:inset 0px 0px 0px 1px #9aacb4}.dark.disabled.sc-inno-input-h{background-color:rgba(255, 255, 255, 0.1);border:1px solid transparent}.dark.isactive.sc-inno-input-h{border:1px solid #e1f000;box-shadow:inset 0px 0px 0px 1px #e1f000}.dark.isactive.sc-inno-input-h:hover:not(.disabled):not(:disabled){box-shadow:inset 0px 0px 0px 1px #9aacb4;border:1px solid #9aacb4}.dark.isactive.disabled.sc-inno-input-h,.dark.isactive.sc-inno-input-h:disabled{box-shadow:inset 0px 0px 0px 1px #9aacb4;border:1px solid #9aacb4}.dark.focused.sc-inno-input-h{outline-color:#1491EB;outline-style:solid;outline-width:2px;outline-offset:2px}.dark.invalid.sc-inno-input-h{box-shadow:inset 0px 0px 0px 1px #FF88AB;border:1px solid #FF88AB}.sc-inno-input-h.sc-inno-input-s>input,.sc-inno-input-h .sc-inno-input-s>input{width:100%;border:none;outline:none;margin-top:26px}.sc-inno-input-h .label.sc-inno-input{left:auto;right:auto;z-index:1;pointer-events:none;transition:0.2s cubic-bezier(0.84, 0, 0.58, 1) all;transform:translate(0rem, 1.2rem) scale(1);position:absolute;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sc-inno-input-h .label.light.invalid.sc-inno-input{color:#CB0E0E}.sc-inno-input-h .label.light.disabled.sc-inno-input{color:#40545b}.sc-inno-input-h .label.dark.invalid.sc-inno-input{color:#FF88AB}.sc-inno-input-h .label.dark.disabled.sc-inno-input{color:#b2c1c7}.sc-inno-input-h .label.float.sc-inno-input{transform:translate(0rem, 0.5rem) scale(1);font-size:12px}.sc-inno-input-h .label.textareamode.sc-inno-input{transform:translate(0rem, -0.2rem) scale(1)}.sc-inno-input-h .label.textareamode.floatarea.sc-inno-input{transform:translate(0rem, -0.9rem) scale(1);font-size:12px}.disabled.sc-inno-input-h{border:1px solid #9aacb4}.seizer.sc-inno-input{position:absolute;bottom:-17px;right:-15px;z-index:1}.seizer.seizer-horizontal.sc-inno-input{cursor:ew-resize}.seizer.seizer-vertical.sc-inno-input{cursor:ns-resize}.seizer.seizer-both.sc-inno-input{cursor:nw-resize}";

const InnoInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
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
    get hostElement() { return getElement(this); }
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
        return (h(Host, { key: '5ddcba8d9d8bcfd2897ba313875a02ee73721127', class: {
                'input-container': true,
                'isactive': this.isActive,
                'focused': this.isFocused,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                'disabled': shouldDisable,
                'invalid': !this.isValid || errorSpecified,
                'can-show-errors': canShowErrors,
                'textareamode': this.textareaMode,
            }, onClick: () => this.activateInput() }, h("span", { key: '2cfde74bd5653cf8e35bf36559fcddfc71c61ad4', class: {
                label: true,
                float: this.shouldFloat && !this.textareaMode,
                floatarea: this.shouldFloat && this.textareaMode,
                disabled: shouldDisable,
                light: this.variant === 'light',
                dark: this.variant === 'dark',
                invalid: !this.isValid || errorSpecified,
                textareamode: this.textareaMode,
            }, ref: el => this.floatingLabel = el, innerHTML: sanitizeHtml_1(this.label) }), h("slot", { key: '8e3d7aef681fa26c194af4e11450a79d996c8b2d' }), this.seizerElement(), this.errorElement()));
    }
    static get formAssociated() { return true; }
};
InnoInput.style = innoInputCss;

export { InnoInput as inno_input };

//# sourceMappingURL=inno-input.entry.js.map