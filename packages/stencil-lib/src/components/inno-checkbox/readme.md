# inno-checkbox

<!-- Auto Generated Below -->


## Overview

Checkbox for Innomatics design system.

## Usage

### Angular-form-usage

The component is compatible with the Angular reactive form
and can be used as a standalone form control element
or can be integrated into a group or array.

Standalone form usage example:

```html
<inno-checkbox label="checkbox label" variant="light" [formControl]="controlRef"> </inno-checkbox>
```

Group usage example:

```html
<form [formGroup]="formRef">
  <inno-checkbox label="checkbox label" variant="light" formControlName="definedName"> </inno-checkbox>
</form>
```


### Html-form-usage

Component can be used as a form element
and it integrates with the host form.

Form usage example:

```html
<form>
  <inno-checkbox label="checkbox label" variant="light" name="definedName"> </inno-checkbox>
</form>
```


### Standalone-usage

The component can be used as a standalone component
if form integration is not required.

Angular usage:

```html
<inno-checkbox label="angular usage" (valueChange)="handler($event.detail)" [checked]="value"></inno-checkbox>
```

JSX usage:

```jsx
<inno-checkbox label="jsx usage" onValueChange="{event => ...}" checked={value}></inno-checkbox>
```

Direct Javascript usage:

```html
<inno-checkbox id="cb1" label="js usage" checked="true"></inno-checkbox>
```

```javascript
document.getElementById('cb1').addEventListener('valueChange', ...);
```



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
