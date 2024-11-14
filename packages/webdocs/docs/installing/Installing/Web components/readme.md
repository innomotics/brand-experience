# Web components

### Install dependencies

install the Brand Experience package using your package manager (all the dependencies will be added automatically)

```
npm install @innomotics/brand-experience
```

### Initialize custom components

```
import { defineCustomElements } from '@innomotics/brand-experience/loader';
```

then also call it in your main application file (app.js)

```
(async () => {
  await defineCustomElements();
})();
```

### Import style

```
@import '@innomotics/brand-experience/styles/innomotics'
```
