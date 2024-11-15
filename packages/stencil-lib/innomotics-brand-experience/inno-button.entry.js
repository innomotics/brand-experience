import { r as registerInstance, g as getElement, h, e as Host } from './index-48a3be21.js';

const innoButtonCss = ".select-item.sc-inno-button{display:grid;grid-template-columns:minmax(0, 1fr) 16px;grid-template-rows:auto;align-items:center;border-width:0px;border-style:none;padding:0px 16px 0px 16px;height:56px;gap:10px;cursor:pointer}.select-item.icon-driven.sc-inno-button:not(.can-favorite){grid-template-columns:auto minmax(0, 1fr) 16px}.select-item.icon-driven.can-favorite.sc-inno-button{grid-template-columns:auto minmax(0, 1fr) 24px}.select-item.can-favorite.sc-inno-button .star.sc-inno-button{display:block;font-size:24px;position:relative}.select-item.separator.sc-inno-button{border-bottom:3px double #ffffff}.select-item.can-favorite.sc-inno-button:not(.selected):not(.icon-driven){grid-template-columns:minmax(0, 1fr) 24px}.select-item.can-favorite.selected.sc-inno-button:not(.icon-driven){grid-template-columns:minmax(0, 1fr) 16px 24px}.sc-inno-button-h{display:block;width:-moz-max-content;width:max-content}.list-type.sc-inno-button-h{width:100%}.disabled.sc-inno-button-h,.sc-inno-button-h:disabled{pointer-events:none;cursor:default}.sc-inno-button-h button.sc-inno-button{height:48px;min-height:48px;max-height:48px;min-width:96px;padding-left:24px;padding-right:24px;font-weight:bold;border:none;color:#08191f;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:8px;font-size:16px;font-weight:bold;cursor:pointer;transition:all 0.3s cubic-bezier(0.84, 0, 0.58, 1)}.sc-inno-button-h button.list-type.sc-inno-button{justify-content:space-between;gap:unset;width:100%}.sc-inno-button-h button.display-reverse.sc-inno-button{flex-direction:row-reverse}.sc-inno-button-h button.primary.dark.sc-inno-button{color:#e1f000;background-color:#08191f}.sc-inno-button-h button.primary.dark.sc-inno-button:hover:not(.disabled):not(:disabled){color:#ffffff;box-shadow:inset 0 -48px #40545b}.sc-inno-button-h button.primary.dark.sc-inno-button:active:not(.disabled):not(:disabled){color:#ffffff;box-shadow:inset 0 -48px #2a3b40}.sc-inno-button-h button.primary.dark.sc-inno-button:disabled,.sc-inno-button-h button.primary.dark.disabled.sc-inno-button{color:#9aacb4;background-color:#cad5da;pointer-events:none}.sc-inno-button-h button.primary.light.sc-inno-button{color:#08191f;background-color:#e1f000}.sc-inno-button-h button.primary.light.sc-inno-button:hover:not(.disabled):not(:disabled){box-shadow:inset 0 -48px #b2c1c7}.sc-inno-button-h button.primary.light.sc-inno-button:active:not(.disabled):not(:disabled){box-shadow:inset 0 -48px #9aacb4}.sc-inno-button-h button.primary.light.sc-inno-button:disabled,.sc-inno-button-h button.primary.light.disabled.sc-inno-button{color:#9aacb4;background-color:#40545b;pointer-events:none}.sc-inno-button-h button.delete.sc-inno-button{background-color:transparent}.sc-inno-button-h button.delete.dark.sc-inno-button,.sc-inno-button-h button.delete.light.sc-inno-button{border:2px solid #CB0E0E;color:#CB0E0E}.sc-inno-button-h button.delete.dark.sc-inno-button:hover:not(.disabled):not(:disabled),.sc-inno-button-h button.delete.light.sc-inno-button:hover:not(.disabled):not(:disabled){border-color:#CB0E0E;color:#ffffff;box-shadow:inset 0 -48px #CB0E0E}.sc-inno-button-h button.delete.dark.sc-inno-button:active:not(.disabled):not(:disabled),.sc-inno-button-h button.delete.light.sc-inno-button:active:not(.disabled):not(:disabled){border-color:#FF88AB;color:#ffffff;box-shadow:inset 0 -48px #FF88AB}.sc-inno-button-h button.secondary.sc-inno-button{background-color:transparent}.sc-inno-button-h button.secondary.dark.sc-inno-button{border:2px solid #08191f;color:#08191f}.sc-inno-button-h button.secondary.dark.sc-inno-button:hover:not(.disabled):not(:disabled){border-color:#40545b;color:#ffffff;box-shadow:inset 0 -48px #40545b}.sc-inno-button-h button.secondary.dark.sc-inno-button:active:not(.disabled):not(:disabled){border-color:#2a3b40;color:#ffffff;box-shadow:inset 0 -48px #2a3b40}.sc-inno-button-h button.secondary.light.sc-inno-button{color:#ffffff;border:2px solid #ffffff}.sc-inno-button-h button.secondary.light.sc-inno-button:hover:not(.disabled):not(:disabled){border-color:#9aacb4;color:#08191f;box-shadow:inset 0 -48px #9aacb4}.sc-inno-button-h button.secondary.light.sc-inno-button:active:not(.disabled):not(:disabled){border-color:#9aacb4;color:#08191f;box-shadow:inset 0 -48px #9aacb4}.sc-inno-button-h button.secondary.sc-inno-button:disabled,.sc-inno-button-h button.secondary.disabled.sc-inno-button{color:#9aacb4;border:2px solid #9aacb4;pointer-events:none}.sc-inno-button-h button.tertiary.sc-inno-button{padding:0;box-shadow:0px -5px #08191f inset;background-color:transparent}.sc-inno-button-h button.tertiary.icon-only.sc-inno-button{border:none !important}.sc-inno-button-h button.tertiary.dark.sc-inno-button{color:#08191f;box-shadow:0px -5px #08191f inset}.sc-inno-button-h button.tertiary.dark.sc-inno-button:hover:not(.disabled):not(:disabled){color:#40545b;box-shadow:0 -8px #40545b inset}.sc-inno-button-h button.tertiary.dark.sc-inno-button:active:not(.disabled):not(:disabled){color:#2a3b40;border-color:#2a3b40;box-shadow:0 -8px #2a3b40 inset}.sc-inno-button-h button.tertiary.light.sc-inno-button{color:#ffffff;border-color:#ffffff;box-shadow:inset 0 -5px #ffffff}.sc-inno-button-h button.tertiary.light.sc-inno-button:hover:not(.disabled):not(:disabled){color:#9aacb4;box-shadow:inset 0 -8px #9aacb4}.sc-inno-button-h button.tertiary.light.sc-inno-button:active:not(.disabled):not(:disabled){color:#9aacb4;border-color:#9aacb4;box-shadow:inset 0 -8px #9aacb4}.sc-inno-button-h button.tertiary.sc-inno-button:disabled,.sc-inno-button-h button.tertiary.disabled.sc-inno-button{color:#9aacb4;border-color:#9aacb4;box-shadow:inset 0 -5px #9aacb4;pointer-events:none}.sc-inno-button-h button.sc-inno-button:focus:not(.disabled):not(:disabled){outline-color:#1491EB;outline-style:solid;outline-width:2px;outline-offset:2px}.sc-inno-button-h button.media.sc-inno-button{min-height:80px;max-height:80px;min-width:80px;max-width:80px;border-radius:50%;padding:0;background-color:#ffffff;box-shadow:0px 4px 20px 0px rgba(8, 25, 31, 0.33);color:#08191f}.sc-inno-button-h button.media.sc-inno-button:hover:not(.disabled):not(:disabled){color:#40545b}.sc-inno-button-h button.media.sc-inno-button:active:not(.disabled):not(:disabled){color:#2a3b40}.sc-inno-button-h button.media.sc-inno-button:disabled,.sc-inno-button-h button.media.disabled.sc-inno-button{pointer-events:none;color:#9aacb4}.sc-inno-button-h button.navigation.sc-inno-button{min-height:32px;max-height:32px;min-width:32px;max-width:32px;padding:0;background-color:#ffffff;box-shadow:0px 4px 20px 0px rgba(8, 25, 31, 0.33)}.sc-inno-button-h button.navigation.sc-inno-button:hover:not(.disabled):not(:disabled){color:#08191f}.sc-inno-button-h button.navigation.sc-inno-button:active:not(.disabled):not(:disabled){color:#2a3b40}.sc-inno-button-h button.navigation.sc-inno-button:disabled,.sc-inno-button-h button.navigation.disabled.sc-inno-button{pointer-events:none;color:#9aacb4}.sc-inno-button-h button.icon-only.sc-inno-button{padding:0;min-width:48px;max-width:48px}";

const InnoButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'primary';
        this.colorVariant = 'light';
        this.type = 'button';
        this.tabIdx = 0;
        this.disabled = false;
        this.icon = undefined;
        this.iconFont = undefined;
        this.iconPosition = 'right';
        this.navDirection = 'right';
        this.iconOnly = false;
        this.listType = false;
    }
    get hostElement() { return getElement(this); }
    submitButtonElement;
    componentDidLoad() {
        if (this.type === 'submit') {
            const submitButton = document.createElement('button');
            submitButton.style.display = 'none';
            submitButton.type = 'submit';
            submitButton.tabIndex = -1;
            this.hostElement.appendChild(submitButton);
            this.submitButtonElement = submitButton;
        }
    }
    dispatchFormEvents() {
        if (this.type === 'submit' && this.submitButtonElement) {
            this.submitButtonElement.click();
        }
    }
    render() {
        let hasIcon = (this.icon != null && this.icon.trim() != '') || this.variant === 'navigation';
        let hasIconFont = this.iconFont != null && this.iconFont.trim() != '';
        let iconSize = this.variant === 'media' ? 32 : 24;
        let icon = this.variant === 'navigation'
            ? (this.navDirection === 'right' ? 'chevron_right_small' : 'chevron_left_small')
            : (this.icon ?? this.iconFont);
        return (h(Host, { key: '8b10c7f51248426077d1657733fc4ab56a2d66b0', class: {
                disabled: this.disabled,
                'list-type': this.listType
            } }, h("button", { key: 'a2a4d6d969a9d831dd0c5bfe74af5d0ff611bc31', class: {
                'primary': this.variant === 'primary',
                'secondary': this.variant === 'secondary',
                'tertiary': this.variant === 'tertiary',
                'delete': this.variant === 'delete',
                'media': this.variant === 'media',
                'navigation': this.variant === 'navigation',
                'icon-only': this.iconOnly,
                'light': this.colorVariant === 'light',
                'dark': this.colorVariant === 'dark',
                'display-reverse': this.iconPosition === 'left',
                'list-type': this.listType,
                disabled: this.disabled
            }, onClick: () => this.dispatchFormEvents(), type: this.type, tabIndex: this.disabled ? -1 : this.tabIdx ?? 0 }, h("slot", { key: '22b5f25e587d0fe291681e56264c1c5dff06428e' }), hasIcon ? h("inno-icon", { icon: icon, size: iconSize, variant: this.colorVariant }) : null, hasIconFont && !hasIcon ? h("inno-icon", { iconFont: icon, size: iconSize, variant: this.colorVariant }) : null)));
    }
};
InnoButton.style = innoButtonCss;

export { InnoButton as inno_button };

//# sourceMappingURL=inno-button.entry.js.map