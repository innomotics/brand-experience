import { Element, Listen, Event, Prop, Component, Host, h, EventEmitter, State } from '@stencil/core';
import sanitizeHtml from 'sanitize-html';

@Component({
  tag: 'inno-input',
  styleUrl: 'inno-input.scss',
  scoped: true,
  formAssociated: true,
})
export class InnoInput {
  @Element() hostElement!: HTMLInnoInputElement & HTMLDivElement;
  private inputElementRef?: HTMLInputElement;
  private seizerElementRef: HTMLElement;
  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;

  /**
   * Fired when the new value is valid.
   */
  @Event() valueChanged: EventEmitter<string | number>;

  @State() isActive: boolean;

  @State() shouldFloat: boolean;

  @State() textareaMode = false;

  /**
   * Whether the input is focused or not.
   */
  @Prop({ mutable: true }) isFocused: boolean;

  /**
   * Whether the inno-input component is disabled or not. Probably not needed to be set since the component
   * automatically detects if the inserted input element is disabled or not.
   * The inno-input component will also be in a disabled state when the input element is readonly.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;

  /**
   * Floating label for the input.
   */
  @Prop({ mutable: true }) label: string;

  /**
   * Color variant of the input.
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';

  /**
   * Error message to show. If you don't want to use this property you can manually add 'inno-error' components inside the 'inno-input' component.
   * You can either use this property or use the manually added errors. Can't use both at the same time.
   */
  @Prop({ mutable: true }) error: string;

  /**
   * The input's validation error type, see: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   * <br/><br/>Only has an effect if 'error' has a value.
   */
  @Prop({ mutable: true }) errortype:
    | 'badInput'
    | 'customError'
    | 'patternMismatch'
    | 'rangeOverflow'
    | 'rangeUnderflow'
    | 'stepMismatch'
    | 'tooLong'
    | 'tooShort'
    | 'typeMismatch'
    | 'valid'
    | 'valueMissing'
    | undefined;

  /** @internal */ //for now this stays as non public, if it causes some issues for someone, they can disable it
  @Prop() valuePropReDefine: boolean = true;

  /**
   * When you click on the inno-input a focus() command is called on the input element.
   * This might cause that the caret position will be at the beginnging of the input's value.
   * Set this to true if you want to select all of the text by default.
   */
  @Prop({ mutable: true }) selectOnFocus: boolean = false;

  /**
   * When you click on the inno-input a focus() command is called on the input element.
   * This might cause that the caret position will be at the beginnging of the input's value.
   * Set this to true if you want the caret position to be at the end. Only has an effect if the input type is 'text'.
   * Has no effect if 'selectOnFocus' is also true.
   */
  @Prop({ mutable: true }) caretPosEndOnFocus: boolean = false;

  /**
   * Whether the textarea is resizeable.
   * Only has effect if textarea is provided as wrapped element.
   */
  @Prop({ mutable: true }) resizeable = false;

  /**
   * Set the resize direction.
   * Only has effect if textarea is provided as wrapped element.
   */
  @Prop({ mutable: true }) resizeMode: 'vertical' | 'horizontal' | 'both' = 'both';

  /**
   * The floating label is an absolutely positioned element meaning if it is too long it will grow out of the boundaries of the InnoInput component.
   * By default the InnoInput component automatically resizes the floating label so it will fit inside.
   * You can turn this behavior off e.g. if you are sure the label will always fit or it causes some issues.
   */
  @Prop({ mutable: true }) disableFloatingLabelAutoResize: boolean = false;

  @State() isValid: boolean = true;

  private floatingLabel: HTMLSpanElement;
  private resizeTimeout: any;

  get errorElements() {
    return [...Array.from(this.hostElement.querySelectorAll('inno-error:not(.explicit-error)'))] as HTMLInnoErrorElement[];
  }

  @Listen('input')
  inputChanged(event) {
    this.shouldFloat = true;
    this.isActive = true;
    this.setErrors(event.target);
    this.synchSeizerPosition();
  }

  private setErrors(element: any) {
    if (this.error != null && this.error !== '') {
      //if error is specified skip the manually added errors
      return;
    }

    this.errorElements.forEach(ee => (ee.active = false));
    if (!element.validity.valid) {
      this.isValid = false;
      //set everything off;

      let property: keyof typeof element.validity; // Type is 'foo' | 'bar'

      for (property in element.validity) {
        if (element.validity[property]) {
          let definedErrorElement = this.errorElements.find(ee => ee.type == property);
          if (definedErrorElement) {
            definedErrorElement.active = true;
          }
        }
      }
    } else {
      this.isValid = true;
    }

    if (this.isValid) {
      this.valueChanged.emit(this.value);
    }
  }

  private isValueEmpty(): boolean {
    return this.value === '' || this.value === undefined || this.value === null;
  }

