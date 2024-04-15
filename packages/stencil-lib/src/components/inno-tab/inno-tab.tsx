import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State } from '@stencil/core';
import { requestAnimationFrameNoNgZone } from '../../utils/siemensix/requestAnimationFrame';
import { InnoTabItem } from '../inno-tab-item/inno-tab-item';
import { HTMLStencilElement } from '@stencil/core/internal';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tab component implementation is based on the Siemend IX implementation and on a custom implementation.
//
// Tab is modified to align with the Innomotics design.
//
// Ref: https://github.com/siemens/ix/blob/main/packages/core/src/components/tabs/tabs.tsx
// Ref: https://github.com/siemens/ix/blob/main/packages/core/src/components/tab-item/tab-item.tsx
// Ref: https://github.com/livebloggerofficial/Scrollable-Tabs-Slider/tree/main
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

type InnoTabItemHtmlElement = HTMLElement & InnoTabItem & HTMLStencilElement & any;

/**
 *
 */
@Component({
  tag: 'inno-tab',
  styleUrl: 'inno-tab.scss',
  scoped: true,
})
export class InnoTab {
  @Prop() theme: 'light' | 'dark' = 'light';

  @Element() hostElement!: HTMLElement & InnoTab;

  /**
   * Set default selected tab by index
   */
  @Prop({ mutable: true }) selected = 0;

  /**
   * Set layout width style
   */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /**
   * Show the navigation arrow for desktop.
   */
  @Prop() showArrow = true;

  /**
   * `selected` property changed
   */
  @Event() selectedChange: EventEmitter<number>;

  @State() totalItems = 0;
  @State() currentScrollAmount = 0;
  @State() scrollAmount = 100;
  @State() scrollActionAmount = 0;

  private windowStartSize = window.innerWidth;
  private arrowLeftElement: HTMLElement;
  private arrowRightElement: HTMLElement;

  private clickAction: {
    timeout: NodeJS.Timeout;
    isClick: boolean;
  } = {
    timeout: null,
    isClick: true,
  };

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    this.totalItems = 0;
    this.totalItems = this.getTabs().length;

