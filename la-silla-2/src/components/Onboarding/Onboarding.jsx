import { useNavigate } from "react-router";

export const Onboarding = () => {
  const navigate = useNavigate();
  const handleFinish = () => {
    sessionStorage.setItem("onboardingSeen", "true");
    navigate("/", { replace: true });
  };

  return <div onClick={handleFinish}>Onboarding</div>;
};
