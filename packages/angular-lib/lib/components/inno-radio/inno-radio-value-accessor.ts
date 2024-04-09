import {
  NG_VALUE_ACCESSOR,
  NgControl,
  ControlValueAccessor,
} from "@angular/forms";
import {
  Directive,
  ElementRef,
  HostListener,
  Injector,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { InnoRadioControlRegistry } from "./inno-radio-registry";

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: "inno-radio[formControlName], inno-radio[ngModel], inno-radio[formControl]",
  host: {
    "(valueChange)": "handleChangeEvent($event.target.value)",
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InnoRadioValueAccessor,
      multi: true,
    },
  ],
})
export class InnoRadioValueAccessor
  implements ControlValueAccessor, OnInit, OnDestroy
{
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  control!: NgControl;
  value: any;

  constructor(
    public el: ElementRef,
    private injector: Injector,
    private registry: InnoRadioControlRegistry
  ) {}

  ngOnInit(): void {
    this.control = this.injector.get(NgControl);
    this.registry.add(this.control, this);
  }

  ngOnDestroy(): void {
    this.registry.remove(this);
  }

  get name() {
    const nameAttribute = this.el.nativeElement.getAttribute("name");
    if (!nameAttribute && this.control.name) {
      return this.control.name;
    }
    return nameAttribute;
  }

  writeValue(value: any) {
    this.el.nativeElement.formValue = value ?? "";
  }

  handleChangeEvent(value: any) {
    this.value = value;
    this.onChange(value);
  }

  @HostListener("focusout")
  handleBlurEvent() {
    this.onTouched();
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = () => {
      fn(this.value);
      this.registry.select(this);
    };
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled;
  }

  fireUncheck(value: any): void {
    this.writeValue(value);
  }
}
