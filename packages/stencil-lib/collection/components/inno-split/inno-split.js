import { Host, h } from "@stencil/core";
/**
 * Experimental component that lets the user separate and resize panels. Should only contain inno-split-item children components.
 * The inno-split-item components can contain inno-split component for nesting.
 */
export class InnoSplit {
    constructor() {
        this.orientation = 'horizontal';
        this.splitAreasDefaultSizes = [];
        this.splitAreasCurrentSizes = [];
        this.isMouseDown = false;
        this.slotNames = undefined;
    }
    hostElement;
    splitAreasIndices = [];
    originalPos = undefined;
    gutterIndex = undefined;
    splitSize = undefined;
    splitItemSize = undefined;
    nextSplitItemSize = undefined;
    minSize = undefined;
    maxSize = undefined;
    abortController = new AbortController();
    get isHorizontal() {
        return this.orientation === 'horizontal';
    }
    handleMouseDown(event, gutterIndex) {
        this.isMouseDown = true;
        this.originalPos = this.isHorizontal ? event.pageX : event.pageY;
        this.gutterIndex = gutterIndex;
        this.splitSize = this.isHorizontal ? this.hostElement.offsetWidth : this.hostElement.offsetHeight;
        let splits = this.hostElement.querySelectorAll(":scope > .split-slot-container");
        this.splitItemSize = (this.isHorizontal ? splits.item(gutterIndex).offsetWidth : splits.item(gutterIndex).offsetHeight) * 100 / this.splitSize;
        this.nextSplitItemSize = (this.isHorizontal ? splits.item(gutterIndex + 1).offsetWidth : splits.item(gutterIndex + 1).offsetHeight) * 100 / this.splitSize;
        this.minSize = 16 / this.splitSize * 100;
        this.maxSize = this.splitItemSize + this.nextSplitItemSize;
        this.startListening();
    }
    handleMouseUp() {
        this.isMouseDown = false;
        this.originalPos = undefined;
        this.gutterIndex = undefined;
        this.splitSize = undefined;
        this.splitItemSize = undefined;
        this.nextSplitItemSize = undefined;
        this.minSize = undefined;
        this.maxSize = undefined;
        this.abortController.abort();
        this.abortController = new AbortController();
    }
    handleMouseMove(event) {
        if (!this.isMouseDown) {
            return;
        }
        let newPos;
        if (this.isHorizontal) {
            newPos = (event.pageX * 100) / this.splitSize - (this.originalPos * 100) / this.splitSize;
        }
        else {
            newPos = (event.pageY * 100) / this.splitSize - (this.originalPos * 100) / this.splitSize;
        }
        let newSize = this.splitItemSize + newPos;
        if (newSize < this.minSize) {
            this.splitAreasCurrentSizes[this.gutterIndex] = this.minSize;
            this.splitAreasCurrentSizes[this.gutterIndex + 1] = this.maxSize;
        }
        else if (newSize > this.maxSize) {
            this.splitAreasCurrentSizes[this.gutterIndex] = this.maxSize;
            this.splitAreasCurrentSizes[this.gutterIndex + 1] = this.minSize;
        }
        else {
            this.splitAreasCurrentSizes[this.gutterIndex] = this.splitItemSize + newPos;
            this.splitAreasCurrentSizes[this.gutterIndex + 1] = this.nextSplitItemSize - newPos;
        }
        this.splitAreasCurrentSizes = [...this.splitAreasCurrentSizes];
    }
    startListening() {
        window.addEventListener('mousemove', e => this.handleMouseMove(e), { signal: this.abortController.signal });
        window.addEventListener('mouseup', () => this.handleMouseUp(), { signal: this.abortController.signal });
    }
    /**
     * Reinit the component. Can be used if the number of inno-split-items change.
     */
    async reInit() {
        this.init();
        this.hostElement.querySelectorAll(':scope > .split-slot-container > inno-split-item > inno-split').forEach(el => {
            el.reInit();
        });
    }
    init() {
        let splitItems = Array.from(new Set([
            ...Array.from(this.hostElement.querySelectorAll(':scope > inno-split-item')),
            ...Array.from(this.hostElement.querySelectorAll(':scope > .split-slot-container > inno-split-item'))
        ]));
        splitItems.forEach((el, key) => {
            el.slot = this.slotNames[key];
        });
        this.splitAreasIndices = [];
        for (let i = 0; i < splitItems.length; i++) {
            this.splitAreasIndices.push(i);
        }
        this.splitAreasCurrentSizes = [];
        if (this.splitAreasDefaultSizes.length > 0 && this.splitAreasIndices.length === this.splitAreasDefaultSizes.length) {
            this.splitAreasCurrentSizes = [...this.splitAreasDefaultSizes];
        }
        else {
            let defaultSize = 100 / this.splitAreasIndices.length;
            for (let i = 0; i < splitItems.length; i++) {
                this.splitAreasCurrentSizes.push(defaultSize);
            }
        }
    }
    componentWillLoad() {
        this.init();
    }
    render() {
        this.splitAreasCurrentSizes[this.splitAreasCurrentSizes.length - 1] = 1; //last will be always '1fr'
        let style = {
            'grid-template-columns': this.isHorizontal ? this.splitAreasCurrentSizes.join('% ') + 'fr' : null,
            'grid-template-rows': !this.isHorizontal ? this.splitAreasCurrentSizes.join('% ') + 'fr' : null,
        };
        return (h(Host, { key: '6c7ca174d95ac4245f4fb6d402b8637b0787cf77', class: {
                'horizontal': this.orientation === 'horizontal',
                'vertical': this.orientation === 'vertical',
                'dragging': this.isMouseDown
            }, style: style }, this.splitAreasIndices.map(index => {
            let hasGutter = this.splitAreasIndices.length > 1 && index !== (this.splitAreasIndices.length - 1);
            return (h("div", { class: {
                    'split-slot-container': true,
                    'horizontal': this.orientation === 'horizontal',
                    'vertical': this.orientation === 'vertical'
                } }, h("slot", { name: this.slotNames[index] }), hasGutter
                ? h("inno-split-gutter", { orientation: this.orientation, onMouseDown: (e) => this.handleMouseDown(e, index) })
                : null));
        })));
    }
    static get is() { return "inno-split"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-split.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-split.css"]
        };
    }
    static get properties() {
        return {
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'horizontal' | 'vertical'",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "orientation",
                "reflect": false,
                "defaultValue": "'horizontal'"
            },
            "splitAreasDefaultSizes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Default size of each contained inno-split-item in percentage (width if 'horizontal', height if 'vertical'). If omitted they will have equal sizes."
                },
                "defaultValue": "[]"
            },
            "slotNames": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Required property. Unique slot names for the inno-split-items to insert into. Length must be equal to the number of inserted inno-split-items."
                }
            }
        };
    }
    static get states() {
        return {
            "splitAreasCurrentSizes": {},
            "isMouseDown": {}
        };
    }
    static get methods() {
        return {
            "reInit": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLInnoSplitElement": {
                            "location": "global",
                            "id": "global::HTMLInnoSplitElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Reinit the component. Can be used if the number of inno-split-items change.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-split.js.map
