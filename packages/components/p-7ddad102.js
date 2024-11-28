import { p as proxyCustomElement, H, h, d as Host } from './p-f9444b6c.js';
import { b as adjustValueToRange } from './p-565004a9.js';

const innoLoaderCss = ".sc-inno-loader-h{position:relative;display:block}.light.sc-inno-loader-h::before{position:absolute;top:50%;left:50%;width:calc(100% - 10px);height:calc(100% - 10px);transform:translate3d(-50%, -50%, 0);transform-origin:left top;border-top:6px solid rgba(42, 59, 64, 0);border-right:6px solid rgba(42, 59, 64, 0.7);border-bottom:6px solid rgba(42, 59, 64, 0.7);border-left:6px solid rgba(42, 59, 64, 0.7);border-radius:50%;content:\"\";animation:rotate-spinner 1s infinite linear}.light.thin.sc-inno-loader-h::before{border-width:4px}.dark.sc-inno-loader-h::before{position:absolute;top:50%;left:50%;width:calc(100% - 10px);height:calc(100% - 10px);transform:translate3d(-50%, -50%, 0);transform-origin:left top;border-top:6px solid rgba(225, 240, 0, 0);border-right:6px solid rgba(225, 240, 0, 0.7);border-bottom:6px solid rgba(225, 240, 0, 0.7);border-left:6px solid rgba(225, 240, 0, 0.7);border-radius:50%;content:\"\";animation:rotate-spinner 1s infinite linear}.dark.thin.sc-inno-loader-h::before{border-width:4px}@keyframes rotate-spinner{from{transform:rotate(0deg) translate3d(-50%, -50%, 0)}to{transform:rotate(359deg) translate3d(-50%, -50%, 0)}}";
const InnoLoaderStyle0 = innoLoaderCss;

const InnoLoader = /*@__PURE__*/ proxyCustomElement(class InnoLoader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.size = 64;
        this.variant = 'light';
        this.strokeWidth = 'thick';
    }
    getStlyes() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
            thin: this.strokeWidth === 'thin',
            [`icon-${this.size}`]: true,
        };
    }
    componentWillLoad() {
        this.size = adjustValueToRange(this.size, 16, 64);
    }
    render() {
        return h(Host, { key: 'd75126a1af249dec321e2ddcd21a15a9a3e67e12', class: this.getStlyes() });
    }
    static get style() { return InnoLoaderStyle0; }
}, [2, "inno-loader", {
        "size": [1026],
        "variant": [1025],
        "strokeWidth": [1, "stroke-width"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-loader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoLoader);
            }
            break;
    } });
}

export { InnoLoader as I, defineCustomElement as d };

//# sourceMappingURL=p-7ddad102.js.map