import { Component, Element, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'inno-split',
  styleUrl: 'inno-split.scss',
  scoped: true,
})
export class InnoSplit {
  @Element() hostElement: HTMLInnoSplitElement;

  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  @Prop() splitAreasDefaultSizes: number[] = [];
  
  @State() splitAreasCurrentSizes: number[] = [];
  
  @State() isMouseDown: boolean = false;
  
  @Prop() slotNames!: string[];
  
  private splitAreasArray: number[] = [];
  private originalPos: number | undefined = undefined;
  private gutterMovingIndex: number | undefined = undefined;
  private splitSize: number;
  private splitItemSize: number;
  private nextSplitItemSize: number;
  private minSize: number = 0;
  private maxSize: number;

  private abortController: AbortController = new AbortController();

  private get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  handleMouseDown(event: MouseEvent, gutterIndex: number): void {
    this.isMouseDown = true;
    this.originalPos = this.isHorizontal ? event.pageX : event.pageY;
    this.gutterMovingIndex = gutterIndex;
    this.splitSize = this.isHorizontal ? this.hostElement.offsetWidth : this.hostElement.offsetHeight;
    let splits = this.hostElement.querySelectorAll(":scope > .split-slot-container");
    this.splitItemSize = (this.isHorizontal ? (splits.item(gutterIndex) as HTMLElement).offsetWidth : (splits.item(gutterIndex) as HTMLElement).offsetHeight) * 100 / this.splitSize;
    this.nextSplitItemSize = (this.isHorizontal ? (splits.item(gutterIndex + 1) as HTMLElement).offsetWidth : (splits.item(gutterIndex + 1) as HTMLElement).offsetHeight) * 100 / this.splitSize;
    this.minSize = 8 / this.splitSize * 100;
    this.maxSize = this.splitItemSize + this.nextSplitItemSize;

    this.startListening();
  }

  handleMouseUp(event: MouseEvent): void {
    this.isMouseDown = false;
    this.originalPos = undefined;
    this.gutterMovingIndex = undefined;

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
      this.splitAreasCurrentSizes[this.gutterMovingIndex] = this.minSize;
      this.splitAreasCurrentSizes[this.gutterMovingIndex + 1] = this.maxSize;
    } else if (newSize > this.maxSize) {
      this.splitAreasCurrentSizes[this.gutterMovingIndex] = this.maxSize;
      this.splitAreasCurrentSizes[this.gutterMovingIndex + 1] = this.minSize
    } else {
      this.splitAreasCurrentSizes[this.gutterMovingIndex] = this.splitItemSize + newPos;
      this.splitAreasCurrentSizes[this.gutterMovingIndex + 1] = this.nextSplitItemSize - newPos;
    }

    this.splitAreasCurrentSizes = [...this.splitAreasCurrentSizes];
  }

  private startListening(): void {
    window.addEventListener('mousemove', e => this.handleMouseMove(e), { signal: this.abortController.signal });
    window.addEventListener('mouseup', e => this.handleMouseUp(e), { signal: this.abortController.signal });
  }

  componentWillLoad() {
    if (!this.slotNames) {
      throw "Property 'slotNames' is required!";
    }

    const splitItems = this.hostElement.querySelectorAll(':scope > inno-split-item');

    if (this.slotNames.length !== splitItems.length) {
      throw "Property 'slotNames' array length is not the same as the number of inno-split-items!";
    }

    splitItems.forEach((el, key) => {
      el.slot = this.slotNames[key];
    });

    for (let i = 0; i < splitItems.length; i++) {
      this.splitAreasArray.push(i);
    }

    if (this.splitAreasDefaultSizes.length > 0 && this.splitAreasArray.length === this.splitAreasDefaultSizes.length) {
      this.splitAreasCurrentSizes = [...this.splitAreasDefaultSizes];
    } else {
      let defaultSize: number = 100 / this.splitAreasArray.length;

      for (let i = 0; i < splitItems.length; i++) {
        this.splitAreasCurrentSizes.push(defaultSize);
      }
    }
  }

  render() {
    this.splitAreasCurrentSizes[this.splitAreasCurrentSizes.length - 1] = 1;

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
        {this.splitAreasArray.map(num => {
          let hasGutter: boolean = this.splitAreasArray.length > 1 && num !== (this.splitAreasArray.length - 1);

          return (
            <div class={{
              'split-slot-container': true,
              'horizontal': this.orientation === 'horizontal',
              'vertical': this.orientation === 'vertical'
            }}>
              <slot name={this.slotNames[num]}></slot>
              {hasGutter
                ? <inno-split-gutter orientation={this.orientation}
                  onMouseDown={(e) => this.handleMouseDown(e, num)}>

                </inno-split-gutter>
                : null}
            </div>)
        })}
      </Host>
    );
  }
}
