/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@innomotics/ix';


@ProxyCmp({
  inputs: ['collapsed', 'icon', 'label', 'variant']
})
@Component({
  selector: 'inno-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'icon', 'label', 'variant'],
})
export class InnoAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoAccordion extends Components.InnoAccordion {}


@ProxyCmp({
})
@Component({
  selector: 'inno-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class InnoBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface InnoBreadcrumb extends Components.InnoBreadcrumb {
  /**
   * Crumb item clicked event
   */
  itemClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['icon', 'iconSize', 'label', 'orderId']
})
@Component({
  selector: 'inno-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconSize', 'label', 'orderId'],
})
export class InnoBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoBreadcrumbItem extends Components.InnoBreadcrumbItem {}


@ProxyCmp({
  inputs: ['colorVariant', 'disabled', 'icon', 'iconOnly', 'iconPosition', 'navDirection', 'tabIdx', 'type', 'variant']
})
@Component({
  selector: 'inno-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['colorVariant', 'disabled', 'icon', 'iconOnly', 'iconPosition', 'navDirection', 'tabIdx', 'type', 'variant'],
})
export class InnoButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoButton extends Components.InnoButton {}


@ProxyCmp({
  inputs: ['icon', 'size', 'theme']
})
@Component({
  selector: 'inno-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'size', 'theme'],
})
export class InnoIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoIcon extends Components.InnoIcon {}


@ProxyCmp({
  inputs: ['disabled', 'isActive', 'isFocused', 'label', 'name', 'type', 'value', 'variant']
})
@Component({
  selector: 'inno-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'isActive', 'isFocused', 'label', 'name', 'type', 'value', 'variant'],
})
export class InnoInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}


export declare interface InnoInput extends Components.InnoInput {

  valueChanged: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['closeOnBackdropClick', 'expanded', 'hideCloseButton', 'paneSize', 'position', 'titleText']
})
@Component({
  selector: 'inno-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeOnBackdropClick', 'expanded', 'hideCloseButton', 'paneSize', 'position', 'titleText'],
})
export class InnoPane {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandedChanged']);
  }
}


import type { ExpandedChangedEvent as IInnoPaneExpandedChangedEvent } from '@innomotics/ix';

export declare interface InnoPane extends Components.InnoPane {

  expandedChanged: EventEmitter<CustomEvent<IInnoPaneExpandedChangedEvent>>;
}


@ProxyCmp({
  inputs: ['for', 'placement', 'titleContent', 'trigger', 'visible'],
  methods: ['showTooltip', 'hideTooltip']
})
@Component({
  selector: 'inno-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['for', 'placement', 'titleContent', 'trigger', 'visible'],
})
export class InnoPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoPopover extends Components.InnoPopover {}


