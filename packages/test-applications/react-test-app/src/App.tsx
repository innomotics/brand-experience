import './App.css'
import { IxButton, MyComponent, defineCustomElements } from '@innomotics/ix-react-lib';

defineCustomElements();

function App() {

  return (
    <>
    <MyComponent first='23132'></MyComponent>
      <IxButton variant='primary'>retk
    </IxButton>
    </>
  )
}

export default App
