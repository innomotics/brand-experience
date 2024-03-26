The component is compatible with the Angular reactive form
and can be used as a standalone form control element
or can be integrated into a group or array.

Optional required state or validator can be added if checkbox is required.

Standalone form usage example:

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

Group usage example:

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
