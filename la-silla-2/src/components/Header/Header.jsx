import { NavHeader } from "../NavHeader/NavHeader";
import "./Header.css";
import { useLocation, useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = async (id) => {
    // si no estas en home, ves primero
    if (location.pathname !== "/") {
      // replace: false -> añade "/" al historial, así al volver atrás regresa a "/reservas".
      // Si fuera true, reemplaza "/reservas" por "/" y el botón atrás no volvería a "/reservas".
      navigate("/", { replace: false });
      // esperar un nada a que renderice Home
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      // si ya está en Home navega sin setTimeout
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      <NavHeader goToSection={goToSection} />
    </header>
  );
};
