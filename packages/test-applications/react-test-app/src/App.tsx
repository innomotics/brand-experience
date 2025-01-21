import { Component, Fragment } from "react";
import { AppState } from "./models/AppState";
import "./App.scss";
import {
  defineCustomElements,
  InnoButton,
  InnoSelect,
  InnoSelectItem,
} from "@innomotics/brand-experience-react-lib";
import { Item } from "./models/items";
defineCustomElements();


class App extends Component<any, AppState> {

 
  constructor(props: any) {
    super(props);
    this.state = {
      listItems: [
        new Item(0, "0", 0),
        new Item(1, "1", 1),
        new Item(2, "2", 2),
        new Item(3, "3", 3),
        new Item(4, "4", 4)],
        value: 0
    }
  }
  randomize = () => {
    let r = Math.round(Math.random() * 10) + 1;
    let its =[];
    
    for (let i = 0; i < r; i++) {
      its[i] = new Item(i,i.toString(),i);
    }
    this.setState({
      listItems: its
    });
  }

  render = () => {
    return (
      <>
      <span>{this.state.listItems.length}</span>
        <InnoSelect label="Select" value={0}>
          {this.state.listItems.map(li => {
            return <InnoSelectItem key={li.Id} id={li.Id.toString()} value={li.Value} label={li.Label}></InnoSelectItem>
          })}
        </InnoSelect>
        <InnoButton variant="primary" icon="arrow_right" color-variant="dark" onClick={() => this.randomize()}>primary button</InnoButton>
      </>);
  };
}

export default App;
