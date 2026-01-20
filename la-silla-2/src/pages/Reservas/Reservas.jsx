import { useState } from "react";
import { Calendar } from "../../components/Calendar/Calendar";
import { TimeSlots } from "../../components/TimeSlots/TimeSlots";
import "./reservas.css";
import { useReserva } from "../../hooks/useReserva";
import { useNavigate } from "react-router";

const servicios = [
  { servicio: "CORTE FADE", tiempo: "30 MIN", precio: "20€" },
  { servicio: "CORTE CLÁSICO", tiempo: "25 MIN", precio: "18€" },
  { servicio: "CORTE CABALLERO", tiempo: "30 MIN", precio: "20€" },
  { servicio: "RECORTE DE BARBA", tiempo: "15 MIN", precio: "10€" },
  { servicio: "AFEITADO CLÁSICO", tiempo: "20 MIN", precio: "20€" },
  { servicio: "BARBA + CORTE", tiempo: "35 MIN", precio: "25€" },
  { servicio: "MANTENIMIENTO", tiempo: "10 MIN", precio: "10€" },
  { servicio: "DECOLORACIÓN", tiempo: "40 MIN", precio: "40€" },
  { servicio: "CORTE CON MECHAS", tiempo: "25 MIN", precio: "25€" },
  { servicio: "CORTE + TRATAMIENTO", tiempo: "35 MIN", precio: "45€" },
  { servicio: "OTRO", tiempo: "CUENTANOS TU IDEA" },
];

const Reservas = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const { updateReserva, reserva } = useReserva();
  const navigate = useNavigate();

  const isValid =
    reserva.servicio &&
    reserva.fecha &&
    reserva.hora &&
    reserva.nombre &&
    reserva.telefono &&
    reserva.email &&
    (reserva.servicio?.servicio !== "OTRO" ||
      (reserva.notas && reserva.notas.trim() !== ""));
  const bookConfirmada = () => {
    if (reserva.servicio && reserva.fecha && reserva.hora) {
      navigate("/reservas/confirmada");
    }
  };

  return (
    <div className="ReservasPage">
      <header className="SubHeader">
        <a className="SubHeader-icon" href="/">
          (2)
        </a>
        <a className="SubHeader-title" href="/">
          LA (2) SILLA
        </a>
        <ul className="SubHeader-links">
          <a className="SubHeader-link" href="#">
            GALERÍA
          </a>
          <a className="SubHeader-link" href="#">
            NOSOTROS
          </a>
          <a className="SubHeader-link" href="#">
            PRECIOS
          </a>
        </ul>
      </header>

      <section className="Reservas-content">
        <h2 className="Reservas-h2">RESERVA ONLINE</h2>
        <div className="Reservas-steps">
          {/* paso 1 */}
          <div className="Reservas-select">
            <h3 className="Reservas-titleStep">1. SELECCIONA EL SERVICIO</h3>
            <span className="Reservas-titleLine"></span>
            <div className="Seleccion-grid">
              {servicios.map((serv, i) => (
                <div
                  className={`Servicio-div ${reserva.servicio?.servicio === serv.servicio ? "Servicio-selected" : ""}`}
                  key={i}
                  onClick={() => updateReserva({ servicio: serv })}
                >
                  <h4 className="Servicio-title">{serv.servicio}</h4>
                  <p className="Servicio-tiempo">{serv.tiempo}</p>
                  <p
                    className={`Servicio-precio ${reserva.servicio?.servicio === serv.servicio ? "Servicio-precioSelected" : ""}`}
                  >
                    {serv.precio}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* paso 2 */}
          <div className="Reservas-time">
            <h3 className="Reservas-titleStep">2. FECHA Y HORA</h3>
            <span className="Reservas-titleLine"></span>
            <div className="Reservas-contentCalendar">
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={(date) => {
                  setSelectedDate(date);
                  updateReserva({ fecha: date.toISOString().split("T")[0] });
                }}
              />
              <TimeSlots
                selectedTime={selectedTime}
                setSelectedTime={(time) => {
                  setSelectedTime(time);
                  updateReserva({ hora: time });
                }}
              />
            </div>
          </div>
          {/* paso 3 */}
          <div className="Reservas-time">
            <h3 className="Reservas-titleStep">3. TUS DATOS</h3>
            <span className="Reservas-titleLine"></span>
          </div>
          <form className="Reservas-data">
            <div className="Reservas-rowForm">
              <label className="Reservas-label">
                NOMBRE DE LA RESERVA
                <input
                  required
                  className="Reservas-input"
                  type="text"
                  placeholder="NOMBRE"
                  value={reserva.nombre}
                  onChange={(e) => updateReserva({ nombre: e.target.value })}
                />
              </label>
              <label className="Reservas-label">
                TELÉFONO
                <input
                  required
                  className="Reservas-input"
                  type="text"
                  placeholder="(+34)"
                  value={reserva.telefono}
                  onChange={(e) => updateReserva({ telefono: e.target.value })}
                  maxLength={9}
                  minLength={9}
                />
              </label>
            </div>
            <div className="Reservas-rowForm">
              <label className="Reservas-label">
                EMAIL DE CONFIRMACIÓN
                <input
                  required
                  className="Reservas-input"
                  type="text"
                  placeholder="EMAIL@GMAIL.COM"
                  value={reserva.email}
                  onChange={(e) => updateReserva({ email: e.target.value })}
                />
              </label>
              <label className="Reservas-label">
                NOTAS ADICIONALES{" "}
                {reserva.servicio?.servicio === "OTRO"
                  ? "(REQUERIDO)"
                  : "(OPCIONAL)"}
                <input
                  className="Reservas-input"
                  type="text"
                  placeholder={
                    reserva.servicio?.servicio === "OTRO"
                      ? "CUÉNTANOS LO QUE QUIERES"
                      : "..."
                  }
                  value={reserva.notas}
                  onChange={(e) => updateReserva({ notas: e.target.value })}
                  required={reserva.servicio?.servicio === "OTRO"} // ✅ requerido solo si es OTRO
                />
              </label>
            </div>
          </form>
          {/* paso 4 resumen reserva */}
          <div className="Reservas-resumen">
            <h3 className="Reservas-titleStep">4. RESUMEN DE LA CITA</h3>
            <span className="Reservas-titleLine"></span>
            <div className="Reservas-resumenContent">
              <div className="Reservas-resumenCorte">
                <p>Servicio: {reserva.servicio?.servicio}</p>
                <p>Duración:{reserva.servicio?.tiempo}</p>
                <p>Precio:{reserva.servicio?.precio}</p>
              </div>
              <p>Fecha: {reserva.fecha?.split("-").reverse().join("-")}</p>

              <p>Hora: {reserva.hora}</p>
            </div>
            <button disabled={!isValid} onClick={bookConfirmada}>
              CONFIRMAR CITA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservas;
