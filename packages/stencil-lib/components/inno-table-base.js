import { p as proxyCustomElement, H, h, d as Host } from './p-f9444b6c.js';
import { S as SimpleBar } from './p-cd3f0a1b.js';

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
        return (h(Host, { key: '851f010ad0f965f88b1254dea43fc0df0815802d', class: { light: this.variant === 'light', dark: this.variant === 'dark' } }, h("div", { key: '7a5963e51ff519b27e992a2c1e0a8a9e8e006eac', class: "table-wrapper" }, h("div", { key: '16f67496c87ab69bcdca6c07a8e0415481945bf1', class: "mask-layer" }), h("div", { key: 'b95b9b2e78c120e44cffc8407983678d025bdaa7', class: "table-div" }, h("slot", { key: 'b8672b4e810e6d385841c0fa745d19983a7d329d' })))));
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