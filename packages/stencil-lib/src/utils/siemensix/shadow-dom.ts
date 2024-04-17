////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Copied from the the original Siemens IX library.
// Refernce: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/shadow-dom.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function closestElement(selector: string, el: any) {
  if (!el) {
    return null;
  }
  return el.closest(selector) || closestElement(selector, (el.getRootNode() as any).host);
}

export function getSlottedElements<R = any>(slot: any): R[] {
  return slot.assignedElements({ flatten: true });
}

export function hasSlottedElements(slot: any) {
  if (!slot) {
    return false;
  }
  return slot.assignedElements({ flatten: true }).length !== 0;
}

export function containsElement(target: Element, element: Element) {
  const hasShadowDom = target.shadowRoot;

  if (hasShadowDom) {
    target.contains(element) || target.shadowRoot.contains(element);
  }

  return target.contains(element);
}

export function closestPassShadow(node: Node, selector: string) {
  if (!node) {
    return null;
  }

  if (node instanceof ShadowRoot) {
    return closestPassShadow(node.host, selector);
  }

  if (node instanceof HTMLElement) {
    if (node.matches(selector)) {
      return node;
    } else {
      return closestPassShadow(node.parentNode, selector);
    }
  }

  return closestPassShadow(node.parentNode, selector);
}
