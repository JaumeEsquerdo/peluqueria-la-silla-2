import { Navigate } from "react-router";

/* ruta protegida para que le salga o no el onboarding inicial */

export const ProtectedOnboarding = ({ children }) => {
  const seen = sessionStorage.getItem("onboardingSeen") === "true";

  //si ya lo ha visto, no vuelve a cambiar al onboarding
  if (seen) return <Navigate to="/" replace />;

  return children;
};
