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

| Property    | Attribute    | Description                           | Type                | Default     |
| ----------- | ------------ | ------------------------------------- | ------------------- | ----------- |
| `disabled`  | `disabled`   | Whether the input is disabled or not. | `boolean`           | `false`     |
| `isFocused` | `is-focused` | Whether the input is focused or not.  | `boolean`           | `undefined` |
| `label`     | `label`      | Floating label for the input.         | `string`            | `undefined` |
| `value`     | `value`      | Value of the input.                   | `number \| string`  | `undefined` |
| `variant`   | `variant`    | Color variant of the input.           | `"dark" \| "light"` | `'light'`   |


## Events

| Event          | Description                        | Type                            |
| -------------- | ---------------------------------- | ------------------------------- |
| `valueChanged` | Fired when the new value is valid. | `CustomEvent<number \| string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
