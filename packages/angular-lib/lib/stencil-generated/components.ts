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
  protected el: HTMLInnoAccordionElement;
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
  protected el: HTMLInnoBreadcrumbElement;
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
  protected el: HTMLInnoBreadcrumbItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoBreadcrumbItem extends Components.InnoBreadcrumbItem {}


@ProxyCmp({
  inputs: ['colorVariant', 'disabled', 'icon', 'iconFont', 'iconOnly', 'iconPosition', 'listType', 'navDirection', 'tabIdx', 'type', 'variant']
})
@Component({
  selector: 'inno-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['colorVariant', 'disabled', 'icon', 'iconFont', 'iconOnly', 'iconPosition', 'listType', 'navDirection', 'tabIdx', 'type', 'variant'],
})
export class InnoButton {
  protected el: HTMLInnoButtonElement;
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
  protected el: HTMLInnoCheckboxElement;
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
  protected el: HTMLInnoDatePickerElement;
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
  inputs: ['closeOnSelection', 'format', 'from', 'label', 'locale', 'maxDate', 'minDate', 'range', 'showOuterDays', 'to', 'variant', 'weekStartIndex']
})
@Component({
  selector: 'inno-date-picker-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeOnSelection', 'format', 'from', 'label', 'locale', 'maxDate', 'minDate', 'range', 'showOuterDays', 'to', 'variant', 'weekStartIndex'],
})
export class InnoDatePickerDropdown {
  protected el: HTMLInnoDatePickerDropdownElement;
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
  protected el: HTMLInnoDragAndDropElement;
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
  protected el: HTMLInnoErrorElement;
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
  protected el: HTMLInnoFooterElement;
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
  protected el: HTMLInnoFooterItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoFooterItem extends Components.InnoFooterItem {}


@ProxyCmp({
  inputs: ['icon', 'iconFont', 'size', 'variant']
})
@Component({
  selector: 'inno-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconFont', 'size', 'variant'],
})
export class InnoIcon {
  protected el: HTMLInnoIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoIcon extends Components.InnoIcon {}


@ProxyCmp({
  inputs: ['caretPosEndOnFocus', 'disableFloatingLabelAutoResize', 'disabled', 'error', 'errortype', 'isFocused', 'label', 'resizeMode', 'resizeable', 'selectOnFocus', 'variant']
})
@Component({
  selector: 'inno-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caretPosEndOnFocus', 'disableFloatingLabelAutoResize', 'disabled', 'error', 'errortype', 'isFocused', 'label', 'resizeMode', 'resizeable', 'selectOnFocus', 'variant'],
})
export class InnoInput {
  protected el: HTMLInnoInputElement;
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
  inputs: ['size', 'strokeWidth', 'variant']
})
@Component({
  selector: 'inno-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'strokeWidth', 'variant'],
})
export class InnoLoader {
  protected el: HTMLInnoLoaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoLoader extends Components.InnoLoader {}


@ProxyCmp({
  inputs: ['animation', 'backdrop', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'fixed', 'size', 'variant'],
  methods: ['showModal', 'dismissModal', 'closeModal']
})
@Component({
  selector: 'inno-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animation', 'backdrop', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'fixed', 'size', 'variant'],
})
export class InnoModal {
  protected el: HTMLInnoModalElement;
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
  protected el: HTMLInnoModalContentElement;
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
  protected el: HTMLInnoModalFooterElement;
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
  protected el: HTMLInnoModalHeaderElement;
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
  protected el: HTMLInnoPaginatorElement;
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
  protected el: HTMLInnoPaneElement;
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
  inputs: ['closable', 'for', 'hasBackdrop', 'offset', 'placement', 'popoverText', 'popoverTitle', 'trigger', 'variant', 'visible'],
  methods: ['showTooltip', 'hideTooltip', 'updateForElement']
})
@Component({
  selector: 'inno-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closable', 'for', 'hasBackdrop', 'offset', 'placement', 'popoverText', 'popoverTitle', 'trigger', 'variant', 'visible'],
})
export class InnoPopover {
  protected el: HTMLInnoPopoverElement;
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
  protected el: HTMLInnoProgressBarElement;
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
  protected el: HTMLInnoRadioElement;
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
  inputs: ['disableFloatingLabelAutoResize', 'disabled', 'disabledBackgroundColor', 'dropdownWidth', 'hasIcons', 'icon', 'iconFont', 'keyValueSelector', 'label', 'value', 'variant'],
  methods: ['refresh']
})
@Component({
  selector: 'inno-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disableFloatingLabelAutoResize', 'disabled', 'disabledBackgroundColor', 'dropdownWidth', 'hasIcons', 'icon', 'iconFont', 'keyValueSelector', 'label', 'value', 'variant'],
})
export class InnoSelect {
  protected el: HTMLInnoSelectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged', 'itemIsFavorited', 'itemIsUnfavorited', 'favoriteItemsChanged', 'dropdownClosed']);
  }
}


