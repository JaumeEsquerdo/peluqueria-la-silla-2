// import { useNavigate } from "react-router";
import { OnboardingContext } from "../../context/OnboardingContext";
// import { useContext, useEffect, useState } from "react";
import "./onboarding.css";
import { Onboarding1 } from "./Onboarding1";
import { Onboarding2 } from "./Onboarding2";

export const Onboarding = () => {
  // const [step, setStep] = useState(1);

  // const { setSeen } = useContext(OnboardingContext);
  // const navigate = useNavigate();

  // const handleFinish = () => {
  //   setSeen(true);
  //   navigate("/", { replace: true });
  // };

  // //cambiar de pantalla
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setStep(2);
  //   }, 1500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    // <div className="Onboarding" onClick={handleFinish}>
    //   {step === 1 && <Onboarding1 />}
    //   {step === 2 && <Onboarding2 />}
    // </div>

    <div className="Onboarding">
      <Onboarding1 />
    </div>
  );
};
