import { Component, Host, h, Element, Prop, State, Event, EventEmitter, Method, Listen } from '@stencil/core';
import anime from 'animejs';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../../utils/a11y';
import Animation from '../../utils/animation';
import { waitForElement } from '../../utils/waitForElement';
import { InnoModalSize } from './inno-modal.model';

/**
 * Represents the main frame of the modal component.
 */
@Component({
  tag: 'inno-modal',
  styleUrl: 'inno-modal.scss',
  scoped: true,
})
export class InnoModal {
  private ariaAttributes: A11yAttributes = {};

  @Element() hostElement!: HTMLElement;

  @State() modalVisible = false;
  currentCause?: any;

  /**
   * Theme variant of the component.
   */
  @Prop({ mutable: true }) variant: 'dark' | 'light' = 'light';

  /**
   * Modal size
   */
  @Prop() size: InnoModalSize = '720';

  /**
   * Should the modal be animated
   */
  @Prop() animation = true;

  /**
   * Show a backdrop behind the modal dialog
   */
  @Prop() backdrop = true;

  /**
   * Dismiss modal on backdrop click
   */
  @Prop() closeOnBackdropClick = true;

  /**
   * Centered modal
   */
  @Prop() centered = false;

  /**
   * If set to true the modal can be closed by pressing the Escape key
   */
  @Prop() closeOnEscape = true;

  /**
   * Dialog close
   */
  @Event() dialogClose: EventEmitter;

  /**
   * Dialog cancel
   */
  @Event() dialogDismiss: EventEmitter;

  get dialog() {
    return this.hostElement.querySelector('dialog');
  }

  componentDidLoad() {
    this.slideInModal();
  }

  componentWillLoad() {
    this.ariaAttributes = a11yHostAttributes(this.hostElement);
  }

  // Handle keydown on modal content window
  @Listen('keydown')
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.closeOnEscape) {
      e.preventDefault();
      this.dismissModal();
    } else {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  /**
   * Show the dialog.
   */
  @Method()
  async showModal() {
    try {
      const dialog = await waitForElement<HTMLDialogElement>('dialog', this.hostElement);
      this.modalVisible = true;
      dialog.showModal();
    } catch (e) {
      console.error('HTMLDialogElement not existing');
    }
  }

  /**
   * Dismiss the dialog
   */
  @Method()
  async dismissModal<T = any>(reason?: T) {
    this.slideOutModal(() => {
      this.modalVisible = false;
      this.dialog.close(JSON.stringify({ type: 'dismiss', reason }));
      this.dialogDismiss.emit(reason);
    });
  }

  /**
   * Close the dialog
   */
  @Method()
  async closeModal<T = any>(reason: T) {
    this.slideOutModal(() => {
      this.dialog.close(JSON.stringify({ type: 'close', reason }));
      this.dialogClose.emit(reason);
    });
  }

  private slideInModal() {
    const duration = this.animation ? Animation.mediumTime : 0;
    let transformY = this.centered ? '-50%' : 40;

    anime({
      targets: this.dialog,
      duration,
      opacity: [0, 1],
      translateY: [0, transformY],
      translateX: ['-50%', '-50%'],
      easing: 'easeOutSine',
    });
  }

  private slideOutModal(completeCallback: Function) {
    const duration = this.animation ? Animation.mediumTime : 0;
    let transformY = this.centered ? '-50%' : 40;

    anime({
      targets: this.dialog,
      duration,
      opacity: [1, 0],
      translateY: [transformY, 0],
      translateX: ['-50%', '-50%'],
      easing: 'easeInSine',
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      },
    });
  }

  private onDialogCancel(event: Event) {
    // Check escape default behavior on modal backdrop
    if (!this.closeOnEscape) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    event.preventDefault();
    this.dismissModal();
  }

  private onModalClick(event: MouseEvent) {
    if (event.target !== this.dialog) {
      return;
    }

    const rect = this.dialog.getBoundingClientRect();
    const isClickOutside = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;

    if (!isClickOutside && this.closeOnBackdropClick) {
      this.dismissModal();
    }
  }

  private dialogElement() {
    const classes = {
      modal: true,
      [`modal-size-${this.size}`]: true,
    };

    return (
      <div class="dialog-backdrop">
        <dialog
          aria-modal={a11yBoolean(true)}
          aria-describedby={this.ariaAttributes['aria-describedby']}
          aria-labelledby={this.ariaAttributes['aria-labelledby']}
          class={classes}
          onClick={e => this.onModalClick(e)}
          onCancel={e => this.onDialogCancel(e)}
        >
          <slot></slot>
        </dialog>
      </div>
    );
  }

  render() {
    const hostClasses = {
      'visible': this.modalVisible,
      'no-backdrop': !this.backdrop,
      'align-center': this.centered,
    };

    return <Host class={hostClasses}>{this.dialogElement()}</Host>;
  }
}
