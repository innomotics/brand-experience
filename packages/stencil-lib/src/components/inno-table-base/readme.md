# inno-table-base

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoBreadcrumb, InnoBreadcrumbItem} from '@innomotics/brand-experience-react-lib';

Basic wrapper component for HTML table element. Will apply the innomotics design on the table elements and scrolling
<Tabs>
<TabItem value="preview" label="Preview" default>

   <div class="component-display columns">
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
        <inno-table-base variant="dark">
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
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```js
    <div class="component-display">
      <div class="light-bg">
        <span class="bg-title">light background</span>
      </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
      </div>
    </div>   
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```tsx
    <div class="component-display">
      <div class="light-bg">
        <span class="bg-title">light background</span>
      </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
      </div>
    </div>
    ```
  </TabItem>
    <TabItem value="Vue" label="Vue">
    ```tsx
    <div class="component-display">
      <div class="light-bg">
        <span class="bg-title">light background</span>
      </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
      </div>
    </div>
    ```
  </TabItem>
</Tabs>

<!-- Auto Generated Below -->

## Properties

| Property  | Attribute | Description | Type                | Default   |
| --------- | --------- | ----------- | ------------------- | --------- |
| `variant` | `variant` |             | `"dark" \| "light"` | `'light'` |

---

_Built with [StencilJS](https://stenciljs.com/)_
