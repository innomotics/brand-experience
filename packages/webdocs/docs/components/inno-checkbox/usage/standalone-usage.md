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
