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
        new Item(1, "1", 1),
        new Item(2, "2", 2),
        new Item(3, "3", 3),
        new Item(4, "4", 4),
        new Item(5, "5", 5)]
    }
  }
  randomize = () => {
    this.setState({
      listItems: [new Item(2, "2", 2),
      new Item(3, "3", 3),
      new Item(4, "4", 4),
      ]
    });
  }

  render = () => {
    return (
      <>
        <InnoSelect label="Select" value="item1">
          <Fragment>
            {this.state.listItems.map(li => {
              return <InnoSelectItem key={li.Id} id={li.Id.toString()} value={li.Value} label={li.Label}></InnoSelectItem>
            })}
          </Fragment>
        </InnoSelect>
        <InnoButton variant="primary" icon="arrow_right" color-variant="dark" onClick={() => this.randomize()}>primary button</InnoButton>
      </>);
  };
}

export default App;
