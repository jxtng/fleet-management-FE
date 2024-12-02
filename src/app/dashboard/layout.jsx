import NextAuth from "@auth-kit/next";
import React from "react";

const GeneralDashboardLayout = ({ children }) => {
  // return <NextAuth fallbackPath="/auth/login">{children}</NextAuth>;
  return <>{children}</>;
};

export default GeneralDashboardLayout;
