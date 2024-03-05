import type {
    Components as IxIconsComponents,
    JSX as IxIconsJSX
  } from '@siemens/ix-icons';

export * from './components';

declare module './components' {
    export namespace Components {
      export type IxIcon = IxIconsComponents.IxIcon;
    }
  }
  
  declare module './components' {
    export namespace JSX {
      export type IxIcon = IxIconsJSX.IxIcon;
    }
  }