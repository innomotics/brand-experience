import { Config } from '@stencil/core';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';
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
];

const copyGlobalStyles = [
  {
    src: '../styles',
    dest: 'dist/styles'
  }
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
];

export const config: Config = {
  namespace: 'innomotics-ix',
  plugins: [sass({ includePaths: ['styles', '../../node_modules'] }), postcss({ plugins: [autoprefixer()] })],
  srcDir: './src',
  globalStyle: './styles/innomotics.scss',
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
    { type: 'dist-custom-elements',
      copy: copyGlobalStyles
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: copyAssets,
    },
    angularOutputTarget({
      componentCorePackage: '@innomotics/ix',
      outputType: 'component',
      directivesProxyFile: '../angular-lib/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-lib/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
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
