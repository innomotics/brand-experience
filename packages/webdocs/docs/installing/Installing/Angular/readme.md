# Angular

### Install dependencies

install the Brand Experience package using your package manager (all the dependencies will be added automatically)

```
npm install @innomotics/brand-experience-angular-lib
```

### Initialize custom components

```
import { ComponentsModule } from '@innomotics/brand-experience-angular-lib/dist';
```

then also add the module to your imports

```
imports: [
    ...
    ComponentsModule.forRoot(),
    ...
  ],
```

### Import style

```
@import '@innomotics/brand-experience/dist/styles/innomotics'
```
