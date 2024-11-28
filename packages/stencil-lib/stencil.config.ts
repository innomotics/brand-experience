import { Config } from '@stencil/core';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';

const copyAssets = [
  {
    src: './../../../node_modules/@innomotics/brand-experience-fonts/dist',
    dest: './fonts'
  },
];

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['inno-select[formControl]', 'inno-select[formControlName]', 'inno-select[ngModel]'],
    event: 'valueChanged',
    targetAttr: 'value',
    type: 'select',
  },
  {
    elementSelectors: 'inno-toggle[ngModel],inno-toggle[formControlName],inno-toggle[formControl]',
    event: 'checkedChange',
    targetAttr: 'checked',
    type: 'boolean',
  },
  {
    elementSelectors: 'inno-checkbox[ngModel],inno-checkbox[formControlName],inno-checkbox[formControl]',
    event: 'valueChange',
    targetAttr: 'checked',
    type: 'boolean',
  },
  // Inno-radio accessor is a custom accessor provided in the angular library.
];

export const config: Config = {
  namespace: 'innomotics-brand-experience',
  plugins: [sass({ includePaths: ['styles', '../../node_modules'] }), postcss({ plugins: [autoprefixer()] })],
  srcDir: './src',
  globalStyle: './styles/innomotics.scss',
  globalScript: './src/polyfills.ts',
  outputTargets: [
    {
      type: 'dist',
      empty:false
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: copyAssets
    },
    angularOutputTarget({
      componentCorePackage: '@innomotics/brand-experience',
      outputType: 'component',
      directivesProxyFile: '../angular-lib/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-lib/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      stencilPackageName: '@innomotics/brand-experience',
      customElementsDir: 'components',
      outDir:'../react-lib/lib/components/stencil-generated'
    }),
    vueOutputTarget({
      componentCorePackage: '@innomotics/brand-experience',
      proxiesFile: '../vue-lib/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
