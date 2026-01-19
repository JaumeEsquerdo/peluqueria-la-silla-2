import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { es } from "date-fns/locale";
import "./calendar.css";

export const Calendar = ({ selected, setSelected }) => {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      locale={es}
      disabled={{ dayOfWeek: [0] }}
    />
  );
};
