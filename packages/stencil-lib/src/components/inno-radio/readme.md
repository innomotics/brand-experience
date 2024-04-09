import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoRadio} from '@innomotics/ix-react-lib';

# Inno-radio

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <form>
      <div><InnoRadio name="group1" value="value1" label="unchecked" variant="dark"></InnoRadio></div>
      <div><InnoRadio name="group2" value="value2" label="checked" checked variant="dark"></InnoRadio></div>
      <div><InnoRadio name="group3" value="value3" label="required" required variant="dark"></InnoRadio></div>
      <div><InnoRadio name="group4" value="value4" label="error" required error variant="dark"></InnoRadio></div>
      <div><InnoRadio name="group5" value="value5" label="readonly" checked readonly variant="dark"></InnoRadio></div>
      <div><InnoRadio name="group6" value="value6" label="disabled" checked disabled variant="dark"></InnoRadio></div>
    </form>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    The component is compatible with the Angular reactive form.

    If error status is needed then the validity state of the given control should be used
    as input for the error state property.

    ```html
    <form [formGroup]="form">
      <div><inno-radio name="radioGroup1" value="value1" label="option 1" formControlName="radioGroup1"></inno-radio></div>
      <div><inno-radio name="radioGroup1" value="value3" label="option 2" formControlName="radioGroup1"></inno-radio></div>
      <div><inno-radio name="radioGroup1" value="value2" label="option 3" formControlName="radioGroup1"></inno-radio></div>
    </form>
    ```
    ```html
    <form [formGroup]="form">
      <div>
        <inno-radio name="radioGroup1" value="value1" label="option 1" formControlName="radioGroup1" required [error]="hasError">
        </inno-radio>
      </div>
    </form>
    ```

    ```ts
    class Component {
      form: FormGroup;

      exampleInit() {
        this.form = new FormGroup({
          radioGroup1: new FormControl('value1', [Validators.required]),
        });
      }
    }
    ```

  </TabItem>
  <TabItem value="React" label="React">
    The component is compatible with normal html based form
    and it is compatible with high-level form libraries.

    ```jsx
    <form>
      <div><InnoRadio name="group" value="value1" label="option 1"></InnoRadio></div>
      <div><InnoRadio name="group" value="value2" label="option 2"></InnoRadio></div>
      <div><InnoRadio name="group" value="value3" label="option 3"></InnoRadio></div>
    </form>
    ```

  </TabItem>
  <TabItem value="Javascript" label="Javascript">
    The component is compatible with normal html based form.

    ```html
    <form>
      <div><inno-radio name="radioGroup1" value="value1" label="option 1"></inno-radio></div>
      <div><inno-radio name="radioGroup1" value="value3" label="option 2"></inno-radio></div>
      <div><inno-radio name="radioGroup1" value="value2" label="option 3"></inno-radio></div>
    </form>
    ```

  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Overview

Represents the default radio button for the Innomics applications.

## Properties

| Property   | Attribute  | Description                                                                                                    | Type                | Default     |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| `checked`  | `checked`  |                                                                                                                | `boolean`           | `undefined` |
| `disabled` | `disabled` | Whether component is disabled. In this state no other state effects are applied to the element like error.     | `boolean`           | `false`     |
| `error`    | `error`    | Whether the element is in error state. Error state can be defined if manual error handling is required.        | `boolean`           | `false`     |
| `label`    | `label`    | Label to show.                                                                                                 | `string`            | `''`        |
| `name`     | `name`     | Form entry group name.                                                                                         | `string`            | `undefined` |
| `readonly` | `readonly` | Whether the component is readonly. In this state no other state effects are applied to the element like error. | `boolean`           | `false`     |
| `required` | `required` | Mark the component as required and show the required marker. Validation is performed with this property.       | `boolean`           | `false`     |
| `tabIdx`   | `tab-idx`  | The tab index.                                                                                                 | `number`            | `0`         |
| `value`    | `value`    | Radio button value.                                                                                            | `string`            | `undefined` |
| `variant`  | `variant`  | Theme variant of the component.                                                                                | `"dark" \| "light"` | `'light'`   |


## Events

| Event         | Description                                             | Type                  |
| ------------- | ------------------------------------------------------- | --------------------- |
| `valueChange` | Emits the associated value when the element is clicked. | `CustomEvent<string>` |


## Methods

### `unselect() => Promise<void>`

Remove the selection from the given control.
Can be used to synchronize the selection state
between the radio group elements if manual control is required.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
