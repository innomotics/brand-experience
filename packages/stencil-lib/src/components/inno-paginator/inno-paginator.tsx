import { Event, Element, Component, Host, h, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'inno-paginator',
  styleUrl: 'inno-paginator.scss',
  scoped: true,
})
export class InnoPaginator {
  private readonly maxCountPages = 8;

  @Element() hostElement!: HTMLInnoPaginatorElement;

  @Prop() variant: 'dark' | 'light' = 'light';

  /**
   * Total number of pages
   */
  @Prop() pageCount: number;

  /**
   * Zero based index of currently selected page
   */
  @Prop({ mutable: true }) selectedPage = 0;

  /**
   * Page selection event
   */
  @Event() pageSelected: EventEmitter<number>;

  /**
   * Item count change event
   */
  @Event() itemCountChanged: EventEmitter<number>;

  private selectPage(index: number) {
    if (index < 0) {
      this.selectedPage = 0;
    } else if (index > this.pageCount - 1) {
      this.selectedPage = this.pageCount - 1;
    } else {
      this.selectedPage = index;
    }

    this.pageSelected.emit(this.selectedPage);
  }

  private next() {
    if (this.selectedPage !== this.pageCount - 1) {
      this.selectPage(this.selectedPage + 1);
    }
  }

  private prev() {
    if (this.selectedPage !== 0) {
      this.selectPage(this.selectedPage - 1);
    }
  }

  private first() {
    if (this.selectedPage !== 0) {
      this.selectPage(0);
    }
  }

  private last() {
    if (this.selectedPage !== this.pageCount - 1) {
      this.selectPage(this.pageCount - 1);
    }
  }

  private getPageButton(index: number) {
    return <button class={{selected : this.selectedPage == index, light: this.variant == 'light', dark : this.variant == 'dark'  }} onClick={() => this.selectPage(index)}>{index + 1}</button>;
  }

  private renderPageButtons() {
    const pagesBeforeOverflow = Math.floor(this.maxCountPages / 2);
    const hasOverflow = this.pageCount > this.maxCountPages;
    const hasOverflowStart = hasOverflow && this.selectedPage > pagesBeforeOverflow;
    const hasOverflowEnd = hasOverflow && this.selectedPage < this.pageCount - pagesBeforeOverflow - 1;
    const pageButtons = [];

    let start = 0; 
    let end = Math.min(this.pageCount, this.maxCountPages);
    let pageCount = Math.floor((this.maxCountPages - 4) / 2);

    if (hasOverflowStart) {
      const baseButtonProps = {
        onClick: () => {
          if (hasOverflowEnd) {
            this.selectPage(this.selectedPage - Math.max(0, 2 * pageCount + 1));
          } else {
            this.selectPage(this.pageCount - this.maxCountPages);
          }
        }
      };
      pageButtons.push(<button class={{light: this.variant == 'light', dark : this.variant == 'dark'  }} {...baseButtonProps}>...</button>);

      if (hasOverflowEnd) {
        start = this.pageCount - this.maxCountPages + 2;
      } else {
        start = this.pageCount - this.maxCountPages + 2;
        end = this.pageCount;
      }
    }

    if (hasOverflowEnd) {
      if (hasOverflowStart) {
        start = this.selectedPage - pageCount;
        end = this.selectedPage + pageCount + 1;
      } else {
        end = this.maxCountPages - 2;
      }
    }

    for (let i = start; i < end; i++) {
      pageButtons.push(this.getPageButton(i));
    }

    if (hasOverflowEnd) {
      const baseButtonProps = {
        onClick: () => {
          if (hasOverflowStart) {
            this.selectPage(this.selectedPage + Math.max(0, 2 * pageCount + 1));
          } else {
            this.selectPage(this.maxCountPages - 1);
          }
        }
      };
      pageButtons.push(<button class={{light: this.variant == 'light', dark : this.variant == 'dark'  }} {...baseButtonProps}>...</button>);
    }

    return <span class="page-buttons">{pageButtons}</span>;
  }

  render() {
    return (
      <Host>
        <button disabled={this.selectedPage === 0} class={{light: this.variant == 'light', dark : this.variant == 'dark'}} onClick={() => this.first()}>
          <inno-icon size={32} icon={'arrowdoubleleft'} variant={this.variant}></inno-icon>
        </button>
        <button disabled={this.selectedPage === 0} class={{light: this.variant == 'light', dark : this.variant == 'dark'}} onClick={() => this.prev()}>
          <inno-icon size={32} icon={'arrowheadleft'} variant={this.variant}></inno-icon>
        </button>
        <span class="basic-pagination">{this.renderPageButtons()} </span>
        <button disabled={this.selectedPage === this.pageCount - 1} class={{light: this.variant == 'light', dark : this.variant == 'dark'}} onClick={() => this.next()}>
          <inno-icon size={32} icon={'arrowheadright'} variant={this.variant}></inno-icon>
        </button>
        <button disabled={this.selectedPage === this.pageCount - 1} class={{light: this.variant == 'light', dark : this.variant == 'dark'}} onClick={() => this.last()}>
          <inno-icon size={32} icon={'arrowdoubleright'} variant={this.variant}></inno-icon>
        </button>
      </Host>
    );
  }
}
