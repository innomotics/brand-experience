import { defineCustomElements } from '@innomotics/brand-experience/loader';

let didInitialize = false;

export const appInitialize = (doc: Document) => {
  return async () => {
    const win: Window | undefined = doc.defaultView as any;
    if (win && typeof (window as any) !== 'undefined') {
      if (didInitialize) {
        return;
      }

      didInitialize = true;

      await defineCustomElements();
    }
  };
};
