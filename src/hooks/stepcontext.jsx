import { createContext, useContext, useState } from "react";

const StepContext = createContext(null);

export function StepProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
}

export function UseStep() {
  return useContext(StepContext);
}