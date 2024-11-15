"use client";
import TableAction from "@/components/dashboard/table-action";
import DataTable from "@/components/ui/data-table";
import { Edit, Plus } from "lucide-react";
import Link from "next/link";

const MaintenanceLogTable = ({ data }) => {
  return (
    <DataTable
      data={data}
      columnDefs={[
        { th: "Date", key: "date" },
        { th: "Type of Maintenance", key: "typeOfMaintenance" },
        { th: "Description", key: "description" },
        { th: "Cost", key: "cost" },
        { th: "Mileage", key: "mileage" },
        { th: "Maintenance Provider", key: "maintenanceProvider" },
        {
          th: "Invoice",
          td: () => <Link href="#">View Invoice</Link>,
        },
        {
          th: "Action",
          td: ({ row }) => (
            <TableAction
              row={row}
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
                  icon: <Edit className="text-red-400" />,
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
};

export default MaintenanceLogTable;
