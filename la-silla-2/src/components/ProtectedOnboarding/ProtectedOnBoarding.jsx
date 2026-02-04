import { Navigate } from "react-router";
import { useContext } from "react";
import { OnboardingContext } from "../../context/OnboardingContext";

export const ProtectedOnboarding = ({ children }) => {
  const { seen } = useContext(OnboardingContext);

  if (seen) return <Navigate to="/" replace />;
  return children;
};
