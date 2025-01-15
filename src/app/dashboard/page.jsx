import React from "react";

import Image from "next/image";
import Link from "next/link";

const actions = [
  {
    title: "Dashboard",
    image: "/images/dashboard-actions/dashboard-card.png",
    href: "/dashboard/home",
  },
  {
    title: "Fleet Inventory",
    image: "/images/dashboard-actions/fleet-allocation-card.png",
    href: "/dashboard/fleet-inventory",
  },
  {
    title: "Fleet Allocation",
    image: "/images/dashboard-actions/fleet-inventory-card.png",
    href: "/dashboard/fleet-allocation",
  },
  {
    title: "Fleet Maintenance",
    image: "/images/dashboard-actions/fleet-maintenance-card.png",
    href: "/dashboard/fleet-maintenance",
  },
  {
    title: "Fleet Procurement",
    image: "/images/dashboard-actions/fleet-procurement-card.png",
    href: "/dashboard/fleet-procurement",
  },
  {
    title: "Settings",
    image: "/images/dashboard-actions/settings-card.png",
    href: "/dashboard/settings",
  },
];

const DashboardActions = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#75FFD9] to-[#469982]">
      <div className="py-40 px-4 rounded-md border border-background bg-gradient-to-br from-background/90 to-background/10">
        <div className="action-wrapper flex flex-wrap gap-6">
          {actions.map(({ title, image, href }) => (
            <Link
              href={href}
              key={title + href}
              className="action-card w-36 bg-background text-foreground basis-0 grow p-4 flex flex-col gap-2 justify-between items-center rounded-md hover:scale-105 active:scale-100 transition-transform"
            >
              <Image
                src={image}
                width={72.64}
                height={72.64}
                alt={title}
                className="w-20 h-20"
              />
              <h2 className="font-bold text-center">{title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DashboardActions;
