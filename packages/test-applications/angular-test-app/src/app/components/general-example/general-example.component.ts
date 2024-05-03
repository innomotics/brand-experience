import { Component } from '@angular/core';
import { StatusMessageService } from '@innomotics/brand-experience-angular-lib';

@Component({
  selector: 'app-general-example',
  templateUrl: './general-example.component.html',
  styleUrl: './general-example.component.scss',
})
export class GeneralExampleComponent {
  constructor(private messageService: StatusMessageService) {}

  async showStatusMessage() {
    const ref = await this.messageService.show({
      message: 'my message',
      theme: 'dark',
      type: 'warning',
      position: 'top-left',
      autoClose: false,
      autoCloseDelay: 3000,
      showProgress: true,
    });

    this.messageService.setPosition('top-right');

    setTimeout(() => ref.close(':('), 2000);
  }
}
