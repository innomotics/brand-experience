/*
 * SPDX-FileCopyrightText: 2024 Innomotics GmbH
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, Event, EventEmitter, h, Host, Listen } from '@stencil/core';

@Component({
  tag: 'inno-breadcrumb',
  styleUrl: 'inno-breadcrumb.scss',
  scoped: true,
})
export class Breadcrumb {
  @Element() hostElement!: HTMLInnoBreadcrumbElement;

  /**
   * Crumb item clicked event. The event contains the label and the zero-based index of the breadcrumb item inside the breadcrumb.
   */
  @Event() itemClick: EventEmitter<{itemIndex: number, label: string}>;

  @Listen('breadcrumbItemClick')
  onBreadcrumbItemClicked(event: CustomEvent<{itemIndex: number, label: string}>) {
    this.itemClick.emit(event.detail);
  }

  get items() {
    return [...Array.from(this.hostElement.querySelectorAll('inno-breadcrumb-item'))];
  }

  removeLastItemChevron(children: HTMLInnoBreadcrumbItemElement[]) {
    if (children.length > 0) {
      children[children.length - 1].showChevron = false;
      let childrenId: number = 1;
      children.forEach(c => c.itemIndex = childrenId++);
    }
  }

  render() {
    this.removeLastItemChevron(this.items);
    return (
      <Host>
        <ol>
          {this.items?.length > 0 ? (<inno-breadcrumb-item label="home" icon="home" itemIndex={0} showChevron={this.items.length > 0}></inno-breadcrumb-item>) : null}
          <slot></slot>
        </ol>
      </Host>
    );
  }
}
