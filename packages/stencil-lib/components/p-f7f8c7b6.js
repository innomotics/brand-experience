import { p as proxyCustomElement, H, h, d as Host } from './p-f47e640c.js';

const innoSplitGutterCss = ".sc-inno-split-gutter-h{display:block}.split-gutter.sc-inno-split-gutter-h{background-color:transparent !important;display:flex;align-items:center;justify-content:center}.split-gutter.sc-inno-split-gutter-h .handle.sc-inno-split-gutter{background-color:#08191f;border-radius:8px}.split-gutter.vertical.sc-inno-split-gutter-h{height:16px;min-height:16px;max-height:16px;width:100%;cursor:row-resize}.split-gutter.vertical.sc-inno-split-gutter-h .handle.sc-inno-split-gutter{height:8px;width:40px}.split-gutter.horizontal.sc-inno-split-gutter-h{width:16px;min-width:16px;max-width:16px;height:100%;cursor:col-resize}.split-gutter.horizontal.sc-inno-split-gutter-h .handle.sc-inno-split-gutter{width:8px;height:40px}.split-gutter.sc-inno-split-gutter-h:hover .handle.sc-inno-split-gutter{background-color:#566b73}";
const InnoSplitGutterStyle0 = innoSplitGutterCss;

const InnoSplitGutter = /*@__PURE__*/ proxyCustomElement(class InnoSplitGutter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.orientation = 'horizontal';
    }
    render() {
        return (h(Host, { key: 'cb2903d44e69ae4e935ad918acdba015452d26d1', class: {
                'split-gutter': true,
                'horizontal': this.orientation === 'horizontal',
                'vertical': this.orientation === 'vertical'
            } }, h("div", { key: '3bc672f46cf22601e2737938e94ef40065385630', class: "handle" })));
    }
    static get style() { return InnoSplitGutterStyle0; }
}, [2, "inno-split-gutter", {
        "orientation": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-split-gutter"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-split-gutter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoSplitGutter);
            }
            break;
    } });
}

export { InnoSplitGutter as I, defineCustomElement as d };

//# sourceMappingURL=p-f7f8c7b6.js.map