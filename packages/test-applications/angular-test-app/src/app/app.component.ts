import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
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
    });

    this.innomoticsForm.valueChanges.subscribe(
      () => (this.formValue = JSON.stringify(this.innomoticsForm.value)),
    );
  }
}
