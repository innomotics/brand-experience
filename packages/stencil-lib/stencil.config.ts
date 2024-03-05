import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'innomotics-ix',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@innomotics/ix',
      outputType: 'component',
      directivesProxyFile: '../angular-lib/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-lib/lib/stencil-generated/index.ts',
    }),
    reactOutputTarget({
      componentCorePackage: '@innomotics/ix',
      proxiesFile: '../react-lib/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@innomotics/ix',
      proxiesFile: '../vue-lib/lib/components.ts',
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
