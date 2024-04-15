# inno-tab-item



<!-- Auto Generated Below -->


## Overview

Represents an inno-tab item.

Wraps the provided content.

See the InnoTab component for more information about how to use the tab component.

## Properties

| Property   | Attribute  | Description                                                                                                                          | Type                    | Default   |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | --------- |
| `disabled` | `disabled` | Set disabled tab.                                                                                                                    | `boolean`               | `false`   |
| `layout`   | `layout`   | Set layout width style. Auto: Item has the same width as the enclosed item in slot. Stretched: Item has the maximum available width. | `"auto" \| "stretched"` | `'auto'`  |
| `selected` | `selected` | Set selected tab.                                                                                                                    | `boolean`               | `false`   |
| `theme`    | `theme`    | Theme variant property. Inherited from the parent. Can be overridden if explicitly defined.                                          | `"dark" \| "light"`     | `'light'` |


## Events

| Event      | Description   | Type                                        |
| ---------- | ------------- | ------------------------------------------- |
| `tabClick` | On tab click. | `CustomEvent<{ nativeEvent: MouseEvent; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
