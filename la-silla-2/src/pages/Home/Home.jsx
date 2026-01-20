import { Galeria } from "../../components/Galeria/Galeria";
import "./Home.css";

const Home = () => {
  return (
    <main className="Home-body">
      {/* INICIO APARTADO HERO */}
      <section className="Home-section-photo">
        <img
          className="Home-img"
          src="/imgs/cabecera.png"
          alt="La [2] Silla"
          title="La [2] Silla"
        />
      </section>
      <section className="Home-section-text">
        <p className="Home-text">
          AV DE LA HUERTA, 4<br />[ 46120 ]
        </p>
        <a
          href="/Reservas"
          target="_blank"
          title="Reserva tu cita"
          className="Home-link"
        >
          RESERVA TU CITA
        </a>
        <p className="Home-text">
          PORT SAPLAYA
          <br />[ VALENCIA ]
        </p>
      </section>
      {/* FINAL APARTADO HERO */}

      {/* INICIO APARTADO GALERÍA */}
      <Galeria id={"galeria"} />
      {/* FINAL APARTADO GALERÍA */}

      {/* INICIO SOBRE NOSOTROS */}
      <section class="Nosotros-body" id="nosotros">
        <div class="Nosotros-title">SOBRE NOSOTROS</div>

        <div class="Nosotros-content">
          <div class="Nosotros-text">
            <p>SOMOS UN EQUIPO APASIONADO POR EL ARTE DEL CABELLO.</p>
            <p>
              Nos gusta el olor a navaja recién afilada, el sonido de las
              tijeras y el ritual de sentarte en la silla. Aquí cada corte
              refleja dedicación, precisión y respeto por el oficio.
            </p>
            <p>
              Un sitio donde puedes desconectar, charlar y sentirte como en
              casa. Porque una buena barbería no es solo un lugar, es una
              experiencia.
            </p>
          </div>

          <div class="Nosotros-image Nosotros-imgTop">
            <img
              src="imgs/img-right.png"
              alt="Imagen Barbería"
              title="Imagen Barbería"
            />
          </div>

          <div class="Nosotros-image Nosotros-imgBottom">
            <img
              src="imgs/img-left.png"
              alt="Imagen Peluquería"
              title="Imagen Peluquería"
            />
          </div>

          <div class="Nosotros-text">
            <p>
              Combinamos técnica, estilo y creatividad para encontrar lo que
              realmente encaja contigo, entender tu personalidad y tu actitud.
            </p>
            <p>
              NOS GUSTA CONOCERTE, ENTENDER TU PERSONALIDAD Y HACER EL MEJOR
              CORTE PARA TI.
            </p>
            <p>
              Para nosotros, tu look es más que una imagen. Es una extensión de
              quién eres, de cómo te mueves por el mundo y de la confianza que
              transmites. Sin complicaciones. Solo tú, en tu mejor versión.
            </p>
          </div>
        </div>
      </section>
      {/* FINAL SOBRE NOSOTROS */}

      {/* INICIO APARTADO PRECIOS */}
      <section class="Prices-body" id="precios">
        <h2 class="Prices-title">PRECIOS Y SERVICIOS</h2>

        <div class="Prices-grid">
          {/* <!-- Texto de la izquierda --> */}
          <div class="Prices-column">
            <h3>CORTES</h3>
            <div class="Price-item">
              <span>CORTE FADE</span>
              <span>20€</span>
            </div>
            <div class="Price-item">
              <span>CORTE CLÁSICO</span>
              <span>18€</span>
            </div>
            <div class="Price-item">
              <span>CORTE CABALLERO</span>
              <span>20€</span>
            </div>
            <div class="Price-item">
              <span>CORTE NIÑO</span>
              <span>12€</span>
            </div>

            <h3>BARBA</h3>
            <div class="Price-item">
              <span>RECORTE DE BARBA</span>
              <span>10€</span>
            </div>
            <div class="Price-item">
              <span>AFEITADO CLÁSICO</span>
              <span>12€</span>
            </div>
            <div class="Price-item">
              <span>BARBA + CORTE</span>
              <span>25€</span>
            </div>
            <div class="Price-item">
              <span>MANTENIMIENTO</span>
              <span>10€</span>
            </div>
          </div>

          {/* <!-- Imagen --> */}
          <div class="Prices-image">
            <img
              src="/imgs/img-center.png"
              alt="Imagen barbería y peluquería"
              title="Imagen barbería y peluquería"
            />
          </div>

          {/* <!-- Texto de la derecha--> */}
          <div class="Prices-column">
            <h3>CORTES AVANZADOS</h3>
            <div class="Price-item">
              <span>DECOLORACIÓN</span>
              <span>40€</span>
            </div>
            <div class="Price-item">
              <span>CORTE CON MECHAS</span>
              <span>25€</span>
            </div>
            <div class="Price-item">
              <span>CORTE + TRATAMIENTO</span>
              <span>45€</span>
            </div>
            {/* <!-- Botón de reservas --> */}
            <a href="/reservas" class="Prices-button" title="Reserva tu cita">
              RESERVA TU CITA
            </a>
          </div>
        </div>
      </section>
      {/* FINAL APARTADO PRECIOS */}
    </main>
  );
};

export default Home;
