////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
/// Modified for the Innomotics project.
/// Provides a publicly available API to manage the modal functionality.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/core/src/components/utils/modal/modal.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { InnoModalSize } from './inno-modal.model';
import { getCoreDelegate, resolveDelegate } from '../../utils/delegate';
import { TypedEvent } from '../../utils/typed-event';

export interface ModalConfig<CONTENT = any> {
  animation?: boolean;
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  backdrop?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  centered?: boolean;
  container?: string | HTMLElement;
  content: CONTENT | string;
  keyboard?: boolean;
  size?: InnoModalSize;
  title?: string;
}

export interface ModalInstance<TReason = any> {
  htmlElement: HTMLInnoModalElement;
  onClose: TypedEvent<TReason>;
  onDismiss: TypedEvent<TReason>;
}

export function setA11yAttributes(element: HTMLElement, config: ModalConfig) {
  const ariaDescribedby = config.ariaDescribedby;
  const ariaLabelledby = config.ariaLabelledby;

  delete config['ariaDescribedby'];
  delete config['ariaLabelledby'];

  if (ariaDescribedby) {
    element.setAttribute('aria-describedby', ariaDescribedby);
  }

  if (ariaLabelledby) {
    element.setAttribute('aria-labelledby', ariaLabelledby);
  }
}

function getInnoModal(element: Element): HTMLInnoModalElement {
  return element.closest('inno-modal');
}

export function closeModal<TClose = any>(element: Element, closeResult: TClose) {
  const dialog = getInnoModal(element);
  if (dialog) {
    dialog.closeModal(closeResult);
  }
}

export function dismissModal(element: Element, dismissResult?: any) {
  const dialog = getInnoModal(element);
  if (dialog) {
    dialog.dismissModal(dismissResult);
  }
}

export async function showModal<T>(config: ModalConfig<T>): Promise<ModalInstance<T>> {
  const delegate = resolveDelegate();
  let dialogRef: HTMLInnoModalElement;
  const onClose = new TypedEvent<T>();
  const onDismiss = new TypedEvent<T>();

  // Direct string content to load inticator content
  if (typeof config.content === 'string') {
    const dialog = document.createElement('inno-modal');
    dialog.innerText = config.content;
    dialogRef = await getCoreDelegate().attachView(dialog);
  }

  // Provided only the body of the modal
  if (config.content instanceof HTMLElement && config.content.tagName !== 'INNO-MODAL') {
    const dialog = document.createElement('inno-modal');
    dialog.appendChild(config.content);
    dialogRef = await getCoreDelegate().attachView(dialog);
  }

  // Full inno-modal content is provided
  if (!dialogRef) {
    dialogRef = await delegate.attachView<HTMLInnoModalElement>(config.content);
  }

  setA11yAttributes(dialogRef, config);
  Object.assign(dialogRef, config);

  await dialogRef.showModal();

  dialogRef.addEventListener('dialogClose', async ({ detail }: CustomEvent) => {
    onClose.emit(detail);
    await delegate.removeView(dialogRef);
  });
  dialogRef.addEventListener('dialogDismiss', async ({ detail }: CustomEvent) => {
    onDismiss.emit(detail);
    await delegate.removeView(dialogRef);
  });

  return {
    htmlElement: dialogRef,
    onClose,
    onDismiss,
  };
}
