"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, Lock, Mail } from "lucide-react";
import { AllInput } from "@/components/auth/auth-form-elements";
import AuthPageTemplate from "@/components/auth/page-template";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import SuccessDialog from "@/components/success-dialog";
import ErrorDialog from "@/components/error-dialog";
import { DialogClose } from "@/components/ui/dialog";
import { z } from "zod";

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
    placeholder: "07012345678",
    // icon: (
    //   <div>
    //     <svg
    //       width={70}
    //       height={23}
    //       viewBox="0 0 70 23"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //       xmlnsXlink="http://www.w3.org/1999/xlink"
    //     >
    //       <g id="Frame 1">
    //         <rect id="rect1" y={3} width={10} height={18} fill="#008751" />
    //         <rect id="rect2" x={10} y={3} width={10} height={18} fill="white" />
    //         <rect
    //           id="rect3"
    //           x={20}
    //           y={3}
    //           width={10}
    //           height={18}
    //           fill="#008751"
    //         />
    //         {/* <text
    //           id={234}
    //           fill="currentColor"
    //           xmlSpace="preserve"
    //           style={{
    //             whiteSpace: "pre",
    //           }}
    //           fontSize={14}
    //           letterSpacing="0em"
    //         >
    //           <tspan x={33} y={17.3936}>
    //             {"+234"}
    //           </tspan>
    //         </text> */}
    //       </g>
    //     </svg>
    //   </div>
    // ),
    // classes: { input: "pl-20" },
    pattern: "\\d{11}",
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
  transitioningTo,
  setTransitioningTo,
  step,
  setStep,
}) => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    email: "tester@gmail.com",
    phone: "07012345678",
    password: "tester@gmail.com",
    confirmPassword: "tester@gmail.com",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formStatus = await handleFormSubmitHelper({
      formSchema: createZodSchema(inputs).extend({
        phone: z.string().length(11, {
          message:
            "Phone number must be 11 digits and should start with 090, 080, 081, 091, or 070",
        }),
      }),
      formData,
      setSubmitStatus,
      setFormData,
      endPoint: "/auth/register",
      axiosConfig: {
        headers: {},
      },
    });
  };

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
      <form
        onSubmit={handleFormSubmit}
        className="self-stretch font-normal flex flex-col gap-4"
      >
        <AllInput
          inputs={inputs}
          formData={formData}
          setFormData={setFormData}
          errors={submitStatus?.status == "form_error" && submitStatus.error}
        />
        <Button type="submit" disabled={submitStatus?.status === "submitting"}>
          Proceed
          {submitStatus?.status == "submitting" && (
            <Loader2 className="ml-2 w-4 h-4 animate-spin" />
          )}
        </Button>
      </form>

      <SuccessDialog
        open={submitStatus?.status == "success"}
        onOpenChange={() => setSubmitStatus(null)}
        title={submitStatus?.data?.message ?? "Registration Successful"}
        description={
          "You can continue your registration or login with your credentials now"
        }
        control={
          <div className="flex justify-between grow auth-style">
            <Button variant="outline" asChild>
              <Link href="/auth/login">Proceed to Login</Link>
            </Button>
            <DialogClose
              onClick={() => {
                setTransitioningTo(1);
              }}
              asChild
            >
              <Button>Continue</Button>
            </DialogClose>
          </div>
        }
      />
      <ErrorDialog
        open={submitStatus?.status == "error"}
        onOpenChange={() => setSubmitStatus(null)}
        title={submitStatus?.error}
        description={submitStatus?.data?.errors?.[0]?.message}
      />
    </AuthPageTemplate>
  );
};

export default SignupInitialStep;
