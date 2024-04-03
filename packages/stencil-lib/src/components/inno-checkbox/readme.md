import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoCheckbox} from '@innomotics/ix-react-lib';

# inno-checkbox

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <InnoCheckbox label="checkbox label" variant="dark"></InnoCheckbox>
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

    The component is compatible with the Angular reactive form
    and can be used as a standalone form control element
    or can be integrated into a group or array.

    Optional required state or validator can be added if checkbox is required.

    ### Standalone form usage example:

    ```html
    <inno-checkbox label="label" [formControl]="controlRef"> </inno-checkbox>
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

    The component is compatible with normal html based form
    and it is compatible with high-level form libraries.

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    ## Standalone usage

    The component can be used as a standalone component
    if form integration is not required.

    Direct Javascript usage:

    Provided attributes and DOM event handling should be used.

    ```html
    <inno-checkbox id="cb1" label="js usage" checked="true"></inno-checkbox>
    ```

    ```javascript
    document.getElementById('cb1').addEventListener('valueChange', ...);
    ```

    ## Form usage

    Component can be used as a form element
    and it integrates with the host form.

    The official custom element form association is used in this case:

    [https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-elements](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-elements)

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
