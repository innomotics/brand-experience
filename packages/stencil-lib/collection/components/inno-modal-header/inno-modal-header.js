import { Host, h } from "@stencil/core";
import { closestPassShadow } from "./../../utils/siemensix/shadow-dom";
/**
 * Represents the header of the inno-modal component.
 *
 * See the inno-modal component for more information.
 */
export class InnoModalHeader {
    constructor() {
        this.variant = 'light';
        this.showClose = true;
        this.icon = undefined;
    }
    parentDialog;
    hostElement;
    /**
     * Emits when close icon is clicked and closes the modal
     * Can be prevented, in which case only the event is triggered, and the modal remains open
     */
    closeClick;
    componentDidLoad() {
        this.parentDialog = closestPassShadow(this.hostElement, 'inno-modal');
    }
    onCloseClick(event) {
        const ce = this.closeClick.emit(event);
        if (ce.defaultPrevented || event.defaultPrevented) {
            return;
        }
        this.parentDialog.dismissModal();
    }
    themeClasses() {
        return {
            light: this.variant === 'light',
            dark: this.variant === 'dark',
        };
    }
    titleIcon() {
        if (this.icon) {
            const classes = { ...this.themeClasses(), 'modal-icon': true };
            return h("inno-icon", { icon: this.icon, class: classes, size: 24 });
        }
        else {
            return null;
        }
    }
    closeControl() {
        if (this.showClose) {
            const classes = { ...this.themeClasses(), 'modal-close': true };
            return h("inno-icon", { icon: "close", class: classes, size: 24, onClick: e => this.onCloseClick(e) });
        }
        else {
            return null;
        }
    }
    render() {
        const hostClasses = { ...this.themeClasses() };
        return (h(Host, { key: 'aa679137991decd498bd5d9da888193804799ede', class: hostClasses }, this.titleIcon(), h("slot", { key: 'd65f3f58414c909aae89f3c759171350774da9fc' }), this.closeControl()));
    }
    static get is() { return "inno-modal-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-modal-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-modal-header.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'dark' | 'light'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme variant of the component."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "showClose": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hide the close button."
                },
                "attribute": "show-close",
                "reflect": false,
                "defaultValue": "true"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Icon of the header, optional."
                },
                "attribute": "icon",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "closeClick",
                "name": "closeClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when close icon is clicked and closes the modal\r\nCan be prevented, in which case only the event is triggered, and the modal remains open"
                },
                "complexType": {
                    "original": "Event",
                    "resolved": "Event",
                    "references": {
                        "Event": {
                            "location": "global",
                            "id": "global::Event"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-modal-header.js.map
