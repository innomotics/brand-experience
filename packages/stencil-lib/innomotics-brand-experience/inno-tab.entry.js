import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Copied from the the original Siemens IX library.
//
// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/requestAnimationFrame.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Prevents angular from change detection when requesting an animation frame
 */
const requestAnimationFrameNoNgZone = (callback) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(callback);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(callback);
    }
    return setTimeout(callback);
};

const innoTabCss = ".sc-inno-tab-h{display:flex;align-items:center;width:auto;position:relative;font-family:\"InnomoticsHafferSQ\";font-weight:bold}.sc-inno-tab-h *.sc-inno-tab,.sc-inno-tab-h *.sc-inno-tab::after,.sc-inno-tab-h *.sc-inno-tab::before{box-sizing:border-box}.sc-inno-tab-h .sc-inno-tab::-webkit-scrollbar-button{display:none}.sc-inno-tab-h .sc-inno-tab::-webkit-scrollbar{width:0.5rem;height:0.5rem}.sc-inno-tab-h .sc-inno-tab::-webkit-scrollbar-track{border-radius:5px;background:#2a3b40}.sc-inno-tab-h .sc-inno-tab::-webkit-scrollbar-track:hover{background:#2a3b40}.sc-inno-tab-h .sc-inno-tab::-webkit-scrollbar-thumb{border-radius:5px;background:#566b73}.sc-inno-tab-h .sc-inno-tab::-webkit-scrollbar-thumb:hover{background:#566b73}.sc-inno-tab-h .sc-inno-tab::-webkit-scrollbar-corner{display:none}.light.sc-inno-tab-h{background-color:transparent}.dark.sc-inno-tab-h{background-color:transparent}.tab-items.sc-inno-tab{width:100%;overflow:hidden;scroll-behavior:smooth}.tab-items.sc-inno-tab .items-content.sc-inno-tab{display:flex;align-items:center}.arrow.sc-inno-tab{width:100px;height:100%;display:flex;align-items:center;position:absolute;top:0;bottom:0;left:0;z-index:2;cursor:pointer;pointer-events:none}.arrow.sc-inno-tab>inno-icon.sc-inno-tab{pointer-events:auto}.arrow.light.sc-inno-tab>inno-icon.sc-inno-tab{color:#08191f}.arrow.light.sc-inno-tab>inno-icon.sc-inno-tab:hover{color:#40545b}.arrow.dark.sc-inno-tab>inno-icon.sc-inno-tab{color:#ffffff}.arrow.dark.sc-inno-tab>inno-icon.sc-inno-tab:hover{color:#b2c1c7}.arrow-left.sc-inno-tab{justify-content:flex-start}.arrow-left.light.sc-inno-tab{background:linear-gradient(to right, #ffffff, transparent)}.arrow-left.dark.sc-inno-tab{background:linear-gradient(to right, #08191f, transparent)}.arrow-right.sc-inno-tab{justify-content:flex-end;left:auto;right:0}.arrow-right.light.sc-inno-tab{background:linear-gradient(to left, #ffffff, transparent)}.arrow-right.dark.sc-inno-tab{background:linear-gradient(to left, #08191f, transparent)}@media screen and (max-width: 768px){.arrow.sc-inno-tab{display:none}}";

