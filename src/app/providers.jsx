"use client";
import { AuthProvider } from "@/components/auth/auth";

const Providers = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
