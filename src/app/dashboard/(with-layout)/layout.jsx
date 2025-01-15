import React from "react";
import SideNav from "@/components/dashboard/side-nav";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-foreground min-h-screen flex p-4">
      <SideNav className="text-background shrink-0 font-sans text-sm w-[clamp(240px,_20vw,_350px)]" />
      <ScrollArea
        type="auto"
        className="h-[calc(100vh-2rem)] w-screen rounded-3xl border-none"
        id="main-scroll-area"
      >
        <main className="p-8 basis-4/5 min-h-[calc(100vh-2rem)] grow bg-background text-foreground overflow-auto">
          {children}
        </main>
        <ScrollBar orientation="vertical" />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default DashboardLayout;
