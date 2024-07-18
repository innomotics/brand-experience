import { Element, Event, EventEmitter, Component, Host, Prop, h } from '@stencil/core';
import { Placement } from '@floating-ui/dom';

@Component({
  tag: 'inno-select-item',
  styleUrl: 'inno-select-item.scss',
  scoped: true,
  formAssociated: true,
})
export class InnoSelectItem {
  /**
   * Value of the item.
   */
  @Prop() value: any;

  /**
   * Label of the item, can be different from the value.
   */
  @Prop() label: string

  /**
   * Optional icon for the label.
   */
  @Prop() icon: string;

  /**
   * Whether the item is selected or not.
   */
  @Prop({ mutable: true }) selected: boolean = false;

  /**
   * Adds a favorite icon to the selectable item. If you press this icon an event will be fired with the selected item. 
   * You have to take care of managing and ordering the array of favorite items in your business logic.
   * Clicking on the favorite icon will not close the dropdown.
   */
  @Prop({ mutable: true }) canFavorite: boolean = false;

  /**
   * The selectable item is favorited or not.
   */
  @Prop({ mutable: true }) isFavorite: boolean = false;

  /**
   * Tooltip text for favorite add. The tooltip is only visible if the InnoSelectItem has a unique id.
   */
  @Prop({ mutable: true }) addToFavoritesLabel: string = "Add to favorites";

  /**
   * Tooltip text for favorite remove. The tooltip is only visible if the InnoSelectItem has a unique id.
   */
  @Prop({ mutable: true }) removeFromFavoritesLabel: string = "Remove from favorites";

  /**
   * Position of the favorite icon tooltip.
   * Please note that the offset will remain the same in case the desired placement does not fit.
   */
  @Prop({ mutable: true }) favoriteIconTooltipPos: Placement = "right";

  /**
   * Color variant of the favorite icon tooltip.
   */
  @Prop({ mutable: true }) favoriteIconTooltipVariant: 'light' | 'dark' = 'light';

  /**
   * Offset of the favorite icon tooltip position in pixels.
   * Please note that the offset will remain the same in case the desired placement does not fit.
   */
  @Prop({ mutable: true }) favoriteIconTooltipOffset: number = 8;

  /**
   * A simple separator for the item. You can use it for example to visually separate the favorited and non-favorited items.
   */
  @Prop({ mutable: true }) hasSeparator: boolean = false;

  /**
   * This event is fired whenever an item is selected.
   */
  @Event() itemSelected: EventEmitter<any>;

  /**
   * This event is fired whenever an item is favorited.
   */
  @Event() itemFavorited: EventEmitter<any>;

  /**
   * This event is fired whenever an item is removed from favorites.
   */
  @Event() itemUnfavorited: EventEmitter<any>;

  @Element() host: HTMLInnoSelectElement;

  private popover: HTMLInnoPopoverElement;

  private get hostElementHasId(): boolean {
    return this.host.id != null && this.host.id.trim() !== '';
  }

  private get forSelector(): string {
    return this.isFavorite ? `#${this.host.id} .star.favorite` : `#${this.host.id} .star.not-favorite`;
  }

  selectItem() {
    this.itemSelected.emit(this.value);
  }

  favoriteItem(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.isFavorite = true;
    this.itemFavorited.emit(this.value);
  }

  unFavoriteItem(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.isFavorite = false;
    this.itemUnfavorited.emit(this.value);
  }

  favoriteStar() {
    return this.isFavorite
      ? <span class="star favorite" onClick={(event: MouseEvent) => this.unFavoriteItem(event)}>★</span>
      : <span class="star not-favorite" onClick={(event: MouseEvent) => this.favoriteItem(event)}>☆</span>;
  }

  favoriteStarPopup() {
    if (!this.hostElementHasId) {
      return null;
    }

    return <inno-popover
      ref={el => this.popover = el}
      popoverText={this.isFavorite ? this.removeFromFavoritesLabel : this.addToFavoritesLabel}
      trigger='hover'
      for={this.forSelector}
      placement={this.favoriteIconTooltipPos}
      variant={this.favoriteIconTooltipVariant}
      offset={this.favoriteIconTooltipOffset}>
    </inno-popover>;
  }

  render() {
    if (this.hostElementHasId && !!this.popover) {
      this.popover.updateForElement(this.forSelector);
    }

    return (
      <Host
        class={{
          'select-item': true,
          'icon-driven': this.icon != undefined,
          selected: this.selected,
          'can-favorite': this.canFavorite,
          separator: this.hasSeparator
        }}
        onClick={() => this.selectItem()}
      >
        {this.icon ? <inno-icon icon={this.icon} size={24}></inno-icon> : null}
        <div class="content-wrapper">{this.label}</div>
        {this.selected && !this.icon ? <inno-icon icon="checkcheckbox" size={24}></inno-icon> : null}
        {this.canFavorite ? this.favoriteStar() : null}
        {this.canFavorite ? this.favoriteStarPopup() : null}
      </Host>
    );
  }
}
