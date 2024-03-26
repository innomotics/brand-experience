import { Component, Host, Prop, h, Event, EventEmitter, Element, Listen, State, AttachInternals } from '@stencil/core';

/**
 * Checkbox for Innomatics design system.
 */
@Component({
  tag: 'inno-checkbox',
  styleUrl: 'inno-checkbox.scss',
  shadow: true,
  formAssociated: true,
})
export class InnoCheckbox {
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
   * Label to show.
   */
  @Prop()
  label = '';

  /**
   * Whether element is checked.
   */
  @Prop({ mutable: true, reflect: true })
  checked: boolean | undefined;

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
  valueChange: EventEmitter<boolean>;

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
      this.changeCheckedState(!this.checked);
    }
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  // Check whether the component cannot be interacted
  // Like disabled or readonly modes.
  elementInDisabledInteractionMode() {
    return this.disabled || this.readonly;
  }

  changeCheckedState(newState: boolean) {
    if (this.elementInDisabledInteractionMode()) {
      return;
    }

    this.checked = newState;
    this.valueChange.emit(this.checked);
    this.elementInternals.setFormValue(this.checked ? 'on' : 'off');
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
      <div class={classes} onClick={() => this.changeCheckedState(!this.checked)}>
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
      <span class={classes} onClick={() => this.changeCheckedState(!this.checked)}>
        {this.label}
      </span>
    );
  }

  render() {
    const tabIndexValue = this.elementInDisabledInteractionMode() ? -1 : this.tabIdx;

    return (
      <Host tabIndex={tabIndexValue} role="checkbox" ariaChecked={this.checked}>
        {this.checkboxComponent()}
        {this.labelComponent()}
      </Host>
    );
  }
}
