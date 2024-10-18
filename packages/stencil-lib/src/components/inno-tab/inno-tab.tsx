import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State, Method } from '@stencil/core';
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
  @Element() hostElement!: HTMLElement & InnoTab;

  /**
   * Theme variant of the component.
   */
  @Prop() theme: 'light' | 'dark' = 'light';

  /**
   * Set default selected tab by index
   * or undefined if not tab is selected.
   */
  @Prop({ mutable: true }) selected: number | undefined = undefined;

  /**
   * Set layout width style
   */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /**
   * Show the navigation arrow for desktop.
   */
  @Prop() showArrow = true;

  /**
   * Make the non-selected items always vivid without any opacity effect.
   */
  @Prop() alwaysEmphasized = false;

  /**
   * Minimalize the bottom decorator for the tab items.
   * Show only if the given item is interracted or selected.
   */
  @Prop() minimalDecorator = false;

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

    if (click) {
      this.currentScrollAmount = this.scrollActionAmount = amount;
    } else {
      this.scrollActionAmount = amount;
    }
  }

  private moveTabToView(tabIndex: number) {
    // if (!this.showArrows()) return;

    const tab = this.getTab(tabIndex);
    const dimension = tab.getBoundingClientRect();

    // Adjust the item additionally to calculate with the width of the left and right arrows.
    // Current value: width of the component divided by 2
    const adjustment = this.showArrow ? dimension.width / 2 : 0;
    const amount = (dimension.x - adjustment) * -1;
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

    this.adjustCurrentScrollAmount();
    this.setSelected(index);
    this.moveTabToView(index);
  }

  private adjustCurrentScrollAmount(): void {
    const tabWrapper = this.getTabsWrapper() as HTMLElement;
    this.currentScrollAmount = new DOMMatrixReadOnly(window.getComputedStyle(tabWrapper)["transform"]).m41; //translateX value
  }

  private dragStart(element: InnoTabItemHtmlElement, event: MouseEvent) {
    // if (!this.showArrows()) return;
    if (event.button > 0) return;

    // Dragstart is called at start of a drag or click event
    // Set the click event explicitly for the case if drag stop event target is not on the same component as the dragged item
    // and the tabClick handler is not invoked and the tab click won't work as the drag mode is on
    this.clickAction.isClick = true;
    this.clickAction.timeout = this.clickAction.timeout === null ? setTimeout(() => (this.clickAction.isClick = false), 300) : null;

    const tabPositionX = parseFloat(window.getComputedStyle(element).left);
    const mousedownPositionX = event.clientX;
    const move = (event: MouseEvent) => this.dragMove(event, tabPositionX, mousedownPositionX);

    // Refactored to a variable to remove event listener to prevent memory leak
    const mouseUpListener = () => {
      window.removeEventListener('mousemove', move, false);
      window.removeEventListener('mouseup', mouseUpListener);
      this.dragStop();
    };

    window.addEventListener('mouseup', mouseUpListener);
    window.addEventListener('mousemove', move, false);
  }

  private dragMove(event: MouseEvent, tabX: number, mousedownX: number) {
    this.move(event.clientX + tabX - mousedownX);
  }

  private dragStop(): boolean {
    clearTimeout(this.clickAction.timeout);
    this.clickAction.timeout = null;

    if (this.clickAction.isClick) {
      return false;
    }

    this.currentScrollAmount = this.scrollActionAmount;

    return true;
  }

  componentWillLoad() {
    const tabs = this.getTabs();

    tabs.map((element, index) => {
      element.setAttribute('theme', this.theme);
      element.setAttribute('layout', this.layout);
      element.setAttribute('selected', index === this.selected ? 'true' : 'false');
      element.setAttribute('always-emphasized', this.alwaysEmphasized ? 'true' : 'false');
      element.setAttribute('minimal-decorator', this.minimalDecorator ? 'true' : 'false');
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
      element.alwaysEmphasized = this.alwaysEmphasized;
      element.minimalDecorator = this.minimalDecorator;
    });
  }

  /**
   * Programatically change the selected tab by its index and scroll to the selected inno-tab-item inside the inno-tab.
   * Please note that manually changing the 'selected' property won't do any scrolling, that is only possible with this method.
   */
  @Method()
  async changeSelected(newIndex: number) {
    this.selected = newIndex;
    this.adjustCurrentScrollAmount();
    this.moveTabToView(this.selected);
  }

  @Listen('tabClick')
  onTabClick(event: CustomEvent) {
    // Click on the tab is called after the dragStop event
    // If there is an ongoing drag event then the click on the component should be ignored
    // not to select and move to the component and the click handler should be reseted
    // because the normal click will not work
    if (event.defaultPrevented || this.clickAction.isClick === false) {
      this.clickAction.isClick = true;
      return;
    }

    const target = event.target;
    const tabs = this.getTabs();

    tabs.forEach((tab, index) => {
      if (!tab.disabled && tab === target && this.clickAction.isClick) {
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
        <inno-icon icon="chevron_left_small" size={24}></inno-icon>
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
        <inno-icon icon="chevron_right_small" size={24}></inno-icon>
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
