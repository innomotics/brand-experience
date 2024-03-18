import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'inno-accordion',
  styleUrl: 'inno-accordion.scss',
  scoped: true
})
export class InnoAccordion {
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';
  @Prop({ mutable: true }) icon: string;
  @Prop({ mutable: true }) collapsed = false;
  @Prop() label: string;

  @Element() hostElement!: HTMLInnoAccordionElement;

  private anchorElementRef: HTMLAnchorElement;

  private onHeaderClick() {
    this.collapsed = !this.collapsed;
  }

  private toggleHoveredClass(hovered: boolean) {
    if (hovered) {
      this.anchorElementRef.classList.add("hovered");
    } else {
      this.anchorElementRef.classList.remove("hovered");
    }
  }

  render() {
    let iconSize: number = 24;
    let icon: string = this.collapsed ? 'plus' : 'minus';
    return (
      <Host>
        <a href='#'
          class={{
            'accordion': true,
            'light': this.variant === 'light',
            'dark': this.variant === 'dark',
          }}
          ref={(ref) => (this.anchorElementRef = ref)}
        >

          <div class={{
            'accordion-header': true,
            'light': this.variant === 'light',
            'dark': this.variant === 'dark',
          }}
            onClick={() => this.onHeaderClick()}
            onMouseEnter={() => this.toggleHoveredClass(true)}
            onMouseLeave={() => this.toggleHoveredClass(false)}
          >

            <span class={{
              'accordion-header-title': true,
              'light': this.variant === 'light',
              'dark': this.variant === 'dark',
            }}>{this.label}</span>

            <inno-icon icon={icon} size={iconSize} theme={this.variant}></inno-icon>

          </div>

          <section class={{
            'accordion-content': true,
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