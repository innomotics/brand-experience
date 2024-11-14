////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Copied from the the original Siemens IX library.
// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/shadow-dom.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function closestElement(selector, el) {
    if (!el) {
        return null;
    }
    return el.closest(selector) || closestElement(selector, el.getRootNode().host);
}
export function getSlottedElements(slot) {
    return slot.assignedElements({ flatten: true });
}
export function hasSlottedElements(slot) {
    if (!slot) {
        return false;
    }
    return slot.assignedElements({ flatten: true }).length !== 0;
}
export function containsElement(target, element) {
    const hasShadowDom = target.shadowRoot;
    if (hasShadowDom) {
        target.contains(element) || target.shadowRoot.contains(element);
    }
    return target.contains(element);
}
export function closestPassShadow(node, selector) {
    if (!node) {
        return null;
    }
    if (node instanceof ShadowRoot) {
        return closestPassShadow(node.host, selector);
    }
    if (node instanceof HTMLElement) {
        if (node.matches(selector)) {
            return node;
        }
        else {
            return closestPassShadow(node.parentNode, selector);
        }
    }
    return closestPassShadow(node.parentNode, selector);
}
//# sourceMappingURL=shadow-dom.js.map
