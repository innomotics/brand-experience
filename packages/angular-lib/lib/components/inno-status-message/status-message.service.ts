import { Injectable } from "@angular/core";
import {
  getStatusMessageContainer,
  statusMessage,
  InnoStatusMessageConfig,
  InnoStatusMessagePosition,
  ShowStatusMessageResult,
} from "@innomotics/brand-experience";
import { StatusMessageConfig } from "./status-message.config";

@Injectable({
  providedIn: "root",
})
export class StatusMessageService {
  async setPosition(position: InnoStatusMessagePosition): Promise<void> {
    getStatusMessageContainer().position = position;
  }

  async getPosition(): Promise<InnoStatusMessagePosition> {
    return getStatusMessageContainer().position;
  }

  async show(config: StatusMessageConfig): Promise<ShowStatusMessageResult> {
    if (typeof config.message === "string") {
      return statusMessage(config as InnoStatusMessageConfig);
    }

    const context: {
      close: (() => void) | null;
    } = {
      close: null,
    };

    const embeddedView = config.message.createEmbeddedView({
      $implicit: context,
    });

    const node: HTMLElement = embeddedView.rootNodes[0];
    const instance = await statusMessage({
      ...config,
      message: node,
    });

    context.close = () => {
      instance.close();
    };

    embeddedView.detectChanges();

    instance.onClose.once(() => {
      embeddedView.destroy();
    });

    return instance;
  }
}
