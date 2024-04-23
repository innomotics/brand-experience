import { Component } from '@angular/core';
import { InnoActiveModal } from '@innomotics/ix-angular-lib';

@Component({
  selector: 'app-modal-by-component',
  templateUrl: './modal-by-component.component.html',
  styleUrl: './modal-by-component.component.scss',
})
export class ModalByComponentComponent {
  constructor(readonly activeModal: InnoActiveModal) {}

  close() {
    this.activeModal.close('My close response');
  }
}
