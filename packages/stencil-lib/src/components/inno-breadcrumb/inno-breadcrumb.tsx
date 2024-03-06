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
   * Crumb item clicked event
   */
  @Event() itemClick: EventEmitter<string>;

  @Listen('breadcrumbItemClick')
  onBreadcrumbItemClicked(event: CustomEvent<string>) {
    const label = event.detail;
    console.log('Item clicked' + label);
    this.itemClick.emit(label);
  }

  componentDidLoad() {}

  componentWillLoad() {}

  get items() {
    return [...Array.from(this.hostElement.querySelectorAll('inno-breadcrumb-item'))];
  }

  removeLastItemChevron(children: HTMLInnoBreadcrumbItemElement[])
  {
    if(children.length>0)
    {
      children[children.length-1].showChevron = false;
    }
  }

  render() {
    this.removeLastItemChevron(this.items);
    return (
      <Host>
        <ol>
          {this.items?.length > 0 ? (<inno-breadcrumb-item label="..." icon="home" showChevron={this.items.length>0}></inno-breadcrumb-item>) : null}
          <slot></slot>
        </ol>
      </Host>
    );
  }
}
