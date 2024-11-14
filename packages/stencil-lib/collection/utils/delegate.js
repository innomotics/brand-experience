////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
/// Represents an abstraction how to add the view to the different containers.
/// The default delegator uses the HTML DOM API to attach the element to the DOM tree.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/delegate.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class DefaultFrameworkDelegate {
    async attachView(view, config) {
        const attachToElement = config?.parentElement ?? document.body;
        attachToElement.appendChild(view);
        return view;
    }
    async removeView(view) {
        view.remove();
    }
}
const coreDelegate = new DefaultFrameworkDelegate();
let currentDelegate = coreDelegate;
export function registerFrameworkDelegate(delegate) {
    currentDelegate = delegate;
}
export const resolveDelegate = () => {
    return currentDelegate;
};
export const getCoreDelegate = () => coreDelegate;
//# sourceMappingURL=delegate.js.map
