import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';

const copyAssets = [
  {
    src: './../../../node_modules/@innomotics/ix-fonts/dist',
    dest: '',
  },
  {
    src:'../styles',
    dest:''
  },
  {
    src: './../../../node_modules/@innomotics/ix-icons/dist',
    dest: '',
  }
];

export const config: Config = {
  namespace: 'innomotics-ix',
  plugins: [sass({ includePaths: ['styles','../../node_modules'] }), postcss({ plugins: [autoprefixer()] })],
  globalScript: './src/setup.ts',
  srcDir:'./src',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: copyAssets
    },
    {
      type:'dist',
      copy: [
        {src: '../styles'}
      ]
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
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
