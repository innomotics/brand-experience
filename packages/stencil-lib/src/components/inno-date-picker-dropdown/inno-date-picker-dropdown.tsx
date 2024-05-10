import { computePosition } from '@floating-ui/dom';
import { Component, Host, h, Element, State, Prop } from '@stencil/core';
import { DateChange } from '../inno-date-api/inno-date-api';
import { InnoDatePickerDropdownSettings } from './inno-date-picker-dropdown.api';

/**
 *
 */
@Component({
  tag: 'inno-date-picker-dropdown',
  styleUrl: 'inno-date-picker-dropdown.scss',
  scoped: true,
})
export class InnoDatePickerDropdown {
  @Element() hostElement: HTMLElement;

  /**
   * Color variant of the component.
   */
  @Prop() variant: 'dark' | 'light' = 'dark';

  /**
   * If true a date-range can be selected.
   */
  @Prop() range: boolean = false;

  @Prop() settings?: InnoDatePickerDropdownSettings;

  @State() show: boolean = false;
  @State() value: string | undefined;
  @State() selectedRange: DateChange | undefined;

  private dropdownHost: HTMLElement;
  private datePicker: HTMLElement;

  async showDrop() {
    const positionConfig = await computePosition(this.dropdownHost, this.datePicker, {
      placement: 'bottom',
    });

    this.datePicker.style.left = `${positionConfig.x}`;
    this.datePicker.style.top = `${positionConfig.y}`;

    this.show = true;
  }

  private changeVisibility() {
    this.show = !this.show;
  }

  private onDateRangeChange(range: DateChange) {
    if (range.to) {
      this.value = `${range.from} - ${range.to}`;
    } else {
      this.value = range.from;
    }
  }

  private variantClasses() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
    };
  }

  // private label() {
  //   if (this.selectedRange) {
  //     return `${this.selectedRange.from}`;
  //   }
  //   if (this.value) {
  //     return this.value;
  //   }
  // }

  private picker() {
    const pickerClasses = {
      ...this.variantClasses(),
      picker: true,
    };

    const labelClasses = {
      ...this.variantClasses(),
      'picker-label': true,
      'picker-label--hasvalue': this.value !== undefined,
    };

    const valueClasses = {
      'picker-value': true,
    };

    const iconName = this.show ? 'chevronupsmall' : 'calendar';
    const pickerIconClasses = {
      ...this.variantClasses(),
      'picker-icon': true,
    };

    return (
      <div class={pickerClasses} ref={ref => (this.dropdownHost = ref)} onClick={_ => this.changeVisibility()}>
        <div class={labelClasses}>
          <span>Starting date*</span>
        </div>
        <div class={valueClasses}>{this.value}</div>
        <div class={pickerIconClasses}>
          <inno-icon icon={iconName} size={32}></inno-icon>
        </div>
      </div>
    );
  }

  private calenderContainer() {
    const dropdownContainerClasses = {
      ...this.variantClasses(),
      'dropdown-container': true,
      'show': this.show,
    };

    return (
      <div class={dropdownContainerClasses} ref={ref => (this.datePicker = ref)}>
        <inno-date-picker
          range={this.range}
          onDateRangeChange={event => this.onDateRangeChange(event.detail)}
          onDateChange={event => this.onDateRangeChange(event.detail)}
        ></inno-date-picker>
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.picker()}
        {this.calenderContainer()}
      </Host>
    );
  }
}
