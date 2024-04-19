# inno-modal

<!-- Auto Generated Below -->


## Overview

Represents the main frame of the modal component.

## Properties

| Property               | Attribute                 | Description                                                       | Type                                                                         | Default   |
| ---------------------- | ------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------- |
| `animation`            | `animation`               | Should the modal be animated                                      | `boolean`                                                                    | `true`    |
| `backdrop`             | `backdrop`                | Show a backdrop behind the modal dialog                           | `boolean`                                                                    | `true`    |
| `centered`             | `centered`                | Centered modal                                                    | `boolean`                                                                    | `false`   |
| `closeOnBackdropClick` | `close-on-backdrop-click` | Dismiss modal on backdrop click                                   | `boolean`                                                                    | `true`    |
| `closeOnEscape`        | `close-on-escape`         | If set to true the modal can be closed by pressing the Escape key | `boolean`                                                                    | `true`    |
| `size`                 | `size`                    | Modal size                                                        | `"360" \| "480" \| "600" \| "720" \| "840" \| "full-screen" \| "full-width"` | `'720'`   |
| `variant`              | `variant`                 | Theme variant of the component.                                   | `"dark" \| "light"`                                                          | `'light'` |


## Events

| Event           | Description   | Type               |
| --------------- | ------------- | ------------------ |
| `dialogClose`   | Dialog close  | `CustomEvent<any>` |
| `dialogDismiss` | Dialog cancel | `CustomEvent<any>` |


## Methods

### `closeModal<T = any>(reason: T) => Promise<void>`

Close the dialog

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `reason` | `T`  |             |

#### Returns

Type: `Promise<void>`



### `dismissModal<T = any>(reason?: T) => Promise<void>`

Dismiss the dialog

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `reason` | `T`  |             |

#### Returns

Type: `Promise<void>`



### `showModal() => Promise<void>`

Show the dialog.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
