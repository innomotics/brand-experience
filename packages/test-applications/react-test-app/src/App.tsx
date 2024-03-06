import './App.css'
import { defineCustomElements, InnoBreadcrumb, InnoBreadcrumbItem, InnoIcon } from '@innomotics/ix-react-lib';

defineCustomElements();

function App() {

  return (
    <>
    <InnoBreadcrumb>
      <InnoBreadcrumbItem icon="about" label="Item 1"></InnoBreadcrumbItem>
      <InnoBreadcrumbItem label="Item 2"></InnoBreadcrumbItem>
      <InnoBreadcrumbItem label="Item 3"></InnoBreadcrumbItem>
    </InnoBreadcrumb>
    <InnoIcon icon="add-circle"></InnoIcon>
    </>
  )
}

export default App
