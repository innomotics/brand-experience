import { Element, Component, Host, Prop, h, Listen } from '@stencil/core';
import SimpleBar from 'simplebar';

@Component({
  tag: 'inno-table-base',
  styleUrl: 'inno-table-base.scss',
  scoped: true,
})
export class InnoTableBase {
  @Prop() variant: 'light' | 'dark' = 'light';
  @Element() hostElement: HTMLInnoTableBaseElement;
  maskElement: HTMLDivElement;
  scrollBar: SimpleBar;

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    this.scrollBar.recalculate();
    this.setMask(this.scrollBar.getScrollElement());
  }
  setMask(el: HTMLElement) {
    this.maskElement.classList.add('is-left-overflowing');
    this.maskElement.classList.add('is-right-overflowing');

    if (el.scrollLeft < 1) {
      this.maskElement.classList.remove('is-left-overflowing');
    }
    if (el.scrollWidth - el.scrollLeft - el.clientWidth < 1) {
      this.maskElement.classList.remove('is-right-overflowing');
    }
  }
  scrollListener = (event: any) => {
    this.setMask(event.target);
  };

  componentDidLoad() {
    this.scrollBar = new SimpleBar(this.hostElement.querySelector('.table-wrapper'), { autoHide: false });
    this.maskElement = this.hostElement.querySelector<HTMLDivElement>('.mask-layer');
    let table = this.hostElement.querySelector('table');
    table.classList.add('inno-table');
    this.scrollBar.getScrollElement().addEventListener('scroll', this.scrollListener, { passive: true });
  }

  componentWillUnload() {
    this.scrollBar.getScrollElement().removeEventListener('scroll', this.scrollListener);
  }

  render() {
    return (
      <Host class={{ light: this.variant === 'light', dark: this.variant === 'dark' }}>
        <div class="table-wrapper">
          <div class="mask-layer"></div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
