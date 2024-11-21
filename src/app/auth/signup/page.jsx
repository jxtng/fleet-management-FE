"use client";
import { useState } from "react";
import SignupInitialStep from "./initial-step";
import FleetManagementBg from "@/components/fleet-management-bg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SignupSteps from "./steps";
import { useSearchParams, useRouter, redirect } from "next/navigation";

const Login = () => {
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

export default Login;
