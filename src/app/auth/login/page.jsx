import Image from "next/image";
import LoginForm from "@/components/auth/login-form";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="img-area w-1/2 bg-[url(/images/login-bg.svg)] bg-[#11894E]/15 bg-cover"></div>
      <main className="p-12 pb-8 w-1/2 flex flex-col items-center gap-4 font-light">
        <Image
          src="/images/esg-logo.png"
          width={154}
          height={154}
          alt="Enugu State Government Logo"
          className="w-24 h-24"
        />
        <h2 className="font-bold text-lg">Welcome to Enugu State Government</h2>
        <h2 className="text-4xl">Fleet Management System</h2>
        <h1 className="text-[#115931] text-2xl font-extrabold self-start">
          Login
        </h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
