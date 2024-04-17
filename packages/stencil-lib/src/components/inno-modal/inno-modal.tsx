import { Component, Host, h, Element, Prop, State, Event, EventEmitter, Method } from '@stencil/core';
import anime from 'animejs';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../../utils/a11y';
import Animation from '../../utils/animation';
import { waitForElement } from '../../utils/waitForElement';

export type IxModalFixedSize = '360' | '480' | '600' | '720' | '840';
export type IxModalDynamicSize = 'full-width' | 'full-screen';
export type IxModalSize = IxModalFixedSize | IxModalDynamicSize;

@Component({
  tag: 'inno-modal',
  styleUrl: 'inno-modal.scss',
  scoped: true,
})
export class InnoModal {
  private ariaAttributes: A11yAttributes = {};

  @Element() hostElement!: any;

  /**
   * Theme variant of the component.
   */
  @Prop({ mutable: true }) variant: 'dark' | 'light' = 'light';

  /**
   * Modal size
   */
  @Prop() size: IxModalSize = '720';

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
   * Is called before the modal is dismissed.
   *
   * - Return `true` to proceed in dismissing the modal
   * - Return `false` to abort in dismissing the modal
   */
  @Prop() beforeDismiss: (reason?: any) => boolean | Promise<boolean>;

  /**
   * Centered modal
   */
  @Prop() centered = false;

  /**
   * Use ESC to dismiss the modal
   * @deprecated - Use closeOnEscape instead
   */
  @Prop() keyboard = true;

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

  @State() modalVisible = false;

  // @OnListener<Modal>('keydown', self => !self.closeOnEscape || !self.keyboard)
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
    }
  }

  get dialog() {
    return this.hostElement.querySelector('dialog');
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

  /**
   * Show the dialog
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
    console.log('CALLED!');

    let allowDismiss = true;

    if (this.beforeDismiss !== undefined) {
      allowDismiss = await this.beforeDismiss(reason);
    }
    if (!allowDismiss) {
      return;
    }

    this.slideOutModal(() => {
      this.modalVisible = false;
      this.dialog.close(
        JSON.stringify(
          {
            type: 'dismiss',
            reason,
          },
          null,
          2,
        ),
      );

      this.dialogDismiss.emit(reason);
    });
  }

  /**
   * Close the dialog
   */
  @Method()
  async closeModal<T = any>(reason: T) {
    this.slideOutModal(() => {
      this.dialog.close(
        JSON.stringify(
          {
            type: 'close',
            reason,
          },
          null,
          2,
        ),
      );

      this.dialogClose.emit(reason);
    });
  }

  componentDidLoad() {
    this.slideInModal();
  }

  componentWillLoad() {
    this.ariaAttributes = a11yHostAttributes(this.hostElement);
  }

  render() {
    return (
      <Host
        class={{
          'visible': this.modalVisible,
          'no-backdrop': this.backdrop === false,
          'align-center': this.centered,
        }}
      >
        <div class="dialog-backdrop">
          <dialog
            aria-modal={a11yBoolean(true)}
            aria-describedby={this.ariaAttributes['aria-describedby']}
            aria-labelledby={this.ariaAttributes['aria-labelledby']}
            class={{
              modal: true,
              [`modal-size-${this.size}`]: true,
            }}
            onClose={() => this.dismissModal()}
            onClick={event => this.onModalClick(event)}
            onCancel={e => {
              e.preventDefault();
              this.dismissModal();
            }}
          >
            <slot></slot>
          </dialog>
        </div>
      </Host>
    );
  }
}
