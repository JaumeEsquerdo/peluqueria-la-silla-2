import { Footer } from "@/components/Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import "./index.css";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const seen = sessionStorage.getItem("onboardingSeen") === "true";
    const isOnboarding = location.pathname === "/onboarding";

    if (!seen && !isOnboarding) {
      navigate("onboarding", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
