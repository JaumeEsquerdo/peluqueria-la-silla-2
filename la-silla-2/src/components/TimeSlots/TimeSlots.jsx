import "./timeSlots.css";
import { useMemo, useEffect } from "react";

export const TimeSlots = ({ selectedTime, setSelectedTime, selectedDate }) => {
  // Crear un array con las horas de 9 a 21
  const startHour = 9;
  const endHour = 21;

  const hours = useMemo(() => {
    const arr = [];
    for (let i = startHour; i <= endHour; i++) {
      arr.push(`${i}:00`);
    }
    return arr;
  }, []);

  /* definir horas bloqueadas para simular UI de horas ya elegidas por otros usuarios e invalidas para los demás */
  const blockedHours = useMemo(() => {
    const blockedEvenDay = ["10:00", "13:00", "16:00", "19:00"];
    const blockedOddDay = ["9:00", "12:00", "15:00", "18:00", "21:00"];

    if (!selectedDate) return [];

    const dayNumber = selectedDate.getDate();
    return dayNumber % 2 === 0 ? blockedEvenDay : blockedOddDay;
  }, [selectedDate]);

  // si cambia fecha y la hora seleccionada queda bloqueada => reset
  useEffect(() => {
    if (!selectedDate) {
      setSelectedTime(null);
      return;
    }

    // Si la hora seleccionada ahora está bloqueada, reset
    // Si sigue libre, la mantenemos
    if (selectedTime && blockedHours.includes(selectedTime)) {
      setSelectedTime(null);
    }
  }, [selectedDate, blockedHours, selectedTime, setSelectedTime]);

  //helper para saber si está bloqueado
  const isBlocked = (hour) => blockedHours.includes(hour);

  return (
    <div className="TimeSlotsContainer">
      {hours.map((hour) => (
        <div
          key={hour}
          className={`TimeSlot ${
            selectedTime === hour ? "TimeSlot-selected" : ""
          } 
          ${isBlocked(hour) ? "TimeSlot-blocked" : ""}
          `}
          onClick={() => {
            if (isBlocked(hour)) return;

            setSelectedTime(hour);
          }}
        >
          {hour}
        </div>
      ))}
    </div>
  );
};
