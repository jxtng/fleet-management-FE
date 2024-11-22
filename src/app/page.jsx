"use client";
import { useEffect, useState } from "react";
import FleetManagementBg from "@/components/fleet-management-bg";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Homepage = () => {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  // useEffect(() => {
  //   const timerID = setTimeout(() => router.push("/auth/login"), 1000);
  //   return () => clearTimeout(timerID);
  // });

  return (
    <div
      className={cn(
        "py-4 flex flex-col items-center justify-center h-screen gap-4 bg-[#11894E]/15 duration-1000",
        transitioning
          ? "animate-out fade-out fill-mode-forwards"
          : "animate-in fade-in"
      )}
      onAnimationEnd={() => {
        if (transitioning) {
          router.push("/auth/login");
        } else {
          setTimeout(() => setTransitioning(true), 1000);
        }
      }}
    >
      <h2 className="text-lg font-bold text-secondary">PineApp</h2>
      <h1 className="text-3xl text-green-800">Fleet Management System</h1>
      <FleetManagementBg className="bg-transparent h-full" />
    </div>
  );
};

export default Homepage;
