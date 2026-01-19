import "./reservas.css";

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
];

const Reservas = () => {
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
          <div className="Reservas-select">
            <h3 className="Reservas-titleStep">1. SELECCIONA EL SERVICIO</h3>
            <span className="Reservas-titleLine"></span>
            <div className="Seleccion-grid">
              {servicios.map((serv, i) => {
                <div className="Servicio-div" key={i}>
                  <h4>{serv.servicio}</h4>
                  <p>{serv.tiempo}</p>
                  <p>{serv.precio}</p>
                </div>;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservas;
