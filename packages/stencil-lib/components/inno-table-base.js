import { p as proxyCustomElement, H, h, d as Host } from './p-f47e640c.js';
import { S as SimpleBar } from './p-cf0ba765.js';

const innoTableBaseCss = ".sc-inno-table-base-h{scrollbar-width:thin}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base{position:relative;display:block}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base .mask-layer.sc-inno-table-base{z-index:1;position:absolute;top:0;left:0;pointer-events:none;width:100%;height:calc(100% - 20px);background-color:rgba(0, 0, 0, 0);-webkit-mask-image:linear-gradient(to right, var(--left-mask-color) 0%, transparent 15%, transparent 50%, transparent calc(100% - 200px), var(--right-mask-color) 100%);mask-image:linear-gradient(to right, var(--left-mask-color) 0%, transparent 10%, transparent 85%, transparent calc(100% - 200px), var(--right-mask-color) 100%);-webkit-mask-size:contain;mask-size:contain;--left-mask-color:transparent;--right-mask-color:transparent}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base .mask-layer.is-left-overflowing.sc-inno-table-base{background-color:#ffffff;--left-mask-color:black}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base .mask-layer.is-right-overflowing.sc-inno-table-base{background-color:#ffffff;--right-mask-color:black}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base .table-div.sc-inno-table-base{display:block;width:100%;font-size:16px;overflow-x:auto;scrollbar-width:thin}";
const InnoTableBaseStyle0 = innoTableBaseCss;

const InnoTableBase$1 = /*@__PURE__*/ proxyCustomElement(class InnoTableBase extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'light';
        this.maskColor = '#ffffff';
    }
    get hostElement() { return this; }
    maskElement;
    scrollBar;
    /**
     * The component tries its best to always apply the custom scrollbar and the fade-out effect automatically but there might be some cases
     * (especially during/after initalization) where it just simply won't work. In those cases you can call this method manually.
     */
    async refresh() {
        this.recalculateScrollbar();
    }
    recalculateScrollbar() {
        this.scrollBar.recalculate();
        this.setMask(this.scrollBar.getScrollElement());
    }
    onWindowResize() {
        this.recalculateScrollbar();
    }
    setMask(el) {
        this.maskElement.classList.add('is-left-overflowing');
        this.maskElement.classList.add('is-right-overflowing');
        let leftMaskVisible = true;
        let rightMaskVisible = true;
        if (el.scrollLeft < 1) {
            this.maskElement.classList.remove('is-left-overflowing');
            leftMaskVisible = false;
        }
        if (el.scrollWidth - el.scrollLeft - el.clientWidth < 1) {
            this.maskElement.classList.remove('is-right-overflowing');
            rightMaskVisible = false;
        }
        this.maskElement.style.backgroundColor = ((leftMaskVisible || rightMaskVisible) ? this.maskColor : 'transparent');
    }
    scrollListener = (event) => {
        this.setMask(event.target);
    };
    componentDidLoad() {
        this.scrollBar = new SimpleBar(this.hostElement.querySelector('.table-div'), { autoHide: false });
        this.maskElement = this.hostElement.querySelector('.mask-layer');
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
        return (h(Host, { key: '49ba48b414322d1a7b4dc9d590d42493e86dadd7', class: { light: this.variant === 'light', dark: this.variant === 'dark' } }, h("div", { key: 'a85518690a8b60e684705641a2e99146cbd97c82', class: "table-wrapper" }, h("div", { key: '14a5a8e4cd52680ba562acbbc862e4e18c2c7b40', class: "mask-layer" }), h("div", { key: '593c2cfc00d30bf2b230b918c05b9988aa23c5d1', class: "table-div" }, h("slot", { key: '3d50ef0c9c9e17017c4784f9a6a8d38dc047801a' })))));
    }
    static get style() { return InnoTableBaseStyle0; }
}, [6, "inno-table-base", {
        "variant": [1025],
        "maskColor": [1025, "mask-color"],
        "refresh": [64]
    }, [[9, "resize", "onWindowResize"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-table-base"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-table-base":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoTableBase$1);
            }
            break;
    } });
}

const InnoTableBase = InnoTableBase$1;
const defineCustomElement = defineCustomElement$1;

export { InnoTableBase, defineCustomElement };

//# sourceMappingURL=inno-table-base.js.map