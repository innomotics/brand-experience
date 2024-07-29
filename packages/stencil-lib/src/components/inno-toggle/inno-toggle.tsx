import { Component, Element, Event, EventEmitter, Host, h, Prop, Watch } from '@stencil/core';
import { a11yBoolean } from '../../utils/a11y';

@Component({
  tag: 'inno-toggle',
  styleUrl: 'inno-toggle.scss',
  scoped: true
})
export class InnoToggle {
  @Element() hostElement!: HTMLInnoToggleElement;

  /**
   * Whether the slide-toggle element is checked or not. Can be changed programatically, will emit a change event.
   */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  /**
   * Whether the slide-toggle element is disabled or not.
   */
  @Prop({ mutable: true }) disabled: boolean = false;

  /**
   * Color variant of the toggle component.
   */
  @Prop({ mutable: true }) variant: 'dark' | 'light' = 'dark';

  /**
   * The tab index of the toggle
   */
  @Prop({ mutable: true }) tabIdx: number = 0;

  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  @Event() checkedChange: EventEmitter<boolean>;

  onCheckedChange(newChecked: boolean) {
    this.checked = newChecked;
  }

  @Watch('checked')
  checkedChangeHandler(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.checkedChange.emit(this.checked);
    }
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled
        }}
        onClick={() => this.onCheckedChange(!this.checked)}
      >
        <input
          disabled={this.disabled}
          checked={this.checked}
          role="switch"
          tabindex={this.disabled ? -1 : this.tabIdx}
          type="checkbox"
          aria-checked={a11yBoolean(this.checked)}
          onChange={(event) =>
            this.onCheckedChange((event.target as any).checked)
          }
        ></input>
        <label class="switch" tabIndex={-1}>
          <span
            class={{
              "slider": true,
              "dark": this.variant === "dark",
              "light": this.variant === "light"
            }}>
          </span>
        </label>
      </Host>
    );
  }

}
