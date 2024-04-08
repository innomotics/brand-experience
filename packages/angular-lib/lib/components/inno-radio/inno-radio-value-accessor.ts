import { NG_VALUE_ACCESSOR, RadioControlValueAccessor } from "@angular/forms";
import { Directive } from "@angular/core";

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
