import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { es } from "date-fns/locale";
import "./calendar.css";

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const today = new Date(); // fecha de hoy para desactivar los dias anteriores
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={(date) => setSelectedDate(date)}
      locale={es}
      disabled={[{ dayOfWeek: [0] }, { before: today }]}
    />
  );
};
