import React from "react";
import SideNav from "../../../components/dashboard/side-nav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-foreground min-h-screen flex p-4">
      <SideNav className="text-background basis-1/5 font-sans text-sm" />
      <main className="p-8 rounded-s-3xl basis-4/5 grow  bg-background text-foreground overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
