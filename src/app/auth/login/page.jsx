import Image from "next/image";
import LoginForm from "@/components/auth/login-form";
import FleetManagementBg from "@/components/fleet-management-bg";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="img-wrapper relative w-1/2 overflow-hidden">
        <FleetManagementBg className="w-full h-full" />
      </div>
      <main className="animate-in slide-in-from-right-8 fade-in duration-700 p-12 pb-8 w-1/2 flex flex-col items-center gap-4 font-light">
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
          Login
        </h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
