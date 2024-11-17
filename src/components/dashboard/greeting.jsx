import { DoorOpen, LayoutDashboard, LogOut } from "lucide-react";
import React from "react";

const Greeting = () => {
  return (
    <div className="greeting flex justify-between text-secondary">
      <h2 className="text-2xl flex items-center gap-2 text">
        <LayoutDashboard className="fill-current" />
        Good moring, <span className="italic">John Doe</span>
        👋
      </h2>
      <DoorOpen size={32} />
    </div>
  );
};

export default Greeting;
