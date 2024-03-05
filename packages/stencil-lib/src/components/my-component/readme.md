# my-component

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {MyComponent} from '@innomotics/ix-react-lib';

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <MyComponent first="My" last="name"></MyComponent>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js
    <my-component first="My" last="Name"></my-component>
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```js
    <my-component first="My" last="Name"></my-component>
    ```
  </TabItem>
</Tabs>

retek

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description     | Type     | Default     |
| -------- | --------- | --------------- | -------- | ----------- |
| `first`  | `first`   | The first name  | `string` | `undefined` |
| `last`   | `last`    | The last name   | `string` | `undefined` |
| `middle` | `middle`  | The middle name | `string` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
