////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
/// Represents an abstraction how to add the view to the different containers.
/// The default delegator uses the HTML DOM API to attach the element to the DOM tree.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/delegate.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type DelegateConfig = {
  parentElement?: Element;
};

export interface FrameworkDelegate {
  attachView<R = HTMLElement>(view: any, config?: DelegateConfig): Promise<R>;
  removeView(view: any): Promise<void>;
}

class DefaultFrameworkDelegate implements FrameworkDelegate {
  async attachView<R = HTMLElement>(view: any, config?: DelegateConfig): Promise<R> {
    const attachToElement = config?.parentElement ?? document.body;
    attachToElement.appendChild(view);
    return view;
  }

  async removeView(view: any) {
    view.remove();
  }
}

const coreDelegate = new DefaultFrameworkDelegate();
let currentDelegate: FrameworkDelegate = coreDelegate;

export function registerFrameworkDelegate(delegate: FrameworkDelegate) {
  currentDelegate = delegate;
}

export const resolveDelegate = () => {
  return currentDelegate;
};

export const getCoreDelegate = () => coreDelegate;
