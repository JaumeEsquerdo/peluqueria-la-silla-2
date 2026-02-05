import { Footer } from "@/components/Footer/Footer";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router";
import { useEffect } from "react";
import "./index.css";
import { AnimatePresence } from "framer-motion";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationType = useNavigationType();
  /* 'navigationType' => te dice cómo has llegado a esa ruta: 
  - POP	refresh / URL directa / back-forward (refresh TOTAL)
  - PUSH	click en <Link> o navigate()
  - REPLACE	navigate con { replace: true }
  */
  const isOnboarding = location.pathname === "/onboarding";

  /* useEffect para que volver a recargar el Onboarding cumpliendo condición de que recargue página desde Home */
  useEffect(() => {
    const isHome = location.pathname === "/";

    //  SOLO si fue recarga (POP) y estamos en home
    /* "POP" => Refresh / abrir URL / back-forward */
    if (navigationType === "POP" && isHome) {
      navigate("/onboarding", { replace: true });
    }
  }, [location.pathname, navigate, navigationType]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
      {!isOnboarding && <Footer />}
    </>
  );
}

export default Layout;
