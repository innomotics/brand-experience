/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@innomotics/brand-experience';


@ProxyCmp({
  inputs: ['collapsed', 'inner', 'label', 'last', 'secondLabel', 'variant']
})
@Component({
  selector: 'inno-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'inner', 'label', 'last', 'secondLabel', 'variant'],
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
  inputs: ['variant']
})
@Component({
  selector: 'inno-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
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
  inputs: ['format', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'range', 'showOuterDays', 'to', 'weekStartIndex'],
  methods: ['getCurrentDate']
})
@Component({
  selector: 'inno-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['format', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'range', 'showOuterDays', 'to', 'weekStartIndex'],
})
export class InnoDatePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dateChange']);
  }
}


import type { DateChange as IInnoDatePickerDateChange } from '@innomotics/brand-experience';

export declare interface InnoDatePicker extends Components.InnoDatePicker {
  /**
   * Triggers if the date selection changes.
   */
  dateChange: EventEmitter<CustomEvent<IInnoDatePickerDateChange>>;
}


@ProxyCmp({
  inputs: ['format', 'from', 'label', 'locale', 'maxDate', 'minDate', 'range', 'showOuterDays', 'to', 'variant', 'weekStartIndex']
})
@Component({
  selector: 'inno-date-picker-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['format', 'from', 'label', 'locale', 'maxDate', 'minDate', 'range', 'showOuterDays', 'to', 'variant', 'weekStartIndex'],
})
export class InnoDatePickerDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dateChange']);
  }
}


import type { DateChange as IInnoDatePickerDropdownDateChange } from '@innomotics/brand-experience';

export declare interface InnoDatePickerDropdown extends Components.InnoDatePickerDropdown {
  /**
   * Triggers if the date selection changes.
See the date-picker component for more information.
   */
  dateChange: EventEmitter<CustomEvent<IInnoDatePickerDropdownDateChange>>;
}


@ProxyCmp({
  inputs: ['accept', 'disabled', 'multiple', 'state', 'texts', 'variant'],
  methods: ['setFilesToUpload']
})
@Component({
  selector: 'inno-drag-and-drop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'disabled', 'multiple', 'state', 'texts', 'variant'],
})
export class InnoDragAndDrop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filesChanged']);
  }
}


export declare interface InnoDragAndDrop extends Components.InnoDragAndDrop {

  filesChanged: EventEmitter<CustomEvent<Array<File>>>;
}


@ProxyCmp({
  inputs: ['active', 'type', 'variant']
})
@Component({
  selector: 'inno-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'type', 'variant'],
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
  inputs: ['icon', 'size', 'variant']
})
@Component({
  selector: 'inno-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'size', 'variant'],
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
  inputs: ['caretPosEndOnFocus', 'disabled', 'error', 'errortype', 'isFocused', 'label', 'selectOnFocus', 'variant']
})
@Component({
  selector: 'inno-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caretPosEndOnFocus', 'disabled', 'error', 'errortype', 'isFocused', 'label', 'selectOnFocus', 'variant'],
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
  inputs: ['size', 'variant']
})
@Component({
  selector: 'inno-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'variant'],
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
  inputs: ['animation', 'backdrop', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'size', 'variant'],
  methods: ['showModal', 'dismissModal', 'closeModal']
})
@Component({
  selector: 'inno-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animation', 'backdrop', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'size', 'variant'],
})
export class InnoModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dialogClose', 'dialogDismiss']);
  }
}


export declare interface InnoModal extends Components.InnoModal {
  /**
   * Dialog close
   */
  dialogClose: EventEmitter<CustomEvent<any>>;
  /**
   * Dialog cancel
   */
  dialogDismiss: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'inno-modal-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class InnoModalContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoModalContent extends Components.InnoModalContent {}


@ProxyCmp({
})
@Component({
  selector: 'inno-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class InnoModalFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoModalFooter extends Components.InnoModalFooter {}


@ProxyCmp({
  inputs: ['icon', 'showClose', 'variant']
})
@Component({
  selector: 'inno-modal-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'showClose', 'variant'],
})
export class InnoModalHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
  }
}


export declare interface InnoModalHeader extends Components.InnoModalHeader {
  /**
   * Emits when close icon is clicked and closes the modal
Can be prevented, in which case only the event is triggered, and the modal remains open
   */
  closeClick: EventEmitter<CustomEvent<Event>>;
}


@ProxyCmp({
  inputs: ['pageCount', 'selectedPage', 'variant']
})
@Component({
  selector: 'inno-paginator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['pageCount', 'selectedPage', 'variant'],
})
export class InnoPaginator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageSelected', 'itemCountChanged']);
  }
}


