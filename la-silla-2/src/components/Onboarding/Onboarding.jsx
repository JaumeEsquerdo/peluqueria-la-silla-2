import { useNavigate } from "react-router";
import { OnboardingContext } from "../../context/OnboardingContext";
import { useContext } from "react";

export const Onboarding = () => {
  const { setSeen } = useContext(OnboardingContext);
  const navigate = useNavigate();

  const handleFinish = () => {
    setSeen(true);
    navigate("/", { replace: true });
  };

  return <div onClick={handleFinish}>Onboarding</div>;
};
