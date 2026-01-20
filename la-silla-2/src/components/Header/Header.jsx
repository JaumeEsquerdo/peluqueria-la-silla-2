import "./Header.css";

export const Header = () => {
  return (
    <header className="Header">
      <div>
        <a href="/">
          <img
            src="/imgs/logo.png"
            alt="La [2] Silla"
            title="La [2] Silla"
            className="Header-logoImage"
            loading="lazy"
          />
        </a>
      </div>
      <nav className="Header-nav">
        <ul className="Header-navList">
          <li className="Header-li">
            <a className="Header-navLink" href="#galeria">
              GALERÍA
            </a>
          </li>
          <li className="Header-li">
            <a className="Header-navLink" href="#nosotros">
              NOSOTROS
            </a>
          </li>
          <li className="Header-li">
            <a className="Header-navLink" href="#precios">
              PRECIOS/RESERVAS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
