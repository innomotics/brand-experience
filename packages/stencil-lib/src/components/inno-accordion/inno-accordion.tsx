import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import sanitizeHtml from 'sanitize-html';

@Component({
  tag: 'inno-accordion',
  styleUrl: 'inno-accordion.scss',
  scoped: true
})
export class InnoAccordion {
  /**
   * Color variant of the accordion.
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';

  /**
   * You can programatically open/close the accordion with this property.
   */
  @Prop({ mutable: true }) collapsed = false;

  /**
   * Whether the accordion is the last in a group of accordions. Needed for styling.
   */
  @Prop({ mutable: true }) last = false;

  /**
   * Whether it is an accordion inside another accordion. Gives a different style then the main one.
   */
  @Prop({ mutable: true }) inner = false;

  /**
   * Text to display for the accordion. Always visible whether the accordion is opened or closed.
   */
  @Prop({ mutable: true }) label: string;

  /**
   * Secondary text for the accordion. Always visible whether the accordion is opened or closed.
   */
  @Prop({ mutable: true }) secondLabel: string;

  /**
   * This event is fired whenever the accordion is opened/closed via user interaction.
   */
  @Event() collapsedChanged: EventEmitter<{ element: HTMLInnoAccordionElement, collapsed: boolean }>;

  @Element() hostElement!: HTMLInnoAccordionElement;

  private anchorElementRef: HTMLAnchorElement;

  private onHeaderClick() {
    this.collapsed = !this.collapsed;
    this.collapsedChanged.emit({ element: this.hostElement, collapsed: this.collapsed });
  }

  private toggleHoveredClass(hovered: boolean) {
    if (hovered) {
      this.anchorElementRef.classList.add("hovered");
      this.anchorElementRef.querySelectorAll("inno-accordion a.accordion").forEach(accordion => {
        accordion.classList.add("hovered");
      });
    } else {
      this.anchorElementRef.classList.remove("hovered");
      this.anchorElementRef.querySelectorAll("inno-accordion a.accordion").forEach(accordion => {
        accordion.classList.remove("hovered");
      });
    }
  }

  render() {
    let iconSize: number = 24;
    let icon: string = this.collapsed ? this.inner ? 'chevron_down_small' : 'plus' : this.inner ? 'chevron_up_small' : 'minus';
    let headerTitle =
      <div class="accordion-header-titles">
        <span class={{
          'accordion-header-title': true,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'inner': this.inner
        }} innerHTML={sanitizeHtml(this.label)}></span>
        <span class={{
          'accordion-header-title': true,
          'second-label': true,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'inner': this.inner
        }} innerHTML={sanitizeHtml(this.secondLabel)}></span>
      </div>;

    return (
      <Host>
        <a class={{
          'accordion': true,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
          'last': this.last,
          'open': !this.collapsed,
          'inner': this.inner,
        }}
          ref={(ref) => (this.anchorElementRef = ref)}
        >

          <div class={{
            'accordion-header': true,
            'inner': this.inner,
            'light': this.variant === 'light',
            'dark': this.variant === 'dark',
          }}
            onClick={() => this.onHeaderClick()}
            onMouseEnter={() => this.toggleHoveredClass(true)}
            onMouseLeave={() => this.toggleHoveredClass(false)}
          >

            {!this.inner ? headerTitle : null}

            <inno-icon class={{
              'inner': this.inner,
            }} icon={icon} size={iconSize} variant={this.variant}></inno-icon>

            {this.inner ? headerTitle : null}

          </div>

          <section class={{
            'accordion-content': true,
            'inner': this.inner,
            'light': this.variant === 'light',
            'dark': this.variant === 'dark',
            hide: this.collapsed,
          }}>
            <slot></slot>
          </section>

        </a>
      </Host>
    );
  }

}