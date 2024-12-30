"use client";
import DataTable from "@/components/ui/data-table";
import { Edit, Plus, Trash2 } from "lucide-react";

const MaintenanceLogTable = ({ data }) => {
  return (
    <DataTable
      data={data}
      hiddenColumns={["id"]}
      actions={[
        {
          label: "Add Maintenance Record",
          icon: <Plus className="text-green-400" />,
          href: "/dashboard/fleet-maintenance/new",
        },
        {
          label: "Edit Record",
          icon: <Edit className="text-blue-400" />,
        },
        {
          label: "Delete Record",
          icon: <Trash2 className="text-red-400" />,
        },
      ]}
    />
  );
};

export default MaintenanceLogTable;
