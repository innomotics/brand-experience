import "./App.css";
import {
  defineCustomElements,
  InnoBreadcrumb,
  InnoBreadcrumbItem,
  InnoIcon,
} from "@innomotics/ix-react-lib";
import InnoTabExample from "./components/InnoTabExample/InnoTabExample";
import InnoModalExample from "./components/InnoModalExample/InnoModalExample";

defineCustomElements();

function App() {
  return (
    <>
      <div className="tab-container">
        <InnoTabExample></InnoTabExample>
      </div>

      <InnoBreadcrumb>
        <InnoBreadcrumbItem icon="about" label="Item 1"></InnoBreadcrumbItem>
        <InnoBreadcrumbItem label="Item 2"></InnoBreadcrumbItem>
        <InnoBreadcrumbItem label="Item 3"></InnoBreadcrumbItem>
      </InnoBreadcrumb>
      <InnoIcon icon="youtubelogo"></InnoIcon>

      <InnoModalExample></InnoModalExample>
    </>
  );
}

export default App;
