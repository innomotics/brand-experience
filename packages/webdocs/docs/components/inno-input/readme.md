# inno-input

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoInput} from '@innomotics/ix-react-lib';

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <InnoInput label="Power" variant="dark">
     <input type="number" />
    </InnoInput> 
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js
    <inno-input label="Power" variant="dark">
     <input type="number" />
    </inno-input>  
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```js
    <InnoInput label="Power" variant="dark">
     <input type="number" />
    </InnoInput> 
    ```
  </TabItem>
    <TabItem value="Vue" label="Vue">
    ```js
    <InnoInput label="Power" variant="dark">
     <input type="number" />
    </InnoInput> 
    ```
  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                | Default     |
| ----------- | ------------ | ----------- | ------------------- | ----------- |
| `disabled`  | `disabled`   |             | `boolean`           | `false`     |
| `isFocused` | `is-focused` |             | `boolean`           | `undefined` |
| `label`     | `label`      |             | `string`            | `undefined` |
| `name`      | `name`       |             | `string`            | `undefined` |
| `value`     | `value`      |             | `number \| string`  | `undefined` |
| `variant`   | `variant`    |             | `"dark" \| "light"` | `'light'`   |


## Events

| Event          | Description | Type                            |
| -------------- | ----------- | ------------------------------- |
| `valueChanged` |             | `CustomEvent<number \| string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
