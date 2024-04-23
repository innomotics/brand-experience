import { Component } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.scss',
})
export class FormExampleComponent {
  formValue = '';

  public innomoticsForm!: UntypedFormGroup;

  public get innoInput(): UntypedFormControl {
    return this.innomoticsForm.get('innoInput') as UntypedFormControl;
  }

  public get innoSelect(): UntypedFormControl {
    return this.innomoticsForm.get('innoSelect') as UntypedFormControl;
  }

  constructor(public formBuilder: UntypedFormBuilder) {
    this.innomoticsForm = this.formBuilder.group({
      innoInput: [0],
      innoSelect: [undefined],
      checkboxtest1: this.formBuilder.control(undefined, [
        Validators.requiredTrue,
      ]),
      checkboxtest2: this.formBuilder.control(undefined),
      radioGroup1: new FormControl('value1'),
    });

    this.formValue = JSON.stringify(this.innomoticsForm.value);

    this.innomoticsForm.valueChanges.subscribe(
      () => (this.formValue = JSON.stringify(this.innomoticsForm.value)),
    );
  }

  checkboxValid() {
    this.innomoticsForm.get('checkboxtest1')?.valid;
  }
}
