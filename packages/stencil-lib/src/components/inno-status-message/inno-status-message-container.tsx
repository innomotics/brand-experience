/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Method, Prop, Watch } from '@stencil/core';
import { TypedEvent } from '../../utils/typed-event';
import { InnoStatusMessageConfig } from './inno-status-message.api';

export type ShowToastResult = {
  onClose: TypedEvent<any | undefined>;
  close: (result?: any) => void;
};

@Component({
  tag: 'inno-status-message-container',
  styleUrl: './inno-status-message-container.scss',
  scoped: true,
})
export class InnoStatusMessageContainer {
  /**
   *
   */
  @Prop() containerId = 'status-message-container';

  /**
   *
   */
  @Prop() containerClass = 'status-message-container';

  /**
   *
   */
  @Prop() position: 'bottom-right' | 'top-right' = 'top-right';

  private readonly PREFIX_POSITION_CLASS = 'status-message-container--';

  get hostContainer() {
    return new Promise<HTMLElement>(resolve => {
      const interval = setInterval(() => {
        const containerElement = document.getElementById(this.containerId);
        if (containerElement) {
          clearInterval(interval);
          resolve(containerElement);
        }
      });
    });
  }

  componentDidLoad() {
    if (!document.getElementById(this.containerId)) {
      const toastContainer = document.createElement('div');
      toastContainer.id = this.containerId;
      toastContainer.classList.add(this.containerClass);
      toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`);
      document.body.appendChild(toastContainer);
    }
  }

  @Watch('position')
  onPositionChange(newPosition: string, oldPosition: string) {
    const toastContainer = document.getElementById(this.containerId);
    toastContainer.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
    toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
  }

  /**
   * Display a toast message
   * @param config
   */
  @Method()
  async showToast(config: InnoStatusMessageConfig): Promise<ShowToastResult> {
    const toast = document.createElement('inno-status-message');
    const onClose = new TypedEvent<any | undefined>();

    function removeToast(result?: any) {
      toast.remove();
      onClose.emit(result);
    }

    //toast.title = config.title;
    if (config.type) {
      toast.messageType = config.type;
    }
    if (config.theme) {
      toast.theme = config.theme;
    }
    // toast.autoClose = config.autoClose ?? true;
    // toast.autoCloseDelay = config.autoCloseDelay ?? 5000;
    // toast.icon = config.icon;
    // toast.iconColor = config.iconColor;
    toast.addEventListener('closeMessage', (event: CustomEvent<any | undefined>) => {
      const { detail } = event;
      removeToast(detail);
    });

    if (typeof config.message === 'string') {
      toast.innerText = config.message;
    } else {
      toast.appendChild(config.message);
    }

    (await this.hostContainer).appendChild(toast);

    return {
      onClose,
      close: (result?: any) => {
        removeToast(result);
      },
    };
  }

  render() {
    return (
      <Host
        class={{
          [`${this.PREFIX_POSITION_CLASS}bottom-right`]: this.position === 'bottom-right',
          [`${this.PREFIX_POSITION_CLASS}top-right`]: this.position === 'top-right',
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
