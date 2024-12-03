"use client";
import React from "react";
import { DoorOpen, LayoutDashboard, LogOut } from "lucide-react";
import LogoutDialog from "../auth/logout-dialog";
import { useAuth } from "../auth/auth";

const Greeting = () => {
  // const auth = useAuth();
  // console.log(auth);

  return (
    <div className="greeting flex justify-between text-secondary">
      <h2 className="text-2xl flex items-center gap-2 text">
        <LayoutDashboard className="fill-current" />
        Good moring, <span className="italic">John Doe</span>
        👋
      </h2>
      <LogoutDialog>
        <button className="group p-2 border rounded-md hover:border-red-500 transition-all">
          <DoorOpen className="size-8 group-hover:text-red-500 transition-all" />
        </button>
      </LogoutDialog>
    </div>
  );
};

export default Greeting;
