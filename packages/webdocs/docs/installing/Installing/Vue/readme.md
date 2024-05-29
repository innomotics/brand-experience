# Vue

### Install dependencies

install the Brand Experience package using your package manager (all the dependencies will be added automatically)

```
npm install @innomotics/brand-experience-vue-lib
```

### Initialize custom components

```
import { ComponentLibrary } from '@innomotics/brand-experience-vue-lib'
```

then also make your app use the library

```
createApp(App).use(ComponentLibrary).mount('#app') 
```

### Import style

```
@import '@innomotics/brand-experience/dist/styles/innomotics'
```
