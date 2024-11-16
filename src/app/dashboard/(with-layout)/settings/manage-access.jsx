import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Edit, Plus, Trash2 } from "lucide-react";
import React from "react";

const userPermissionsMockData = [
  {
    id: 1,
    name: "Fedrick Agu",
    email: "fedrickagu@gmail.com",
    role: "Admin",
    permissions: {
      dashboard: true,
      inventory: true,
      allocation: true,
      maintenance: true,
      procurement: true,
      settings: true,
    },
    actions: {
      edit: true,
      delete: false,
    },
  },
  {
    id: 2,
    name: "Anees Ansari",
    email: "aneesansari@gmail.com",
    role: "Sub Admin",
    permissions: {
      dashboard: true,
      inventory: false,
      allocation: true,
      maintenance: false,
      procurement: true,
      settings: false,
    },
    actions: {
      edit: true,
      delete: true,
    },
  },
];

const ManageAccess = () => {
  return (
    <Card>
      <CardHeader className="text-secondary">Manage Access</CardHeader>
      <CardContent>
        {userPermissionsMockData.map((user) => (
          <div key={user.id}>
            <AccessCard {...user} />
            <hr className="bg-gray-500 h-[3px] my-4" />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">
          <Plus />
          Add New User
        </Button>
      </CardFooter>
    </Card>
  );
};

const AccessCard = ({ name, email, role, permissions }) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <div className="heading">
          <div className="name">{name}</div>
          <div className="email text-sm text-gray-500">{email}</div>
        </div>
        <div className="role text-xs mx-auto px-2 py-1 rounded-md bg-green-600 text-white">
          {role}
        </div>
        <Edit size={16} className="ml-auto" />
        <Trash2 size={16} className="text-red-500" />
      </div>

      <div className="permissions flex gap-2 my-4">
        {Object.entries(permissions).map(([key, value]) => (
          <div
            key={key}
            className="permission flex flex-col gap-2 capitalize text-sm"
          >
            <label htmlFor={key}>{key}</label>
            <Switch id={key} defaultChecked={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAccess;
