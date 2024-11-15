import { r as registerInstance, h, e as Host } from './index-48a3be21.js';
import { b as adjustValueToRange } from './utils-ee7eba95.js';

const innoLoaderCss = ".sc-inno-loader-h{position:relative;display:block}.light.sc-inno-loader-h::before{position:absolute;top:50%;left:50%;width:calc(100% - 10px);height:calc(100% - 10px);transform:translate3d(-50%, -50%, 0);transform-origin:left top;border-top:6px solid rgba(42, 59, 64, 0);border-right:6px solid rgba(42, 59, 64, 0.7);border-bottom:6px solid rgba(42, 59, 64, 0.7);border-left:6px solid rgba(42, 59, 64, 0.7);border-radius:50%;content:\"\";animation:rotate-spinner 1s infinite linear}.light.thin.sc-inno-loader-h::before{border-width:4px}.dark.sc-inno-loader-h::before{position:absolute;top:50%;left:50%;width:calc(100% - 10px);height:calc(100% - 10px);transform:translate3d(-50%, -50%, 0);transform-origin:left top;border-top:6px solid rgba(225, 240, 0, 0);border-right:6px solid rgba(225, 240, 0, 0.7);border-bottom:6px solid rgba(225, 240, 0, 0.7);border-left:6px solid rgba(225, 240, 0, 0.7);border-radius:50%;content:\"\";animation:rotate-spinner 1s infinite linear}.dark.thin.sc-inno-loader-h::before{border-width:4px}@keyframes rotate-spinner{from{transform:rotate(0deg) translate3d(-50%, -50%, 0)}to{transform:rotate(359deg) translate3d(-50%, -50%, 0)}}";

const InnoLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
InnoLoader.style = innoLoaderCss;

export { InnoLoader as inno_loader };

//# sourceMappingURL=inno-loader.entry.js.map