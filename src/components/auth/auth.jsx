import { axiosInstance } from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import FleetManagementBg from "../fleet-management-bg";
import { cn } from "@/lib/utils";

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
      <div className="overflow-hidden py-4 flex flex-col items-center justify-center text-center animate-in fade-in h-screen gap-4 bg-[#11894E]/15 duration-1000">
        <h2 className="text-lg font-bold text-secondary">PineApp</h2>
        <h1 className="text-3xl text-green-800">Fleet Management System</h1>
        <div className="flex gap-2 text-secondary">
          <Loader2 className="text-green-800 animate-spin" /> Initializing App
        </div>
        <FleetManagementBg className="bg-transparent h-full animate-pulse" />
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
