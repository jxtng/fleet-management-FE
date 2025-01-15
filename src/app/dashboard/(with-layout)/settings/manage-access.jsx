import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Edit, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import AddUserCard from "./add-user-card";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";
import { ErrorLoader, FullLoader } from "@/components/loader";

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

const availablePermissions = [
  "dashboard",
  "inventory",
  "allocation",
  "maintenance",
  "procurement",
  "settings",
];

const ManageAccess = () => {
  const [userMode, setUserMode] = useState(false);
  const { data, isLoading, error, mutate } = useSWR("/settings", (url) =>
    axiosInstance.get(url).then((response) => response.data.data)
  );

  if (isLoading) {
    return (
      <Card className="relative h-64">
        <FullLoader
          label="Fetching Users"
          className="bg-transparent [&_svg]:size-12"
        />
      </Card>
    );
  }
  if (error) {
    return (
      <Card className="relative h-64">
        <ErrorLoader
          title="Error Fetching Users Data"
          className="bg-transparent [&_svg]:size-12"
        />
      </Card>
    );
  }

  if (userMode) {
    return <AddUserCard setUserMode={setUserMode} mutate={mutate} />;
  }

  return (
    <Card>
      <CardHeader className="text-secondary">Manage Access</CardHeader>
      <CardContent>
        {data.map((user) => (
          <div key={user._id}>
            <AccessCard {...user} />
            <hr className="bg-gray-500 h-[3px] my-4" />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" onClick={() => setUserMode(true)}>
          <Plus />
          Add New User
        </Button>
      </CardFooter>
    </Card>
  );
};

const AccessCard = ({ fullname, email, role, permissions = [] }) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <div className="heading">
          <div className="name">{fullname}</div>
          <div className="email text-sm text-gray-500">{email}</div>
        </div>
        <div className="role text-xs mx-auto px-2 py-1 rounded-md bg-green-600 text-white">
          {role}
        </div>
        <Edit size={16} className="ml-auto" />
        <Trash2 size={16} className="text-red-500" />
      </div>

      <div className="permissions flex gap-2 my-4">
        {availablePermissions.map((permission, index) => (
          <div
            key={permission + index}
            className="permission flex flex-col gap-2 capitalize text-sm"
          >
            <label htmlFor={permission}>{permission}</label>
            <Switch
              id={permission}
              defaultChecked={permissions.includes(permission)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAccess;
