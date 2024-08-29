# `Usage`

## Import

Import the **`@innomotics/brand-experience-fonts`** package to your application.

## InnomoticsHafferSQ font

Use **'InnomoticsHafferSQ'** as the font-family.

The class **InnomoticsHafferSQ** can be used to add font-family directly to an element.

```html
<span class="InnomoticsHafferSQ">example text</span>
```

See the InnomoticsHafferSQ font page for example and more information about the style.

## Innomotics UI icon font

Set the font-family and set the icon code.

### Add font-family

Use **'InnomoticsUiIcons'** as the font-family.

The class **InnomoticsUiIcons** can be used to add font-family directly to an element.

```html
<span class="InnomoticsUiIcons">example text</span>
```

### Select icon code

Set icon as direct unicode:

```html
<span class="InnomoticsUiIcons">&#e900;</span>
```

Set icon with css:

Use the code of the icon as content.

```css
.customstyle {
    font-family: 'InnomoticsUiIcons';

    &::before {
        content: '\e900'
    }
}
```

The font icons can be used with the inno-icon component:

```js
<inno-icon icon-font="e901"></inno-icon>

```

See the Innomotics UI Icon font page for example and more information about the style.