"use client";
import React from "react";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const store = createStore({
  authName: "__fleet_manager_auth",
  authType: "cookie",
  cookieSecure: false,
  cookieDomain: process.env.NEXT_PUBLIC_DOMAIN ?? "/",
});

const Providers = ({ children }) => {
  return <AuthProvider store={store}>{children}</AuthProvider>;
};

export default Providers;
