# inno-input

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoInput} from '@innomotics/brand-experience-react-lib';

<Tabs>
  <TabItem value="preview" label="Preview" default>
  <div class="component-display">
    <div class="light-bg">
      <span class="bg-title">light background</span>
      <InnoInput label="Power" variant="light">
        <input type="number" />
      </InnoInput> 
    </div>
    <div class="dark-bg">
      <span class="bg-title">dark background</span>
      <InnoInput label="Power" variant="dark">
        <input type="number" />
      </InnoInput> 
    </div>
  </div>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js
  <div class="component-display">
    <div class="light-bg">
      <span class="bg-title">light background</span>
      <inno-input label="Power" variant="light">
        <input type="number" />
      </inno-input> 
    </div>
    <div class="dark-bg">
      <span class="bg-title">dark background</span>
      <inno-input label="Power" variant="dark">
        <input type="number" />
      </inno-input> 
    </div>
  </div>
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```js
  <div class="component-display">
    <div class="light-bg">
      <span class="bg-title">light background</span>
      <InnoInput label="Power" variant="light">
        <input type="number" />
      </InnoInput> 
    </div>
    <div class="dark-bg">
      <span class="bg-title">dark background</span>
      <InnoInput label="Power" variant="dark">
        <input type="number" />
      </InnoInput> 
    </div>
  </div>
    ```
  </TabItem>
    <TabItem value="Vue" label="Vue">
    ```js
  <div class="component-display">
    <div class="light-bg">
      <span class="bg-title">light background</span>
      <InnoInput label="Power" variant="light">
        <input type="number" />
      </InnoInput> 
    </div>
    <div class="dark-bg">
      <span class="bg-title">dark background</span>
      <InnoInput label="Power" variant="dark">
        <input type="number" />
      </InnoInput> 
    </div>
  </div>
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
| `variant`   | `variant`    | Color variant of the input.           | `"dark" \| "light"` | `'light'`   |


## Events

| Event          | Description                        | Type                            |
| -------------- | ---------------------------------- | ------------------------------- |
| `valueChanged` | Fired when the new value is valid. | `CustomEvent<number \| string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
