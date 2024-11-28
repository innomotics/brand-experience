# inno-time-picker



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                        | Type                  | Default      |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------ | --------------------- | ------------ |
| `format` | `format`  | Date format string. See "https://moment.github.io/luxon/#/formatting?id=table-of-tokens" for all available tokens. | `string`              | `'HH:mm:ss'` |
| `texts`  | --        | Component text configuration.                                                                                      | `InnoTimePickerTexts` | `undefined`  |
| `theme`  | `theme`   | Theme variant of the component.                                                                                    | `"dark" \| "light"`   | `'light'`    |
| `time`   | `time`    |                                                                                                                    | `string`              | `undefined`  |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `valueChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [inno-button](../../inno-button)

### Graph
```mermaid
graph TD;
  inno-time-picker --> inno-button
  inno-button --> inno-icon
  style inno-time-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
