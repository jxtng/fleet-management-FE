import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const Auth = createContext();

export const useAuth = () => {
  return useContext(Auth);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);
  const [init, setInit] = useState(true);

  useEffect(() => {
    if (init) {
      authDispatch({ type: "LOGIN" });
      setInit(false);
    }
  }, []);

  const authDispatch = ({ type, payload }) => {
    switch (type) {
      case "LOGIN": {
        if (payload) {
          localStorage.setItem("authData", JSON.stringify(payload));
        }
        let localPayload = JSON.parse(localStorage.getItem("authData"));
        setAuthState(localPayload);
        break;
      }
      case "LOGOUT":
        setAuthState(null);
        break;
    }
  };

  if (init) {
    return (
      <div className="flex justify-center items-center absolute inset-0 bg-muted animate-pulse">
        <Loader2 className="size-20 animate-spin" />
      </div>
    );
  }

  return (
    <Auth.Provider value={{ authState, authDispatch }}>
      {children}
    </Auth.Provider>
  );
};

export const AuthProtected = ({ children, fallback = "/auth/login" }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const localAuthData = localStorage.getItem("authData");
    setIsAuthenticated(!!localAuthData);
  });

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center absolute inset-0 bg-muted animate-pulse">
        <Loader2 className="size-20 animate-spin" />
      </div>
    );
  }

  if (isAuthenticated === false) {
    redirect(fallback);
  }

  return <>{children}</>;
};
