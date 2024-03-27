# inno-toggle

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoToggle} from '@innomotics/ix-react-lib';

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <InnoToggle variant="light"></InnoToggle>
    <InnoToggle variant="light" disabled></InnoToggle>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js
    <inno-toggle variant="light"></inno-toggle >
    <inno-toggle  variant="light" disabled></inno-toggle >
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```js
    <InnoToggle variant="light"></InnoToggle>
    <InnoToggle variant="light" disabled></InnoToggle>
    ```
  </TabItem>
    <TabItem value="Vue" label="Vue">
    ```js
    <InnoToggle variant="light"></InnoToggle>
    <InnoToggle variant="light" disabled></InnoToggle>
    ```
  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                          | Type                | Default  |
| ---------- | ---------- | ---------------------------------------------------- | ------------------- | -------- |
| `checked`  | `checked`  | Whether the slide-toggle element is checked or not.  | `boolean`           | `false`  |
| `disabled` | `disabled` | Whether the slide-toggle element is disabled or not. | `boolean`           | `false`  |
| `tabIdx`   | `tab-idx`  | The tab index of the toggle                          | `number`            | `0`      |
| `variant`  | `variant`  | Color variant of the toggle component.               | `"dark" \| "light"` | `'dark'` |


## Events

| Event           | Description                                                               | Type                   |
| --------------- | ------------------------------------------------------------------------- | ---------------------- |
| `checkedChange` | An event will be dispatched each time the slide-toggle changes its value. | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
