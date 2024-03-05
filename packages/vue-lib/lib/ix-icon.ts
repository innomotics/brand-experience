import type { JSX as IxIconsJSX } from '@siemens/ix-icons';
import { defineContainer } from './vue-component-lib/utils';

// eslint-disable-next-line no-inline-comments
export const IxIcon = /*@__PURE__*/ defineContainer<IxIconsJSX.IxIcon>(
  'ix-icon',
  undefined,
  ['size', 'color', 'name']
);
