import { axiosInstance } from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext();

export const useAuth = () => {
  return useContext(Auth);
};

export const useIsAuthenticated = () => {
  const { authState } = useContext(Auth);
  return authState !== null;
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState("loading");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let newAuthState = null;

    axiosInstance
      .get("/organizations/get-organization", {
        signal: controller.signal,
      })
      .then((response) => {
        let storedAuthData = JSON.parse(localStorage.getItem("_auth"));
        newAuthState = { ...storedAuthData, organization: response.data?.data };
        console.log("initialized auth", newAuthState);
      })
      .catch((error) => {
        console.log("Error initializing auth", error, newAuthState);
        if (error.response && error.response.status !== 401) newAuthState = {};
      })
      .finally(() => {
        setAuthState(newAuthState);
      });

    return () => controller.abort();
  }, [refresh]);

  if (authState === "loading") {
    return (
      <div className="flex justify-center items-center absolute inset-0 bg-muted animate-pulse">
        <Loader2 className="size-20 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Auth.Provider
      value={{ authState, refreshAuthState: () => setRefresh(!refresh) }}
    >
      {children}
    </Auth.Provider>
  );
};

export const AuthProtected = ({ children, fallback = "/auth/login" }) => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated === false) {
    redirect(fallback);
  }

  return <>{children}</>;
};
