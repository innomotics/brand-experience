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
