import { r as registerInstance, g as getElement, h, e as Host } from './index-48a3be21.js';
import { S as SimpleBar } from './index-71366340.js';

const innoTableBaseCss = ".sc-inno-table-base-h{scrollbar-width:thin}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base{position:relative;display:block}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base .mask-layer.sc-inno-table-base{z-index:1;position:absolute;top:0;left:0;pointer-events:none;width:100%;height:calc(100% - 20px);background-color:rgba(0, 0, 0, 0);-webkit-mask-image:linear-gradient(to right, var(--left-mask-color) 0%, transparent 15%, transparent 50%, transparent calc(100% - 200px), var(--right-mask-color) 100%);mask-image:linear-gradient(to right, var(--left-mask-color) 0%, transparent 10%, transparent 85%, transparent calc(100% - 200px), var(--right-mask-color) 100%);-webkit-mask-size:contain;mask-size:contain;--left-mask-color:transparent;--right-mask-color:transparent}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base .mask-layer.is-left-overflowing.sc-inno-table-base{background-color:#ffffff;--left-mask-color:black}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base .mask-layer.is-right-overflowing.sc-inno-table-base{background-color:#ffffff;--right-mask-color:black}.sc-inno-table-base-h .table-wrapper.sc-inno-table-base .table-div.sc-inno-table-base{display:block;width:100%;font-size:16px;overflow-x:auto;scrollbar-width:thin}";

const InnoTableBase = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'light';
        this.maskColor = '#ffffff';
    }
    get hostElement() { return getElement(this); }
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
        this.maskElement.style.setProperty('background-color', leftMaskVisible || rightMaskVisible ? this.maskColor : 'transparent');
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
        return (h(Host, { key: 'e560ad69fcf77c9a15e9ea84552de54ca17da8fb', class: { light: this.variant === 'light', dark: this.variant === 'dark' } }, h("div", { key: 'b7aab63da3a2b0075481c51429e17bcc2000ba75', class: "table-wrapper" }, h("div", { key: 'f9b493667e700a340d2b45430a3f95a819d2980a', class: "mask-layer" }), h("div", { key: '409a82d6428b0d04570e4d266e0405aa595a1a7a', class: "table-div" }, h("slot", { key: '901e8b1fd0a34adce1193940851190c73174d888' })))));
    }
};
InnoTableBase.style = innoTableBaseCss;

export { InnoTableBase as inno_table_base };

//# sourceMappingURL=inno-table-base.entry.js.map