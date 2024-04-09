import { NG_VALUE_ACCESSOR, RadioControlValueAccessor } from "@angular/forms";
import { Directive } from "@angular/core";

/**
 * Custom value accessor to InnoRadio element
 * to synchronize the actual state between the form elements.
 *
 * The class extends the built-in radio accessor which provides
 * the same functionality like it does for input[type=radio] elements
 * but it does not provide total access to the underlying properties
 * and methods. If this is required then a custom accessor should be
 * implemented.
 */
@Directive({
  selector:
    "inno-radio[formControlName],inno-radio[formControl],inno-radio[ngModel]",
  host: { "(valueChange)": "onChange()", "(blur)": "onTouched()" },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InnoRadioValueAccessor,
      multi: true,
    },
  ],
})
export class InnoRadioValueAccessor extends RadioControlValueAccessor {}
