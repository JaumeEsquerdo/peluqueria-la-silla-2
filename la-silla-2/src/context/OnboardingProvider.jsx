import { useState } from "react";
import { OnboardingContext } from "./OnboardingContext";

export const OnboarindProvider = ({ children }) => {
  const [seen, setSeen] = useState(false);

  return (
    <OnboardingContext.Provider value={{ seen, setSeen }}>
      {children}
    </OnboardingContext.Provider>
  );
};
