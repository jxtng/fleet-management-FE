import Link from "next/link";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import AuthPageTemplate from "@/components/auth/page-template";

const ForgotPassword = () => {
  return (
    <AuthPageTemplate
      title="Forgot Password"
      footer={
        <p>
          Dont have an account? <Link href="/auth/signup">Signup</Link>
        </p>
      }
    >
      <ForgotPasswordForm />
    </AuthPageTemplate>
  );
};

export default ForgotPassword;
