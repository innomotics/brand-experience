/*
 * SPDX-FileCopyrightText: 2024 Innomotics GmbH
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'inno-breadcrumb-item',
  styleUrl: 'inno-breadcrumb-item.scss',
  scoped: true,
})
export class BreadcrumbItem {
  @Element() hostElement!: HTMLInnoBreadcrumbItemElement;

  /**
   * Breadcrumb label
   */
  @Prop() label: string;
  /**
   * Icon to be displayed next ot the label
   */
  @Prop() icon: string;

  /** @internal */ //will be generated automatically
  @Prop() itemIndex: number;
  /*
  * The size of the icon if the icon property is not empty
  */
  @Prop() iconSize: number = 16;

  /**@internal */
  @Prop() visible = true;

  /**@internal */
  @Prop() showChevron = true;

  /**@internal */
  @Event() breadcrumbItemClick: EventEmitter<{ itemIndex: number, label: string }>;

  render() {
    if (!this.visible) {
      return <Host class={'invisible'}></Host>;
    }

    return (
      <Host
        class={{
          'hide-chevron': !this.showChevron,
        }}
        onClick={() => this.breadcrumbItemClick.emit({ itemIndex: this.itemIndex, label: this.label })}
      >
        <li>
          <a>
            {this.icon ? (<inno-icon icon={this.icon} size={this.iconSize}></inno-icon>) : this.label}
            <slot></slot>
            {this.showChevron ? (<inno-icon icon="chevron_right" class="chevron" size={this.iconSize}></inno-icon>) : null}
          </a>
        </li>
      </Host>
    );
  }
}
