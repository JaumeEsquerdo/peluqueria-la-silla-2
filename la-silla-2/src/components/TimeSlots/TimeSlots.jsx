import "./timeSlots.css";
import { useState } from "react";

export const TimeSlots = () => {
  const [hourSelected, setHourSelected] = useState(null);
  // Crear un array con las horas de 9 a 21
  const startHour = 9;
  const endHour = 21;
  const hours = [];

  for (let i = startHour; i <= endHour; i++) {
    hours.push(`${i}:00`);
  }
  return (
    <div className="TimeSlotsContainer">
      {hours.map((hour) => (
        <div
          key={hour}
          className={`TimeSlot ${hourSelected ? "TimeSlot-selected" : ""}`}
          onClick={(hour) => setHourSelected(hour)}
        >
          {hour}
        </div>
      ))}
    </div>
  );
};
