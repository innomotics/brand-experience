import { r as registerInstance, a as createEvent, h, e as Host } from './index-48a3be21.js';

const innoTabItemCss = ".sc-inno-tab-item-h{height:60px;padding:16px 16px 16px 16px;display:flex;align-items:center;justify-content:center;position:relative;line-height:25px;font-size:16px;font-weight:bold;font-family:\"InnomoticsHafferSQ\";font-weight:bold}.sc-inno-tab-item-h .sc-inno-tab-item::-webkit-scrollbar-button{display:none}.sc-inno-tab-item-h .sc-inno-tab-item::-webkit-scrollbar{width:0.5rem;height:0.5rem}.sc-inno-tab-item-h .sc-inno-tab-item::-webkit-scrollbar-track{border-radius:5px;background:#2a3b40}.sc-inno-tab-item-h .sc-inno-tab-item::-webkit-scrollbar-track:hover{background:#2a3b40}.sc-inno-tab-item-h .sc-inno-tab-item::-webkit-scrollbar-thumb{border-radius:5px;background:#566b73}.sc-inno-tab-item-h .sc-inno-tab-item::-webkit-scrollbar-thumb:hover{background:#566b73}.sc-inno-tab-item-h .sc-inno-tab-item::-webkit-scrollbar-corner{display:none}.sc-inno-tab-item-h *.sc-inno-tab-item,.sc-inno-tab-item-h *.sc-inno-tab-item::after,.sc-inno-tab-item-h *.sc-inno-tab-item::before{box-sizing:border-box}.sc-inno-tab-item-h::after{content:\"\";width:100%;height:1px;position:absolute;bottom:0;left:0;transition:height 300ms cubic-bezier(0.84, 0, 0.58, 1)}.light.sc-inno-tab-item-h{color:#40545b}.light.sc-inno-tab-item-h::after{opacity:0.2;background-color:#08191f}.dark.sc-inno-tab-item-h{color:#b2c1c7}.dark.sc-inno-tab-item-h::after{opacity:0.4;background-color:#b2c1c7}.sc-inno-tab-item-h .slot-container.sc-inno-tab-item{display:flex;align-items:center;gap:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}.sc-inno-tab-item-h .slot-container.sc-inno-tab-item span.sc-inno-tab-item,.sc-inno-tab-item-h .slot-container.sc-inno-tab-item span.sc-inno-tab-item::before{pointer-events:none}.sc-inno-tab-item-h .hidden.sc-inno-tab-item{display:none}.emphasized.light.sc-inno-tab-item-h{color:#08191f}.emphasized.light.sc-inno-tab-item-h::after{opacity:1;background-color:#08191f}.emphasized.dark.sc-inno-tab-item-h{color:#ffffff}.emphasized.dark.sc-inno-tab-item-h::after{opacity:1;background-color:#ffffff}.minimal-decorator.sc-inno-tab-item-h::after{height:0}.sc-inno-tab-item-h:focus-visible{outline-width:0px}.stretched.sc-inno-tab-item-h{flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-inno-tab-item-h:hover{cursor:pointer}.sc-inno-tab-item-h:hover::after{height:8px}.sc-inno-tab-item-h:hover.light{color:#40545b}.sc-inno-tab-item-h:hover.light::after{opacity:1;background-color:#40545b}.sc-inno-tab-item-h:hover.dark{color:#b2c1c7}.sc-inno-tab-item-h:hover.dark::after{opacity:1;background-color:#b2c1c7}.sc-inno-tab-item-h:hover.emphasized.light{color:#08191f}.sc-inno-tab-item-h:hover.emphasized.light::after{opacity:1;background-color:#08191f}.sc-inno-tab-item-h:hover.emphasized.dark{color:#ffffff}.sc-inno-tab-item-h:hover.emphasized.dark::after{opacity:1;background-color:#ffffff}.sc-inno-tab-item-h:active::after{height:8px}.sc-inno-tab-item-h:active.light{color:#08191f}.sc-inno-tab-item-h:active.light::after{opacity:1;background-color:#08191f}.sc-inno-tab-item-h:active.dark{color:#e1f000}.sc-inno-tab-item-h:active.dark::after{opacity:1;background-color:#e1f000}.disabled.sc-inno-tab-item-h{pointer-events:none}.disabled.sc-inno-tab-item-h::after{height:0px}.disabled.light.sc-inno-tab-item-h{color:#40545b}.disabled.light.sc-inno-tab-item-h::after{opacity:1;background-color:#40545b}.disabled.dark.sc-inno-tab-item-h{color:#40545b}.disabled.dark.sc-inno-tab-item-h::after{opacity:1;background-color:#40545b}.selected.sc-inno-tab-item-h:not(.disabled)::after{height:8px}.selected.sc-inno-tab-item-h:not(.disabled).light{color:#08191f}.selected.sc-inno-tab-item-h:not(.disabled).light::after{opacity:1;background-color:#08191f}.selected.sc-inno-tab-item-h:not(.disabled).dark{color:#e1f000}.selected.sc-inno-tab-item-h:not(.disabled).dark::after{opacity:1;background-color:#e1f000}";

const InnoTabItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabClick = createEvent(this, "tabClick", 7);
        this.theme = 'light';
        this.layout = 'auto';
        this.selected = false;
        this.disabled = false;
        this.alwaysEmphasized = false;
        this.minimalDecorator = false;
    }
    /**
     * On tab click.
     */
    tabClick;
    themeClasses() {
        return {
            light: this.theme === 'light',
            dark: this.theme === 'dark',
        };
    }
    hostClasses() {
        return {
            ...this.themeClasses(),
            'selected': this.selected,
            'disabled': this.disabled,
            'stretched': this.layout === 'stretched',
            'emphasized': this.alwaysEmphasized,
            'minimal-decorator': this.minimalDecorator,
        };
    }
    slotContainerClasses() {
        return {
            ...this.themeClasses(),
            'slot-container': true,
            'selected': this.selected,
            'disabled': this.disabled,
        };
    }
    render() {
        return (h(Host, { key: '4103149e09aff4801c25e8e36e97af718c6e0bc4', class: this.hostClasses(), tabIndex: 0, onClick: (event) => {
                const clientEvent = this.tabClick.emit({
                    nativeEvent: event,
                });
                if (clientEvent.defaultPrevented) {
                    event.stopPropagation();
                }
            } }, h("div", { key: '37d613687fd9e1990eb093d2d71817123e3c724b', class: this.slotContainerClasses() }, h("slot", { key: '8751c5d516cdf803ac080072424ba4dafc79bdc2' }))));
    }
};
InnoTabItem.style = innoTabItemCss;

export { InnoTabItem as inno_tab_item };

//# sourceMappingURL=inno-tab-item.entry.js.map