import { Component, Host, Prop, h, Event, EventEmitter, Element, Listen, State, AttachInternals } from '@stencil/core';
import { a11yBoolean } from '../../utils/a11y';
import { isNotPresent } from '../../utils/utils';

/**
 * Checkbox for Innomatics design system.
 */
@Component({
  tag: 'inno-checkbox',
  styleUrl: 'inno-checkbox.scss',
  scoped: true,
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
   * Form entry name.
   */
  @Prop()
  name: string;

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
   * Whether indeterminate state is enabled for the component.
   * The component is in indeterminate state if
   * it is explicity requested
   * and the checked status is not defined
   */
  @Prop()
  indeterminate: boolean = false;

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
   * Checked status has been changed.
   */
  @Event()
  valueChange: EventEmitter<boolean>;

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

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
    if (this.checked || this.checkIndeterminateState()) {
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

  // Value is undefined (no exact value or interaction)
  // and indeterminate is explicitly requested
  checkIndeterminateState(): boolean {
    return isNotPresent(this.checked) && this.indeterminate;
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
      indeterminate: this.checkIndeterminateState(),
    };
  }

  inputElement() {
    return (
      <input
        type="checkbox"
        aria-checked={a11yBoolean(this.checked)}
        tabIndex={-1}
        name={this.name}
        disabled={this.disabled}
        checked={this.checked}
        required={this.required}
        onChange={event => this.changeCheckedState((event.target as any).checked)}
      />
    );
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
      <Host tabIndex={tabIndexValue} role="checkbox" aria-checked={a11yBoolean(this.checked)}>
        {this.inputElement()}
        {this.checkboxComponent()}
        {this.labelComponent()}
      </Host>
    );
  }
}
