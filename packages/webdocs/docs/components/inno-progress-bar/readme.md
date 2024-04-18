# inno-progress-bar



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute              | Description                                                                                                                                                                                                                                                                                                                   | Type                | Default   |
| --------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------- |
| `percentagePrecision` | `percentage-precision` | If the percentage number is shown, how many decimal places should be visible                                                                                                                                                                                                                                                  | `number`            | `0`       |
| `progressPercentage`  | `progress-percentage`  | Progress in percentage. Must be a number between 0 and 100.                                                                                                                                                                                                                                                                   | `number`            | `0`       |
| `progressText`        | `progress-text`        | Text to display for the progress bar.                                                                                                                                                                                                                                                                                         | `string`            | `''`      |
| `showPercentage`      | `show-percentage`      | Show the percentage number on the progress bar. The value is rounded according to the 'percentagePrecision' and 'trailingZeroes' properties.                                                                                                                                                                                  | `boolean`           | `true`    |
| `trailingZeroes`      | `trailing-zeroes`      | If 'percentagePrecision' is larger than 0, should we display the trailing zeroes. For example if the progress is 1.5% and the 'percentagePrecision' is 2 then the displayed text will be '1.50%'  if trailing zeroes are enabled and '1.5%' if trailing zeroes are disabled. Uses the toFixed(..) function in the background. | `boolean`           | `false`   |
| `variant`             | `variant`              | Color variant of the accordion.                                                                                                                                                                                                                                                                                               | `"dark" \| "light"` | `'light'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
