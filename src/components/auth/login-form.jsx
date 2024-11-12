"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormDataChange = (e) => {
    setFormData((fd) => ({ ...fd, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Login logic coming soon
    redirect("/dashboard");
  };

  return (
    <form method="post" className="self-stretch" onSubmit={handleFormSubmit}>
      <div className="form-group flex flex-col gap-2 mb-4 font-bold">
        <label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleFormDataChange}
          value={formData.email}
          className="w-full p-1 border-b outline-none border-[#115931] bg-gray-50 rounded-t-lg"
          required
        />
      </div>
      <div className="form-group flex flex-col gap-2 font-bold">
        <label htmlFor="password">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleFormDataChange}
          value={formData.password}
          className="w-full p-1 border-b outline-none border-[#115931] bg-gray-50 rounded-t-lg"
          required
        />
        <Link
          href="#"
          className="self-end font-normal hover:underline text-[#115931]"
        >
          Forgot password?
        </Link>
        <Button
          type="submit"
          className="bg-[#115931] text-white hover:bg-[#004820]"
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
