import { Galeria } from "../../components/Galeria/Galeria";
import  AnimatedTitle from "../../components/TituloAnimado/AnimatedTitle";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Nosotros } from "../Nosotros/Nosotros";
import { Servicios } from "../Servicios/Servicios";
/* aquí está puesto 'motion' para q detecte framer motion el elmento a animar, y como está envuelto el Outlet con 'AnimatePresence' puede animar la entrada y salida de la página */

const Home = () => {
  return (
    <motion.main className="Home-body" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
      <section className="Home-hero">
          <AnimatedTitle />
      </section>
      <Galeria id="galeria" />
      <Nosotros />
      <Servicios />
    </motion.main>
  );
};

export default Home;
