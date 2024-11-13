"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ActiveTrailIcon from "@/icons/active-trail";
import {
  UserCircle,
  LayoutDashboard,
  BookUp2,
  Users,
  Construction,
  CircleDollarSign,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard/home",
    icon: <LayoutDashboard className="w-5 h-5 fill-current" />,
  },
  {
    name: "Fleet Inventory",
    href: "/dashboard/fleet-inventory",
    icon: <BookUp2 className="w-5 h-5" />,
  },
  {
    name: "Fleet Allocation",
    href: "/dashboard/fleet-allocation",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Fleet Maintainance",
    href: "/dashboard/fleet-maintainance",
    icon: <Construction className="w-5 h-5" />,
  },
  {
    name: "Fleet Procurement",
    href: "/dashboard/fleet-procurement",
    icon: <CircleDollarSign className="w-5 h-5" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="w-5 h-5" />,
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
                pathname.startsWith(href)
                  ? "bg-background text-primary"
                  : "hover:bg-muted-foreground hover:text-muted"
              }`}
            >
              <span className="z-20 flex items-center gap-2">
                {icon}
                {name}
              </span>
              {pathname.startsWith(href) && (
                <ActiveTrailIcon className="text-background w-auto h-[304%] absolute top-1/2 -right-px -translate-y-1/2 z-10" />
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
      <UserCircle className="default-avatar  w-12 h-12 rounded-full border-2 border-foreground p-0.5" />
      <div className="profile-text">
        <p className="name">John Doe</p>
        <p className="role opacity-70">Resident Transport Officer</p>
      </div>
    </div>
  );
};

export default SideNav;
