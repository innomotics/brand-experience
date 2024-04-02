# Inno-radio

<!-- Auto Generated Below -->


## Overview

Represents the default radiobutton for the Innomics applications.

## Properties

| Property    | Attribute    | Description                                                 | Type                | Default     |
| ----------- | ------------ | ----------------------------------------------------------- | ------------------- | ----------- |
| `disabled`  | `disabled`   | Whether component is disabled.                              | `boolean`           | `false`     |
| `formValue` | `form-value` | Current form value for the connected radio button elements. | `string`            | `undefined` |
| `label`     | `label`      | Label to show.                                              | `string`            | `''`        |
| `name`      | `name`       |                                                             | `string`            | `undefined` |
| `readonly`  | `readonly`   | Whether the component is readonly.                          | `boolean`           | `false`     |
| `required`  | `required`   | Whether the checkbox have to be selected.                   | `boolean`           | `false`     |
| `tabIdx`    | `tab-idx`    | The tab index.                                              | `number`            | `0`         |
| `value`     | `value`      | Radio button value.                                         | `string`            | `undefined` |
| `variant`   | `variant`    | Theme variant of the component.                             | `"dark" \| "light"` | `'light'`   |


## Events

| Event         | Description                      | Type                  |
| ------------- | -------------------------------- | --------------------- |
| `valueChange` | Checked status has been changed. | `CustomEvent<string>` |


## Methods

### `unselect(formValue: string) => Promise<void>`



#### Parameters

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| `formValue` | `string` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*