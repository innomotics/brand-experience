////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/angular/src/modal/modal-ref.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { closeModal, dismissModal } from "@innomotics/ix";

export class InnoActiveModal<TData = any, TReason = any> {
  modalElement!: HTMLElement;

  constructor(private readonly modalData?: TData) {}

  public get data() {
    return this.modalData;
  }

  /**
   * Close the active modal.
   *
   * @param reason
   */
  public close(reason: TReason) {
    closeModal(this.modalElement, reason);
  }

  /**
   * Dismiss the active modal.
   *
   * @param reason
   */
  public dismiss(reason?: TReason) {
    dismissModal(this.modalElement, reason);
  }
}

export class InternalInnoActiveModal<
  TData = any,
  TReason = any,
> extends InnoActiveModal<TData, TReason> {
  setModalElement(element: HTMLElement) {
    this.modalElement = element;
  }
}
