import './App.css'
import { MyComponent, defineCustomElements } from '@innomotics/ix-react-lib';

defineCustomElements();

function App() {

  return (
    <>
    <MyComponent first='23132'></MyComponent>
    </>
  )
}

export default App
