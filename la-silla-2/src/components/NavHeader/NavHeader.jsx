import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export const NavHeader = ({ goToSection }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="Header-nav">
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
            PRECIOS
          </button>
        </li>
        <li className="Header-li">
          <Link className="Header-navLink Header-navLink--Link" to="/reservas">
            RESERVAR
          </Link>
        </li>
      </ul>
    </nav>
  );
};
