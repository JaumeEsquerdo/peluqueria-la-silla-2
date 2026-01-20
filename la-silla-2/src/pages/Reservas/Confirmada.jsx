import "./reservas.css";
import "./reservaConfirmada.css";
import { Link } from "react-router";

import { useReserva } from "../../hooks/useReserva";

const Confirmada = () => {
  const { reserva } = useReserva();

  // console.log("Reserva confirmada:", reserva);

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
        <span className="ReservaConfirmada-line"></span>
        <div className="Reservas-contentConfirmada">
          <span className="Circulo">
            {" "}
            <img src="/Checkmark.svg" alt="tick reserva confirmada" />
          </span>
          <div className="ReservasContentText">
            <h2 className="ReservasContentText-h2">¡RESERVA CONFIRMADA!</h2>
            <p className="ReservasContentText-p">
              TU RESERVA HA SIDO REALIZADA CON ÉXITO. HEMOS ENVIADO LOS DETALLES
              A{" "}
              <span style={{ color: "#333" }}>
                {reserva.email && reserva.email.toUpperCase()}.
              </span>
            </p>
          </div>
          <div className="Reservas-resumenContent">
            {reserva.servicio && reserva.fecha && reserva.hora ? (
              <>
                <div className="Reservas-resumenCorte">
                  <p className="Servicio-title Reservas-dataCitaImportant">
                    {" "}
                    {reserva.servicio.servicio}
                  </p>
                  <p className="Servicio-tiempo">{reserva.servicio.tiempo}</p>
                  <p className="Servicio-precio">{reserva.servicio.precio}</p>
                </div>
                <div className="Reservas-dataDetails">
                  <p className="Reservas-dataCitaImportant">
                    FECHA:{" "}
                    <span className="Reservas-spanTime">
                      {reserva.fecha.split("-").reverse().join("-")}
                    </span>
                  </p>
                  <p className="Reservas-dataCitaImportant">
                    HORA:{" "}
                    <span className="Reservas-spanTime">{reserva.hora}</span>
                  </p>
                  <p className="Reservas-dataCitaImportant">
                    {reserva.nombre && reserva.nombre.toUpperCase()}
                  </p>
                </div>
              </>
            ) : (
              <p className="Reservas-esperando">
                ESPERANDO QUE LLEGUE LA CITA...
              </p>
            )}
          </div>
          <Link to="/" className={`Reservas-button Reservas-link`}>
            VOLVER AL INICIO
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Confirmada;
