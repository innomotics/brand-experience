import { Component } from '@angular/core';
import { StatusMessageService } from '@innomotics/ix-angular-lib';

@Component({
  selector: 'app-general-example',
  templateUrl: './general-example.component.html',
  styleUrl: './general-example.component.scss',
})
export class GeneralExampleComponent {
  constructor(private messageService: StatusMessageService) {}

  showStatusMessage() {
    this.messageService.show({
      message: 'my message',
      theme: 'dark',
      type: 'warning',
      position: 'top-left',
      autoClose: false,
      autoCloseDelay: 1000,
      showProgress: true,
    });

    this.messageService.setPosition('bottom-right');
  }
}
