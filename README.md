# LA (2) SILLA - Case Study

### Proyecto web moderno para peluquería local con sistema de reservas online.

[🔗 Ver Demo](https://la-2-silla.vercel.app/) | [📂 Ver Código](https://github.com/JaumeEsquerdo/peluqueria-la-silla-2)

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Native-1572B6?logo=css3)

</div>

---

## PROBLEMA:

Nos encontramos con el caso de una peluquería local en Valencia que perdía clientes potenciales por no tener presencia digital. El dueño nos comenta que el proceso de reserva es 100% telefónico, ya sea vía Whatsapp o por llamada. Adaptándose a las nuevas generaciones y con un target joven, este método de reserva es ineficiente y limitado por el horario comercial haciendo que los potenciales clientes no puedan consultar horarios, servicios ni precios por los diferentes servicios que la peluquería ofrece.

## NUESTRO OBJETIVO:

Crear una web moderna y atractiva que refleje la calidad de los servicios que la peluquería proporciona a sus clientes. Crear apartados donde poder ver resultados de otros clientes, conocer lo que hay detrás del negocio y reservas moderno y sin horarios comerciales

---

## SOLUCIÓN:

Desarrollamos una **Single Page Application** con animaciones fluidas, diseño responsive y sistema de reservas integrado.

### Características Clave

- **Hero animado con scroll parallax** - El título se reduce y posiciona en el navbar al scrollear
- **Sistema de reservas 24/7** - Formulario optimizado con validación en tiempo real
- **100% Responsive** - Mobile-first design que funciona en cualquier dispositivo

---

## STACK UTILIZADO:

```
Frontend:    React 18 + Vite + React Router v6
Estilos:     CSS3 vanilla (sin librerías)
Deployment:  Vercel con CI/CD automático
```

---

## DECISIONES CLAVE PROPUESTAS:

### 1️-Hero Animado con CSS Variables

**El reto:** Animar el título al hacer scroll sin comprometer los 60fps.

**La solución:**

```javascript
// Actualizamos una CSS variable en el scroll
const scrollProgress = Math.min(scrollY / 500, 1);
hero.style.setProperty("--scroll-progress", scrollProgress);
```

```css
/* CSS calcula la transformación en GPU */
.hero-title-container {
  transform: translateY(calc(var(--scroll-progress) * -350px))
    scale(calc(1 - var(--scroll-progress) * 0.65));
  transition: transform 0.05s linear;
}
```

**Resultado:** Animación fluida a 60fps sin afectar el rendimiento.

---

### 2️-Navegación Inteligente Entre Páginas

**El reto:** Al navegar desde `/reservas` a `/#nosotros`, el scroll no funcionaba porque Home aún no estaba renderizado.

**La solución:**

```javascript
const goToSection = (id) => {
  if (location.pathname !== "/") {
    navigate("/");
    // Esperamos 50ms a que React monte el componente
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};
```

**Resultado:** Navegación fluida desde cualquier página a cualquier sección.

---

### 3️-Tipografía Responsive Sin Media Queries

**El reto:** Evitar múltiples breakpoints para tamaños de fuente.

**La solución:**

```css
/* Escala fluido entre 4rem y 13rem según el viewport */
.hero-title {
  font-size: clamp(4rem, 15vw, 13rem);
}

.Prices-body {
  padding: clamp(60px, 8vw, 120px) clamp(30px, 6vw, 120px);
}
```

**Resultado:** Menos código, transiciones más suaves entre tamaños.

---

## INSTALACIÓN DEL PROYECTO:

```bash
# Clonar e instalar
git clone https://github.com/usuario/la2silla.git
cd la2silla
npm install

# Iniciar desarrollo
npm run dev
```

La app estará en `http://localhost:5173`

---

## RESULTADOS:

**Lo que funcionó:**

- Mobile-first approach simplificó el diseño responsive
- Comunicación semanal con el cliente evitó sorpresas
- Animaciones CSS nativas > librerías pesadas (GSAP añadía 50KB)

**Desafíos superados:**

- Balance estética/performance → Eliminamos librerías innecesarias
- Sincronización router + scroll → Aprendimos React Router en profundidad
- Optimización de imágenes → Implementamos WebP + lazy loading

**Próximas mejoras:**

- [ ] Integración con Google Calendar para disponibilidad real-time
- [ ] Dashboard de administración para el cliente
- [ ] PWA para instalación en móvil

---

## EQUIPO:

- **Jaume Esquerdo** - Frontend Developer

  Arquitectura React • Animaciones • Responsive Design • Sistema de Reservas • Optimización • Testing

jaume.esquerdo@hotmail.com | 💼 [LinkedIn](https://www.linkedin.com/in/jaume-esquerdo/)

- **Jaime Nebot** - Frontend Developer

  Arquitectura React • Animaciones • Responsive Design • Sistema de Reservas • Optimización • Testing

jaime.nebot.colom@gmail.com | 💼 [LinkedIn](https://www.linkedin.com/in/jaime-nebot-54132419b/)

---

## ENLACES DEL PROYECTO:

- **Demo en vivo:** [la2silla.vercel.app](https://la-2-silla.vercel.app/)
- **Código fuente:** [github.com/usuario/la2silla](https://github.com/JaumeEsquerdo/peluqueria-la-silla-2)
- **Portfolio Jaime Nebot:** [Portfolio Jaime Nebot Frontend](https://web-jaime-nebot-git-main-jaimes-projects-7e668735.vercel.app/)
- **Portfolio Jaume Esquerdo:** [Portfolio Jaume Esquerdo Frontend](https://portfolio-jaume-esquerdo.vercel.app/)

---

<div align="center">
  <p><strong>Proyecto LA [2] SILLA - 2026</strong></p>
</div>
