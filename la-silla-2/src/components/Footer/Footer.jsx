import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            className="Footer-logo"
            src="/imgs/logo-blanco.png"
            alt="Logo"
            title="Logo"
          />
        </Link>
        <Link
          to="/privacidad"
          title="Ver Privacidad y Condiciones"
          className="Footer-link"
        >
          <p>PRIVACIDAD Y CONDICIONES</p>
        </Link>
        <p className="Footer-text">© 2026 - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