    if (this.windowStartSize === 0) {
      this.windowStartSize = window.innerWidth;
      return;
    }
    this.move(this.windowStartSize - window.innerWidth);
    this.windowStartSize = window.innerWidth;
  }

  private getTabs() {
    return Array.from(this.hostElement.querySelectorAll('inno-tab-item'));
  }

  private getTab(tabIndex: number) {
    return this.getTabs()[tabIndex];
  }

  private getTabsWrapper() {
    return this.hostElement.querySelector('.items-content');
  }

  private showArrows() {
    if (!this.showArrow) {
      return false;
    }

    try {
      const tabWrapper = this.getTabsWrapper();
      // Check whether the wrapper width is less than the width of the scrollable content
      return tabWrapper.scrollWidth > Math.ceil(tabWrapper.getBoundingClientRect().width) && this.layout === 'auto';
    } catch (error) {
      return false;
    }
  }

  private showPreviousArrow() {
    try {
      return this.showArrows() && this.scrollActionAmount < 0;
    } catch (error) {
      return false;
    }
  }

  private showNextArrow() {
    try {
      const tabWrapper = this.getTabsWrapper();
      const tabWrapperRect = tabWrapper.getBoundingClientRect();

      return this.showArrows() && this.scrollActionAmount > (tabWrapper.scrollWidth - tabWrapperRect.width) * -1;
    } catch (error) {
      return false;
    }
  }

  private getArrowStyle(condition: boolean) {
    return {
      opacity: condition ? '1' : '0',
      zIndex: condition ? '1' : '-1',
    };
  }

  private move(amount: number, click = false) {
    const tabWrapper = this.getTabsWrapper();
    const maxScrollWidth = (tabWrapper.scrollWidth - tabWrapper.getBoundingClientRect().width) * -1;

    amount = this.currentScrollAmount + amount;
    amount = amount > 0 ? 0 : amount < maxScrollWidth ? maxScrollWidth : amount;

    const styles = [`transform: translateX(${amount}px);`, click ? 'transition: all ease-in-out 400ms;' : ''].join('');

    tabWrapper.setAttribute('style', styles);

    if (click) this.currentScrollAmount = this.scrollActionAmount = amount;
    else this.scrollActionAmount = amount;
  }

  private moveTabToView(tabIndex: number) {
    if (!this.showArrows()) return;

    const tab = this.getTab(tabIndex).getBoundingClientRect();
    const amount = tab.x * -1;
    this.move(amount, true);
  }

  private setSelected(index: number) {
    this.selected = index;
  }

  private clickTab(index: number) {
    if (this.dragStop()) {
      return;
    }

    const { defaultPrevented } = this.selectedChange.emit(index);
    if (defaultPrevented) {
      return;
    }

    this.setSelected(index);
    this.moveTabToView(index);
  }

  private dragStart(element: InnoTabItemHtmlElement, event: MouseEvent) {
    if (!this.showArrows()) return;
    if (event.button > 0) return;

    this.clickAction.timeout = this.clickAction.timeout === null ? setTimeout(() => (this.clickAction.isClick = false), 300) : null;

    const tabPositionX = parseFloat(window.getComputedStyle(element).left);
    const mousedownPositionX = event.clientX;
    const move = (event: MouseEvent) => this.dragMove(event, tabPositionX, mousedownPositionX);

    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', move, false);
      this.dragStop();
    });
    window.addEventListener('mousemove', move, false);
  }

  private dragMove(event: MouseEvent, tabX: number, mousedownX: number) {
    this.move(event.clientX + tabX - mousedownX);
  }

  private dragStop() {
    clearTimeout(this.clickAction.timeout);
    this.clickAction.timeout = null;

    if (this.clickAction.isClick) return false;

    this.currentScrollAmount = this.scrollActionAmount;
    this.clickAction.isClick = true;

    return true;
  }

  componentWillLoad() {
    const tabs = this.getTabs();

    tabs.map((element, index) => {
      element.setAttribute('theme', this.theme);
      element.setAttribute('layout', this.layout);
      element.setAttribute('selected', index === this.selected ? 'true' : 'false');
    });
  }

  componentDidRender() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;

    tabs.map((element, index) => {
      element.setAttribute('selected', index === this.selected ? 'true' : 'false');
    });
  }

  componentWillRender() {
    requestAnimationFrameNoNgZone(() => {
      const showNextArrow = this.showNextArrow();
      const previousArrow = this.showPreviousArrow();

      Object.assign(this.arrowLeftElement.style, this.getArrowStyle(previousArrow));
      Object.assign(this.arrowRightElement.style, this.getArrowStyle(showNextArrow));
    });
  }

  componentDidLoad() {
    const tabs = this.getTabs();
    tabs.forEach(element => {
      element.addEventListener('mousedown', event => this.dragStart(element, event));
    });
  }

  @Listen('tabClick')
  onTabClick(event: CustomEvent) {
    if (event.defaultPrevented) {
      return;
    }

    const target = event.target;
    const tabs = this.getTabs();

    tabs.forEach((tab, index) => {
      if (!tab.disabled && tab === target) {
        this.clickTab(index);
      }
    });
  }

  private themeClasses() {
    return {
      light: this.theme === 'light',
      dark: this.theme === 'dark',
    };
  }

  private arrowStyle(left: boolean) {
    return {
      ...this.themeClasses(),
      'arrow': true,
      'arrow-left': left,
      'arrow-right': !left,
    };
  }

  private leftArrow() {
    return (
      <div class={this.arrowStyle(true)} onClick={() => this.move(this.scrollAmount, true)} ref={ref => (this.arrowLeftElement = ref)}>
        <inno-icon icon="chevronleftsmall" size={24}></inno-icon>
      </div>
    );
  }

  private scrollContent() {
    return (
      <div class={{ 'tab-items': true }}>
        <div class={{ 'items-content': true }}>
          <slot></slot>
        </div>
      </div>
    );
  }

  private rightArrow() {
    return (
      <div class={this.arrowStyle(false)} onClick={() => this.move(-this.scrollAmount, true)} ref={ref => (this.arrowRightElement = ref)}>
        <inno-icon icon="chevronrightsmall" size={24}></inno-icon>
      </div>
    );
  }

  render() {
    return (
      <Host class={this.themeClasses()}>
        {this.leftArrow()}
        {this.scrollContent()}
        {this.rightArrow()}
      </Host>
    );
  }
}
