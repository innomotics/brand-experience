////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/angular/src/modal/modal.service.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {
  ApplicationRef,
  ComponentFactoryResolver,
  ElementRef,
  Injectable,
  Injector,
  TemplateRef,
  Type,
  ViewRef,
} from "@angular/core";
import { closeModal, dismissModal, showModal } from "@innomotics/brand-experience";
import { InternalInnoActiveModal, InnoActiveModal } from "./inno-modal-ref";
import { ModalConfig } from "./inno-modal-config";

type ModalContext<T> = {
  close: ((result: any) => void) | null;
  dismiss: ((result?: any) => void) | null;
  data?: T;
};

@Injectable()
export class InnoModalService {
  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  async open<TData = any, TReason = any>(config: ModalConfig<TData>) {
    const context: ModalContext<TData> = {
      close: null,
      dismiss: null,
      data: config.data,
    };

    if (config.content instanceof Type) {
      return this.createContentByComponentType<TData, TReason>(
        config.content,
        config,
        context
      );
    }

    const modalInstance = await this.createContentByTemplateRef<TData, TReason>(
      config.content,
      config,
      context
    );

    return modalInstance;
  }

  private async createContentByComponentType<TData = any, TReason = any>(
    componentType: Type<unknown>,
    config: ModalConfig<TData>,
    context: ModalContext<TData>
  ) {
    const activeModal = new InternalInnoActiveModal<TData>(context.data);

    const modalFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentType);

    const modalInjector = Injector.create({
      providers: [
        {
          provide: InnoActiveModal,
          useValue: activeModal,
        },
      ],
      parent: this.injector,
    });

    const instance = modalFactory.create(modalInjector);
    this.appRef.attachView(instance.hostView);

    const element = instance.injector.get(ElementRef);

    const modalInstance = await this.createModalInstance<TData, TReason>(
      context,
      element.nativeElement,
      instance.hostView,
      config
    );

    activeModal.setModalElement(modalInstance.htmlElement);

    return modalInstance;
  }

  private async createContentByTemplateRef<TData = any, TReason = any>(
    templateRef: TemplateRef<unknown>,
    config: ModalConfig<TData>,
    context: ModalContext<TData>
  ) {
    const embeddedView = templateRef.createEmbeddedView({
      $implicit: context,
    });

    this.appRef.attachView(embeddedView);

    return await this.createModalInstance<TData, TReason>(
      context,
      embeddedView.rootNodes[0],
      embeddedView,
      config
    );
  }

  private async createModalInstance<TData = any, TReason = any>(
    context: ModalContext<TData>,
    htmlElement: HTMLElement,
    viewRef: ViewRef,
    config: ModalConfig<TData>
  ) {
    context.close = (result: any) => {
      closeModal(htmlElement, result);
    };

    context.dismiss = (result?: any) => {
      dismissModal(htmlElement, result);
    };

    viewRef.detectChanges();

    const modalInstance = await showModal({
      ...config,
      content: htmlElement,
    });

    modalInstance.onClose.once(() => {
      viewRef.destroy();
    });

    modalInstance.onDismiss.once(() => {
      viewRef.destroy();
    });
    return modalInstance;
  }
}
