import React from "react";
import { twMerge } from "tailwind-merge";

const Button = React.forwardRef(
  ({ children, className, variant = "primary", ...props }, ref) => {
    const variantStyles = {
      primary: "bg-primary text-foreground",
      outline: "border-2 border-primary text-primary",
    };

    return (
      <button
        className={twMerge(
          "flex justify-center items-center gap-2 p-2 rounded-md hover:scale-105 active:scale-100 transition-transform",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
