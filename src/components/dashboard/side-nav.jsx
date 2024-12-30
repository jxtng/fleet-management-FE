"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ActiveTrailIcon from "@/components/dashboard/active-trail";
import {
  UserCircle,
  LayoutDashboard,
  BookUp2,
  Users,
  Construction,
  CircleDollarSign,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { useAuth } from "../auth/auth";

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
    name: "Fleet Maintenance",
    href: "/dashboard/fleet-maintenance",
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
      <OranizationCard />

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
                <ActiveTrailIcon className="pointer-events-none text-background w-auto h-[300%] absolute top-1/2 -right-px -translate-y-1/2 z-10" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ProfileCard = () => {
  const { authState } = useAuth();
  return (
    <div className="profile-card flex items-center gap-3 m-5 ml-0">
      <UserCircle className="default-avatar  w-16 h-16 rounded-full border-2 border-foreground p-0.5" />
      <div className="profile-text capitalize">
        <p className="name">{authState?.fullname ?? "fleet manager"}</p>
        <p className="email normal-case text-xs opacity-90">
          {authState?.email}
        </p>
        <p className="role opacity-70 text-xs">
          Role: <span className="font-bold">{authState?.role ?? "user"}</span>
        </p>
      </div>
    </div>
  );
};

const OranizationCard = () => {
  const { authState } = useAuth();

  return (
    <div className="relative">
      {authState?.organization ? (
        <img
          src={authState.organization?.logoImgUrl}
          className="size-16 mx-auto rounded-full object-cover"
          alt="Organization Logo"
        />
      ) : (
        <Image
          src="/images/fleet-management-logo.svg"
          width={64}
          height={64}
          alt="Fleet Manager Logo"
          className="mx-auto"
        />
      )}
      <h2 className="text-xl text-center text-muted-foreground font-bold">
        {authState?.organization?.name ?? "Fleet Manager"}
      </h2>
      {!authState?.organization && (
        <p>
          <Link
            href="/auth/create-org"
            className="text-green-500 p-2 inline-block text-center hover:underline"
          >
            This is your default organization. Click here to create one
          </Link>
        </p>
      )}
      <hr className="absolute -bottom-2 right-2 w-full h-0.5 bg-muted-foreground border-0" />
    </div>
  );
};

export default SideNav;
