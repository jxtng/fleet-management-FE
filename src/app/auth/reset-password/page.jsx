import Image from "next/image";
import ResetPasswordForm from "@/components/auth/reset-password-form";
import FleetManagementBg from "@/components/fleet-management-bg";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="min-h-screen relative">
      <div className="img-wrapper absolute top-0 left-0 bottom-0 right-1/2 overflow-hidden animate-in slide-in-from-left-10 fade-in duration-1000">
        <FleetManagementBg className="w-full h-full" />
      </div>
      <main className="p-12 pb-8 absolute top-0 right-0 left-1/2 flex flex-col items-center gap-4 animate-in slide-in-from-right-10 fade-in duration-1000">
        <Image
          src="/images/fleet-management-logo.svg"
          width={151.29}
          height={151.29}
          alt="Fleet Management Logo"
          className="w-32 h-32"
        />
        <h2 className="font-bold text-lg">Welcome</h2>
        <h2 className="text-3xl text-center">Fleet Management System</h2>
        <h1 className="text-[#115931] text-2xl font-extrabold self-start">
          Reset Password
        </h1>
        <ResetPasswordForm />
      </main>
    </div>
  );
};

export default ResetPassword;
