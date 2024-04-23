import { Injectable } from "@angular/core";
import {
  getStatusMessageContainer,
  statusMessage,
  InnoStatusMessageConfig,
  InnoStatusMessagePosition,
} from "@innomotics/ix";
import { StatusMessageConfig } from "./status-message.config";

@Injectable({
  providedIn: "root",
})
export class StatusMessageService {
  setPosition(position: InnoStatusMessagePosition) {
    getStatusMessageContainer().position = position;
  }

  getPosition() {
    return getStatusMessageContainer().position;
  }

  async show(config: StatusMessageConfig) {
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
