import { useEffect, useState } from "react";

/**
 * useGallerySwap
 * Hook para mostrar una galería de imágenes de manera circular.
 *
 * - Muestra siempre `VISIBLE` imágenes.
 * - Desplaza `swapCount` imágenes cada `interval` milisegundos.
 * - Hace que las imágenes roten en bucle de izquierda a derecha.
 *
 * @param {string[]} images - Array de URLs de imágenes
 * @param {number} interval - Tiempo en ms entre cada movimiento
 * @param {number} swapCount - Cuántas imágenes se mueven en cada paso
 * @returns {string[]} - Array de imágenes visibles en la galería
 */
export const useGallerySwap = (images, interval = 3500, swapCount = 2) => {
  const VISIBLE = 6; // Cuántas imágenes mostrar siempre
  const [offset, setOffset] = useState(0); // Desde qué índice del array mostramos

  // Configuramos el intervalo que actualizará el offset
  useEffect(() => {
    // Si hay pocas imágenes, no hace falta rotar
    if (images.length <= VISIBLE) return;

    const id = setInterval(() => {
      // Incrementamos offset por swapCount y usamos módulo para que sea circular
      setOffset((o) => (o + swapCount) % images.length);
    }, interval);

    // Limpiamos el intervalo al desmontar
    return () => clearInterval(id);
  }, [images.length, interval, swapCount]);

  // Construimos el array de imágenes visibles
  const visibleImages = [];
  for (let i = 0; i < VISIBLE; i++) {
    // Tomamos las imágenes desde offset, usando módulo para rotación circular
    visibleImages.push(images[(offset + i) % images.length]);
  }

  return visibleImages;
};
