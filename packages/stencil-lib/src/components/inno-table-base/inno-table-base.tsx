import { Element, Component, Host, Prop, h, Listen, Method } from '@stencil/core';
import SimpleBar from 'simplebar';

/**
 * Basic wrapper element for html tables. Adds some basic styling to the table and a custom scrollbar with fade-out effect.
 * Can be used without html table as well, in that case only the custom scrollbar with fade-out effect will be applied to the html element.
 */
@Component({
  tag: 'inno-table-base',
  styleUrl: 'inno-table-base.scss',
  scoped: true,
})
export class InnoTableBase {
  /**
   * Color variant of the table;
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';

  /**
   * The fade-out effect while scrolling is achieved by using mask-image and linear-gradient. 
   * For it to work properly a color must be set to be the same as the table's background color.
   */
  @Prop({ mutable: true }) maskColor: string = '#ffffff';

  @Element() hostElement: HTMLInnoTableBaseElement;
  maskElement: HTMLDivElement;
  scrollBar: SimpleBar;

  /**
   * The component tries its best to always apply the custom scrollbar and the fade-out effect automatically but there might be some cases 
   * (especially during/after initalization) where it just simply won't work. In those cases you can call this method manually.
   */
  @Method()
  async refresh() {
    this.recalculateScrollbar();
  }

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
    let leftMaskVisible: boolean = true;
    let rightMaskVisible: boolean = true;

    if (el.scrollLeft < 1) {
      this.maskElement.classList.remove('is-left-overflowing');
      leftMaskVisible = false;
    }
    if (el.scrollWidth - el.scrollLeft - el.clientWidth < 1) {
      this.maskElement.classList.remove('is-right-overflowing');
      rightMaskVisible = false;
    }

    this.maskElement.style.setProperty('background-color', leftMaskVisible || rightMaskVisible ? this.maskColor : 'transparent');
  }

  scrollListener = (event: any) => {
    this.setMask(event.target);
  };

  componentDidLoad() {
    this.scrollBar = new SimpleBar(this.hostElement.querySelector('.table-div'), { autoHide: false });
    this.maskElement = this.hostElement.querySelector<HTMLDivElement>('.mask-layer');
    let table = this.hostElement.querySelector('table');
    if (!!table) {
      table.classList.add('inno-table');
      if (this.variant == 'dark') {
        table.classList.add('dark');
      }
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
