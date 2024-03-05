import './App.css'
import { MyComponent, defineCustomElements } from '@innomotics/ix-react-lib';

defineCustomElements();

function App() {

  return (
      <MyComponent first="Retek"></MyComponent>
  )
}

export default App
