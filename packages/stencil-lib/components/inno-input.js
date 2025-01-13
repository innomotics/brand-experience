import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-6a22c7f2.js';
import { s as sanitizeHtml } from './p-ed4deb6d.js';
import { d as defineCustomElement$3 } from './p-7e0f4286.js';
import { d as defineCustomElement$2 } from './p-fd23d1bb.js';

const innoInputCss = ".select-item.sc-inno-input{display:grid;grid-template-columns:minmax(0, 1fr) 16px;grid-template-rows:auto;align-items:center;border-width:0px;border-style:none;padding:0px 16px 0px 16px;height:56px;gap:10px;cursor:pointer}.select-item.icon-driven.sc-inno-input:not(.can-favorite){grid-template-columns:auto minmax(0, 1fr) 16px}.select-item.icon-driven.can-favorite.sc-inno-input{grid-template-columns:auto minmax(0, 1fr) 24px}.select-item.can-favorite.sc-inno-input .star.sc-inno-input{display:block;font-size:24px;position:relative}.select-item.separator.sc-inno-input{border-bottom:3px double #ffffff}.select-item.can-favorite.sc-inno-input:not(.selected):not(.icon-driven){grid-template-columns:minmax(0, 1fr) 24px}.select-item.can-favorite.selected.sc-inno-input:not(.icon-driven){grid-template-columns:minmax(0, 1fr) 16px 24px}.sc-inno-input-h{display:block;height:56px;min-height:56px;max-height:56px;padding:0px 16px 0px 16px;margin:5px 5px 8px 5px;border:1px solid #9aacb4;cursor:text;position:relative}.textareamode.sc-inno-input-h{height:100%;max-height:unset;margin:0;padding:16px 5px 20px 16px;position:relative;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;user-select:none}.can-show-errors.sc-inno-input-h{margin-bottom:23px}.light.sc-inno-input-h{background-color:#ffffff;color:#40545b;font-size:16px;font-weight:400}.light.sc-inno-input-h:hover:not(.disabled):not(:disabled){border:1px solid #40545b;box-shadow:inset 0px 0px 0px 1px #40545b}.light.isactive.sc-inno-input-h{border:1px solid #08191f;box-shadow:inset 0px 0px 0px 1px #08191f}.light.isactive.sc-inno-input-h:hover:not(.disabled):not(:disabled){box-shadow:inset 0px 0px 0px 1px #08191f;border:1px solid #08191f}.light.isactive.disabled.sc-inno-input-h,.light.isactive.sc-inno-input-h:disabled{box-shadow:inset 0px 0px 0px 1px #9aacb4;border:1px solid #9aacb4;background-color:rgba(8, 25, 31, 0.05)}.light.focused.sc-inno-input-h{outline-color:#1491EB;outline-style:solid;outline-width:2px;outline-offset:2px}.light.invalid.sc-inno-input-h{box-shadow:inset 0px 0px 0px 1px #CB0E0E;border:1px solid #CB0E0E}.light.disabled.sc-inno-input-h{background-color:rgba(8, 25, 31, 0.2);border:1px solid transparent}.dark.sc-inno-input-h{background-color:#08191f;color:#b2c1c7;font-size:16px;font-weight:400}.dark.sc-inno-input-h:hover:not(.disabled):not(:disabled){box-shadow:inset 0px 0px 0px 1px #9aacb4}.dark.disabled.sc-inno-input-h{background-color:rgba(255, 255, 255, 0.1);border:1px solid transparent}.dark.isactive.sc-inno-input-h{border:1px solid #e1f000;box-shadow:inset 0px 0px 0px 1px #e1f000}.dark.isactive.sc-inno-input-h:hover:not(.disabled):not(:disabled){box-shadow:inset 0px 0px 0px 1px #9aacb4;border:1px solid #9aacb4}.dark.isactive.disabled.sc-inno-input-h,.dark.isactive.sc-inno-input-h:disabled{box-shadow:inset 0px 0px 0px 1px #9aacb4;border:1px solid #9aacb4}.dark.focused.sc-inno-input-h{outline-color:#1491EB;outline-style:solid;outline-width:2px;outline-offset:2px}.dark.invalid.sc-inno-input-h{box-shadow:inset 0px 0px 0px 1px #FF88AB;border:1px solid #FF88AB}.sc-inno-input-h.sc-inno-input-s>input,.sc-inno-input-h .sc-inno-input-s>input{width:100%;border:none;outline:none;margin-top:26px}.sc-inno-input-h .label.sc-inno-input{left:auto;right:auto;z-index:1;pointer-events:none;transition:0.2s cubic-bezier(0.84, 0, 0.58, 1) all;transform:translate(0rem, 1.2rem) scale(1);position:absolute;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sc-inno-input-h .label.light.invalid.sc-inno-input{color:#CB0E0E}.sc-inno-input-h .label.light.disabled.sc-inno-input{color:#40545b}.sc-inno-input-h .label.dark.invalid.sc-inno-input{color:#FF88AB}.sc-inno-input-h .label.dark.disabled.sc-inno-input{color:#b2c1c7}.sc-inno-input-h .label.float.sc-inno-input{transform:translate(0rem, 0.5rem) scale(1);font-size:12px}.sc-inno-input-h .label.textareamode.sc-inno-input{transform:translate(0rem, -0.2rem) scale(1)}.sc-inno-input-h .label.textareamode.floatarea.sc-inno-input{transform:translate(0rem, -0.9rem) scale(1);font-size:12px}.disabled.sc-inno-input-h{border:1px solid #9aacb4}.seizer.sc-inno-input{position:absolute;bottom:-17px;right:-15px;z-index:1}.seizer.seizer-horizontal.sc-inno-input{cursor:ew-resize}.seizer.seizer-vertical.sc-inno-input{cursor:ns-resize}.seizer.seizer-both.sc-inno-input{cursor:nw-resize}";
const InnoInputStyle0 = innoInputCss;

