import LoginForm from "@/components/auth/login-form";
import Link from "next/link";
import AuthPageTemplate from "@/components/auth/page-template";

const Login = () => {
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
