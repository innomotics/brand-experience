import { p as proxyCustomElement, H, h, d as Host } from './p-f9444b6c.js';

const innoIconCss = ".sc-inno-icon-h .icon-light.sc-inno-icon{color:inherit}.sc-inno-icon-h .icon-dark.sc-inno-icon{color:inherit}.sc-inno-icon-h .icon-font.sc-inno-icon{font-family:\"InnomoticsUiIcons\"}";
const InnoIconStyle0 = innoIconCss;

const InnoIcon = /*@__PURE__*/ proxyCustomElement(class InnoIcon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.icon = undefined;
        this.iconFont = undefined;
        this.size = 16;
        this.variant = 'light';
        this.content = undefined;
    }
    async iconChanged() {
        this.content = await this.resolveIcon(false);
    }
    async fontChanged() {
        this.content = await this.resolveIcon(true);
    }
    componentWillLoad() {
        if (!this.iconFont) {
            this.iconChanged();
        }
        else {
            this.fontChanged();
        }
    }
    render() {
        if (this.iconFont) {
            return h(Host, { class: `icon-${this.size} icon-inno-${this.icon}` }, this.content);
        }
        return (h(Host, { class: `icon-${this.size} icon-inno-${this.icon}` }, h("div", { class: `icon-${this.size} icon-${this.variant}`, innerHTML: this.content })));
    }
    async resolveIcon(isIconFont) {
        if (this.icon && !isIconFont) {
            const svgIcon = await import('./p-15a53db1.js');
            const iconname = 'inno_' + this.icon;
            const resolvedIcon = svgIcon[iconname];
            if (resolvedIcon == null) {
                console.error(`No content for icon "${this.icon}"! Maybe the icon was renamed or no longer exists.`);
            }
            return resolvedIcon;
        }
        if (this.iconFont && isIconFont) {
            return (h("span", { class: `icon-${this.size} icon-${this.variant} icon-font`, style: { fontSize: `${this.size}px` } }, String.fromCodePoint(parseInt(this.iconFont, 16))));
        }
        return null;
    }
    static get watchers() { return {
        "icon": ["iconChanged"],
        "iconFont": ["fontChanged"]
    }; }
    static get style() { return InnoIconStyle0; }
}, [2, "inno-icon", {
        "icon": [1025],
        "iconFont": [1025, "icon-font"],
        "size": [1026],
        "variant": [1025],
        "content": [32]
    }, undefined, {
        "icon": ["iconChanged"],
        "iconFont": ["fontChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoIcon);
            }
            break;
    } });
}

export { InnoIcon as I, defineCustomElement as d };

//# sourceMappingURL=p-a043038e.js.map