import { useState } from "react";
export const NavHeader = ({ goToSection }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="Header-nav">
      <button
        className="Hamburguesa-contenedor"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className={`Hamburguesa ${navOpen ? "isOpen" : ""}`}></span>
      </button>

      <ul className={`Header-navList ${navOpen ? "isOpen" : ""}`}>
        <li className="Header-li">
          <button
            className="Header-navLink"
            onClick={() => goToSection("galeria")}
          >
            GALERÍA
          </button>
        </li>
        <li className="Header-li">
          <button
            className="Header-navLink"
            onClick={() => goToSection("nosotros")}
          >
            NOSOTROS
          </button>
        </li>
        <li className="Header-li">
          <button
            className="Header-navLink"
            onClick={() => goToSection("precios")}
          >
            PRECIOS/RESERVAS
          </button>
        </li>
      </ul>
    </nav>
  );
};
