import { Component, Host, h, State, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { InnoTimePickerTexts } from './inno-time-picker.api';
import { DateTime } from 'luxon';

const HOURS = [...Array(24).keys()];
const MINUTES = [...Array(60).keys()];
const SECONDS = [...Array(60).keys()];

const DEFAULT_TEXTS: InnoTimePickerTexts = {
  confirmLabel: 'Ok',
  hourLabel: 'Hr',
  minuteLabel: 'Min',
  secondLabel: 'Sec',
};

@Component({
  tag: 'inno-time-picker',
  styleUrl: 'inno-time-picker.scss',
  scoped: true,
})
export class InnoTimePicker {
  @Element() hostElement: HTMLElement & InnoTimePicker;

  /**
   * Theme variant of the component.
   */
  @Prop() theme: 'light' | 'dark' = 'light';

  /**
   * Component text configuration.
   */
  @Prop() texts?: InnoTimePickerTexts | undefined;

  /**
   * Date format string.

   */
  @Prop() format: string = 'HH:mm:ss';
  //    * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.

  /**
   *
   */
  @Prop() time: string | undefined;

  @State() private selectedHour: number | undefined;
  @State() private selectedMinute: number | undefined;
  @State() private selectedSecond: number | undefined;

  /**
   *
   */
  @Event() valueChange: EventEmitter;

  componentDidLoad() {
    const button = this.hostElement.querySelector('.confirm-container button') as HTMLElement;
    button.style.width = '100%';
  }

  private sendValueChange() {
    const time = DateTime.fromObject({ hour: this.selectedHour, minute: this.selectedMinute, second: this.selectedSecond });
    this.valueChange.emit(time.toFormat(this.format));
  }

  private titleContainer() {
    return (
      <div class="title-container">
        <div>{this.texts?.hourLabel ?? DEFAULT_TEXTS.hourLabel}</div>
        <div>{this.texts?.minuteLabel ?? DEFAULT_TEXTS.minuteLabel}</div>
        <div>{this.texts?.secondLabel ?? DEFAULT_TEXTS.secondLabel}</div>
      </div>
    );
  }

  private hourColumn() {
    return (
      <div class="column-container">
        <div class="column">
          {HOURS.map(hour => {
            const classes = { entry: true, active: hour === this.selectedHour };

            return (
              <div class={classes} key={hour} onClick={() => (this.selectedHour = hour)}>
                {hour}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  private minuteColumn() {
    return (
      <div class="column-container">
        <div class="column">
          {MINUTES.map(minute => {
            const classes = { entry: true, active: minute === this.selectedMinute };

            return (
              <div class={classes} key={minute} onClick={() => (this.selectedMinute = minute)}>
                {minute}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  private secondColumn() {
    return (
      <div class="column-container">
        <div class="column">
          {SECONDS.map(second => {
            const classes = { entry: true, active: second === this.selectedSecond };

            return (
              <div class={classes} key={second} onClick={() => (this.selectedSecond = second)}>
                {second}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  private valuesContainer() {
    return (
      <div class="picker-container">
        {this.hourColumn()}
        {this.minuteColumn()}
        {this.secondColumn()}
      </div>
    );
  }

  private confirmContainer() {
    return (
      <div class="confirm-container">
        <inno-button variant="secondary" onClick={() => this.sendValueChange()}>
          {this.texts?.confirmLabel ?? DEFAULT_TEXTS.confirmLabel}
        </inno-button>
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.titleContainer()}
        {this.valuesContainer()}
        {this.confirmContainer()}
      </Host>
    );
  }
}
