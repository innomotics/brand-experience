# inno-status-message-container



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                            | Default                      |
| ---------------- | ----------------- | ----------- | ------------------------------- | ---------------------------- |
| `containerClass` | `container-class` |             | `string`                        | `'status-message-container'` |
| `containerId`    | `container-id`    |             | `string`                        | `'status-message-container'` |
| `position`       | `position`        |             | `"bottom-right" \| "top-right"` | `'top-right'`                |


## Methods

### `showToast(config: InnoStatusMessageConfig) => Promise<ShowToastResult>`

Display a toast message

#### Parameters

| Name     | Type                      | Description |
| -------- | ------------------------- | ----------- |
| `config` | `InnoStatusMessageConfig` |             |

#### Returns

Type: `Promise<ShowToastResult>`




## Dependencies

### Depends on

- [inno-status-message](.)

### Graph
```mermaid
graph TD;
  inno-status-message-container --> inno-status-message
  inno-status-message --> inno-icon
  style inno-status-message-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
