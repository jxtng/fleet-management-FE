"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/ui/form-elements";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Edit, User } from "lucide-react";
import { useAuth } from "@/components/auth/auth";

const MyProfile = () => {
  const [profileData, setprofileData] = useState({});
  const { authState } = useAuth();

  return (
    <Card className="">
      <CardHeader>
        <h1 className="text-secondary text-xl mb-2">Personal Information</h1>
        <ProfilePreview />
      </CardHeader>
      <CardContent>
        <div className="profile-form flex flex-col gap-4">
          <AllInput
            inputs={[
              {
                label: "Name",
                name: "name",
                value: authState.fullname ?? "",
                inputProps: {
                  readOnly: true,
                  placeholder: authState.fullname ?? "None",
                },
              },
              {
                label: "Email",
                type: "email",
                name: "email",
                value: authState.email ?? "",
                inputProps: {
                  readOnly: true,
                  placeholder: authState.email ?? "None",
                },
              },
              {
                label: "Role",
                name: "role",
                value: authState.role ?? "",
                inputProps: {
                  readOnly: true,
                  placeholder: authState.role ?? "None",
                },
              },
            ].map((input) => ({
              ...input,
              classes: { input: "placeholder:italic" },
            }))}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">
          <Edit />
          Edit Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProfilePreview = () => {
  return (
    <div className="profile-preview flex gap-4 items-center my-4">
      <div className="img-wrapper">
        <User size={48} className="border-2 border-black rounded-full p-1" />
      </div>
      <div className="profile-info text-secondary">
        <p>John Doe</p>
        <p className="text-sm opacity-70">Resident Transport Officer</p>
      </div>
    </div>
  );
};

export default MyProfile;
