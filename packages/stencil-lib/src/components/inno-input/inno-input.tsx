import { State, Prop, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'inno-input',
  styleUrl: 'inno-input.scss',
  scoped: true,
})
export class InnoInput {
  @Prop({ mutable: true }) isActive: boolean;
  @Prop({ mutable: true }) isFocused: boolean;
  @Prop() label: string;
  @State() value: string;


  onBlur() {
    if (this.value === '' || this.value === undefined) {
      this.isActive = false;
    }
  }

  onFocus() {
    this.isActive = true;
    this.isFocused = true;
  }

  inputChanged(event) {
    this.value = event.target.value;
  }

  onFocusout(){
    this.isFocused = false;
  }

  render() {
    return (
      <Host>
        <div class={{"input-container":true, "focused": this.isFocused}}>
          <span class={{ label: true, float: this.isActive }}>{this.label}</span>
          <input onBlur={() => this.onBlur()} onFocus={() => this.onFocus()} onFocusout={() => this.onFocusout()} value={this.value} onInput={event => this.inputChanged(event)} />
        </div>
      </Host>
    );
  }
}
