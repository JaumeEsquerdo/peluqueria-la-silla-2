import "./Servicios.css";

export const Servicios = () => {
  return (
    <section className="Prices-body" id="precios">
      <h2 className="Prices-title">NUESTROS SERVICIOS</h2>

      <div className="Prices-grid">
        {/* <!-- Texto de la izquierda --> */}
        <div className="Prices-column">
          <h3>CORTES</h3>
          <div className="Price-item">
            <span>CORTE FADE</span>
            <span>20€</span>
          </div>
          <div className="Price-item">
            <span>CORTE CLÁSICO</span>
            <span>18€</span>
          </div>
          <div className="Price-item">
            <span>CORTE CABALLERO</span>
            <span>20€</span>
          </div>
          <div className="Price-item">
            <span>CORTE NIÑO</span>
            <span>12€</span>
          </div>

          <h3>BARBA</h3>
          <div className="Price-item">
            <span>RECORTE DE BARBA</span>
            <span>10€</span>
          </div>
          <div className="Price-item">
            <span>AFEITADO CLÁSICO</span>
            <span>12€</span>
          </div>
          <div className="Price-item">
            <span>BARBA + CORTE</span>
            <span>25€</span>
          </div>
          <div className="Price-item">
            <span>MANTENIMIENTO</span>
            <span>10€</span>
          </div>
        </div>

        {/* <!-- Imagen --> */}
        <div className="Prices-image">
          <img
            src="/imgs/img-center.png"
            alt="Imagen barbería y peluquería"
            title="Imagen barbería y peluquería"
            lazy="loading"
          />
        </div>

        {/* <!-- Texto de la derecha--> */}
        <div className="Prices-column">
          <h3>CORTES AVANZADOS</h3>
          <div className="Price-item">
            <span>DECOLORACIÓN</span>
            <span>40€</span>
          </div>
          <div className="Price-item">
            <span>CORTE CON MECHAS</span>
            <span>25€</span>
          </div>
          <div className="Price-item">
            <span>CORTE + TRATAMIENTO</span>
            <span>45€</span>
          </div>
          {/* <!-- Botón de reservas --> */}
          <a href="/reservas" className="Prices-button" title="Reserva tu cita">
            RESERVA TU CITA
          </a>
        </div>
      </div>
    </section>
  );
};
