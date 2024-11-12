"use client";
import { useState } from "react";
import Greeting from "../_components/greeting";
import { Logout, Settings, User } from "lucide-react";
import MyProfile from "./my-profile";
import ManageAccess from "./manage-access";
import LogoutCard from "./logout-card";
import Button from "@/components/button";

const navLinks = [
  { name: "My profile", icon: <User />, component: <MyProfile /> },
  {
    name: "Manage access",
    icon: <Settings />,
    component: <ManageAccess />,
  },
  {
    name: "Logout",
    icon: <Logout />,
    component: <LogoutCard />,
  },
];

const Settings = () => {
  const [activeLinkIndex, setActiveLink] = useState(0);
  return (
    <div>
      <Greeting />

      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
        <nav className="settings-nav w-[250px] shrink-0">
          <ul className="flex flex-col gap-2 border border-primary bg-primary/5 rounded px-4 py-4">
            {navLinks.map(({ name, icon }, index) => (
              <Button
                key={name + index}
                variant={activeLinkIndex == index ? "primary" : "outline"}
                className={`justify-start`}
                onClick={() => setActiveLink(index)}
              >
                {icon}
                {name}
              </Button>
            ))}
          </ul>
        </nav>

        <div className="grow">{navLinks[activeLinkIndex].component}</div>
      </div>
    </div>
  );
};

export default Settings;
