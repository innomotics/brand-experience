# inno-table-base

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoTableBase} from '@innomotics/brand-experience-react-lib';

Basic wrapper component for HTML table element. Will apply the innomotics design on the table elements and scrolling

<Tabs>
<TabItem value="preview" label="Preview" default>

   <div class="component-display columns">
      <div class="light-bg">
        <span class="bg-title">light background</span>
        <InnoTableBase>
            <table>
                <thead>
                <tr><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th></tr>
                </thead>
                <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                </tbody>
            </table>
        </InnoTableBase>
        </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
        <InnoTableBase variant="dark" maskColor="#08191f">
            <table>
                <thead>
                <tr><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th></tr>
                </thead>
                <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                </tbody>
            </table>
        </InnoTableBase>
      </div>
    </div>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js
    <div class="component-display">
      <div class="light-bg">
        <span class="bg-title">light background</span>
        <inno-table-base>
            <table>
                <thead>
                <tr><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th></tr>
                </thead>
                <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                </tbody>
            </table>
        </inno-table-base>
      </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
        <inno-table-base variant="dark" maskColor="#08191f">
            <table>
                <thead>
                <tr><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th></tr>
                </thead>
                <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                </tbody>
            </table>
        </inno-table-base>
      </div>
    </div>   
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```tsx
    <div class="component-display">
      <div class="light-bg">
        <span class="bg-title">light background</span>
        <InnoTableBase>
            <table>
                <thead>
                <tr><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th></tr>
                </thead>
                <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                </tbody>
            </table>
        </InnoTableBase>
      </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
        <InnoTableBase variant="dark" maskColor="#08191f">
            <table>
                <thead>
                <tr><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th></tr>
                </thead>
                <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                </tbody>
            </table>
        </InnoTableBase>
      </div>
    </div>
    ```
  </TabItem>
    <TabItem value="Vue" label="Vue">
    ```tsx
    <div class="component-display">
      <div class="light-bg">
        <span class="bg-title">light background</span>
        <InnoTableBase>
            <table>
                <thead>
                <tr><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th></tr>
                </thead>
                <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                </tbody>
            </table>
        </InnoTableBase>
      </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
        <InnoTableBase variant="dark" maskColor="#08191f">
            <table>
                <thead>
                <tr><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th><th>Lorem ipsum</th></tr>
                </thead>
                <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                </tr>
                </tbody>
            </table>
        </InnoTableBase>
      </div>
    </div>
    ```
  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Overview

Basic wrapper element for html tables. Adds some basic styling to the table and a custom scrollbar with fade-out effect.
Can be used without html table as well, in that case only the custom scrollbar with fade-out effect will be applied to the html element.

## Properties

| Property    | Attribute    | Description                                                                                                                                                                           | Type                | Default     |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| `maskColor` | `mask-color` | The fade out effect while scrolling is achieved by using mask-image and linear-gradient.  For it to work properly a color must be set to be the same as the table's background color. | `string`            | `'#ffffff'` |
| `variant`   | `variant`    | Color variant of the table;                                                                                                                                                           | `"dark" \| "light"` | `'light'`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
