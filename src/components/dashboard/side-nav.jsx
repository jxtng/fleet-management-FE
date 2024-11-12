"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import WindowIcon from "@/icons/window";
import BookIcon from "@/icons/book";
import ActiveTrailIcon from "@/icons/active-trail";
import UsersIcon from "@/icons/users";
import UserIcon from "@/icons/user";
import TruckDriverIcon from "@/icons/truck-driver";
import DollarCoinIcon from "@/icons/dollar-coin";
import SettingsIcon from "@/icons/settings";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard/home",
    icon: <WindowIcon className="" />,
  },
  {
    name: "Fleet Inventory",
    href: "/dashboard/fleet-inventory",
    icon: <BookIcon className="" />,
  },
  {
    name: "Fleet Allocation",
    href: "/dashboard/fleet-allocation",
    icon: <UsersIcon className="" />,
  },
  {
    name: "Fleet Maintainance",
    href: "/dashboard/fleet-maintainance",
    icon: <TruckDriverIcon className="" />,
  },
  {
    name: "Fleet Procurement",
    href: "/dashboard/fleet-procurement",
    icon: <DollarCoinIcon className="" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <SettingsIcon className="" />,
  },
];

const SideNav = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ProfileCard />

      <p className="opacity-70 uppercase my-4 text-xs pl-2">Main menu</p>

      <ul>
        {links.map(({ name, href, icon }) => (
          <li key={name + href}>
            <Link
              href={href}
              className={`group relative flex items-center gap-2 px-3 py-2 my-1 rounded-s-3xl transition-colors ${
                pathname == href
                  ? "bg-background text-primary"
                  : "hover:bg-background/80 hover:text-background"
              }`}
            >
              <span className="z-20 flex items-center gap-2">
                {icon}
                {name}
              </span>
              {pathname == href && (
                <ActiveTrailIcon className="text-background w-auto h-[304%] absolute top-1/2 right-0 -translate-y-1/2 z-10" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ProfileCard = () => {
  return (
    <div className="profile-card flex items-center gap-3 m-5 ml-0">
      <UserIcon className="default-avatar w-12 h-12 rounded-full border-2 border-foreground p-0.5" />
      <div className="profile-text">
        <p className="name">John Doe</p>
        <p className="role opacity-70">Resident Transport Officer</p>
      </div>
    </div>
  );
};

export default SideNav;