  private get value(): any {
    return this.inputElementRef?.value;
  }

  private setFloatingLabelMaxWidth(): void {
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
  private reDefineInputValueProperty(): void {
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

  private startMutationObserver(): void {
    if (!!this.inputElementRef) {
      this.mutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
        let isDisabled: boolean = false;
        let isReadOnly: boolean = false;

        for (var i = 0, mutation: MutationRecord; (mutation = mutations[i]); i++) {
          if (mutation.attributeName == 'disabled') {
            isDisabled = (mutation.target as HTMLInputElement).disabled;
          } else if (mutation.attributeName == 'readonly') {
            isReadOnly = (mutation.target as HTMLInputElement).readOnly;
          }
        }

        this.disabled = isDisabled || isReadOnly;
      });

      this.mutationObserver.observe(this.inputElementRef, { attributes: true });
    }
  }

  private startResizeObserver(): void {
    if (!this.hostElement) {
      return;
    }
    this.resizeObserver = new ResizeObserver(() => {
      this.setFloatingLabelMaxWidth();
    });

    this.resizeObserver.observe(this.hostElement, { box: "border-box" });
  }

  componentDidLoad() {
    this.inputElementRef = this.hostElement.querySelector('input') ?? (this.hostElement.querySelector('textarea') as any);
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

  @Listen('reCheckInnoInputValue')
  reCheckValue() {
    this.setErrors(this.inputElementRef);
    this.shouldFloat = !this.isValueEmpty();
  }

  @Listen('focusin')
  onFocus() {
    this.shouldFloat = true;
    this.isActive = true;
    this.isFocused = true;
  }

  @Listen('focusout')
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

  private synchSeizerPosition() {
    if (!this.seizerElementRef) {
      return;
    }

    if (this.inputElementRef.scrollHeight > this.inputElementRef.clientHeight) {
      this.seizerElementRef.classList.add('seizer-with-scrollbar');
    } else {
      this.seizerElementRef.classList.remove('seizer-with-scrollbar');
    }
  }

  private onSeizerMouseDown(_event: MouseEvent) {
    const seizerMove = (event: MouseEvent) => this.onSeizerMove(event);

    const mouseUpListener = () => {
      window.removeEventListener('mousemove', seizerMove);
      window.removeEventListener('mouseup', mouseUpListener);
      this.inputElementRef.removeEventListener('mouseup', mouseUpListener);
    };

    window.addEventListener('mouseup', mouseUpListener);
    this.inputElementRef.addEventListener('mouseup', mouseUpListener);
    window.addEventListener('mousemove', seizerMove);
  }

  private onSeizerMove(event: MouseEvent) {
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

  private seizerElement() {
    const classes = {
      'seizer': true,
      'seizer-horizontal': this.resizeMode === 'horizontal',
      'seizer-vertical': this.resizeMode === 'vertical',
      'seizer-both': this.resizeMode === 'both',
    };

    if (this.resizeable) {
      return <inno-icon icon="resize" size={32} class={classes} ref={ref => (this.seizerElementRef = ref)} onMouseDown={event => this.onSeizerMouseDown(event)}></inno-icon>;
    } else {
      return null;
    }
  }

  private errorElement() {
    const errorSpecified = this.error != null && this.error !== '';

    if (errorSpecified) {
      return (
        <inno-error class="explicit-error" type={this.errortype} variant={this.variant} active={true}>
          {this.error}
        </inno-error>
      );
    } else {
      return null;
    }
  }

  render() {
    let errorSpecified = this.error != null && this.error !== '';
    let canShowErrors = this.errorElements?.length > 0 || errorSpecified;
    let shouldDisable = this.disabled || this.inputElementRef?.disabled || this.inputElementRef?.readOnly;
    this.setFloatingLabelMaxWidth();

    return (
      <Host
        class={{
          'input-container': true,
          'isactive': this.isActive,
          'focused': this.isFocused,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'disabled': shouldDisable,
          'invalid': !this.isValid || errorSpecified,
          'can-show-errors': canShowErrors,
          'textareamode': this.textareaMode,
        }}
        onClick={() => this.activateInput()}
      >
        <span
          class={{
            label: true,
            float: this.shouldFloat && !this.textareaMode,
            floatarea: this.shouldFloat && this.textareaMode,
            disabled: shouldDisable,
            light: this.variant === 'light',
            dark: this.variant === 'dark',
            invalid: !this.isValid || errorSpecified,
            textareamode: this.textareaMode,
          }}
          ref={el => this.floatingLabel = el}
          innerHTML={sanitizeHtml(this.label)}
        ></span>
        <slot></slot>
        {this.seizerElement()}
        {this.errorElement()}
      </Host>
    );
  }
}
