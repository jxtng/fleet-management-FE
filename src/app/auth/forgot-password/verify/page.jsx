"use client";
import { useState } from "react";
import AuthPageTemplate from "@/components/auth/page-template";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OTPInput from "@/components/ui/otp-input";
import { Button } from "@/components/ui/button";

const VerifyOTP = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // OTP submit logic coming soon
    router.push("/auth/reset-password");
  };

  return (
    <AuthPageTemplate
      title="Verify OTP"
      footer={
        <>
          Dont have an account? <Link href="/auth/signup">Signup</Link>
        </>
      }
    >
      <form
        onSubmit={handleOTPSubmit}
        className="flex flex-col items-center self-stretch gap-4"
      >
        <label htmlFor="otp">Enter Reset Code</label>
        <OTPInput length={6} value={value} setValue={setValue} />
        <Button
          type="submit"
          disabled={value.length < 6}
          className="self-stretch"
        >
          Submit
        </Button>
      </form>
    </AuthPageTemplate>
  );
};

export default VerifyOTP;
