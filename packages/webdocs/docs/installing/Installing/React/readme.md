# React

### Install dependencies

install the Brand Experience package using your package manager (all the dependencies will be added automatically)

```
npm install @innomotics/brand-experience-react-lib
npm install @stencil/react-output-target
```

### Initialize custom components

```
import { defineCustomElements } from "@innomotics/brand-experience-react-lib";
```

then initialize the components by calling in your main app code (e.g : App.js, App.tsx)

```
defineCustomElements();
```

### Import style

```
npm install sass
@import '@innomotics/brand-experience/dist/styles/innomotics'
```

### tsconfig.json

in tsconfig module and moduleResolution under compileroptions should set to

```
    "module": "esnext",
    "moduleResolution": "bundler",
```
