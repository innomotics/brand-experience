import { Component, Host, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'inno-progress-bar',
  styleUrl: 'inno-progress-bar.scss',
  scoped: true,
})
export class InnoProgressBar {

  /**
   * Color variant of the accordion.
   */
  @Prop({ mutable: true }) variant: 'light' | 'dark' = 'light';

  /**
   * Text to display for the progress bar.
   */
  @Prop({ mutable: true }) progressText: string = '';

  /**
   * Progress in percentage. Must be a number between 0 and 100.
   */
  @Prop({ mutable: true }) progressPercentage: number = 0;

  /**
   * Show the percentage number on the progress bar. The value is rounded according to the 'percentagePrecision' and 'trailingZeroes' properties.
   */
  @Prop({ mutable: true }) showPercentage: boolean = true;

  /**
   * If the percentage number is shown, how many decimal places should be visible
   */
  @Prop({ mutable: true }) percentagePrecision: number = 0;

  /**
   * If 'percentagePrecision' is larger than 0, should we display the trailing zeroes.
   * For example if the progress is 1.5% and the 'percentagePrecision' is 2 then the displayed text will be '1.50%' 
   * if trailing zeroes are enabled and '1.5%' if trailing zeroes are disabled.
   * Uses the toFixed(..) function in the background.
   */
  @Prop({ mutable: true }) trailingZeroes: boolean = false;

  private frontLayerRef: HTMLDivElement;

  @Watch('progressPercentage')
  progressChangedhandler(newValue: number): void {
    this.setClipPath(newValue);
  }

  componentDidLoad() {
    this.setClipPath(this.progressPercentage)
  }

  private setClipPath(newValue: number): void {
    this.validateProps();

    let newClipPath: string = `inset(0 0 0 ${newValue}%)`;
    this.frontLayerRef.style.clipPath = newClipPath;
    this.frontLayerRef.style['-webkit-clip-path'] = newClipPath;
  }

  private progressNum(): string | number {
    this.validateProps();

    if (this.trailingZeroes) {
      return this.progressPercentage.toFixed(this.percentagePrecision);
    } else {
      return +this.progressPercentage.toFixed(this.percentagePrecision);
    }
  }

  private validateProps(): void {
    if (this.progressPercentage < 0) {
      throw `progressPercentage is smaller than 0! The value is ${this.progressPercentage}`;
    } else if (this.progressPercentage > 100) {
      throw `progressPercentage is larger than 100! The value is ${this.progressPercentage}`;
    }

    if (this.percentagePrecision < 0) {
      throw `percentagePrecision is smaller than 0! The value is ${this.percentagePrecision}`;
    }
  }

  private progressHtml() {
    let progressPercentage = `${this.progressNum()}%`;

    return (
      <div class="progress-text-container">
        {this.showPercentage ? <div class="percentage">{progressPercentage}</div> : null}
        <div class="progress-text">{this.progressText}</div>
      </div>
    );
  }

  render() {
    return (
      <Host>
        <div class="progress-bar-container">
          <div class={
            {
              'back-layer': true,
              'light': this.variant === 'light',
              'dark': this.variant === 'dark',
            }
          }>{this.progressHtml()}</div>
          <div class={
            {
              'front-layer': true,
              'light': this.variant === 'light',
              'dark': this.variant === 'dark',
            }
          } ref={(ref) => (this.frontLayerRef = ref)}>{this.progressHtml()}</div>
        </div>
      </Host >
    );
  }

}
