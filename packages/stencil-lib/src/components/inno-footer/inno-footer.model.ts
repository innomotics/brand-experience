/**
 *
 */
export type FooterContent = FooterText | FooterIcon;

/**
 * Contains the details of the text footer entry.
 */
export interface FooterText {
  readonly type: 'footer:text';
  readonly text: string;
}

/**
 *
 */
export interface FooterIcon {
  readonly type: 'footer:icon';
  readonly icon: string;
}
