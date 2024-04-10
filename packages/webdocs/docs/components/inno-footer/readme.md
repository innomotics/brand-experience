import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoFooter, InnoFooterItem, InnoIcon} from '@innomotics/ix-react-lib';

# inno-footer

Child items can be defined to show them in the footer.

Currently supported footer elements:

- link element
- paragraph element
- span element
- inno-icon element

Other elements can be used but there is no explicit support
and these elements may need manual configuration like theme support.

For custom elements the `data-inno-footer-item-style` attribute is set with the given variant.

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <InnoFooter variant="dark" copyright="@ Copyright My company">
      <InnoFooterItem slot="links"><a>Privacy Notice</a></InnoFooterItem>
      <InnoFooterItem slot="links"><a>Term of use</a></InnoFooterItem>
      <InnoFooterItem slot="links"><span>Cookie Notice</span></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
    </InnoFooter>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```html
    <inno-footer [copyright]="copyright">
      <inno-footer-item slot="links"><a>{{privacyNotice}}</a></inno-footer-item>
      <inno-footer-item slot="links"><a>{{termsOfUse}}</a></inno-footer-item>
      <inno-footer-item slot="links"><a>{{cookieNotice}}</a></inno-footer-item>
      <inno-footer-item slot="icons"><inno-icon icon="home"></inno-icon></inno-footer-item>
      <inno-footer-item slot="icons"><inno-icon icon="home"></inno-icon></inno-footer-item>
      <inno-footer-item slot="icons"><inno-icon icon="home"></inno-icon></inno-footer-item>
    </inno-footer> 
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```tsx
    <InnoFooter copyright={copyrightVar}>
      <InnoFooterItem slot="links"><a>{privacyNotice}</a></InnoFooterItem>
      <InnoFooterItem slot="links"><a>{termsOfUse}</a></InnoFooterItem>
      <InnoFooterItem slot="links"><a>{cookieNotice}</a></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon="home"></InnoIcon></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon="home"></InnoIcon></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon="home"></InnoIcon></InnoFooterItem>
    </InnoFooter>
    ```
  </TabItem>
  <TabItem value="Vue" label="Vue">
    ```tsx
    <InnoFooter copyright={copyrightVar}>
      <InnoFooterItem slot="links"><a>{privacyNotice}</a></InnoFooterItem>
      <InnoFooterItem slot="links"><a>{termsOfUse}</a></InnoFooterItem>
      <InnoFooterItem slot="links"><a>{cookieNotice}</a></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon="home"></InnoIcon></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon="home"></InnoIcon></InnoFooterItem>
      <InnoFooterItem slot="icons"><InnoIcon icon="home"></InnoIcon></InnoFooterItem>
    </InnoFooter>
    ```
  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Overview

Represents the general footer for the Innomotics applications.

## Properties

| Property    | Attribute   | Description             | Type                | Default   |
| ----------- | ----------- | ----------------------- | ------------------- | --------- |
| `copyright` | `copyright` | The copyright label.    | `string`            | `''`      |
| `variant`   | `variant`   | Theme variant property. | `"dark" \| "light"` | `'light'` |


## Slots

| Slot      | Description                   |
| --------- | ----------------------------- |
| `"icons"` | containing the icon elements  |
| `"links"` | containing the links elements |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
