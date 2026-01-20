import "./timeSlots.css";

export const TimeSlots = ({ selectedTime, setSelectedTime }) => {
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
          className={`TimeSlot ${selectedTime === hour ? "TimeSlot-selected" : ""}`}
          onClick={() => setSelectedTime(hour)}
        >
          {hour}
        </div>
      ))}
    </div>
  );
};
