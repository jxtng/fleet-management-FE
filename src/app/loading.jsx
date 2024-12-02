import { Loader2 } from "lucide-react";
import React from "react";

const RootLoader = () => {
  return (
    <div className="flex justify-center items-center absolute inset-0 bg-muted animate-pulse">
      <Loader2 className="size-20 animate-spin text-primary" />
    </div>
  );
};

export default RootLoader;
