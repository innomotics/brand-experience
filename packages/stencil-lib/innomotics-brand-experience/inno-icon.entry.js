import { r as registerInstance, h, e as Host } from './index-48a3be21.js';

const innoIconCss = ".sc-inno-icon-h .icon-light.sc-inno-icon{color:inherit}.sc-inno-icon-h .icon-dark.sc-inno-icon{color:inherit}.sc-inno-icon-h .icon-font.sc-inno-icon{font-family:\"InnomoticsUiIcons\"}";

const InnoIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            const svgIcon = await import('./inno-icons-385d97aa.js');
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
};
InnoIcon.style = innoIconCss;

export { InnoIcon as inno_icon };

//# sourceMappingURL=inno-icon.entry.js.map