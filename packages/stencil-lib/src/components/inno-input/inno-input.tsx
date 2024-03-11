import { State, Prop, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'inno-input',
  styleUrl: 'inno-input.scss',
  scoped: true,
})
export class InnoInput {
  @Prop({mutable:true}) isActive: boolean;
  
  @State() value: string;
  
  onBlur(){
    if(this.value === "" || this.value === undefined){
      this.isActive = false;
    }
  }

  onFocus() {
    this.isActive = true;
  }

  inputChanged(event){
    this.value = event.target.value;
  }
  
  render() {
    return (
      <Host>
        <inno-floating-label label="juhu" activeState={this.isActive}>
          <input onBlur={() => this.onBlur()} onFocus={()=> this.onFocus()} style={{ height: '45px' }} value={this.value} onInput={(event) => this.inputChanged(event)} />
        </inno-floating-label>
      </Host>
    );
  }
}
