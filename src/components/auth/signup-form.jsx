"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Lock, Mail, Phone } from "lucide-react";
import { AllInput } from "@/components/auth/auth-form-elements";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import SuccessDialog from "@/components/success-dialog";
import ErrorDialog from "@/components/error-dialog";
import { DialogClose } from "@/components/ui/dialog";
import { z } from "zod";

const inputs = [
  {
    label: "Full Name",
    name: "fullname",
    placeholder: "John Doe",
    icon: <Mail className="w-5 h-5" />,
    required: true,
  },
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
    icon: <Phone className="size-5" />,
    inputClassName: "pl-20",
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

const SignupForm = ({ setTransitioningTo }) => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await handleFormSubmitHelper({
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

  return (
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

      <SuccessDialog
        open={submitStatus?.status == "success"}
        onOpenChange={() => setSubmitStatus(null)}
        title={submitStatus?.data?.message ?? "Registration Successful"}
        description={
          "Your account has been created successfully. You can now login"
        }
        control={
          <div className="flex justify-center grow auth-style">
            <DialogClose
              onClick={() => setTransitioningTo("/auth/login")}
              asChild
            >
              <Button className="button-outline">Proceed to Login</Button>
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
    </form>
  );
};

export default SignupForm;
