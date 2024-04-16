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
  <div class="component-display columns">
    <div class="light-bg">
       <span class="bg-title">light background</span>
       <InnoFooter variant="light" copyright="@ Copyright My company">
         <InnoFooterItem slot="links"><a>Privacy Notice</a></InnoFooterItem>
         <InnoFooterItem slot="links"><a>Term of use</a></InnoFooterItem>
         <InnoFooterItem slot="links"><span>Cookie Notice</span></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
       </InnoFooter>
    </div>
    <div class="dark-bg">
       <span class="bg-title">dark background</span>
        <InnoFooter variant="dark" copyright="@ Copyright My company">
          <InnoFooterItem slot="links"><a>Privacy Notice</a></InnoFooterItem>
          <InnoFooterItem slot="links"><a>Term of use</a></InnoFooterItem>
          <InnoFooterItem slot="links"><span>Cookie Notice</span></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
        </InnoFooter>
    </div>
  </div>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```html
    <div class="component-display columns">
      <div class="light-bg">
       <span class="bg-title">light background</span>
       <inno-footer variant="light" copyright="@ Copyright My company">
         <inno-footer-item slot="links"><a>Privacy Notice</a></inno-footer-item>
         <inno-footer-item slot="links"><a>Term of use</a></inno-footer-item>
         <inno-footer-item slot="links"><span>Cookie Notice</span></inno-footer-item>
         <inno-footer-item slot="icons"><InnoIcon icon='home'></InnoIcon></inno-footer-item>
         <inno-footer-item slot="icons"><InnoIcon icon='home'></InnoIcon></inno-footer-item>
         <inno-footer-item slot="icons"><InnoIcon icon='home'></InnoIcon></inno-footer-item>
       </inno-footer>
    </div>
    <div class="dark-bg">
       <span class="bg-title">dark background</span>
        <inno-footer variant="dark" copyright="@ Copyright My company">
          <inno-footer-item slot="links"><a>Privacy Notice</a></inno-footer-item>
          <inno-footer-item slot="links"><a>Term of use</a></inno-footer-item>
          <inno-footer-item slot="links"><span>Cookie Notice</span></inno-footer-item>
          <inno-footer-item slot="icons"><InnoIcon icon='home'></InnoIcon></inno-footer-item>
          <inno-footer-item slot="icons"><InnoIcon icon='home'></InnoIcon></inno-footer-item>
          <inno-footer-item slot="icons"><InnoIcon icon='home'></InnoIcon></inno-footer-item>
        </inno-footer>
    </div>
  </div>
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```tsx
  <div class="component-display columns">
    <div class="light-bg">
       <span class="bg-title">light background</span>
       <InnoFooter variant="light" copyright="@ Copyright My company">
         <InnoFooterItem slot="links"><a>Privacy Notice</a></InnoFooterItem>
         <InnoFooterItem slot="links"><a>Term of use</a></InnoFooterItem>
         <InnoFooterItem slot="links"><span>Cookie Notice</span></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
       </InnoFooter>
    </div>
    <div class="dark-bg">
       <span class="bg-title">dark background</span>
        <InnoFooter variant="dark" copyright="@ Copyright My company">
          <InnoFooterItem slot="links"><a>Privacy Notice</a></InnoFooterItem>
          <InnoFooterItem slot="links"><a>Term of use</a></InnoFooterItem>
          <InnoFooterItem slot="links"><span>Cookie Notice</span></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
        </InnoFooter>
    </div>
  </div>
    ```
  </TabItem>
  <TabItem value="Vue" label="Vue">
    ```tsx
  <div class="component-display columns">
    <div class="light-bg">
       <span class="bg-title">light background</span>
       <InnoFooter variant="light" copyright="@ Copyright My company">
         <InnoFooterItem slot="links"><a>Privacy Notice</a></InnoFooterItem>
         <InnoFooterItem slot="links"><a>Term of use</a></InnoFooterItem>
         <InnoFooterItem slot="links"><span>Cookie Notice</span></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
         <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
       </InnoFooter>
    </div>
    <div class="dark-bg">
       <span class="bg-title">dark background</span>
        <InnoFooter variant="dark" copyright="@ Copyright My company">
          <InnoFooterItem slot="links"><a>Privacy Notice</a></InnoFooterItem>
          <InnoFooterItem slot="links"><a>Term of use</a></InnoFooterItem>
          <InnoFooterItem slot="links"><span>Cookie Notice</span></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
          <InnoFooterItem slot="icons"><InnoIcon icon='home'></InnoIcon></InnoFooterItem>
        </InnoFooter>
    </div>
  </div>
    ```
  </TabItem>
  <TabItem value="webcomponent" label="Web component">
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
