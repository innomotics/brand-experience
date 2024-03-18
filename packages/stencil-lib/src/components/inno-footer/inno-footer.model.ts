/**
 * Union type to model the available footer entries.
 */
export type FooterContent = FooterText | FooterIcon;

/**
 * Contains the details of the text footer entry.
 */
export interface FooterText {
  /**
   * Type information for the union type.
   */
  readonly type: 'footer:text';

  /**
   * User defined custom variables for the given entry.
   * Should be unique among the entries.
   * Unique identifier for the given text.
   * Will be emitted by the footer selection event.
   */
  readonly selector: string;

  /**
   * Text to show.
   */
  readonly text: string;
}

/**
 *
 */
export interface FooterIcon {
  /**
   *
   */
  readonly type: 'footer:icon';

  /**
   * Emitted value when the user clicks on the given entry.
   */
  readonly selector: string;

  /**
   *
   */
  readonly icon: string;
}
