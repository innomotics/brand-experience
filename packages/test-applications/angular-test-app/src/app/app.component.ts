import { Component } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { StatusMessageService } from '@innomotics/ix-angular-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  formValue = '';

  activeTabIndex = 1;

  public innomoticsForm!: UntypedFormGroup;

  public get innoInput(): UntypedFormControl {
    return this.innomoticsForm.get('innoInput') as UntypedFormControl;
  }

  public get innoSelect(): UntypedFormControl {
    return this.innomoticsForm.get('innoSelect') as UntypedFormControl;
  }

  constructor(
    public formBuilder: UntypedFormBuilder,
    private messageService: StatusMessageService,
  ) {
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

  handleTabChange(index: number) {
    this.activeTabIndex = index;
  }

  showToast() {
    this.messageService.show({
      message: 'my message',
      theme: 'dark',
      type: 'warning',
      position: 'top-right',
    });

    this.messageService.setPosition('bottom-right');
  }
}
