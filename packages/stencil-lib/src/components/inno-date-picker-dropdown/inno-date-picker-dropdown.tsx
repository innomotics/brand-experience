import { autoUpdate, computePosition, flip, shift } from '@floating-ui/dom';
import { Component, Host, h, Element, State, Prop, Event, EventEmitter, Watch, Listen } from '@stencil/core';
import { DateChange } from '../inno-date-context-api/inno-date-api';
import { isPresent } from '../../utils/utils';
import { DateTime } from 'luxon';

/**
 * Date-picker with dropdown.
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
   * Date format string.
   * See the date-picker component for more information.
   */
  @Prop() format: string = 'yyyy/LL/dd';

  /**
   * If true a date-range can be selected.
   * See the date-picker component for more information.
   */
  @Prop() range: boolean = false;

  /**
   * The selected starting range.
   * See the date-picker component for more information.
   */
  @Prop() from: string | undefined;

  /**
   * The selected end date.
   * See the date-picker component for more information.
   */
  @Prop() to: string | undefined;

  /**
   * The earliest date that can be selected by the date picker.
   * See the date-picker component for more information.
   */
  @Prop() minDate: string;

  /**
   * The latest date that can be selected by the date picker.
   * See the date-picker component for more information.
   */
  @Prop() maxDate: string;

  /**
   * The index of which day to start the week on.
   * See the date-picker component for more information.
   */
  @Prop() weekStartIndex = 0;

  /**
   * Format of the date strings.
   * See the date-picker component for more information.
   */
  @Prop() locale: string = undefined;

  /**
   * Show the days outside the selected month.
   * See the date-picker component for more information.
   */
  @Prop() showOuterDays: boolean = true;

  /**
   * Label of the dropdown component.
   */
  @Prop() label: string | undefined;

  @Prop() closeOnSelection = true;

  /**
   * Triggers if the date selection changes.
   * See the date-picker component for more information.
   */
  @Event() dateChange: EventEmitter<DateChange>;

  @State() show: boolean = false;
  @State() isOpen: boolean = false;
  @State() value: string | undefined;
  @State() selectedRange: DateChange | undefined;

  private dropdownHost: HTMLElement;
  private datePicker: HTMLElement;
  private disposeAutoUpdate?: () => void;

  private destroyAutoUpdate() {
    if (this.disposeAutoUpdate != undefined) {
      this.disposeAutoUpdate();
    }
  }

  private async computeTooltipPositionWithAutoUpdate() {
    await this.computeTooltipPos();

    return new Promise<void>((resolve) => {
      this.disposeAutoUpdate = autoUpdate(
        this.dropdownHost,
        this.datePicker,
        async () => {
          await this.computeTooltipPos();
          resolve();
        },
        {
          ancestorResize: true,
          ancestorScroll: true,
          elementResize: true,
          layoutShift: true
        }
      );
    });
  }

  async computeTooltipPos() {
    return new Promise<void>(async (resolve) => {
      const positionConfig = await computePosition(this.dropdownHost, this.datePicker, {
        placement: 'bottom',
        strategy: 'fixed',
        middleware: [
          shift(),
          flip({
            mainAxis: true,
            crossAxis: true,
            fallbackAxisSideDirection: 'start',
            fallbackStrategy: 'bestFit',
            padding: 5
          })
        ]
      });

      this.datePicker.style.left = `${positionConfig.x}`;
      this.datePicker.style.top = `${positionConfig.y}`;

      const { x, y } = positionConfig;
      Object.assign(this.datePicker.style, {
        left: x !== null ? `${x}px` : '',
        top: y !== null ? `${y - 1}px` : ''
      });

      resolve();
    });
  }

  private changeVisibility() {
    this.isOpen = !this.isOpen;
  }

  @Watch('isOpen')
  isOpenChanged() {
    if (this.isOpen) {
      this.computeTooltipPositionWithAutoUpdate().then(() => {
        this.show = true;
      });
    } else {
      this.show = false;
      this.destroyAutoUpdate();
    }
  }

  @Listen('keydown', { target: 'window' })
  keyboardHandler(ev: KeyboardEvent) {
    if (ev.key == 'Escape' && this.isOpen) {
      this.isOpen = false;
    }
  }

  @Listen('click', { target: 'window' })
  async onClick(event: globalThis.Event) {
    if (this.isOpen && this.show) {
      if (event.target !== this.hostElement && !this.hostElement.contains(event.target as Node)) {
        this.isOpen = false;
      }
    }
  }

  private onDateChange(range: DateChange) {
    if (range.to) {
      this.value = `${range.from} - ${range.to}`;
    } else {
      this.value = range.from;
    }

    if (this.closeOnSelection) {
      // close if not in range mode and value is selected
      if (!this.range) {
        this.isOpen = false;
      }
      // close if range mode and both values are selected
      else if (this.range && range.to) {
        this.isOpen = false;
      }
    }

    this.dateChange.emit(range);
  }

  @Watch('from')
  watchFromPropHandler(newValue: string) {
    let fromDate = newValue ? DateTime.fromFormat(newValue, this.format) : undefined;

    if (fromDate?.isValid) {
      this.onDateChange({ from: newValue, to: this.to });
    }
  }

  @Watch('to')
  watchToPropHandler(newValue: string) {
    let toDate = newValue ? DateTime.fromFormat(newValue, this.format) : undefined;

    if (toDate?.isValid) {
      this.onDateChange({ from: this.from, to: newValue });
    }
  }

  disconnectedCallback() {
    this.destroyAutoUpdate();
  }

  private variantClasses() {
    return {
      light: this.variant === 'light',
      dark: this.variant === 'dark',
    };
  }

  private picker() {
    const pickerClasses = {
      ...this.variantClasses(),
      picker: true,
    };

    const label = isPresent(this.label) ? this.label : 'Starting date*';
    const labelClasses = {
      ...this.variantClasses(),
      'picker-label': true,
      'picker-label--hasvalue': this.value !== undefined,
    };

    const valueClasses = {
      'picker-value': true,
    };

    const iconName = this.show ? 'chevron_up_small' : 'calendar';
    const pickerIconClasses = {
      ...this.variantClasses(),
      'picker-icon': true,
    };

    return (
      <div class={pickerClasses} ref={ref => (this.dropdownHost = ref)} onClick={_ => this.changeVisibility()}>
        <div class={labelClasses}>
          <span>{label}</span>
        </div>
        <div class={valueClasses}>{this.value}</div>
        <div class={pickerIconClasses}>
          <inno-icon icon={iconName} size={32}></inno-icon>
        </div>
      </div>
    );
  }

  private calendarContainer() {
    const dropdownContainerClasses = {
      ...this.variantClasses(),
      'dropdown-container': true,
      'show': this.show,
    };

    return (
      <div class={dropdownContainerClasses} ref={ref => (this.datePicker = ref)}>
        <inno-date-picker
          format={this.format}
          range={this.range}
          from={this.from}
          to={this.to}
          minDate={this.minDate}
          maxDate={this.maxDate}
          weekStartIndex={this.weekStartIndex}
          locale={this.locale}
          showOuterDays={this.showOuterDays}
          onDateChange={event => this.onDateChange(event.detail)}
        ></inno-date-picker>
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.picker()}
        {this.calendarContainer()}
      </Host>
    );
  }
}
