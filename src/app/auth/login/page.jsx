"use client";
import LoginForm from "@/components/auth/login-form";
import Link from "next/link";
import AuthPageTemplate from "@/components/auth/page-template";
import { useIsAuthenticated } from "@/components/auth/auth";
import { redirect } from "next/navigation";

const Login = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <AuthPageTemplate
      title="Login"
      footer={
        <p>
          Dont have an account?{" "}
          <Link href="/auth/signup" className="text-green-800 hover:underline">
            Signup
          </Link>
        </p>
      }
    >
      <LoginForm />
    </AuthPageTemplate>
  );
};

export default Login;
