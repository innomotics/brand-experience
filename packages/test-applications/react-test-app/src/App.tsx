import "./App.scss";
import {
  defineCustomElements,
} from "@innomotics/brand-experience-react-lib";
import { InnoInput } from "@innomotics/brand-experience-react-lib";
import { InnoError } from "@innomotics/brand-experience-react-lib";
defineCustomElements();
function onInputChange(){
    alert("input1");
}

function onInputChange2(){
  alert("input2");
}


function App() {
  return (
    <>
    <InnoInput
        id='orderNumber'
        style={{ width: 350 }}
        label="dsa"
        variant="dark"
        onValueChanged={onInputChange}
      >
        <input id='orderNumber11' type='number'/>
        <InnoError active={true} type='badInput'>
          {`Please type in the correct format: ${7} or ${10} numeric digits for the order number`}
        </InnoError>
      </InnoInput>
      <InnoInput
        id='orderNumber2'
        style={{ width: 350 }}
        label="dsa"
        variant="dark"
        onValueChanged={onInputChange2}
      >
        <input id='orderNumber21' type='number'/>
        <InnoError active={true} type='badInput'>
          {`Please type in the correct format: ${7} or ${10} numeric digits for the order number`}
        </InnoError>
      </InnoInput>
      <InnoInput
        id='orderNumber3'
        style={{ width: 350 }}
        label="dsa"
        variant="dark"
        onValueChanged={onInputChange2}
      >
        <input id='orderNumber31' type='number'/>
        <InnoError active={true} type='badInput'>
          {`Please type in the correct format: ${7} or ${10} numeric digits for the order number`}
        </InnoError>
      </InnoInput>
    </>
  );
}

export default App;
