"use client";
import { useState } from "react";
import LogoutDialog from "@/components/auth/logout-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Greeting from "@/components/dashboard/greeting";
import { LogOut, SettingsIcon, User } from "lucide-react";
import MyProfile from "./my-profile";
import ManageAccess from "./manage-access";
import { useAuth } from "@/components/auth/auth";

const Settings = () => {
  const [activeLinkIndex, setActiveLink] = useState(0);
  const { authState } = useAuth();

  const navLinks = [
    { name: "My profile", icon: <User />, component: <MyProfile /> },
    {
      name: "Logout",
      icon: <LogOut />,
      component: <LogoutCard />,
    },
  ];

  if (authState.role === "manager") {
    navLinks.splice(1, 0, {
      name: "Manage access",
      icon: <SettingsIcon />,
      component: <ManageAccess />,
    });
  }

  return (
    <div>
      <Greeting />

      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
        <nav className="settings-nav w-[clamp(200px,30%,250px)] shrink-0">
          <ul className="flex flex-col gap-2 border border-primary bg-primary/5 rounded px-4 py-4">
            {navLinks.map(({ name, icon }, index) => (
              <Button
                key={name + index}
                variant={activeLinkIndex == index ? "default" : "outline"}
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

const LogoutCard = () => {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl mb-4 text-bold text-center text-secondary">
          Log Out
        </h1>
      </CardHeader>
      <CardContent>
        <p className="mb-4 whitespace-pre-wrap">
          Taking a break? Your session will time out after a while, but your
          account and info are always safe here. See you soon!
        </p>
      </CardContent>

      <CardFooter className="justify-between">
        <Button variant="outline">Cancel</Button>
        <LogoutDialog>
          <Button>
            Log Out
            <LogOut />
          </Button>
        </LogoutDialog>
      </CardFooter>
    </Card>
  );
};

export default Settings;
