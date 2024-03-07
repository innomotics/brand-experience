import { applyPolyfills, defineCustomElements } from '@innomotics/ix/loader';

let didInitialize = false;

export const appInitialize = (doc: Document) => {
  return async () => {
    const win: Window | undefined = doc.defaultView as any;
    if (win && typeof (window as any) !== 'undefined') {
      if (didInitialize) {
        return;
      }

      didInitialize = true;

      await applyPolyfills();
      await defineCustomElements();
    }
  };
};
