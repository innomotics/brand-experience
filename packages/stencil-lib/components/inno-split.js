import { p as proxyCustomElement, H, h, d as Host } from './p-6a22c7f2.js';
import { d as defineCustomElement$2 } from './p-d2186ebf.js';

const innoSplitCss = ".sc-inno-split-h{display:grid;inline-size:100%;block-size:100%}.dragging.sc-inno-split-h{-webkit-user-select:none !important;-moz-user-select:none !important;user-select:none !important}.dragging.vertical.sc-inno-split-h{cursor:row-resize}.dragging.horizontal.sc-inno-split-h{cursor:col-resize}.sc-inno-split-h .split-slot-container.sc-inno-split{display:flex;flex-wrap:nowrap;justify-content:space-between;min-width:0;min-height:0}.sc-inno-split-h .split-slot-container.horizontal.sc-inno-split{flex-direction:row}.sc-inno-split-h .split-slot-container.vertical.sc-inno-split{flex-direction:column}";
const InnoSplitStyle0 = innoSplitCss;

const InnoSplit$1 = /*@__PURE__*/ proxyCustomElement(class InnoSplit extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    get hostElement() { return this; }
    orientation = 'horizontal';
    /**
     * Default size of each contained inno-split-item in percentage (width if 'horizontal', height if 'vertical'). If omitted they will have equal sizes.
     */
    splitAreasDefaultSizes = [];
    splitAreasCurrentSizes = [];
    isMouseDown = false;
    /**
     * Required property. Unique slot names for the inno-split-items to insert into. Length must be equal to the number of inserted inno-split-items.
     */
    slotNames;
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
        return (h(Host, { key: 'b317c21cfa30ef3584b4bd474a6a083b6d95761a', class: {
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
    static get style() { return InnoSplitStyle0; }
}, [6, "inno-split", {
        "orientation": [1],
        "splitAreasDefaultSizes": [16],
        "slotNames": [16],
        "splitAreasCurrentSizes": [32],
        "isMouseDown": [32],
        "reInit": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["inno-split", "inno-split-gutter"];
    components.forEach(tagName => { switch (tagName) {
        case "inno-split":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InnoSplit$1);
            }
            break;
        case "inno-split-gutter":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InnoSplit = InnoSplit$1;
const defineCustomElement = defineCustomElement$1;

export { InnoSplit, defineCustomElement };

//# sourceMappingURL=inno-split.js.map