/**
 * Text configuration for the Inno time picker component.
 */
export interface InnoTimePickerTexts {
  /**
   * Hour column label.
   */
  readonly hourLabel?: string;

  /**
   * Minute column label.
   */
  readonly minuteLabel?: string;

  /**
   * Second column label.
   */
  readonly secondLabel?: string;

  /**
   * Confirm control label.
   */
  readonly confirmLabel?: string;
}

export interface InnoTimePickerSelection {
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly value: string;
}
