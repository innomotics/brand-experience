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

  recalculateScrollbar() {
    this.scrollBar.recalculate();
    this.setMask(this.scrollBar.getScrollElement());
  }

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    this.recalculateScrollbar();
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
    this.scrollBar = new SimpleBar(this.hostElement.querySelector('.table-div'), { autoHide: false });
    this.maskElement = this.hostElement.querySelector<HTMLDivElement>('.mask-layer');
    let table = this.hostElement.querySelector('table');
    table.classList.add('inno-table');
    if (this.variant == 'dark') {
      table.classList.add('dark');
    }
    this.scrollBar.getScrollElement().addEventListener('scroll', this.scrollListener, { passive: true });

    this.recalculateScrollbar();
  }

  componentWillUnload() {
    this.scrollBar.getScrollElement().removeEventListener('scroll', this.scrollListener);
  }

  render() {
    return (
      <Host class={{ light: this.variant === 'light', dark: this.variant === 'dark' }}>
        <div class="table-wrapper">
          <div class="mask-layer"></div>
          <div class="table-div">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
