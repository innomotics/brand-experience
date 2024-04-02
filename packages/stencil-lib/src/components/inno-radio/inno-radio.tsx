import { Component, Host, h, Prop, AttachInternals, State, Element, Event, EventEmitter, Listen, Method } from '@stencil/core';

/**
 * Represents the default radiobutton for the Innomics applications.
 */
@Component({
  tag: 'inno-radio',
  styleUrl: 'inno-radio.scss',
  shadow: true,
  formAssociated: true,
})
export class InnoRadio {
  @Element()
  hostElement: HTMLElement;

  @AttachInternals()
  elementInternals: ElementInternals;

  @State()
  isFocused = false;

  /**
   * Theme variant of the component.
   */
  @Prop({ mutable: true })
  variant: 'dark' | 'light' = 'light';

  /**
   * The tab index.
   */
  @Prop({ mutable: true })
  tabIdx: number = 0;

  /**
   *
   */
  @Prop()
  name: string;

  /**
   * Radio button value.
   */
  @Prop()
  value: string;

  /**
   * Label to show.
   */
  @Prop()
  label = '';

  /**
   * Current form value for the connected radio button elements.
   */
  @Prop({ mutable: true })
  formValue: string | undefined;

  /**
   * Whether component is disabled.
   */
  @Prop({ mutable: true, reflect: true })
  disabled = false;

  /**
   * Whether the component is readonly.
   */
  @Prop({ mutable: true, reflect: true })
  readonly = false;

  /**
   * Whether the checkbox have to be selected.
   */
  @Prop({ mutable: true, reflect: true })
  required = false;

  /**
   * Checked status has been changed.
   */
  @Event()
  valueChange: EventEmitter<string>;

  get form() {
    return this.elementInternals.form;
  }

  get type() {
    return this.hostElement.localName;
  }

  @Listen('focusin')
  onFocus() {
    if (this.elementInDisabledInteractionMode()) {
      this.isFocused = false;
    } else {
      this.isFocused = true;
    }
  }

  // Update the form value
  // and remove the selection for the given control
  @Method()
  async unselect(formValue: string) {
    this.formValue = formValue;
    this.elementInternals.setFormValue(null);
  }

  @Listen('focusout')
  onFocusOut() {
    this.isFocused = false;
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      this.dispatchSelection();
    }
  }

  isChecked() {
    return this.value === this.formValue;
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  getTarget() {
    if (this.hostElement.hasAttribute('formControlName')) {
      return 'angular';
    } else {
      return 'html';
    }
  }

  // Dispatch the form value among the normal form elements
  // Iterate over the control which have the same name as this control
  // and clear the form state and selection
  handleHtmlForm() {
    console.log('handle form');

    const elements = this.elementInternals.form.elements.namedItem(this.name) as RadioNodeList;
    elements.forEach(node => {
      // Double cast because of typescript casting error
      const radioControl = node as any as InnoRadio;

      if (radioControl.value !== this.value) {
        radioControl.unselect(this.value);
      }
    });
  }

  handleAngularForm() {
    // Angular form is handled by a custom radio button
    // which will dispatch the value for the given
  }

  // Check whether the component cannot be interacted
  // Like disabled or readonly modes.
  elementInDisabledInteractionMode() {
    return this.disabled || this.readonly;
  }

  dispatchSelection() {
    if (this.elementInDisabledInteractionMode()) {
      return;
    }

    console.log('DISPATCH ' + this.value);

    this.formValue = this.value;
    this.elementInternals.setFormValue(this.value, 'checked');
    this.valueChange.emit(this.value);

    if (this.getTarget() === 'html') {
      this.handleHtmlForm();
    } else {
      this.handleAngularForm();
    }
  }

  checkRequiredState(): boolean {
    if (this.elementInDisabledInteractionMode()) {
      return false;
    }

    // Further processing may required
    // Different targets set the status differently

    return this.required;
  }

  checkErrorState(): boolean {
    if (this.elementInDisabledInteractionMode()) {
      return false;
    }

    // No error state for checked state
    // Only valid error state for now is the required and not checked case
    // The error class interferes with the hover and active classes
    if (this.isChecked()) {
      return false;
    }

    if (!this.elementInternals.validity.valid) {
      return true;
    }

    // Angular reactive form compatibility
    if (this.hostElement.classList.contains('ng-invalid')) {
      return true;
    }

    // Further processing may required
    // Different targets set the status differently

    return false;
  }

  checkReadonlyState(): boolean {
    return this.disabled ? false : this.readonly;
  }

  commonStyles() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
      checked: this.isChecked(),
      focus: this.isFocused,
      disabled: this.disabled,
      error: this.checkErrorState(),
      readonly: this.checkReadonlyState(),
      required: this.checkRequiredState(),
    };
  }

  checkboxComponent() {
    const classes = {
      ...this.commonStyles(),
      checkbox: true,
    };

    return (
      <div class={classes} onClick={() => this.dispatchSelection()}>
        {this.checkSignComponent()}
      </div>
    );
  }

  checkSignComponent() {
    const classes = {
      ...this.commonStyles(),
      checksign: true,
    };

    return <div class={classes}></div>;
  }

  labelComponent() {
    const classes = {
      ...this.commonStyles(),
      label: true,
    };

    return (
      <span class={classes} onClick={() => this.dispatchSelection()}>
        {this.label}
      </span>
    );
  }

  render() {
    const tabIndexValue = this.elementInDisabledInteractionMode() ? -1 : this.tabIdx;

    return (
      <Host role="radio" tabIndex={tabIndexValue} ariaChecked={this.isChecked()}>
        {this.checkboxComponent()}
        {this.labelComponent()}
      </Host>
    );
  }
}
