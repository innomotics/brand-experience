import { DateChange } from "@innomotics/brand-experience";
import { InnoDatePicker } from "@innomotics/brand-experience-react-lib";
import { useState } from "react";

export default function InnoDatePickerExample() {
  const [selecedDate, changeDate] = useState<DateChange | undefined>(undefined);

  const handleDateChange = (event: CustomEvent<DateChange>) => {
    changeDate(event.detail);
  };

  return (
    <div>
      <InnoDatePicker
        range={true}
        onDateChange={(event) => handleDateChange(event)}
      ></InnoDatePicker>

      <span>Selectes value: </span>
      {`${selecedDate?.from} - ${selecedDate?.to}`}
    </div>
  );
}
