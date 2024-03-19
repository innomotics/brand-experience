import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'angular-test-app';

  public innomoticsForm!: UntypedFormGroup;

  public get innoInput(): UntypedFormControl {
    return this.innomoticsForm.get("innoInput") as UntypedFormControl;
  }

  public get innoSelect(): UntypedFormControl {
    return this.innomoticsForm.get("innoSelect") as UntypedFormControl;
  }

  constructor(public formBuilder: UntypedFormBuilder){
    this.innomoticsForm = this.formBuilder.group(
      {
        innoInput:[0],
        innoSelect:['']
      }
    )

  }
}
