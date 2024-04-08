import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import anime from 'animejs';

export type ExpandedChangedEvent = {
  expanded: boolean;
};

@Component({
  tag: 'inno-pane',
  styleUrl: 'inno-pane.scss',
  scoped: true,
})
export class InnoPane {
  @Element() hostElement: HTMLInnoPaneElement;

  /**
   * Position of the pane.
   */
  @Prop({ mutable: true }) position: 'top' | 'left' | 'bottom' | 'right' = 'right';

  /**
   * Programatically control whether the pane is opened or closed.
   */
  @Prop({ mutable: true }) expanded: boolean = false;

  /**
   * The pane comes with a close button by default. Hide it with this property.
   */
  @Prop({ mutable: true }) hideCloseButton: boolean = false;

  /**
   * Title of the pane.
   */
  @Prop({ mutable: true }) titleText: string;

  /**
   * Whether the pane is closeable by clicking outside of it.
   */
  @Prop({ mutable: true }) closeOnBackdropClick: boolean = true;

  /**
   * Size of the pane.
   */
  @Prop({ mutable: true }) paneSize: string = '100%';

  /**
   * This event is fired when the pane is opened or closed.
   */
  @Event() expandedChanged: EventEmitter<ExpandedChangedEvent>;

  @State() private showContent = false;

  closeViaBackdrop(event: globalThis.Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.closeOnBackdropClick) {
      this.expanded = false;
    }
  }

  private emitExpandedChangedEvent(): void {
    this.expandedChanged.emit({
      expanded: this.expanded
    });
  }

  @Watch('expanded')
  onExpandedChange() {
    this.showContent = false;
    if (this.position === 'top' || this.position === 'bottom') {
      this.animateVerticalPane(this.expanded ? this.paneSize : '0');
    } else {
      this.animateHorizontalPane(this.expanded ? this.paneSize : '0');
    }
  }

  private animateHorizontalPane(width: string) {
    anime({
      targets: this.hostElement.querySelector(".pane-content-container"),
      duration: 300,
      width: width,
      easing: 'cubicBezier(0.84, 0, 0.58, 1)',
      delay: 0,
      complete: () => {
        this.showContent = true;

        this.emitExpandedChangedEvent();
      }
    });
  }

  private animateVerticalPane(height: string) {
    anime({
      targets: this.hostElement.querySelector(".pane-content-container"),
      duration: 300,
      height: height,
      easing: 'cubicBezier(0.84, 0, 0.58, 1)',
      delay: 0,
      complete: () => {
        this.showContent = true;

        this.emitExpandedChangedEvent();
      }
    });
  }

  render() {
    return (
      <Host class={{
        'not-visible': !this.expanded
      }}>
        <div class='pane-backdrop' onClick={(e) => this.closeViaBackdrop(e)}></div>
        <div class={{
          'pane-content-container': true,
          'pane-pos-top': this.position === 'top',
          'pane-pos-left': this.position === 'left',
          'pane-pos-bottom': this.position === 'bottom',
          'pane-pos-right': this.position === 'right'
        }}
        >
          <div class={{
            'pane-title-container': true,
            'no-title': this.titleText == null
          }}
            hidden={!this.showContent || !this.expanded}>
            {this.titleText != null ? <h2>{this.titleText}</h2> : null}
            {!this.hideCloseButton
              ? <inno-button icon='close' variant='tertiary' iconOnly={true} colorVariant='light'
                onClick={() => this.expanded = !this.expanded}></inno-button>
              : null}
          </div>
          <div hidden={!this.showContent || !this.expanded}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
