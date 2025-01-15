"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { AllInput } from "./auth-form-elements";
import SuccessDialog from "@/components/success-dialog";

const inputs = [
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
const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Reset password logic coming soon

    if (formData.password === formData.confirmPassword && formData.password) {
      setSuccess(true);
    }
  };

  return (
    <form
      method="post"
      className="self-stretch font-normal [&_label]:font-bold flex flex-col gap-4"
      onSubmit={handleFormSubmit}
    >
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />
      {success ? (
        <SuccessDialog
          open
          title="Password Reset Successful!"
          description="You can now login with your new password"
          control={
            <Button
              className="mx-auto bg-[#115931] text-white hover:bg-[#004820]"
              asChild
            >
              <Link href="/auth/login">Proceed to login</Link>
            </Button>
          }
        >
          <Button type="submit">Submit</Button>
        </SuccessDialog>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </form>
  );
};

export default ResetPasswordForm;
