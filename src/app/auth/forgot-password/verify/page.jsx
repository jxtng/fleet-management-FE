import AuthPageTemplate from "@/components/auth/page-template";
import ResetOTPForm from "@/components/auth/reset-otp-form";
import FleetManagementBg from "@/components/fleet-management-bg";
import Image from "next/image";
import Link from "next/link";

const VerifyOTP = () => {
  return (
    <AuthPageTemplate
      title="Verify OTP"
      footer={
        <>
          Dont have an account? <Link href="/auth/signup">Signup</Link>
        </>
      }
    >
      <ResetOTPForm />
    </AuthPageTemplate>
  );
};

export default VerifyOTP;
