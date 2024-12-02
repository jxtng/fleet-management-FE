"use client";
import { useState } from "react";
import SignupForm from "@/components/auth/signup-form";
import AuthPageTemplate from "@/components/auth/page-template";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const [transitioningTo, setTransitioningTo] = useState(false);
  const router = useRouter();

  const handleAnimationEnd = (e) => {
    if (transitioningTo) {
      router.push(transitioningTo);
    }
  };

  return (
    <AuthPageTemplate
      title="Signup"
      footer={
        <>
          Already have an account? <Link href="/auth/login">Login</Link>
        </>
      }
      transitioningTo={transitioningTo}
      onAnimationEnd={handleAnimationEnd}
    >
      <SignupForm setTransitioningTo={setTransitioningTo} />
    </AuthPageTemplate>
  );
};

export default Signup;