export declare interface InnoSelect extends Components.InnoSelect {
  /**
   * This event is fired when the value changes.
   */
  valueChanged: EventEmitter<CustomEvent<string>>;
  /**
   * This event is fired when an item is favorited.
You have to take care of managing and ordering the array of favorite items in your business logic.
   */
  itemIsFavorited: EventEmitter<CustomEvent<any>>;
  /**
   * This event is fired when an item is removed from favorites.
You have to take care of managing and ordering the array of favorite items in your business logic.
   */
  itemIsUnfavorited: EventEmitter<CustomEvent<any>>;
  /**
   * This event is fired when an item is added to or removed from favorites.
The event contains all of the favorited items.
   */
  favoriteItemsChanged: EventEmitter<CustomEvent<any>>;
  /**
   * This event is fired when the dropdown is closed. You can use this event for example 
if you want to reorder your InnoSelectItems after the favorited elements are changed.
   */
  dropdownClosed: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['addToFavoritesLabel', 'canFavorite', 'favoriteIconTooltipOffset', 'favoriteIconTooltipPos', 'favoriteIconTooltipVariant', 'hasSeparator', 'icon', 'iconFont', 'isFavorite', 'label', 'removeFromFavoritesLabel', 'selected', 'value']
})
@Component({
  selector: 'inno-select-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['addToFavoritesLabel', 'canFavorite', 'favoriteIconTooltipOffset', 'favoriteIconTooltipPos', 'favoriteIconTooltipVariant', 'hasSeparator', 'icon', 'iconFont', 'isFavorite', 'label', 'removeFromFavoritesLabel', 'selected', 'value'],
})
export class InnoSelectItem {
  protected el: HTMLInnoSelectItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemSelected', 'itemFavorited', 'itemUnfavorited', 'itemLabelChanged']);
  }
}


export declare interface InnoSelectItem extends Components.InnoSelectItem {
  /**
   * This event is fired whenever an item is selected.
   */
  itemSelected: EventEmitter<CustomEvent<any>>;
  /**
   * This event is fired whenever an item is favorited.
   */
  itemFavorited: EventEmitter<CustomEvent<any>>;
  /**
   * This event is fired whenever an item is removed from favorites.
   */
  itemUnfavorited: EventEmitter<CustomEvent<any>>;
  /**
   * This event is fired whenever the selected item's label changes. The inno-select component then will rerender.
   */
  itemLabelChanged: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['orientation', 'slotNames', 'splitAreasDefaultSizes'],
  methods: ['reInit']
})
@Component({
  selector: 'inno-split',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation', 'slotNames', 'splitAreasDefaultSizes'],
})
export class InnoSplit {
  protected el: HTMLInnoSplitElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoSplit extends Components.InnoSplit {}


@ProxyCmp({
})
@Component({
  selector: 'inno-split-gutter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class InnoSplitGutter {
  protected el: HTMLInnoSplitGutterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoSplitGutter extends Components.InnoSplitGutter {}


@ProxyCmp({
})
@Component({
  selector: 'inno-split-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class InnoSplitItem {
  protected el: HTMLInnoSplitItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnoSplitItem extends Components.InnoSplitItem {}


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
  protected el: HTMLInnoStatusMessageElement;
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
  inputs: ['alwaysEmphasized', 'layout', 'minimalDecorator', 'selected', 'showArrow', 'theme'],
  methods: ['changeSelected']
})
@Component({
  selector: 'inno-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alwaysEmphasized', 'layout', 'minimalDecorator', 'selected', 'showArrow', 'theme'],
})
export class InnoTab {
  protected el: HTMLInnoTabElement;
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
  protected el: HTMLInnoTabItemElement;
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
  inputs: ['maskColor', 'variant'],
  methods: ['refresh']
})
@Component({
  selector: 'inno-table-base',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['maskColor', 'variant'],
})
export class InnoTableBase {
  protected el: HTMLInnoTableBaseElement;
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
  protected el: HTMLInnoTimePickerElement;
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
  protected el: HTMLInnoToggleElement;
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


