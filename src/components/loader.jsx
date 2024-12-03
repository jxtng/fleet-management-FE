import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";

export const FullLoader = ({ label, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center absolute inset-0 bg-muted",
        !label && "animate-pulse",
        className
      )}
    >
      <div className={cn("svg-wrapper", label && "animate-pulse")}>
        <Loader2 className={cn("size-20 animate-spin text-primary")} />
      </div>
      {label && (
        <p className="text-center">
          {label.split("").map((char, index, arr) => (
            <span
              key={char + index}
              className="inline-block animate-out fade-out-15 direction-alternate repeat-infinite"
              style={{
                animationDelay: `${index * 0.05}s`,
                animationDuration: `${arr.length * 0.05}s`,
              }}
            >
              {char == " " ? <>&nbsp;</> : char}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export const ErrorLoader = ({ title = "", label, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center absolute inset-0 bg-muted animate-pulse",
        className
      )}
    >
      <p className="font-bold">{title}</p>
      <p className="text-center">{label}</p>
    </div>
  );
};