const InnoTab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectedChange = createEvent(this, "selectedChange", 7);
        this.theme = 'light';
        this.selected = undefined;
        this.layout = 'auto';
        this.showArrow = true;
        this.alwaysEmphasized = false;
        this.minimalDecorator = false;
        this.totalItems = 0;
        this.currentScrollAmount = 0;
        this.scrollAmount = 100;
        this.scrollActionAmount = 0;
    }
    get hostElement() { return getElement(this); }
    /**
     * `selected` property changed
     */
    selectedChange;
    windowStartSize = window.innerWidth;
    arrowLeftElement;
    arrowRightElement;
    clickAction = {
        timeout: null,
        isClick: true,
    };
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
    getTabs() {
        return Array.from(this.hostElement.querySelectorAll('inno-tab-item'));
    }
    getTab(tabIndex) {
        return this.getTabs()[tabIndex];
    }
    getTabsWrapper() {
        return this.hostElement.querySelector('.items-content');
    }
    showArrows() {
        if (!this.showArrow) {
            return false;
        }
        try {
            const tabWrapper = this.getTabsWrapper();
            // Check whether the wrapper width is less than the width of the scrollable content
            return tabWrapper.scrollWidth > Math.ceil(tabWrapper.getBoundingClientRect().width) && this.layout === 'auto';
        }
        catch (error) {
            return false;
        }
    }
    showPreviousArrow() {
        try {
            return this.showArrows() && this.scrollActionAmount < 0;
        }
        catch (error) {
            return false;
        }
    }
    showNextArrow() {
        try {
            const tabWrapper = this.getTabsWrapper();
            const tabWrapperRect = tabWrapper.getBoundingClientRect();
            return this.showArrows() && this.scrollActionAmount > (tabWrapper.scrollWidth - tabWrapperRect.width) * -1;
        }
        catch (error) {
            return false;
        }
    }
    getArrowStyle(condition) {
        return {
            opacity: condition ? '1' : '0',
            zIndex: condition ? '1' : '-1',
        };
    }
    move(amount, click = false) {
        const tabWrapper = this.getTabsWrapper();
        const maxScrollWidth = (tabWrapper.scrollWidth - tabWrapper.getBoundingClientRect().width) * -1;
        amount = this.currentScrollAmount + amount;
        amount = amount > 0 ? 0 : amount < maxScrollWidth ? maxScrollWidth : amount;
        const styles = [`transform: translateX(${amount}px);`, click ? 'transition: all ease-in-out 400ms;' : ''].join('');
        tabWrapper.setAttribute('style', styles);
        if (click) {
            this.currentScrollAmount = this.scrollActionAmount = amount;
        }
        else {
            this.scrollActionAmount = amount;
        }
    }
    moveTabToView(tabIndex) {
        // if (!this.showArrows()) return;
        const tab = this.getTab(tabIndex);
        const dimension = tab.getBoundingClientRect();
        // Adjust the item additionally to calculate with the width of the left and right arrows.
        // Current value: width of the component divided by 2
        const adjustment = this.showArrow ? dimension.width / 2 : 0;
        const amount = (dimension.x - adjustment) * -1;
        this.move(amount, true);
    }
    setSelected(index) {
        this.selected = index;
    }
    clickTab(index) {
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
    adjustCurrentScrollAmount() {
        const tabWrapper = this.getTabsWrapper();
        this.currentScrollAmount = new DOMMatrixReadOnly(window.getComputedStyle(tabWrapper)["transform"]).m41; //translateX value
    }
    dragStart(element, event) {
        // if (!this.showArrows()) return;
        if (event.button > 0)
            return;
        // Dragstart is called at start of a drag or click event
        // Set the click event explicitly for the case if drag stop event target is not on the same component as the dragged item
        // and the tabClick handler is not invoked and the tab click won't work as the drag mode is on
        this.clickAction.isClick = true;
        this.clickAction.timeout = this.clickAction.timeout === null ? setTimeout(() => (this.clickAction.isClick = false), 300) : null;
        const tabPositionX = parseFloat(window.getComputedStyle(element).left);
        const mousedownPositionX = event.clientX;
        const move = (event) => this.dragMove(event, tabPositionX, mousedownPositionX);
        // Refactored to a variable to remove event listener to prevent memory leak
        const mouseUpListener = () => {
            window.removeEventListener('mousemove', move, false);
            window.removeEventListener('mouseup', mouseUpListener);
            this.dragStop();
        };
        window.addEventListener('mouseup', mouseUpListener);
        window.addEventListener('mousemove', move, false);
    }
    dragMove(event, tabX, mousedownX) {
        this.move(event.clientX + tabX - mousedownX);
    }
    dragStop() {
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
    async changeSelected(newIndex) {
        this.selected = newIndex;
        this.adjustCurrentScrollAmount();
        this.moveTabToView(this.selected);
    }
    onTabClick(event) {
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
    themeClasses() {
        return {
            light: this.theme === 'light',
            dark: this.theme === 'dark',
        };
    }
    arrowStyle(left) {
        return {
            ...this.themeClasses(),
            'arrow': true,
            'arrow-left': left,
            'arrow-right': !left,
        };
    }
    leftArrow() {
        return (h("div", { class: this.arrowStyle(true), onClick: () => this.move(this.scrollAmount, true), ref: ref => (this.arrowLeftElement = ref) }, h("inno-icon", { icon: "chevron_left_small", size: 24 })));
    }
    scrollContent() {
        return (h("div", { class: { 'tab-items': true } }, h("div", { class: { 'items-content': true } }, h("slot", null))));
    }
    rightArrow() {
        return (h("div", { class: this.arrowStyle(false), onClick: () => this.move(-this.scrollAmount, true), ref: ref => (this.arrowRightElement = ref) }, h("inno-icon", { icon: "chevron_right_small", size: 24 })));
    }
    render() {
        return (h(Host, { key: 'e0c67f067208f37a0c796491c39cbb46d8a90cc4', class: this.themeClasses() }, this.leftArrow(), this.scrollContent(), this.rightArrow()));
    }
};
InnoTab.style = innoTabCss;

export { InnoTab as inno_tab };

//# sourceMappingURL=inno-tab.entry.js.map