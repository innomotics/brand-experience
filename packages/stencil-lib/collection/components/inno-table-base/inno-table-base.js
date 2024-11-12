import { Host, h } from "@stencil/core";
import SimpleBar from "simplebar";
/**
 * Basic wrapper element for html tables. Adds some basic styling to the table and a custom scrollbar with fade-out effect.
 * Can be used without html table as well, in that case only the custom scrollbar with fade-out effect will be applied to the html element.
 */
export class InnoTableBase {
    constructor() {
        this.variant = 'light';
        this.maskColor = '#ffffff';
    }
    hostElement;
    maskElement;
    scrollBar;
    /**
     * The component tries its best to always apply the custom scrollbar and the fade-out effect automatically but there might be some cases
     * (especially during/after initalization) where it just simply won't work. In those cases you can call this method manually.
     */
    async refresh() {
        this.recalculateScrollbar();
    }
    recalculateScrollbar() {
        this.scrollBar.recalculate();
        this.setMask(this.scrollBar.getScrollElement());
    }
    onWindowResize() {
        this.recalculateScrollbar();
    }
    setMask(el) {
        this.maskElement.classList.add('is-left-overflowing');
        this.maskElement.classList.add('is-right-overflowing');
        let leftMaskVisible = true;
        let rightMaskVisible = true;
        if (el.scrollLeft < 1) {
            this.maskElement.classList.remove('is-left-overflowing');
            leftMaskVisible = false;
        }
        if (el.scrollWidth - el.scrollLeft - el.clientWidth < 1) {
            this.maskElement.classList.remove('is-right-overflowing');
            rightMaskVisible = false;
        }
        this.maskElement.style.setProperty('background-color', leftMaskVisible || rightMaskVisible ? this.maskColor : 'transparent');
    }
    scrollListener = (event) => {
        this.setMask(event.target);
    };
    componentDidLoad() {
        this.scrollBar = new SimpleBar(this.hostElement.querySelector('.table-div'), { autoHide: false });
        this.maskElement = this.hostElement.querySelector('.mask-layer');
        let table = this.hostElement.querySelector('table');
        if (!!table) {
            table.classList.add('inno-table');
            if (this.variant == 'dark') {
                table.classList.add('dark');
            }
        }
        this.scrollBar.getScrollElement().addEventListener('scroll', this.scrollListener, { passive: true });
        this.recalculateScrollbar();
    }
    componentWillUnload() {
        this.scrollBar.getScrollElement().removeEventListener('scroll', this.scrollListener);
    }
    render() {
        return (h(Host, { key: 'e560ad69fcf77c9a15e9ea84552de54ca17da8fb', class: { light: this.variant === 'light', dark: this.variant === 'dark' } }, h("div", { key: 'b7aab63da3a2b0075481c51429e17bcc2000ba75', class: "table-wrapper" }, h("div", { key: 'f9b493667e700a340d2b45430a3f95a819d2980a', class: "mask-layer" }), h("div", { key: '409a82d6428b0d04570e4d266e0405aa595a1a7a', class: "table-div" }, h("slot", { key: '901e8b1fd0a34adce1193940851190c73174d888' })))));
    }
    static get is() { return "inno-table-base"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-table-base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-table-base.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'light' | 'dark'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color variant of the table;"
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'light'"
            },
            "maskColor": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The fade-out effect while scrolling is achieved by using mask-image and linear-gradient. \r\nFor it to work properly a color must be set to be the same as the table's background color."
                },
                "attribute": "mask-color",
                "reflect": false,
                "defaultValue": "'#ffffff'"
            }
        };
    }
    static get methods() {
        return {
            "refresh": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "The component tries its best to always apply the custom scrollbar and the fade-out effect automatically but there might be some cases \r\n(especially during/after initalization) where it just simply won't work. In those cases you can call this method manually.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onWindowResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=inno-table-base.js.map
