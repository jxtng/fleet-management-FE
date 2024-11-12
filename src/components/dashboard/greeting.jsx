import DoorExitIcon from "@/icons/door-exit";
import { LayoutDashboard } from "lucide-react";
import React from "react";

const Greeting = () => {
  return (
    <div className="greeting flex justify-between text-secondary">
      <h2 className="text-2xl flex items-center gap-2 text">
        <LayoutDashboard className="fill-current" />
        Good moring, <span className="italic">John Doe</span>
        👋
      </h2>
      <DoorExitIcon />
    </div>
  );
};

export default Greeting;
