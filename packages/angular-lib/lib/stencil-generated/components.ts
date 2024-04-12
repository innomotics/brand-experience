/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@innomotics/ix';


@ProxyCmp({
  inputs: ['collapsed', 'inner', 'label', 'last', 'variant']
})
@Component({
  selector: 'inno-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'inner', 'label', 'last', 'variant'],
})
export class InnoAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['collapsedChanged']);
  }
}


export declare interface InnoAccordion extends Components.InnoAccordion {
  /**
   * This event is fired whenever the accordion is opened/closed via user interaction.
   */
  collapsedChanged: EventEmitter<CustomEvent<{ element: HTMLInnoAccordionElement, collapsed: boolean }>>;
}


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
   * Crumb item clicked event. The event contains the label and the zero-based index of the breadcrumb item inside the breadcrumb.
   */
  itemClick: EventEmitter<CustomEvent<{itemIndex: number, label: string}>>;
}


@ProxyCmp({
  inputs: ['icon', 'iconSize', 'label']
})
@Component({
  selector: 'inno-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconSize', 'label'],
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
  inputs: ['colorVariant', 'disabled', 'icon', 'iconOnly', 'iconPosition', 'listType', 'navDirection', 'tabIdx', 'type', 'variant']
})
@Component({
  selector: 'inno-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['colorVariant', 'disabled', 'icon', 'iconOnly', 'iconPosition', 'listType', 'navDirection', 'tabIdx', 'type', 'variant'],
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
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'label', 'name', 'readonly', 'required', 'tabIdx', 'variant']
})
@Component({
  selector: 'inno-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'label', 'name', 'readonly', 'required', 'tabIdx', 'variant'],
})
export class InnoCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InnoCheckbox extends Components.InnoCheckbox {
  /**
   * Checked status has been changed.
   */
  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['active', 'type']
})
@Component({
  selector: 'inno-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'type'],
})
export class InnoError {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoError extends Components.InnoError {}


@ProxyCmp({
  inputs: ['copyright', 'variant']
})
@Component({
  selector: 'inno-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['copyright', 'variant'],
})
export class InnoFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoFooter extends Components.InnoFooter {}


@ProxyCmp({
  inputs: ['variant']
})
@Component({
  selector: 'inno-footer-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
})
export class InnoFooterItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoFooterItem extends Components.InnoFooterItem {}


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
  inputs: ['disabled', 'isFocused', 'label', 'value', 'variant']
})
@Component({
  selector: 'inno-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'isFocused', 'label', 'value', 'variant'],
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
  /**
   * Fired when the new value is valid.
   */
  valueChanged: EventEmitter<CustomEvent<string | number>>;
}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'inno-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class InnoLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoLoader extends Components.InnoLoader {}


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
  /**
   * This event is fired when the pane is opened or closed.
   */
  expandedChanged: EventEmitter<CustomEvent<IInnoPaneExpandedChangedEvent>>;
}


@ProxyCmp({
  inputs: ['for', 'placement', 'titleContent', 'trigger', 'variant', 'visible'],
  methods: ['showTooltip', 'hideTooltip']
})
@Component({
  selector: 'inno-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['for', 'placement', 'titleContent', 'trigger', 'variant', 'visible'],
})
export class InnoPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoPopover extends Components.InnoPopover {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'label', 'name', 'readonly', 'required', 'tabIdx', 'value', 'variant'],
  methods: ['unselect']
})
@Component({
  selector: 'inno-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'label', 'name', 'readonly', 'required', 'tabIdx', 'value', 'variant'],
})
export class InnoRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InnoRadio extends Components.InnoRadio {
  /**
   * Emits the associated value when the element is clicked.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'iconDriven', 'isFocused', 'label', 'type', 'value', 'variant']
})
@Component({
  selector: 'inno-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'iconDriven', 'isFocused', 'label', 'type', 'value', 'variant'],
})
export class InnoSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}


export declare interface InnoSelect extends Components.InnoSelect {
  /**
   * This event is fired when the value changes.
   */
  valueChanged: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['icon', 'label', 'selected', 'value']
})
@Component({
  selector: 'inno-select-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label', 'selected', 'value'],
})
export class InnoSelectItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemSelected']);
  }
}


export declare interface InnoSelectItem extends Components.InnoSelectItem {
  /**
   * This event is fired whenever an item is selected.
   */
  itemSelected: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
})
@Component({
  selector: 'inno-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class InnoTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabChanged']);
  }
}


export declare interface InnoTab extends Components.InnoTab {

  tabChanged: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'tabIdx', 'variant']
})
@Component({
  selector: 'inno-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'tabIdx', 'variant'],
})
export class InnoToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InnoToggle extends Components.InnoToggle {
  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;
}


