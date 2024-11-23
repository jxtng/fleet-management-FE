import { useState, Fragment } from "react";
import { AllInput } from "@/components/auth/auth-form-elements";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  RefreshCw,
  X,
  XCircle,
} from "lucide-react";
import Link from "next/link";

const formPartOne = {
  "Section 1: Organization Details": [
    {
      type: "flex",
      items: [
        {
          label: "Name of Organization",
          placeholder: "Enter Organization Name",
          name: "organizationName",
        },
        {
          label: "Organization Type",
          placeholder: "Select Organization Type",
          name: "organizationType",
          type: "select",
          options: [
            "Logistics",
            "Transportation Company",
            "Government Agency",
            "Courier Service",
            "Ride-Hailing Business",
          ],
        },
      ],
    },
    {
      type: "flex",
      items: [
        {
          label: "Organization Email",
          placeholder: "Enter Organization Email",
          name: "organizationEmail",
          type: "email",
        },
        {
          label: "Organization Phone Number",
          placeholder: "Enter Phone Number",
          name: "organizationPhone",
          type: "tel",
        },
      ],
    },
    {
      label: "Upload Organization Logo",
      type: "file",
      name: "organizationLogo",
      fileTypes: ["image/png", "image/jpeg", "image/jpg"],
    },
  ],
};

const formPartTwo = {
  "Section 2: Admin/Manager Details": [
    {
      type: "flex",
      items: [
        {
          label: "Admin Full Name",
          placeholder: "Enter Admin Full Name",
          name: "adminName",
        },
        {
          label: "Admin Role/Postion",
          placeholder: "Admin Role/Position",
          name: "adminRole",
        },
      ],
    },
    {
      type: "flex",
      items: [
        {
          label: "Admin Email",
          placeholder: "Enter Admin Email",
          name: "adminEmail",
          type: "email",
        },
        {
          label: "Admin Phone Number",
          placeholder: "Enter Phone Number",
          name: "adminPhone",
          type: "tel",
        },
      ],
    },
  ],
};

const formPartThree = {
  "Section 3: Fleet Details": [
    {
      type: "flex",
      items: [
        {
          label: "Number of Vehicles",
          placeholder: "Enter Number of Vehicles",
          name: "vehicleCount",
          type: "number",
        },
        {
          label: "Vehicle Category",
          placeholder: "Select Vehicle Category",
          name: "vehicleCategory",
          type: "select",
          options: ["Buses", "Passenger Cars", "Motorcycles", "Truck"],
        },
      ],
    },
    {
      type: "flex",
      items: [
        {
          label: "Operational Areas",
          placeholder: "Example: “Lagos, Enugu, Abuja”",
          name: "operationalAreas",
        },
        {
          name: "hidden1",
          type: "hidden",
        },
      ],
    },
  ],
};

const forms = [formPartOne, formPartTwo, formPartThree];

