/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable } from "@angular/core";
import {
  getStatusMessageContainer,
  toast,
  InnoStatusMessageConfig,
} from "@innomotics/ix";
import { StatusMessageConfig } from "./status-message.config";

@Injectable({
  providedIn: "root",
})
export class StatusMessageService {
  setPosition(position: "bottom-right" | "top-right") {
    getStatusMessageContainer().position = position;
  }

  getPosition() {
    return getStatusMessageContainer().position;
  }

  async show(config: StatusMessageConfig) {
    if (typeof config.message === "string") {
      return toast(config as InnoStatusMessageConfig);
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
    const instance = await toast({
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
