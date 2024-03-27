# inno-popover

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoPopover} from '@innomotics/ix-react-lib';

<Tabs>
  <TabItem value="preview" label="Preview" default>
  <div>
    <span id="onhoverspan">tooltip on hover (right)</span>
    <InnoPopover for="#onhoverspan" placement='right' trigger='hover' title-content="title" variant="light">
    <p>Text</p>
  </InnoPopover>
  </div>
  <div>
    <span id="onclickspan">tooltip on click (bottom)</span>
    <InnoPopover for="#onclickspan" placement='bottom' title-content="title">
    <p>Text</p>
    </InnoPopover>
  </div>
 </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js
    <span id="onhoverspan">tooltip on hover (right)</span>
    <inno-popover for="#onhoverspan" placement='right' trigger='hover' title-content="title" variant="light">
    <p>Text</p>
    </inno-popover>
    <span id="onclickspan">tooltip on click (bottom)</span>
    <inno-popover for="#onclickspan" placement='bottom' title-content="title">
    <p>Text</p>
    </inno-popover>
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```js
    <span id="onhoverspan">tooltip on hover (right)</span>
    <InnoPopover for="#onhoverspan" placement='right' trigger='hover' title-content="title" variant="light">
    <p>Text</p>
    </InnoPopover>
    <span id="onclickspan">tooltip on click (bottom)</span>
    <InnoPopover for="#onclickspan" placement='bottom' title-content="title">
    <p>Text</p>
    </InnoPopover>
    ```
  </TabItem>
    <TabItem value="Vue" label="Vue">
    ```js
    <span id="onhoverspan">tooltip on hover (right)</span>
    <InnoPopover for="#onhoverspan" placement='right' trigger='hover' title-content="title" variant="light">
    <p>Text</p>
    </InnoPopover>
    <span id="onclickspan">tooltip on click (bottom)</span>
    <InnoPopover for="#onclickspan" placement='bottom' title-content="title">
    <p>Text</p>
    </InnoPopover>
    ```
  </TabItem>
</Tabs>


<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                                                                                                                                 | Default     |
| -------------- | --------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `for`          | `for`           |             | `string`                                                                                                                                                             | `undefined` |
| `placement`    | `placement`     |             | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'top'`     |
| `titleContent` | `title-content` |             | `string`                                                                                                                                                             | `undefined` |
| `trigger`      | `trigger`       |             | `"click" \| "hover" \| "manual"`                                                                                                                                     | `'click'`   |
| `variant`      | `variant`       |             | `"dark" \| "light"`                                                                                                                                                  | `'dark'`    |
| `visible`      | `visible`       |             | `boolean`                                                                                                                                                            | `false`     |


## Methods

### `hideTooltip() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `showTooltip() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
