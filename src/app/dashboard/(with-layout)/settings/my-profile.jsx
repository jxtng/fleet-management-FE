import Button from "@/components/button";
import { Edit, User } from "lucide-react";
import React from "react";

const MyProfile = () => {
  return (
    <div className="card rounded-md bg-gray-100 border p-8">
      <h1 className="text-lg mb-4">Personal Information</h1>
      <ProfilePreview />
      <div className="form-group flex flex-col gap-1 my-4">
        <label htmlFor="name">Name: </label>
        <input
          className="p-2 border border-gray-700 rounded-md w-full bg-grap-50"
          type="text"
          name="name"
          id="name"
          value="John Doe"
          disabled
        />
      </div>
      <div className="form-group flex flex-col gap-1 my-4">
        <label htmlFor="email">Email: </label>
        <input
          className="p-2 border border-gray-700 rounded-md w-full bg-grap-50"
          type="text"
          name="email"
          id="email"
          value="johndoe@gmail.com"
          disabled
        />
      </div>
      <div className="form-group flex flex-col gap-1 my-4">
        <label htmlFor="role">Role: </label>
        <input
          className="p-2 border border-gray-700 rounded-md w-full bg-grap-50"
          type="text"
          name="role"
          id="role"
          value="Resident Transport Officer"
          disabled
        />
      </div>
      <Button className="ml-auto">
        <Edit />
        Edit Details
      </Button>
    </div>
  );
};

const ProfilePreview = () => {
  return (
    <div className="profile-preview flex gap-4 items-center my-4">
      <div className="img-wrapper">
        <User className="w-24 h-24 border-2 border-black rounded-full p-1" />
      </div>
      <div className="profile-info">
        <p className="text-lg">John Doe</p>
        <p className="text-gray-700">Resident Transport Officer</p>
      </div>
    </div>
  );
};

export default MyProfile;
