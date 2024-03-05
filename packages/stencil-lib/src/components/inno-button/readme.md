# inno-button

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoButton} from '@innomotics/ix-react-lib';

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <InnoButton variant="primary">Button</InnoButton>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js
    <inno-button variant="primary">Button</inno-button>
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```js
     <InnoButton variant="primary">Button</InnoButton>
    ```
  </TabItem>
    <TabItem value="Vue" label="Vue">
    ```js
     <InnoButton variant="primary">Button</InnoButton>
    ```
  </TabItem>
</Tabs>



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description | Type                                                                         | Default     |
| ----------------------- | ------------------------- | ----------- | ---------------------------------------------------------------------------- | ----------- |
| `disabled`              | `disabled`                |             | `boolean`                                                                    | `false`     |
| `parentBackgroundColor` | `parent-background-color` |             | `"dark" \| "light" \| "light-highlight"`                                     | `'light'`   |
| `tabIdx`                | `tab-idx`                 |             | `number`                                                                     | `0`         |
| `type`                  | `type`                    |             | `"button" \| "submit"`                                                       | `'button'`  |
| `variant`               | `variant`                 |             | `"cta" \| "media" \| "navigation" \| "primary" \| "secondary" \| "tertiary"` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
