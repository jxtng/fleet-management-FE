import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Lock, Mail } from "lucide-react";
import { AllInput } from "@/components/auth/auth-form-elements";
import { cn } from "@/lib/utils";
import FleetManagementBg from "@/components/fleet-management-bg";

const inputs = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "fleetmanager@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    required: true,
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "tel",
    placeholder: "7012345678",
    icon: (
      <div>
        <svg
          width={70}
          height={23}
          viewBox="0 0 70 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="Frame 1">
            <rect id="rect1" y={3} width={10} height={18} fill="#008751" />
            <rect id="rect2" x={10} y={3} width={10} height={18} fill="white" />
            <rect
              id="rect3"
              x={20}
              y={3}
              width={10}
              height={18}
              fill="#008751"
            />
            <text
              id={234}
              fill="currentColor"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontSize={14}
              letterSpacing="0em"
            >
              <tspan x={33} y={17.3936}>
                {"+234"}
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    ),
    inputClassName: "pl-20",
    pattern: "\\d{10}",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "********",
    icon: <Lock className="w-5 h-5" />,
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "********",
    icon: <Lock className="w-5 h-5" />,
    required: true,
  },
];

const SignupInitialStep = ({
  formData,
  setFormData,
  transitioningTo,
  setTransitioningTo,
  step,
  setStep,
}) => {
  const handleAnimationEnd = (e) => {
    if (transitioningTo && step === 0) {
      setTransitioningTo(false);
      setStep(1);
    }
  };

  return (
    <div className="min-h-screen">
      <div
        className={cn(
          "duration-1000 img-wrapper overflow-hidden fixed top-0 left-0 bottom-0 right-1/2",
          transitioningTo
            ? "animate-out slide-out-to-left-10 fade-out fill-mode-forwards"
            : "animate-in slide-in-from-left-10 fade-in fill-mode-forwards"
        )}
        onAnimationEnd={handleAnimationEnd}
      >
        <FleetManagementBg className={cn("w-full h-full")} />
      </div>
      <main
        className={cn(
          "animate-in slide-in-from-right-10 fade-in duration-1000 p-12 pb-8 flex flex-col items-center gap-4 absolute top-0 left-1/2 right-0",
          transitioningTo
            ? "animate-out slide-out-to-right-10 fade-out fill-mode-forwards"
            : "animate-in slide-in-from-right-10 fade-in fill-mode-forwards"
        )}
        onAnimationEnd={handleAnimationEnd}
      >
        <Image
          src="/images/fleet-management-logo.svg"
          width={151.29}
          height={151.29}
          alt="Fleet Management Logo"
          className="w-32 h-32"
        />
        <h2 className="font-bold text-lg">Welcome</h2>
        <h2 className="text-3xl text-center">Fleet Management System</h2>
        <h1 className="text-[#115931] text-2xl font-extrabold self-start">
          Signup
        </h1>
        <div className="self-stretch font-normal [&_label]:font-bold flex flex-col gap-4">
          <AllInput
            inputs={inputs}
            formData={formData}
            setFormData={setFormData}
          />
          <Button
            type="submit"
            className="bg-[#115931] text-white hover:bg-[#004820]"
            onClick={() => {
              setTransitioningTo(1);
            }}
          >
            Proceed
          </Button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              href="auth/login"
              className="font-bold hover:underline text-[#115931]"
            >
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignupInitialStep;
