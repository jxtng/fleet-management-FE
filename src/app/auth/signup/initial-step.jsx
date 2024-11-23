import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock, Mail } from "lucide-react";
import { AllInput } from "@/components/auth/auth-form-elements";
import AuthPageTemplate from "@/components/auth/page-template";

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
    <AuthPageTemplate
      title="Signup"
      footer={
        <>
          Already have an account? <Link href="/auth/login">Login</Link>
        </>
      }
      transitioningTo={transitioningTo}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="self-stretch font-normal flex flex-col gap-4">
        <AllInput
          inputs={inputs}
          formData={formData}
          setFormData={setFormData}
        />
        <Button
          type="submit"
          onClick={() => {
            setTransitioningTo(1);
          }}
        >
          Proceed
        </Button>
      </div>
    </AuthPageTemplate>
  );
};

export default SignupInitialStep;
