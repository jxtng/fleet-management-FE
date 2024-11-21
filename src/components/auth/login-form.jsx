"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import { TypeInput } from "@/components/ui/form-elements";
import { AllInput } from "./auth-form-elements";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Login logic coming soon
    redirect("/dashboard");
  };

  return (
    <form
      method="post"
      className="self-stretch font-normal [&_label]:font-bold flex flex-col gap-4"
      onSubmit={handleFormSubmit}
    >
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />
      <Link
        href="#"
        className="self-end text-sm hover:underline text-[#115931]"
      >
        Forgot password?
      </Link>
      <Button
        type="submit"
        className="bg-[#115931] text-white hover:bg-[#004820]"
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
