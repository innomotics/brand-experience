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

  private onHeaderClick() {
    this.collapsed = !this.collapsed;
  }

  render() {
    let iconSize: number = 24;
    let icon: string = this.collapsed ? 'plus' : 'minus';
    return (
      <Host>
        <a href='#' class={{
          'accordion': true,
          'light': this.variant === 'light',
          'dark': this.variant === 'dark',
        }}>

          <div class={{
            'accordion-header': true,
            'light': this.variant === 'light',
            'dark': this.variant === 'dark',
          }} onClick={() => this.onHeaderClick()}>

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