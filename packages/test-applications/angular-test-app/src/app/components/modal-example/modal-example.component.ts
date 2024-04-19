import { Component, TemplateRef, ViewChild } from '@angular/core';
import { InnoModalService } from '@innomotics/ix-angular-lib';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrl: './modal-example.component.scss',
})
export class ModalExampleComponent {
  @ViewChild('normalModal', { read: TemplateRef })
  normalModalRef!: TemplateRef<any>;

  @ViewChild('modalWithList', { read: TemplateRef })
  modalWithListRef!: TemplateRef<any>;

  @ViewChild('modalBigText', { read: TemplateRef })
  modalBigTextRef!: TemplateRef<any>;

  @ViewChild('settingsModal', { read: TemplateRef })
  settingsModalRef!: TemplateRef<any>;

  @ViewChild('createNewComparison', { read: TemplateRef })
  createNewComparisonRef!: TemplateRef<any>;

  constructor(private readonly modalService: InnoModalService) {}

  async openNormalModal() {
    const ref = await this.modalService.open({
      content: this.normalModalRef,
      closeOnBackdropClick: false,
      backdrop: true,
      centered: true,
      title: 'title',
      closeOnEscape: false,
      data: 'modal data',
    });

    ref.onClose.on((event) => console.log(event));
  }

  async openModalWithList() {
    const ref = await this.modalService.open({
      content: this.modalWithListRef,
      closeOnBackdropClick: false,
      backdrop: true,
      centered: true,
      title: 'title',
      closeOnEscape: false,
    });
  }

  async openModalBigText() {
    const ref = await this.modalService.open({
      content: this.modalBigTextRef,
      closeOnBackdropClick: true,
      backdrop: false,
      centered: true,
      title: 'title',
      closeOnEscape: true,
      size: '600',
    });
  }

  async openSettingsModal() {
    const ref = await this.modalService.open({
      content: this.settingsModalRef,
      closeOnBackdropClick: false,
      backdrop: true,
      centered: true,
      title: 'title',
      closeOnEscape: false,
    });
  }

  async openCreateNewComparisonModal() {
    const ref = await this.modalService.open({
      content: this.createNewComparisonRef,
      closeOnBackdropClick: false,
      backdrop: true,
      centered: true,
      title: 'title',
      closeOnEscape: false,
    });
  }
}
