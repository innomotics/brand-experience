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
  styleUrl: './app.component.scss',
})
export class AppComponent {
  activeTabIndex = 2;

  constructor(private messageService: StatusMessageService) {}

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
