"use client";
import { useState } from "react";
import SignupInitialStep from "./initial-step";
import SignupSteps from "./steps";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [transitioningTo, setTransitioningTo] = useState(false);
  const [step, setStep] = useState(0);

  const handleFormSubmit = async () => {
    // Signup submission logic coming soon...
    await new Promise((r) => setTimeout(r, 1000));
    return true;
  };

  const props = {
    formData,
    setFormData,
    transitioningTo,
    setTransitioningTo,
    step,
    setStep,
  };

  return (
    <div className="flex min-h-screen">
      {step == 0 ? (
        <SignupInitialStep {...props} />
      ) : (
        <SignupSteps {...props} handleFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Signup;
