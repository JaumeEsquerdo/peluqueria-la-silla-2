import { useEffect } from "react";

export const useHandleScroll = ({ titleRef, containerRef }) => {
  useEffect(() => {
    /* Aquí obtenemos los elementos reales del DOM: */
    const title = titleRef.current;
    const container = containerRef.current;

    /* return si es mobile */
    if (window.innerWidth < 900) return;

    if (!title || !container) return;

    const handleScroll = () => {
      /* container.offsetTop: Distancia desde el inicio de la página hasta donde empieza la sección. */
      /* container.offsetHeight: Altura total de la sección */
      /* containerBottom: inicio + altura -> la posición exacta donde termina la sección.*/
      const containerBottom = container.offsetTop + container.offsetHeight;

      /* Si la mitad de la pantalla ya pasó el final de la sección… */
      if (window.scrollY + window.innerHeight / 2 > containerBottom) {
        title.style.position = "absolute";
        title.style.top = container.offsetHeight - 200 + "px";
        /*se pone cerca del final de la sección, pero 200px antes. */
      } else {
        title.style.position = "fixed";
        title.style.top = "42%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [titleRef, containerRef]);
};
