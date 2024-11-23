import { cn } from "@/lib/utils";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div
      className={cn(
        // Global button styles
        "[&_button:not(.revert,[role])]:bg-[#115931] [&_button:not(.revert,[role])]:text-white hover:[&_button:not(.revert,[role])]:bg-[#004820]",
        // Global link styles
        "[&_a:not(.revert)]:text-[#115931] hover:[&_a:not(.revert)]:underline",
        // Global label styles
        "[&_label]:font-bold"
      )}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