const SignupSteps = ({
  formData,
  setFormData,
  transitioningTo,
  setTransitioningTo,
  step,
  setStep,
  handleFormSubmit,
}) => {
  const [submitting, setSubmitting] = useState(false);

  const stepControls = (
    <div className="flex gap-4 flex-wrap *:grow">
      <Button
        onClick={() => {
          setTransitioningTo(step > 0 ? step - 1 : 0);
        }}
        variant="outline"
        className="group"
        disabled={submitting}
      >
        <ChevronLeft className="group-hover:-translate-x-1.5 transition" /> Go
        back
      </Button>
      <Button
        onClick={async () => {
          if (step >= forms.length) {
            setSubmitting(true);
            const success = await handleFormSubmit();

            setSubmitting(false);
            setTransitioningTo(success ? "success" : "error");
            return;
          }

          setTransitioningTo(step + 1);
        }}
        className="group"
        disabled={submitting}
      >
        {step >= forms.length ? "Signup" : "Click to Proceed"}
        {submitting ? (
          <Loader2 className="animate-spin" />
        ) : (
          <ChevronRight className="group-hover:translate-x-1.5 transition" />
        )}
      </Button>
    </div>
  );

  return (
    <div
      className={cn(
        "bg-[#F3FCFC] w-full animate-in slide-in-from-top-10 fade-in duration-700 fill-mode-both",
        transitioningTo === 0 && "animate-out slide-out-to-top-10 fade-out"
      )}
      onAnimationEnd={() => {
        if (transitioningTo === 0) {
          setTransitioningTo(false);
          setStep(0);
        }
      }}
    >
      <div className=" flex flex-col justify-center gap-4 container p-8 max-w-screen-lg ">
        <h2 className="font-bold text-center mt-4 text-secondary text-xl">
          Pineapp
        </h2>
        <h1 className="font-light text-center text-[#115931] text-3xl">
          Fleet Management System
        </h1>
        <div className="timeline flex items-center">
          {[1, 2, 3].map((count, index, arr) => (
            <Fragment key={count}>
              <div
                className={cn(
                  "count-number duration-1000 delay-700 bg-white w-10 h-10 flex justify-center items-center rounded-full border-2 border-neutral-500",
                  step == count && "bg-green-500 text-white",
                  step >= count && "border-green-500",
                  step == "error" &&
                    count >= forms.length &&
                    "border-red-500 text-white"
                )}
              >
                {step > count ||
                step == "success" ||
                (step == "error" && count < forms.length) ? (
                  <Check className="text-green-500" />
                ) : step == "error" ? (
                  <X className="text-red-500" />
                ) : (
                  count
                )}
              </div>
              {index != arr.length - 1 && (
                <div className={cn("line h-0.5 grow relative bg-neutral-500")}>
                  <div
                    className={cn(
                      "passed absolute top-0 left-0 h-full bg-green-500 duration-1000 transition-all",
                      step <= count ? "w-0" : "w-full",
                      step == "error" &&
                        count >= forms.length - 1 &&
                        "relative before:absolute before:inset-0  before:h-[2px] before:bg-gradient-to-l before:from-red-500 before:transition-all"
                    )}
                  ></div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {forms.map((formPart, index) => {
          return (
            <div className="form" key={index}>
              {step == index + 1 && (
                <div
                  className={cn(
                    "animate-in slide-in-from-bottom-10 fade-in duration-300 delay-500 fill-mode-both",
                    transitioningTo &&
                      "animate-out slide-out-to-bottom-10 fade-out "
                  )}
                  onAnimationEnd={() => {
                    if (transitioningTo) {
                      setStep(transitioningTo);
                      setTransitioningTo(false);
                    }
                  }}
                >
                  <FormSet
                    fieldsets={formPart}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  {stepControls}
                </div>
              )}
            </div>
          );
        })}

        {step == "success" && (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000 flex flex-col items-center gap-4">
            <CheckCircle2 size={128} className="text-green-500" />
            <h2 className="text-green-800 text-2xl">
              Congratulations Enugu State Government
            </h2>
            <p>
              You have been successfully onboarded on the PineApp Fleet
              Management System
            </p>
            <Link href="/auth/login">
              <Button>Proceed to login</Button>
            </Link>
          </div>
        )}
        {step == "error" && (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000 flex flex-col items-center gap-4">
            <XCircle size={128} className="text-red-500" />
            <h2 className="text-red-800 text-2xl">An Error Occurred</h2>
            <p>
              Something went wrong. Please try again. If error persists, please
              contact our support team support@pineapp.com
            </p>
            <Link href="/auth/signup">
              <Button
                variant="outline"
                className="revert border-red-500 text-red-500 hover:bg-red-500/10 group"
              >
                <RefreshCw className="group-hover:animate-[spin_0.7s]" />
                Retry
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const FormSet = ({ fieldsets = {}, formData, setFormData }) => {
  return (
    <>
      {Object.entries(fieldsets).map(([legend, inputs]) => {
        return (
          <fieldset key={legend} className="flex flex-col gap-4 my-8">
            <legend className="text-red-500 font-bold my-4">{legend}</legend>
            <AllInput
              inputs={inputs}
              formData={formData}
              setFormData={setFormData}
            />
          </fieldset>
        );
      })}
    </>
  );
};

export default SignupSteps;
