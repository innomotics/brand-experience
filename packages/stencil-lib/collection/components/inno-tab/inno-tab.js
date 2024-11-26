import { h, Host } from "@stencil/core";
import { requestAnimationFrameNoNgZone } from "../../utils/siemensix/requestAnimationFrame";
/**
 *
 */
export class InnoTab {
    constructor() {
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
    hostElement;
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
        tabWrapper.style.transform = `translateX(${amount}px)`;
        tabWrapper.style.transition = click ? 'all ease-in-out 400ms' : 'unset';
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
        return (h(Host, { key: 'd769006f1cbbec794dc7e4f772f6fbefe5d83402', class: this.themeClasses() }, this.leftArrow(), this.scrollContent(), this.rightArrow()));
    }
    static get is() { return "inno-tab"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-tab.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-tab.css"]
        };
    }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'light' | 'dark'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme variant of the component."
                },
                "attribute": "theme",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "selected": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number | undefined",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set default selected tab by index\r\nor undefined if not tab is selected."
                },
                "attribute": "selected",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'auto' | 'stretched'",
                    "resolved": "\"auto\" | \"stretched\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set layout width style"
                },
                "attribute": "layout",
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "showArrow": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show the navigation arrow for desktop."
                },
                "attribute": "show-arrow",
                "reflect": false,
                "defaultValue": "true"
            },
            "alwaysEmphasized": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Make the non-selected items always vivid without any opacity effect."
                },
                "attribute": "always-emphasized",
                "reflect": false,
                "defaultValue": "false"
            },
            "minimalDecorator": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimalize the bottom decorator for the tab items.\r\nShow only if the given item is interracted or selected."
                },
                "attribute": "minimal-decorator",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "totalItems": {},
            "currentScrollAmount": {},
            "scrollAmount": {},
            "scrollActionAmount": {}
        };
    }
    static get events() {
        return [{
                "method": "selectedChange",
                "name": "selectedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "`selected` property changed"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "changeSelected": {
                "complexType": {
                    "signature": "(newIndex: number) => Promise<void>",
                    "parameters": [{
                            "name": "newIndex",
                            "type": "number",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Programatically change the selected tab by its index and scroll to the selected inno-tab-item inside the inno-tab.\r\nPlease note that manually changing the 'selected' property won't do any scrolling, that is only possible with this method.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onWindowResize",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "tabClick",
                "method": "onTabClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=inno-tab.js.map
