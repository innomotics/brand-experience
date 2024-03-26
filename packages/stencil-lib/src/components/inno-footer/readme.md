# inno-footer

<!-- Auto Generated Below -->


## Overview

Represents the general footer for the Innomotics applications.

## Usage

### General-usage

Child items can be defined to show then in the footer.

Currently supported footer elements:

- link element (a)
- paragraph (p)
- inno-icon element

Other elements can be used but there is no explicit support
and these elements may need manual configuration like theme support.

For custom elements the `data-inno-footer-item-style` attribute is set with the given variant.

Usage example:

```html
<inno-footer variant="dark" copyright="@ Innomotics 2024">
  <inno-footer-item><p>Privacy Notice</p></inno-footer-item>
  <inno-footer-item><a>Term of use</a></inno-footer-item>
  <inno-footer-item><inno-icon icon="about"></inno-icon></inno-footer-item>
</inno-footer>
```



## Properties

| Property    | Attribute   | Description             | Type                | Default   |
| ----------- | ----------- | ----------------------- | ------------------- | --------- |
| `copyright` | `copyright` | The copyright label.    | `string`            | `''`      |
| `variant`   | `variant`   | Theme variant property. | `"dark" \| "light"` | `'light'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
