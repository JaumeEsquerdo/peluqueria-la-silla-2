import { useGallerySwap } from "../../hooks/useGallerySwap";
import "./galeria.css";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/imgs/corte-1.png",
  "/imgs/corte-2.png",
  "/imgs/corte-3.png",
  "/imgs/corte-4.png",
  "/imgs/corte-5.png",
  "/imgs/corte-6.png",
  "/imgs/corte-7.png",
  "/imgs/corte-8.png",
  "/imgs/corte-9.png",
  "/imgs/corte-10.png",
];
export const Galeria = () => {
  const visibleImages = useGallerySwap(images, 4000, 2);

  const imgVariants = {
    animate: { transition: { duration: 0.8, ease: "easeOut" } },
    exit: { transition: { duration: 0.8, ease: "easeIn" } },
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "var(--bg-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="GaleriaSection">
        <header className="GaleriaHeader">
          <div className="GaleriaHeader-div">
            <h3 className="GaleriaHeader-h3">NUESTROS CORTES</h3>
          </div>
          <div className="GaleriaHeader-div GaleriaHeader-div--derecha ">
            <h3 className="GaleriaHeader-h3">ESTILO PROPIO</h3>
          </div>
        </header>

        <div className="GaleriaContent">
          <div className="GaleriaIzq">
            <img src="/imgs/pelu-1.png" alt="" className="GaleriaIzq-img" />
            <div className="GaleriaContent-textoDiv">
              <p className="GaleriaContent-texto">
                EN LA SILLA 2 CUIDAMOS CADA CORTE COMO PARTE DE TU IDENTIDAD.
              </p>
              <p className="GaleriaContent-texto">
                TRABAJO PRECISO, TRATO CERCANO Y UN ESPACIO PENSADO PARA
                SENTIRTE CÓMODO.
              </p>
              <p className="GaleriaContent-texto">
                UN ESPACIO CON ESTILO Y CRITERIO PARA ENCONTRAR EL CORTE QUE
                MEJOR TE QUEDA.{" "}
              </p>
            </div>
          </div>

          <div className="GaleriaGrid">
            {/* layout hace que Framer Motion anime la posición y tamaño automáticamente cuando el grid cambia */}
            <AnimatePresence>
              {visibleImages.map((src) => (
                <motion.div
                  key={src}
                  variants={imgVariants}
                  animate="animate"
                  exit="exit"
                  layout
                  className="Galeria-imgDiv"
                >
                  <img
                    src={src}
                    alt="imágenes de la peluquería"
                    className="Galeria-img"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <h2 className="Galeria-titulo">GALERÍA</h2>
      </div>
    </div>
  );
};