const InnoInput$1 = /*@__PURE__*/ proxyCustomElement(class InnoInput extends H {
    constructor() {
        super();
        this.__registerHost();
        this.valueChanged = createEvent(this, "valueChanged", 7);
    }
    get hostElement() { return this; }
    inputElementRef;
    seizerElementRef;
    mutationObserver;
    resizeObserver;
    /**
     * Fired when the new value is valid.
     */
    valueChanged;
    isActive;
    shouldFloat;
    textareaMode = false;
    /**
     * Whether the input is focused or not.
     */
    isFocused;
    /**
     * Whether the inno-input component is disabled or not. Probably not needed to be set since the component
     * automatically detects if the inserted input element is disabled or not.
     * The inno-input component will also be in a disabled state when the input element is readonly.
     */
    disabled = false;
    /**
     * Floating label for the input.
     */
    label;
    /**
     * Color variant of the input.
     */
    variant = 'light';
    /**
     * Error message to show. If you don't want to use this property you can manually add 'inno-error' components inside the 'inno-input' component.
     * You can either use this property or use the manually added errors. Can't use both at the same time.
     */
    error;
    /**
     * The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
     * <br/><br/>Only has an effect if 'error' has a value.
     */
    errortype;
    /** @internal */ //for now this stays as non public, if it causes some issues for someone, they can disable it
    valuePropReDefine = true;
    /**
     * When you click on the inno-input a focus() command is called on the input element.
     * This might cause that the caret position will be at the beginnging of the input's value.
     * Set this to true if you want to select all of the text by default.
     */
    selectOnFocus = false;
    /**
     * When you click on the inno-input a focus() command is called on the input element.
     * This might cause that the caret position will be at the beginnging of the input's value.
     * Set this to true if you want the caret position to be at the end. Only has an effect if the input type is 'text'.
     * Has no effect if 'selectOnFocus' is also true.
     */
    caretPosEndOnFocus = false;
    /**
     * Whether the textarea is resizeable.
     * Only has effect if textarea is provided as wrapped element.
     */
    resizeable = false;
    /**
     * Set the resize direction.
     * Only has effect if textarea is provided as wrapped element.
     */
    resizeMode = 'both';
    /**
     * The floating label is an absolutely positioned element meaning if it is too long it will grow out of the boundaries of the InnoInput component.
     * By default the InnoInput component automatically resizes the floating label so it will fit inside.
     * You can turn this behavior off e.g. if you are sure the label will always fit or it causes some issues.
     */
    disableFloatingLabelAutoResize = false;
    isValid = true;
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
        // if (!this.inputElementRef || !this.valuePropReDefine) {
        //   return;
        // }
        // let elementPrototype = Object.getPrototypeOf(this.inputElementRef);
        // let descriptor = Object.getOwnPropertyDescriptor(elementPrototype, 'value');
        // let thisref = this;
        // Object.defineProperty(this.inputElementRef, 'value', {
        //   get: function () {
        //     return descriptor.get.apply(this, arguments);
        //   },
        //   set: function () {
        //     descriptor.set.apply(this, arguments);
        //     setTimeout(() => thisref.hostElement.dispatchEvent(new globalThis.Event('reCheckInnoInputValue', { bubbles: true })), 0);
        //   },
        // });
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
        console.log("Focusin" + this.hostElement.id);
        this.shouldFloat = true;
        this.isActive = true;
        this.isFocused = true;
    }
    onFocusout() {
        console.log("Focusout" + this.hostElement.id);
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
        return (h(Host, { key: '2b88e1c7e062e54f7bcba0476fa8c6036d661ab2', class: {
                'input-container': true,
                'isactive': this.isActive,
                'focused': this.isFocused,
                'light': this.variant === 'light',
                'dark': this.variant === 'dark',
                'disabled': shouldDisable,
                'invalid': !this.isValid || errorSpecified,
                'can-show-errors': canShowErrors,
                'textareamode': this.textareaMode,
            }, onClick: () => this.activateInput() }, h("span", { key: 'b4936325615fce4f2f38c07e1790522626abc005', class: {
                label: true,
                float: this.shouldFloat && !this.textareaMode,
                floatarea: this.shouldFloat && this.textareaMode,
                disabled: shouldDisable,
                light: this.variant === 'light',
                dark: this.variant === 'dark',
                invalid: !this.isValid || errorSpecified,
                textareamode: this.textareaMode,
            }, ref: el => this.floatingLabel = el, innerHTML: sanitizeHtml(this.label) }), h("slot", { key: 'a47c4224357dcbe2fc68054e7a223df33f2316f2' }), this.seizerElement(), this.errorElement()));
    }
    static get formAssociated() { return true; }
    static get style() { return InnoInputStyle0; }
}, [70, "inno-input", {
        "isFocused": [1028, "is-focused"],
        "disabled": [1540],
        "label": [1025],
        "variant": [1025],
        "error": [1025],
        "errortype": [1025],
        "valuePropReDefine": [4, "value-prop-re-define"],
        "selectOnFocus": [1028, "select-on-focus"],
        "caretPosEndOnFocus": [1028, "caret-pos-end-on-focus"],
        "resizeable": [1028],
        "resizeMode": [1025, "resize-mode"],
        "disableFloatingLabelAutoResize": [1028, "disable-floating-label-auto-resize"],
        "isActive": [32],
        "shouldFloat": [32],
        "textareaMode": [32],
        "isValid": [32]
    }, [[0, "input", "inputChanged"], [0, "reCheckInnoInputValue", "reCheckValue"], [0, "focusin", "onFocus"], [0, "focusout", "onFocusout"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-input", "inno-error", "inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoInput$1);
            }
            break;
        case "inno-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "inno-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoInput = InnoInput$1;
const defineCustomElement = defineCustomElement$1;

export { InnoInput, defineCustomElement };

//# sourceMappingURL=inno-input.js.map