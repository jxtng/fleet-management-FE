import { axiosInstance } from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext();

export const useAuth = () => {
  return useContext(Auth);
};

export const useIsAuthenticated = () => {
  const auth = useContext(Auth);
  return auth !== null;
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    axiosInstance
      // .post("/organizations/create-org", {
      .get("/organizations/get-organization", {
        signal: controller.signal,
      })
      .then((response) => {
        setAuthState(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
        setAuthState(error.response.status === 401 ? null : {});
      });

    return () => controller.abort();
  }, []);

  if (authState === "loading") {
    return (
      <div className="flex justify-center items-center absolute inset-0 bg-muted animate-pulse">
        <Loader2 className="size-20 animate-spin text-primary" />
      </div>
    );
  }

  return <Auth.Provider value={authState}>{children}</Auth.Provider>;
};

export const AuthProtected = ({ children, fallback = "/auth/login" }) => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated === false) {
    redirect(fallback);
  }

  return <>{children}</>;
};
