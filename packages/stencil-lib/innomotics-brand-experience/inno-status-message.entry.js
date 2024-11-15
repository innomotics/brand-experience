import { r as registerInstance, a as createEvent, g as getElement, h, e as Host } from './index-48a3be21.js';

const TYPE_INFO = {
    info: {
        typeClass: 'type-info',
        icon: 'information',
    },
    warning: {
        typeClass: 'type-warning',
        icon: 'warning_with_circle',
    },
    error: {
        typeClass: 'type-error',
        icon: 'error_with_circle',
    },
    success: {
        typeClass: 'type-success',
        icon: 'success_with_circle',
    },
};
/**
 * Return the type information or info if not found.
 */
function getDetailsForStatusMessage(type) {
    return TYPE_INFO[type] ?? TYPE_INFO['info'];
}

const innoStatusMessageCss = ".sc-inno-status-message-h{width:500px;height:83px;padding:16px 24px 16px 24px;display:flex;flex-direction:row;position:relative;border-width:1px 1px 1px 1px;border-style:solid}.type-success.light.sc-inno-status-message-h{background-color:#ffffff;border-color:#02884E}.type-success.dark.sc-inno-status-message-h{background-color:#08191f;border-color:#4ED69B}.type-warning.light.sc-inno-status-message-h{background-color:#ffffff;border-color:#F0CB49}.type-warning.dark.sc-inno-status-message-h{background-color:#08191f;border-color:#F0CB49}.type-error.light.sc-inno-status-message-h{background-color:#ffffff;border-color:#CB0E0E}.type-error.dark.sc-inno-status-message-h{background-color:#08191f;border-color:#FF88AB}.type-info.light.sc-inno-status-message-h{background-color:#ffffff;border-color:#08191f}.type-info.dark.sc-inno-status-message-h{background-color:#08191f;border-color:#ffffff}.icon-container.sc-inno-status-message{position:relative}.icon-container.sc-inno-status-message>inno-icon.sc-inno-status-message{position:relative;top:-10px;left:-11px}.icon-container.type-success.light.sc-inno-status-message{color:#02884E}.icon-container.type-success.dark.sc-inno-status-message{color:#4ED69B}.icon-container.type-warning.light.sc-inno-status-message{color:#F0CB49}.icon-container.type-warning.dark.sc-inno-status-message{color:#F0CB49}.icon-container.type-error.light.sc-inno-status-message{color:#CB0E0E}.icon-container.type-error.dark.sc-inno-status-message{color:#FF88AB}.icon-container.type-info.light.sc-inno-status-message{color:#08191f}.icon-container.type-info.dark.sc-inno-status-message{color:#ffffff}.message-container.sc-inno-status-message{font-size:16px;line-height:24px;font-family:\"InnomoticsHafferSQ\";overflow:hidden}.message-container.type-success.light.sc-inno-status-message{color:#08191f}.message-container.type-success.dark.sc-inno-status-message{color:#ffffff}.message-container.type-warning.light.sc-inno-status-message{color:#08191f}.message-container.type-warning.dark.sc-inno-status-message{color:#ffffff}.message-container.type-error.light.sc-inno-status-message{color:#08191f}.message-container.type-error.dark.sc-inno-status-message{color:#ffffff}.message-container.type-info.light.sc-inno-status-message{color:#08191f}.message-container.type-info.dark.sc-inno-status-message{color:#ffffff}.close-container.sc-inno-status-message{margin-left:auto}.close-container.sc-inno-status-message>inno-icon.sc-inno-status-message{cursor:pointer}.close-container.type-success.light.sc-inno-status-message{color:#08191f}.close-container.type-success.dark.sc-inno-status-message{color:#ffffff}.close-container.type-warning.light.sc-inno-status-message{color:#08191f}.close-container.type-warning.dark.sc-inno-status-message{color:#ffffff}.close-container.type-error.light.sc-inno-status-message{color:#08191f}.close-container.type-error.dark.sc-inno-status-message{color:#ffffff}.close-container.type-info.light.sc-inno-status-message{color:#08191f}.close-container.type-info.dark.sc-inno-status-message{color:#ffffff}.progress-bar.sc-inno-status-message{position:absolute;bottom:0;left:0;height:5px;width:100%;z-index:1;transform-origin:left}.progress-bar--animated.sc-inno-status-message{animation:trackProgress linear 1 forwards}.progress-bar.type-success.light.sc-inno-status-message{background-color:#02884E}.progress-bar.type-success.dark.sc-inno-status-message{background-color:#4ED69B}.progress-bar.type-warning.light.sc-inno-status-message{background-color:#F0CB49}.progress-bar.type-warning.dark.sc-inno-status-message{background-color:#F0CB49}.progress-bar.type-error.light.sc-inno-status-message{background-color:#CB0E0E}.progress-bar.type-error.dark.sc-inno-status-message{background-color:#FF88AB}.progress-bar.type-info.light.sc-inno-status-message{background-color:#08191f}.progress-bar.type-info.dark.sc-inno-status-message{background-color:#ffffff}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}@keyframes statusMessageFadeIn{from{opacity:0}to{opacity:1}}.sm-fade-in.sc-inno-status-message{animation:statusMessageFadeIn linear 5 forwards}@keyframes statusMessageFadeOut{from{opacity:1}to{opacity:0}}.fadeOut.sc-inno-status-message{animation-name:statusMessageFadeOut;animation-duration:3s;animation-fill-mode:both}";

const InnoStatusMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeMessage = createEvent(this, "closeMessage", 7);
        this.progress = 0;
        this.touched = false;
        this.theme = 'light';
        this.messageType = 'info';
        this.autoClose = false;
        this.autoCloseDelay = 3000;
        this.showProgress = false;
        this.icon = undefined;
        this.iconColor = undefined;
    }
    get hostElement() { return getElement(this); }
    /**
     * Status message is closed.
     */
    closeMessage;
    componentDidLoad() {
        if (this.autoClose) {
            setTimeout(() => this.closeProcess(), this.autoCloseDelay);
        }
    }
    themeClasses() {
        return {
            light: this.theme === 'light',
            dark: this.theme === 'dark',
        };
    }
    messageTypeDetails() {
        return getDetailsForStatusMessage(this.messageType);
    }
    closeProcess() {
        if (this.hostElement) {
            this.hostElement.classList.add('fadeOut');
        }
        setTimeout(() => {
            this.closeMessage.emit();
        }, 250);
    }
    messageIcon(typeInfo, themeClasses) {
        const classes = {
            ...themeClasses,
            'icon-container': true,
            [typeInfo.typeClass]: true,
        };
        const iconName = this.icon ?? typeInfo.icon;
        const iconStyle = this.iconColor ? { color: this.iconColor } : {};
        return (h("div", { class: classes }, h("inno-icon", { icon: iconName, size: 48, style: iconStyle })));
    }
    messageContainer(typeDetails, themeClasses) {
        const classes = {
            ...themeClasses,
            'message-container': true,
            [typeDetails.typeClass]: true,
        };
        return (h("div", { class: classes }, h("slot", null)));
    }
    closeControl(typeDetails, themeClasses) {
        const classes = {
            ...themeClasses,
            'close-container': true,
            [typeDetails.typeClass]: true,
        };
        return (h("div", { class: classes }, h("inno-icon", { icon: "close_small", size: 32, onClick: () => this.closeMessage.emit() })));
    }
    progressBar(typeDetails, themeClasses) {
        const classes = {
            ...themeClasses,
            [typeDetails.typeClass]: true,
            'progress-bar': true,
            'progress-bar--animated': this.showProgress,
        };
        const progressBarStyle = {
            animationDuration: `${this.autoCloseDelay}ms`,
            animationPlayState: this.touched ? 'paused' : 'running',
        };
        return (h("div", { class: classes, style: progressBarStyle, onAnimationEnd: () => this.closeProcess(), onTransitionEnd: () => {
                if (this.progress === 0) {
                    this.closeProcess();
                }
            } }));
    }
    render() {
        const typeDetails = this.messageTypeDetails();
        const themeClasses = this.themeClasses();
        const hostClasses = {
            ...themeClasses,
            [typeDetails.typeClass]: true,
            'sm-fade-in': true,
        };
        return (h(Host, { key: 'c2bd7f44c144b8c453442c07da179863fd3cc8a9', class: hostClasses, onPointerEnter: () => (this.touched = true), onPointerLeave: () => (this.touched = false) }, this.messageIcon(typeDetails, themeClasses), this.messageContainer(typeDetails, themeClasses), this.closeControl(typeDetails, themeClasses), this.progressBar(typeDetails, themeClasses)));
    }
};
InnoStatusMessage.style = innoStatusMessageCss;

export { InnoStatusMessage as inno_status_message };

//# sourceMappingURL=inno-status-message.entry.js.map