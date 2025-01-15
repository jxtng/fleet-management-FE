"use client";
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
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import { z } from "zod";
import { useAuth } from "@/components/auth/auth";
import { redirect } from "next/navigation";

const formPartOne = {
  "Section 1: Organization Details": [
    {
      type: "flex",
      items: [
        {
          label: "Name of Organization",
          placeholder: "Enter Organization Name",
          name: "name",
        },
        {
          label: "Organization Type",
          placeholder: "Select Organization Type",
          name: "type",
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
          name: "email",
          type: "email",
        },
        {
          label: "Organization Phone Number",
          placeholder: "Enter Phone Number",
          name: "phone",
          type: "tel",
        },
      ],
    },
    {
      label: "Upload Organization Logo",
      type: "file",
      name: "logo",
      fileTypes: ["image/png", "image/jpeg", "image/jpg"],
    },
  ].map((field) => ({ ...field, required: true })),
};

const formPartTwo = {
  "Section 2: Admin/Manager Details": [
    {
      type: "flex",
      items: [
        {
          label: "Admin Full Name",
          placeholder: "Enter Admin Full Name",
          name: "adminFullName",
        },
        {
          label: "Admin Role/Postion",
          placeholder: "Admin Role/Position",
          name: "addminRole",
        },
      ],
    },
    {
      type: "flex",
      items: [
        {
          label: "Admin Email",
          placeholder: "Enter Admin Email",
          name: "addminEmail",
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
  ].map((field) => ({ ...field, required: true })),
};

const formPartThree = {
  "Section 3: Fleet Details": [
    {
      type: "flex",
      items: [
        {
          label: "Number of Vehicles",
          placeholder: "Enter Number of Vehicles",
          name: "numberOfVehicles",
          type: "number",
          required: true,
        },
        {
          label: "Vehicle Category",
          placeholder: "Select Vehicle Category",
          name: "vehicleCategories",
          type: "select",
          options: ["Buses", "Passenger Cars", "Motorcycles", "Truck"],
          required: true,
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
          required: true,
        },
        {
          name: "hidden1",
          type: "hidden",
          inputProps: { disabled: true },
        },
      ],
    },
  ],
};

const forms = [formPartOne, formPartTwo, formPartThree];
const formSchemas = forms.map((form) =>
  createZodSchema(Object.values(form).flat())
);

const CreateOrg = ({}) => {
  const [validForms, setValidForms] = useState([]);
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [step, setStep] = useState(1);
  const [transitioningTo, setTransitioningTo] = useState(false);
  const { authState, refreshAuthState } = useAuth();

  if (authState === null) {
    redirect("/auth/login");
  }

  const validateForms = () => {
    const currentValidForms = formSchemas.map(
      (schema) => schema.safeParse(formData).success
    );

    setValidForms(currentValidForms);
    const errorStep = currentValidForms.findIndex((isValid) => !isValid) + 1;
    if (errorStep !== 0 && errorStep !== step) setTransitioningTo(errorStep);
    return currentValidForms;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    validateForms();

    if (step >= forms.length) {
      // If at the last step of submitting form, submit the form
      const formStatus = await handleFormSubmitHelper({
        formSchema: formSchemas.reduce((mergedSchema, schema) =>
          mergedSchema.merge(schema)
        ),
        formData,
        setSubmitStatus,
        setFormData,
        endPoint: "/organizations/create-org",
        onSuccess() {
          refreshAuthState();
        },
        onError(formStatus) {
          // The below block was meant to be handled on the server side
          if (formStatus?.error.includes("duplicate key")) {
            setSubmitStatus({
              ...formStatus,
              error: `Organization with email: ${formData.email} already exists`,
            });
          }
        },
      });

      if (formStatus?.status == "form_error") return;
    }
    setTransitioningTo(step + 1);
  };

  const stepControls = (
    <div className="flex gap-4 flex-wrap *:grow">
      <Button
        onClick={() => {
          validateForms();
          setTransitioningTo(step > 1 ? step - 1 : 1);
        }}
        variant="outline"
        className="group disabled:cursor-not-allowed"
        disabled={submitStatus?.status === "submitting" || step <= 1}
      >
        <ChevronLeft className="group-hover:-translate-x-1.5 transition" /> Go
        back
      </Button>
      <Button
        onClick={handleFormSubmit}
        className="group"
        disabled={submitStatus?.status === "submitting"}
      >
        {step >= forms.length ? "Signup" : "Click to Proceed"}
        {submitStatus?.status === "submitting" ? (
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
        "bg-[#F3FCFC] min-h-screen w-full animate-in slide-in-from-top-10 fade-in duration-700 fill-mode-both",
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
          {[1, 2, 3].map((count, index) => {
            let timelineState = "inactive"; //inactive | active | success | error
            if (count == step) timelineState = "active";
            if (count < step) timelineState = "success";
            if (submitStatus?.status == "error" && count == forms.length)
              timelineState = "error";
            if (submitStatus?.status == "form_error" && !validForms[index])
              timelineState = "error";

            return (
              <Fragment key={count}>
                <div
                  className={cn(
                    "count-number duration-1000 delay-700 bg-white w-10 h-10 flex justify-center items-center rounded-full border-2 border-neutral-500",
                    count == step && "ring ring-green-500",
                    timelineState == "active" && "bg-green-500 text-white",
                    (timelineState == "success" || timelineState == "active") &&
                      "border-green-500",
                    timelineState == "error" && "border-red-500 text-white"
                  )}
                >
                  {timelineState == "error" ? (
                    <X className="text-red-500" />
                  ) : timelineState == "success" ? (
                    <Check className="text-green-500" />
                  ) : (
                    count
                  )}
                </div>
                <div
                  className={cn(
                    "line last:hidden h-0.5 grow relative bg-neutral-500"
                  )}
                >
                  <div
                    className={cn(
                      "passed absolute top-0 left-0 h-full bg-green-500 duration-1000 transition-all",
                      count >= step && timelineState != "error"
                        ? "w-0"
                        : "w-full"
                    )}
                  ></div>
                </div>
              </Fragment>
            );
          })}
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
                    errors={
                      submitStatus?.status == "form_error" &&
                      submitStatus?.error
                    }
                  />
                  {stepControls}
                </div>
              )}
            </div>
          );
        })}

        {submitStatus?.status == "success" && !transitioningTo && (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000 flex flex-col items-center gap-4 text-center">
            <CheckCircle2 size={128} className="text-green-500" />
            <h2 className="text-green-800 text-2xl">
              {submitStatus?.data?.message ?? "Success"}
            </h2>
            <p>
              Your organization <strong>{formData.name}</strong> has been
              created successfully
            </p>
            <Link href="/dashboard">
              <Button>Go to dashboard</Button>
            </Link>
          </div>
        )}
        {submitStatus?.status == "error" && !transitioningTo && (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000 flex flex-col items-center gap-4 text-center">
            <XCircle size={128} className="text-red-500" />
            <h2 className="text-red-800 text-2xl">An Error Occurred</h2>
            <p>
              {submitStatus?.error ??
                `Something went wrong. Please try again. If error persists, please
              contact our support team support@pineapp.com`}
            </p>
            <a href="/auth/create-org">
              <Button
                variant="outline"
                className="revert border-red-500 text-red-500 hover:bg-red-500/10 group"
              >
                <RefreshCw className="group-hover:animate-[spin_0.7s]" />
                Retry
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const FormSet = ({ fieldsets = {}, formData, setFormData, errors }) => {
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
              errors={errors}
            />
          </fieldset>
        );
      })}
    </>
  );
};

export default CreateOrg;
