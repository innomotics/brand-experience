// packages/vue-library/lib/plugin.ts

import { Plugin } from 'vue';
import { defineCustomElements } from '@innomotics/brand-experience/dist/loader';

export const ComponentLibrary: Plugin = {
  async install() {
      defineCustomElements();
  },
};