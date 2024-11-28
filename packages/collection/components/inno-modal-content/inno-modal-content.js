import { Host, h } from "@stencil/core";
/**
 * Represents the main content of the modal.
 * The content is provided by the user.
 *
 * See the inno-modal component for more information.
 */
export class InnoModalContent {
    render() {
        return (h(Host, { key: 'a407a62ddb0a28ccfdc6800bf0c843a4f6833f97' }, h("slot", { key: '2db1c877789935c0241913a8fddfde9e5d321396' })));
    }
    static get is() { return "inno-modal-content"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-modal-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-modal-content.css"]
        };
    }
}
//# sourceMappingURL=inno-modal-content.js.map