export declare interface InnoPaginator extends Components.InnoPaginator {
  /**
   * Page selection event
   */
  pageSelected: EventEmitter<CustomEvent<number>>;
  /**
   * Item count change event
   */
  itemCountChanged: EventEmitter<CustomEvent<number>>;
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


import type { ExpandedChangedEvent as IInnoPaneExpandedChangedEvent } from '@innomotics/brand-experience';

export declare interface InnoPane extends Components.InnoPane {
  /**
   * This event is fired when the pane is opened or closed.
   */
  expandedChanged: EventEmitter<CustomEvent<IInnoPaneExpandedChangedEvent>>;
}


@ProxyCmp({
  inputs: ['closable', 'for', 'hasBackdrop', 'placement', 'popoverText', 'popoverTitle', 'trigger', 'variant', 'visible'],
  methods: ['showTooltip', 'hideTooltip']
})
@Component({
  selector: 'inno-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closable', 'for', 'hasBackdrop', 'placement', 'popoverText', 'popoverTitle', 'trigger', 'variant', 'visible'],
})
export class InnoPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['innoPopoverShown', 'innoPopoverHidden']);
  }
}


export declare interface InnoPopover extends Components.InnoPopover {
  /**
   * Fired when popover is shown.
   */
  innoPopoverShown: EventEmitter<CustomEvent<void>>;
  /**
   * Fired when popover is hidden.
   */
  innoPopoverHidden: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['percentagePrecision', 'progressPercentage', 'progressText', 'showPercentage', 'trailingZeroes', 'variant']
})
@Component({
  selector: 'inno-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['percentagePrecision', 'progressPercentage', 'progressText', 'showPercentage', 'trailingZeroes', 'variant'],
})
export class InnoProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoProgressBar extends Components.InnoProgressBar {}


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
  inputs: ['disabled', 'icon', 'isFocused', 'keyValueSelector', 'label', 'value', 'variant']
})
@Component({
  selector: 'inno-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'isFocused', 'keyValueSelector', 'label', 'value', 'variant'],
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
  itemSelected: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'messageType', 'showProgress', 'theme']
})
@Component({
  selector: 'inno-status-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'messageType', 'showProgress', 'theme'],
})
export class InnoStatusMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeMessage']);
  }
}


export declare interface InnoStatusMessage extends Components.InnoStatusMessage {
  /**
   * Status message is closed.
   */
  closeMessage: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['alwaysEmphasized', 'layout', 'minimalDecorator', 'selected', 'showArrow', 'theme']
})
@Component({
  selector: 'inno-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alwaysEmphasized', 'layout', 'minimalDecorator', 'selected', 'showArrow', 'theme'],
})
export class InnoTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectedChange']);
  }
}


export declare interface InnoTab extends Components.InnoTab {
  /**
   * `selected` property changed
   */
  selectedChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['alwaysEmphasized', 'disabled', 'layout', 'minimalDecorator', 'selected', 'theme']
})
@Component({
  selector: 'inno-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alwaysEmphasized', 'disabled', 'layout', 'minimalDecorator', 'selected', 'theme'],
})
export class InnoTabItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabClick']);
  }
}


import type { TabClickDetail as IInnoTabItemTabClickDetail } from '@innomotics/brand-experience';

export declare interface InnoTabItem extends Components.InnoTabItem {
  /**
   * On tab click.
   */
  tabClick: EventEmitter<CustomEvent<IInnoTabItemTabClickDetail>>;
}


@ProxyCmp({
  inputs: ['variant']
})
@Component({
  selector: 'inno-table-base',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
})
export class InnoTableBase {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoTableBase extends Components.InnoTableBase {}


@ProxyCmp({
  inputs: ['format', 'texts', 'theme', 'time']
})
@Component({
  selector: 'inno-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['format', 'texts', 'theme', 'time'],
})
export class InnoTimePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InnoTimePicker extends Components.InnoTimePicker {

  valueChange: EventEmitter<CustomEvent<any>>;
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


