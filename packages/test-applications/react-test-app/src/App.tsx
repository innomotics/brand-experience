import "./App.css";
import {
  defineCustomElements,
  InnoBreadcrumb,
  InnoBreadcrumbItem,
  InnoIcon,
  InnoDatePicker,
} from "@innomotics/brand-experience-react-lib";
import InnoTabExample from "./components/InnoTabExample/InnoTabExample";
import InnoModalExample from "./components/InnoModalExample/InnoModalExample";
import { InnoStatusMessageExample } from "./components/InnoStatusMessageExample/InnoStatusMessageExample";

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

      <InnoStatusMessageExample></InnoStatusMessageExample>

      <InnoDatePicker></InnoDatePicker>
    </>
  );
}

export default App;
