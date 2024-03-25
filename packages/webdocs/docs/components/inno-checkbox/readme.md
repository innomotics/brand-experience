# inno-checkbox

Represents the default checkbox for the Innomics applications.

## Classes

| Name            | Description            |
| --------------- | ---------------------- |
| `inno-checkbox` | `design wrapper class` |
| `inno-dark`     | `dark mode class`      |

## How to use

Wrap the given input
and add the necessary classes to the wrapper.

### Light mode example.

```html
<div class="inno-checkbox">
  <input type="checkbox" id="id1" />
  <label for="id1">input label</label>
</div>
```

### Dark mode example.

```html
<div class="inno-checkbox inno-dark">
  <input type="checkbox" id="id1" />
  <label for="id1">input label</label>
</div>
```

<!-- Auto Generated Below -->


## Overview

Checkbox for Innomatics design system.

## Properties

| Property   | Attribute  | Description                               | Type                | Default     |
| ---------- | ---------- | ----------------------------------------- | ------------------- | ----------- |
| `checked`  | `checked`  | Whether element is checked.               | `boolean`           | `undefined` |
| `disabled` | `disabled` | Whether component is disabled.            | `boolean`           | `false`     |
| `label`    | `label`    | Label to show.                            | `string`            | `''`        |
| `readonly` | `readonly` | Whether the component is readonly.        | `boolean`           | `false`     |
| `required` | `required` | Whether the checkbox have to be selected. | `boolean`           | `false`     |
| `tabIdx`   | `tab-idx`  | The tab index.                            | `number`            | `0`         |
| `variant`  | `variant`  | Theme variant of the component.           | `"dark" \| "light"` | `'light'`   |


## Events

| Event         | Description                      | Type                   |
| ------------- | -------------------------------- | ---------------------- |
| `valueChange` | Checked status has been changed. | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
