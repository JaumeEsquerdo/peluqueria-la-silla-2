import { useEffect } from 'react';
import './AnimatedTitle.css';
import { Link } from 'react-router';
import { useLocation, useNavigate } from "react-router";
import { NavHeader } from "../NavHeader/NavHeader";

const AnimatedTitle = ({ heroImage, title = "LA (2) SILLA" }) => {
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
        
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const hero = document.querySelector('.hero-section');
            const navbar = document.querySelector('.navbar');
            const navbarLogo = document.querySelector('.navbar-logo');

            // Calculamos el progreso del scroll (0 a 1)
            const scrollProgress = Math.min(scrollY / 500, 1);

            // Aplicamos la transformación via CSS custom property
            if (hero) {
                hero.style.setProperty('--scroll-progress', scrollProgress);
            }

            // Toggle clase para navbar fijo
            if (scrollY > 450) {
                navbar?.classList.add('fixed');
                navbarLogo?.classList.add('visible');
            } else {
                navbar?.classList.remove('fixed');
                navbarLogo?.classList.remove('visible');
            }
        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Hero Section con imagen y título */}
            <div className="hero-section">
                <div className="hero-image">
                    <img src="/imgs/cabecera.jpg" alt="Barbería La 2 Silla" title="Barbería La 2 Silla" />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-title-container">
                    <h1 className="hero-title">
                        {title}
                    </h1>
                    <img className="hero-icon"src="/imgs/ico-flecha.png" alt="Ver más" />
                </div>
                    
            </div>

            {/* Navbar con logo pequeño */}
            <nav className="navbar">
                <div>
                    <Link to="/">
                        <img
                            src="/imgs/logo.png"
                            alt="La [2] Silla"
                            title="La [2] Silla"
                            className="Header-logoImage"
                            loading="lazy"
                        />
                    </Link>
                </div>

                <div className="navbar-container">
                    <div className="navbar-logo">
                        <h2>{title}</h2>
                    </div>
                </div>

                <NavHeader goToSection={goToSection} />
            </nav>
        </>
    );
};

export default AnimatedTitle;