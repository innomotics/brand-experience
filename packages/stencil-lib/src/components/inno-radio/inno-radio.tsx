import { Component, Host, h, Prop, AttachInternals, State, Element, Event, EventEmitter, Listen, Method } from '@stencil/core';
import { a11yBoolean } from '../../utils/a11y';

/**
 * Represents the default radiobutton for the Innomics applications.
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

  inputElement: HTMLInputElement;

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
   * Form entry name.
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

  // /**
  //  * Current form value for the connected radio button elements.
  //  */
  // @Prop({ mutable: true })
  // formValue: string | undefined;

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

  @Listen('input')
  inputChange(_event) {
    console.log('INPUT CHANGE EVENT');
  }

  // Update the form value
  // and remove the selection for the given control
  @Method()
  async unselect(_formValue: string) {
    // this.formValue = formValue;
    this.checked = false;
    this.elementInternals.setFormValue(null);
  }

  // isChecked() {
  //   return this.value === this.formValue;
  // }

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
    const elements = this.elementInternals.form.elements.namedItem(this.name) as RadioNodeList;
    elements.forEach(node => {
      // Double cast because of typescript casting error
      const radioControl = node as any as InnoRadio;

      if (!(radioControl instanceof HTMLInputElement) && radioControl.value !== this.value) {
        radioControl.unselect(this.value);
      }
    });
  }

  // handleAngularForm() {
  //   // Angular form is handled by a custom radio button
  //   // which will dispatch the value for the given
  // }

  // Check whether the component cannot be interacted
  // Like disabled or readonly modes.
  elementInDisabledInteractionMode() {
    return this.disabled || this.readonly;
  }

  changeCheckedState(newValue: boolean) {
    if (this.elementInDisabledInteractionMode()) {
      return;
    }

    this.checked = newValue;
    if (this.inputElement) {
      this.inputElement.checked = newValue;
    }
    // this.inputElement.click();
    // this.checked = this.inputElement.checked;

    // this.formValue = this.value;
    // this.elementInternals.setFormValue(this.value, 'checked');
    this.valueChange.emit(this.value);

    if (this.getTarget() === 'html') {
      // this.handleHtmlForm();
    } else {
      // this.handleAngularForm();
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
    if (this.checked) {
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
      checked: this.checked,
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
        <input
          type="radio"
          aria-checked={a11yBoolean(this.checked)}
          tabindex={-1}
          name={this.name}
          value={this.value}
          disabled={this.disabled}
          checked={this.checked}
          required={this.required}
          onChange={event => {
            console.log(event);
            this.changeCheckedState((event.target as any).checked);
          }}
          onInput={_event => {
            console.log('INPUT');
          }}
          onselect={_event => {
            console.log('SELECT');
          }}
          ref={ref => (this.inputElement = ref)}
        />
        {this.checkboxComponent()}
        {this.labelComponent()}
      </Host>
    );
  }
}
