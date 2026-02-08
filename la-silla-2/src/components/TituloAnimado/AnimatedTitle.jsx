import { useEffect } from 'react';
import './AnimatedTitle.css';

const AnimatedTitle = ({ heroImage, title = "LA (2) SILLA" }) => {
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
                    <img
                        src="/imgs/cabecera.jpg"
                        alt="Barbería La 2 Silla"
                    />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-title-container">
                    <h1 className="hero-title">
                        {title}
                    </h1>
                </div>
            </div>

            {/* Navbar con logo pequeño */}
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <h2>{title}</h2>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AnimatedTitle;