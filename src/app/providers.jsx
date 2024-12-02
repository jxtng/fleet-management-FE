"use client";
import React from "react";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const store = createStore({
  authName: "__fleet_manager_auth",
  authType: "cookie",
  cookieSecure: window.location.protocol === "https:",
  cookieDomain: window.location.hostname,
});

const Providers = ({ children }) => {
  return <AuthProvider store={store}>{children}</AuthProvider>;
};

export default Providers;
