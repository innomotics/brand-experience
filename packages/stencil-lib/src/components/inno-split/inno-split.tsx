import { Component, Element, Host, Method, Prop, State, h } from '@stencil/core';

/**
 * Experimental component that lets the user separate and resize panels. Should only contain inno-split-item children components.
 * The inno-split-item components can contain inno-split component for nesting.
 */
@Component({
  tag: 'inno-split',
  styleUrl: 'inno-split.scss',
  scoped: true
})
export class InnoSplit {
  @Element() hostElement: HTMLInnoSplitElement;

  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * Default size of each contained inno-split-item in percentage (width if 'horizontal', height if 'vertical'). If omitted they will have equal sizes.
   */
  @Prop() splitAreasDefaultSizes: number[] = [];

  @State() splitAreasCurrentSizes: number[] = [];

  @State() isMouseDown: boolean = false;

  /**
   * Required property. Unique slot names for the inno-split-items to insert into. Length must be equal to the number of inserted inno-split-items.
   */
  @Prop() slotNames!: string[];

  private splitAreasIndices: number[] = [];
  private originalPos: number | undefined = undefined;
  private gutterIndex: number | undefined = undefined;
  private splitSize: number | undefined = undefined;
  private splitItemSize: number | undefined = undefined;
  private nextSplitItemSize: number | undefined = undefined;
  private minSize: number | undefined = undefined;
  private maxSize: number | undefined = undefined;

  private abortController: AbortController = new AbortController();

  private get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  handleMouseDown(event: MouseEvent, gutterIndex: number): void {
    this.isMouseDown = true;
    this.originalPos = this.isHorizontal ? event.pageX : event.pageY;
    this.gutterIndex = gutterIndex;
    this.splitSize = this.isHorizontal ? this.hostElement.offsetWidth : this.hostElement.offsetHeight;
    let splits = this.hostElement.querySelectorAll(":scope > .split-slot-container");
    this.splitItemSize = (this.isHorizontal ? (splits.item(gutterIndex) as HTMLElement).offsetWidth : (splits.item(gutterIndex) as HTMLElement).offsetHeight) * 100 / this.splitSize;
    this.nextSplitItemSize = (this.isHorizontal ? (splits.item(gutterIndex + 1) as HTMLElement).offsetWidth : (splits.item(gutterIndex + 1) as HTMLElement).offsetHeight) * 100 / this.splitSize;
    this.minSize = 16 / this.splitSize * 100;
    this.maxSize = this.splitItemSize + this.nextSplitItemSize;

    this.startListening();
  }

  handleMouseUp(): void {
    this.isMouseDown = false;
    this.originalPos = undefined;
    this.gutterIndex = undefined;
    this.splitSize = undefined;
    this.splitItemSize = undefined;
    this.nextSplitItemSize = undefined;
    this.minSize = undefined;
    this.maxSize = undefined;

    this.abortController.abort();
    this.abortController = new AbortController();
  }

  handleMouseMove(event: MouseEvent): void {
    if (!this.isMouseDown) {
      return;
    }

    let newPos: number;

    if (this.isHorizontal) {
      newPos = (event.pageX * 100) / this.splitSize - (this.originalPos * 100) / this.splitSize;
    } else {
      newPos = (event.pageY * 100) / this.splitSize - (this.originalPos * 100) / this.splitSize;
    }

    let newSize: number = this.splitItemSize + newPos;

    if (newSize < this.minSize) {
      this.splitAreasCurrentSizes[this.gutterIndex] = this.minSize;
      this.splitAreasCurrentSizes[this.gutterIndex + 1] = this.maxSize;
    } else if (newSize > this.maxSize) {
      this.splitAreasCurrentSizes[this.gutterIndex] = this.maxSize;
      this.splitAreasCurrentSizes[this.gutterIndex + 1] = this.minSize
    } else {
      this.splitAreasCurrentSizes[this.gutterIndex] = this.splitItemSize + newPos;
      this.splitAreasCurrentSizes[this.gutterIndex + 1] = this.nextSplitItemSize - newPos;
    }

    this.splitAreasCurrentSizes = [...this.splitAreasCurrentSizes];
  }

  private startListening(): void {
    window.addEventListener('mousemove', e => this.handleMouseMove(e), { signal: this.abortController.signal });
    window.addEventListener('mouseup', () => this.handleMouseUp(), { signal: this.abortController.signal });
  }

  /**
   * Reinit the component. Can be used if the number of inno-split-items change.
   */
  @Method()
  async reInit() {
    this.init();

    this.hostElement.querySelectorAll(':scope > .split-slot-container > inno-split-item > inno-split').forEach(el => {
      (el as HTMLInnoSplitElement).reInit();
    });
  }

  private init(): void {
    let splitItems = Array.from(new Set([
      ...Array.from(this.hostElement.querySelectorAll(':scope > inno-split-item')),
      ...Array.from(this.hostElement.querySelectorAll(':scope > .split-slot-container > inno-split-item'))
    ]));
    splitItems.forEach((el, key) => {
      el.slot = this.slotNames[key];
    });

    this.splitAreasIndices = [];
    for (let i = 0; i < splitItems.length; i++) {
      this.splitAreasIndices.push(i);
    }

    this.splitAreasCurrentSizes = [];
    if (this.splitAreasDefaultSizes.length > 0 && this.splitAreasIndices.length === this.splitAreasDefaultSizes.length) {
      this.splitAreasCurrentSizes = [...this.splitAreasDefaultSizes];
    } else {
      let defaultSize: number = 100 / this.splitAreasIndices.length;

      for (let i = 0; i < splitItems.length; i++) {
        this.splitAreasCurrentSizes.push(defaultSize);
      }
    }
  }

  componentWillLoad() {
    this.init();
  }

  render() {
    this.splitAreasCurrentSizes[this.splitAreasCurrentSizes.length - 1] = 1; //last will be always '1fr'

    let style = {
      'grid-template-columns': this.isHorizontal ? this.splitAreasCurrentSizes.join('% ') + 'fr' : null,
      'grid-template-rows': !this.isHorizontal ? this.splitAreasCurrentSizes.join('% ') + 'fr' : null,
    }

    return (
      <Host class={{
        'horizontal': this.orientation === 'horizontal',
        'vertical': this.orientation === 'vertical',
        'dragging': this.isMouseDown
      }}
        style={style}>
        {this.splitAreasIndices.map(index => {
          let hasGutter: boolean = this.splitAreasIndices.length > 1 && index !== (this.splitAreasIndices.length - 1);

          return (
            <div class={{
              'split-slot-container': true,
              'horizontal': this.orientation === 'horizontal',
              'vertical': this.orientation === 'vertical'
            }}>
              <slot name={this.slotNames[index]}></slot>
              {hasGutter
                ? <inno-split-gutter orientation={this.orientation}
                  onMouseDown={(e) => this.handleMouseDown(e, index)}>
                </inno-split-gutter>
                : null}
            </div>)
        })}
      </Host>
    );
  }
}
