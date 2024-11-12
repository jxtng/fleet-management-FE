import Button from "@/components/button";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
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
    <div className="card rounded-md bg-gray-100 border p-8">
      {userPermissionsMockData.map((user) => (
        <div key={user.id}>
          <AccessCard {...user} />
          <hr className="bg-gray-500 h-[3px] my-4" />
        </div>
      ))}
      <Button className="ml-auto">
        <IconPlus />
        Add New User
      </Button>
    </div>
  );
};

const AccessCard = ({ name, email, role, permissions }) => {
  return (
    <div>
      <div className="flex items-start justify-between gap-2">
        <div className="heading">
          <div className="name text-lg">{name}</div>
          <div className="email text-gray-500">{email}</div>
        </div>
        <div className="role mx-auto px-2 py-1 rounded-md bg-green-600 text-white">
          {role}
        </div>
        <IconEdit size={16} className="ml-auto" />
        <IconTrash size={16} className="text-red-500" />
      </div>

      <div className="permissions flex gap-2 my-4">
        {Object.entries(permissions).map(([key, value]) => (
          <div key={key} className="permission flex flex-col gap-2">
            <p className="capitalize text-secondary">{key}</p>
            <div className="permissions flex gap-4">
              <input
                className="appearance-none relative rounded-full w-10 h-5 bg-background/50 ring ring-background/50 checked:bg-primary checked:ring-primary before:absolute  before:top-0 before:left-0 before:w-5 before:h-5 before:bg-background  checked:before:bg-white checked:before:translate-x-full before:rounded-full before:transition before:duration-300 before:ease-in-out"
                type="checkbox"
                defaultChecked={value}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAccess;
