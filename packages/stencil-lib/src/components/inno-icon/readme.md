# inno-icon

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoIcon} from '@innomotics/ix-react-lib';

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <InnoIcon icon='home' size='16' theme='light'></InnoIcon>
    <InnoIcon icon='home' size='24' theme='light'></InnoIcon>
    <InnoIcon icon='home' size='32' theme='light'></InnoIcon>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js  
    <inno-icon icon='home' size='16' theme='light'></inno-icon>
    <inno-icon icon='home' size='24' theme='light'></inno-icon>
    <inno-icon icon='home' size='32' theme='light'></inno-icon> 
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```js
    <InnoIcon icon='home' size='16' theme='light'></InnoIcon>
    <InnoIcon icon='home' size='24' theme='light'></InnoIcon>
    <InnoIcon icon='home' size='32' theme='light'></InnoIcon>
    ```
  </TabItem>
    <TabItem value="Vue" label="Vue">
    ```js
    <InnoIcon icon='home' size='16' theme='light'></InnoIcon>
    <InnoIcon icon='home' size='24' theme='light'></InnoIcon>
    <InnoIcon icon='home' size='32' theme='light'></InnoIcon>
    ```
  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description              | Type                | Default     |
| -------- | --------- | ------------------------ | ------------------- | ----------- |
| `icon`   | `icon`    | The icon name            | `string`            | `undefined` |
| `size`   | `size`    |                          | `number`            | `16`        |
| `theme`  | `theme`   | Color style of the icon. | `"dark" \| "light"` | `'light'`   |


## Dependencies

### Used by

 - [inno-accordion](../inno-accordion)
 - [inno-breadcrumb-item](../inno-breadcrumb-item)
 - [inno-button](../inno-button)
 - [inno-select](../inno-select)
 - [inno-select-item](../inno-select-item)
 - [inno-tab](../inno-tab)

### Graph
```mermaid
graph TD;
  inno-accordion --> inno-icon
  inno-breadcrumb-item --> inno-icon
  inno-button --> inno-icon
  inno-select --> inno-icon
  inno-select-item --> inno-icon
  inno-tab --> inno-icon
  style inno-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
