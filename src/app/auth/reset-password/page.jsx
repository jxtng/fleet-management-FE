import ResetPasswordForm from "@/components/auth/reset-password-form";
import AuthPageTemplate from "@/components/auth/page-template";

const ResetPassword = () => {
  return (
    <AuthPageTemplate title="Reset Password">
      <ResetPasswordForm />
    </AuthPageTemplate>
  );
};

export default ResetPassword;
