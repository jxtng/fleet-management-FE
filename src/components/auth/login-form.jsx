"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { Loader2, Lock, Mail } from "lucide-react";
import { AllInput } from "./auth-form-elements";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import SuccessDialog from "../success-dialog";
import ErrorDialog from "../error-dialog";

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
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "********",
    icon: <Lock className="w-5 h-5" />,
    required: true,
  },
];
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let formStatus = await handleFormSubmitHelper({
      formSchema: createZodSchema(inputs),
      formData,
      setSubmitStatus,
      endPoint: "/auth/login",
      axiosConfig: {
        headers: {},
      },
    });

    console.log(formStatus?.response);

    if (formStatus?.status == "success") {
      try {
        // authDispatch({ type: "LOGIN", payload: formStatus?.data?.data?.[0] });
        setTimeout(() => redirect("/dashboard"), 2000);
      } catch (err) {
        setSubmitStatus({
          status: "error",
          error: `Error Loging in: ${err.message}`,
        });
      }
    }
  };

  return (
    <div className="self-stretch ">
      <form
        method="post"
        className="self-stretch font-normal flex flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <AllInput
          inputs={inputs}
          formData={formData}
          setFormData={setFormData}
          errors={submitStatus?.status == "form_error" && submitStatus?.error}
        />
        <Link href="/auth/forgot-password" className="self-end text-sm">
          Forgot password?
        </Link>
        <Button type="submit" disabled={submitStatus?.status == "submitting"}>
          Sign In
          {submitStatus?.status == "submitting" && (
            <Loader2 className="size-4 animate-spin" />
          )}
        </Button>
      </form>
      <SuccessDialog
        open={submitStatus?.status == "success"}
        onOpenChange={() => setSubmitStatus(null)}
        title={submitStatus?.data?.message ?? "Login Successful"}
        description={
          "Redirecting to dashboard... If it takes too long, use the button below"
        }
        control={
          <div className="auth-style flex justify-center gap-2 grow">
            <Button asChild>
              <Link href="/dashboard">Go to dashboard</Link>
            </Button>
          </div>
        }
      />
      <ErrorDialog
        open={submitStatus?.status == "error"}
        onOpenChange={() => setSubmitStatus(null)}
        description={submitStatus?.error}
      />
    </div>
  );
};

export default LoginForm;
