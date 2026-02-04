import { Footer } from "@/components/Footer/Footer";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router";
import { useContext, useEffect } from "react";
import "./index.css";
import { OnboardingContext } from "./context/OnboardingContext";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationType = useNavigationType();
  /* te dice cómo has llegado a esa ruta: 
  - POP	refresh / URL directa / back-forward
  - PUSH	click en <Link> o navigate()
  - REPLACE	navigate con { replace: true }
  */
  const { seen } = useContext(OnboardingContext);

  useEffect(() => {
    const isHome = location.pathname === "/";
    const isOnboarding = location.pathname === "/onboarding";

    //  SOLO si fue recarga (POP) y estamos en home
    /* "POP" => Refresh / abrir URL / back-forward */
    if (navigationType === "POP" && !seen && isHome && !isOnboarding) {
      navigate("/onboarding", { replace: true });
    }
  }, [location.pathname, seen, navigate, navigationType]);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
