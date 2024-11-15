# `Usage`

## Import

Import the **`@innomotics/brand-experience-fonts`** package to your application.

## InnomoticsHafferSQ font

Use **'InnomoticsHafferSQ'** as the font-family.

The class **InnomoticsHafferSQ** can be used to add font-family directly to an element.

```html
<span class="InnomoticsHafferSQ">example text</span>
```

## Font related classes

Avaliable classes to use after import.

* <span class="text-4xl">text-4xl (80px)</span>
* <span class="text-3xl">text-3xl (48px)</span>
* <span class="text-2xl">text-2xl (32px)</span>
* <span class="text-xl">text-xl (24px)</span>
* <span class="text-lg">text-lg (20px)</span>
* <span class="text-base">text-base (16px)</span>
* <span class="text-sm">text-sm (14px)</span>
* <span class="text-xs">text-xs (12px)</span>

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