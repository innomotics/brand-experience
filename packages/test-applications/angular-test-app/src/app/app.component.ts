import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { InnoModalService } from '@innomotics/ix-angular-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  formValue = '';

  @ViewChild('customModal', { read: TemplateRef })
  customModalRef!: TemplateRef<any>;

  public innomoticsForm!: UntypedFormGroup;

  public get innoInput(): UntypedFormControl {
    return this.innomoticsForm.get('innoInput') as UntypedFormControl;
  }

  public get innoSelect(): UntypedFormControl {
    return this.innomoticsForm.get('innoSelect') as UntypedFormControl;
  }

  constructor(
    public formBuilder: UntypedFormBuilder,
    private readonly modalService: InnoModalService,
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

  async openModal() {
    const ref = await this.modalService.open({
      content: this.customModalRef,
      closeOnBackdropClick: false,
      backdrop: true,
      centered: true,
      title: 'title',
    });
  }
}
