/**
 * Models the available footer content types.
 */
export type FooterContent = FooterText | FooterIcon;

/**
 * Text based footer content.
 */
export interface FooterText {
  /**
   * Type discriminator.
   */
  readonly type: 'footer:text';

  /**
   * User defined custom value which is emitted when
   * the given element is clicked.
   * Should be unique among the content entries.
   */
  readonly selector: string;

  /**
   * Text to show.
   */
  readonly text: string;
}

/**
 * Icon based footer content.
 */
export interface FooterIcon {
  /**
   * Type discriminator.
   */
  readonly type: 'footer:icon';

  /**
   * User defined custom value which is emitted when
   * the given element is clicked.
   * Should be unique among the content entries.
   */
  readonly selector: string;

  /**
   * Name of the icon.
   * On of the available ix icon names.
   */
  readonly icon: string;
}
