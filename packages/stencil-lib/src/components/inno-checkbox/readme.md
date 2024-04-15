import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoCheckbox} from '@innomotics/ix-react-lib';

# inno-checkbox

<Tabs>
  <TabItem value="preview-dark" label="Preview (dark)" default>
    <div style={{paddingLeft: '20px'}}>
    <div><InnoCheckbox label="unchecked" variant="dark"></InnoCheckbox></div>
    <div><InnoCheckbox label="checked" variant="dark" checked></InnoCheckbox></div>
    <div><InnoCheckbox label="required" variant="dark" required></InnoCheckbox></div>
    <div><InnoCheckbox label="error" variant="dark" required error></InnoCheckbox></div>
    <div><InnoCheckbox label="indeterminate" variant="dark" indeterminate></InnoCheckbox></div>
    <div><InnoCheckbox label="readonly" variant="dark" readonly checked></InnoCheckbox></div>
    <div><InnoCheckbox label="disabled" variant="dark" disabled checked></InnoCheckbox></div>
    </div>
  </TabItem>
  <TabItem value="preview-light" label="Preview (light)">
    <div style={{backgroundColor: 'white', paddingLeft: '20px'}}>
    <div><InnoCheckbox label="unchecked" variant="light"></InnoCheckbox></div>
    <div><InnoCheckbox label="checked" variant="light" checked></InnoCheckbox></div>
    <div><InnoCheckbox label="required" variant="light" required></InnoCheckbox></div>
    <div><InnoCheckbox label="error" variant="light" required error></InnoCheckbox></div>
    <div><InnoCheckbox label="indeterminate" variant="light" indeterminate></InnoCheckbox></div>
    <div><InnoCheckbox label="readonly" variant="light" readonly checked></InnoCheckbox></div>
    <div><InnoCheckbox label="disabled" variant="light" disabled checked></InnoCheckbox></div>
    </div>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ## Standalone usage

    The component can be used as a standalone component
    if form integration is not required.

    Angular provided property and event binding should be used.

    ```html
    <inno-checkbox label="angular usage" (valueChange)="handler($event.detail)" [checked]="value"></inno-checkbox>
    ```

    ## Form usage

    The component is compatible with the Angular reactive form and can be used as a standalone form control element
    or can be integrated into a group or array.

    If error status is needed then the validity state of the given control should be used
    as input for the error state property.

    ### Standalone form usage example:

    ```html
    <inno-checkbox label="label" [formControl]="controlRef"> </inno-checkbox>
    ```

    ```html
    <inno-checkbox label="label" [formControl]="controlRef" required [error]="controlRef.valid" > </inno-checkbox>
    ```

    ```ts
    class Component {
      exampleInit() {
        controlRef: new FormControl(initValue, [Validators.requiredTrue]),
      }
    }
    ```

    ### Group usage example:

    ```html
    <form [formGroup]="formRef">
      <inno-checkbox label="label" formControlName="definedName"> </inno-checkbox>
    </form>
    ```

    ```ts
    class Component {
      exampleInit() {
        controlRef = new FormGroup({
          definedName: new FormControl(initValue, [Validators.requiredTrue]),
        });
      }
    }
    ```

  </TabItem>
  <TabItem value="React" label="React">
    ## Standalone usage

    The component can be used as a standalone component
    if form integration is not required.

    JSX provided property and event binding should be used.

    ```jsx
    <InnoCheckbox label="jsx usage" onValueChange="{event => ...}" checked={value}></InnoCheckbox>
    ```

    ## Form usage

    The component is compatible with normal html based form and it is compatible with high-level form libraries.

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ## Standalone usage

    The component can be used as a standalone component if form integration is not required.

    Direct Javascript usage:

    Provided attributes and DOM event handling should be used.

    ```html
    <inno-checkbox id="cb1" label="js usage" checked="true"></inno-checkbox>
    ```

    ```javascript
    document.getElementById('cb1').addEventListener('valueChange', ...);
    ```

    ## Form usage

    Component can be used as a form element and it integrates with the host form.

    Form usage example:

    ```html
    <form>
      <inno-checkbox label="label" name="definedName"> </inno-checkbox>
    </form>
    ```

  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Overview

Checkbox for Innomatics design system.

## Properties

| Property        | Attribute       | Description                                                                                                                                                          | Type                | Default     |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| `checked`       | `checked`       | Whether element is checked.                                                                                                                                          | `boolean`           | `undefined` |
| `disabled`      | `disabled`      | Whether component is disabled. In this state no other state effects are applied to the element like error.                                                           | `boolean`           | `false`     |
| `error`         | `error`         | Whether the element is in error state. Error state can be defined if manual error handling is required.                                                              | `boolean`           | `false`     |
| `indeterminate` | `indeterminate` | Whether indeterminate state is enabled for the component. The component is in indeterminate state if it is explicity requested and the checked status is not defined | `boolean`           | `false`     |
| `label`         | `label`         | Label to show.                                                                                                                                                       | `string`            | `''`        |
| `name`          | `name`          | Form entry name.                                                                                                                                                     | `string`            | `undefined` |
| `readonly`      | `readonly`      | Whether the component is readonly. In this state no other state effects are applied to the element like error.                                                       | `boolean`           | `false`     |
| `required`      | `required`      | Mark the component as required and show the required marker. Validation is performed with this property.                                                             | `boolean`           | `false`     |
| `tabIdx`        | `tab-idx`       | The tab index.                                                                                                                                                       | `number`            | `0`         |
| `variant`       | `variant`       | Theme variant of the component.                                                                                                                                      | `"dark" \| "light"` | `'light'`   |


## Events

| Event         | Description                      | Type                   |
| ------------- | -------------------------------- | ---------------------- |
| `valueChange` | Checked status has been changed. | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
