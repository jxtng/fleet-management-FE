import React, { useState } from "react";
import ConfirmDialog from "../confirm-dialog";
import { Button } from "../ui/button";
import SuccessDialog from "../success-dialog";
import { axiosInstance } from "@/lib/axios";
import { useAuth } from "./auth";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutDialog = ({ children, ...props }) => {
  const [logoutStatus, setLogoutStatus] = useState(null);
  const router = useRouter();

  const handleLogout = async () => {
    setLogoutStatus("loggingout");
    try {
      const response = await axiosInstance.post("/auth/logout");
      setLogoutStatus("success");
      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    } catch (error) {
      setLogoutStatus("error");
    }
  };

  return (
    <>
      <ConfirmDialog
        // open={logoutStatus != "loggedout"}
        title="Are you sure you want to proceed?"
        description="This will log you out from the dashboard"
        confirm={
          <Button
            variant="destructive"
            onClick={handleLogout}
            disabled={logoutStatus == "loggingout"}
          >
            {logoutStatus == "loggingout" ? (
              <>
                Logging out...
                <Loader2 className="animate-spin" />
              </>
            ) : (
              "Logout"
            )}
          </Button>
        }
        cancel={
          <Button
            variant="outline"
            onClick={() => setLogoutStatus(null)}
            disabled={logoutStatus == "loggingout"}
          >
            Cancel
          </Button>
        }
        {...props}
      >
        {children}
      </ConfirmDialog>
      <SuccessDialog
        title="You have Successfully logged out"
        description="Redirecting back to login..."
        open={logoutStatus == "success"}
      />
    </>
  );
};

export default LogoutDialog;
