import { r as registerInstance, h, e as Host } from './index-48a3be21.js';

const innoErrorCss = ".sc-inno-error-h{display:none;font-size:12px}[active].sc-inno-error-h{display:block;transform:translate(-16px, 1rem) scale(1)}[active].light.sc-inno-error-h{color:#CB0E0E}[active].dark.sc-inno-error-h{color:#FF88AB}";

const InnoError = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
        this.type = undefined;
        this.variant = 'light';
    }
    render() {
        return (h(Host, { key: '23ba9413e7dc64c641b26f7fbe4713045383baa8', active: this.active, class: { 'dark': this.variant === 'dark', 'light': this.variant === 'light' } }, h("slot", { key: '0306943c62030ee72c154d42f2f7f15aebeed8a4' })));
    }
};
InnoError.style = innoErrorCss;

export { InnoError as inno_error };

//# sourceMappingURL=inno-error.entry.js.map