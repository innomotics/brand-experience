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

### .env

you have to configure sass module to include node_modules when resolving styles. One way is to add an .env file to your project root with 

```
SASS_PATH=./node_modules

```
inside it.
