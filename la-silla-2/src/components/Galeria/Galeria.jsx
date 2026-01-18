import { useGallerySwap } from "../../hooks/useGallerySwap";
import "./galeria.css";

const images = [
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
  "/imgs/img-peluqueria.jpg",
];
export const Galeria = () => {
  const visibleImages = useGallerySwap(images, 3500, 2);
  return (
    <div className="GaleriaSection">
      <div className="GaleriaGrid">
        {visibleImages.map((src, i) => (
          <div key={i} className="Galeria-imgDiv">
            <img src={src} alt="" className="Galeria-img" />
          </div>
        ))}
      </div>
    </div>
  );
};
