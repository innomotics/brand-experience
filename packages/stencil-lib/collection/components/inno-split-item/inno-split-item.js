import { Host, h } from "@stencil/core";
/**
 * Should be only used with inno-split component. Can contain inno-split component for nesting.
 */
export class InnoSplitItem {
    render() {
        return (h(Host, { key: '0e1f9dc6b469c26c8183b21c8ede20b0e7ab335d' }, h("slot", { key: '683f4a2f31334552d9ddb87c2bd4d4159ab45133' })));
    }
    static get is() { return "inno-split-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-split-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-split-item.css"]
        };
    }
}
//# sourceMappingURL=inno-split-item.js.map
