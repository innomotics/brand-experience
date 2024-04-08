import { Component, Host, h, Prop, AttachInternals, State, Element, Event, EventEmitter, Listen, Method } from '@stencil/core';
import { a11yBoolean } from '../../utils/a11y';
import { isNotPresent } from '../../utils/utils';

/**
 * Represents the default radio button for the Innomics applications.
 */
@Component({
  tag: 'inno-radio',
  styleUrl: 'inno-radio.scss',
  scoped: true,
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
   * Form entry group name.
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
   *
   */
  @Prop({ mutable: true, reflect: true })
  checked: boolean;

  /**
   * Whether component is disabled.
   * In this state no other state effects are applied to the element like error.
   */
  @Prop({ mutable: true, reflect: true })
  disabled = false;

  /**
   * Whether the component is readonly.
   * In this state no other state effects are applied to the element like error.
   */
  @Prop({ mutable: true, reflect: true })
  readonly = false;

  /**
   * Mark the component as required and show the required marker.
   * Validation is performed with this property.
   */
  @Prop({ mutable: true, reflect: true })
  required = false;

  /**
   * Whether the element is in error state.
   * Error state can be defined if manual error handling is required.
   */
  @Prop()
  error = false;

  /**
   * Emits the associated value.
   */
  @Event()
  valueChange: EventEmitter<string>;

  @Listen('focusin')
  onFocus() {
    if (this.elementInDisabledInteractionMode()) {
      this.isFocused = false;
    } else {
      this.isFocused = true;
    }
  }

  @Listen('focusout')
  onFocusOut() {
    this.isFocused = false;
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      this.changeCheckedState(true);
    }
  }

  // Update the form value
  // and remove the selection for the given control
  @Method()
  async unselect() {
    this.checked = false;
    // this.elementInternals.setFormValue(null);
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  // Value change is not propagated to the components
  // and the components should be notified explicitly.
  // Dispatch the form value among the form elements
  // Iterate over the control which have the same name as this control
  // and clear the form state and selection
  handleHtmlForm() {
    // this.elementInternals.setFormValue(this.value, 'checked');

    const form = this.elementInternals.form;

    if (isNotPresent(form)) {
      return;
    }

    const elements = form.elements.namedItem(this.name) as RadioNodeList;

    elements.forEach(node => {
      const radioControl = node as HTMLElement & InnoRadio;

      if (radioControl.tagName === 'INNO-RADIO' && radioControl.value !== this.value) {
        radioControl.unselect();
      }
    });
  }

  // Check whether the component cannot be interacted
  // Like disabled or readonly modes.
  elementInDisabledInteractionMode() {
    return this.disabled || this.readonly;
  }

  changeCheckedState(_newValue: boolean) {
    if (this.elementInDisabledInteractionMode()) {
      return;
    }

    this.checked = true;
    this.valueChange.emit(this.value);
    this.handleHtmlForm();
  }

  checkRequiredState(): boolean {
    if (this.elementInDisabledInteractionMode()) {
      return false;
    }

    return this.required;
  }

  checkErrorState(): boolean {
    if (this.elementInDisabledInteractionMode()) {
      return false;
    }

    // No error state for checked state
    // Only valid error state for now is the required and not checked case
    // The error class interferes with the hover and active classes
    if (this.checked) {
      return false;
    }

    if (this.error) {
      return true;
    }

    return !this.elementInternals.validity.valid;
  }

  checkReadonlyState(): boolean {
    return this.disabled ? false : this.readonly;
  }

  commonStyles() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
      checked: this.checked,
      focus: this.isFocused,
      disabled: this.disabled,
      error: this.checkErrorState(),
      readonly: this.checkReadonlyState(),
      required: this.checkRequiredState(),
    };
  }

  inputElement() {
    return (
      <input
        type="radio"
        aria-checked={a11yBoolean(this.checked)}
        tabindex={-1}
        name={this.name}
        value={this.value}
        disabled={this.disabled}
        checked={this.checked}
        required={this.required}
      />
    );
  }

  checkboxComponent() {
    const classes = {
      ...this.commonStyles(),
      checkbox: true,
    };

    return (
      <div class={classes} onClick={() => this.changeCheckedState(true)}>
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
      <span class={classes} onClick={() => this.changeCheckedState(true)}>
        {this.label}
      </span>
    );
  }

  render() {
    const tabIndexValue = this.elementInDisabledInteractionMode() ? -1 : this.tabIdx;

    return (
      <Host role="radio" tabIndex={tabIndexValue} aria-checked={a11yBoolean(this.checked)}>
        {this.inputElement()}
        {this.checkboxComponent()}
        {this.labelComponent()}
      </Host>
    );
  }
}
