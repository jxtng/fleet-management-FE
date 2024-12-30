"use client";
import { AuthProtected } from "@/components/auth/auth";
import React from "react";

const GeneralDashboardLayout = ({ children }) => {
  return children;
  return <AuthProtected>{children}</AuthProtected>;
};

export default GeneralDashboardLayout;
