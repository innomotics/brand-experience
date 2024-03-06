import './App.css'
import { defineCustomElements, InnoBreadcrumb, InnoBreadcrumbItem } from '@innomotics/ix-react-lib';

defineCustomElements();

function App() {

  return (
    <>
    <InnoBreadcrumb>
      <InnoBreadcrumbItem label="Item 1"></InnoBreadcrumbItem>
      <InnoBreadcrumbItem label="Item 2"></InnoBreadcrumbItem>
      <InnoBreadcrumbItem label="Item 3"></InnoBreadcrumbItem>
    </InnoBreadcrumb>
    </>
  )
}

export default App
