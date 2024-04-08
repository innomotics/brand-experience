# inno-pane



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                                | Type                                     | Default     |
| ---------------------- | ------------------------- | -------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| `closeOnBackdropClick` | `close-on-backdrop-click` | Whether the pane is closeable by clicking outside of it.                   | `boolean`                                | `true`      |
| `expanded`             | `expanded`                | Programatically control whether the pane is opened or closed.              | `boolean`                                | `false`     |
| `hideCloseButton`      | `hide-close-button`       | The pane comes with a close button by default. Hide it with this property. | `boolean`                                | `false`     |
| `paneSize`             | `pane-size`               | Size of the pane.                                                          | `string`                                 | `'100%'`    |
| `position`             | `position`                | Position of the pane.                                                      | `"bottom" \| "left" \| "right" \| "top"` | `'right'`   |
| `titleText`            | `title-text`              | Title of the pane.                                                         | `string`                                 | `undefined` |


## Events

| Event             | Description                                            | Type                                  |
| ----------------- | ------------------------------------------------------ | ------------------------------------- |
| `expandedChanged` | This event is fired when the pane is opened or closed. | `CustomEvent<{ expanded: boolean; }>` |


## Dependencies

### Depends on

- [inno-button](../inno-button)

### Graph
```mermaid
graph TD;
  inno-pane --> inno-button
  inno-button --> inno-icon
  style inno-pane fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
