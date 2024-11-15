"use client";
import TableAction from "@/components/dashboard/table-action";
import DataTable from "@/components/ui/data-table";
import { Edit, Plus } from "lucide-react";
import Link from "next/link";

const MaintainanceLogTable = ({ data }) => {
  return (
    <DataTable
      selectable
      data={data}
      columnDefs={[
        {
          th: "SN",
          td: ({ index }) => <>{(index > 9 ? "" : "0") + (index + 1)}</>,
        },
        { th: "Date", key: "date" },
        { th: "Type of Maintainance", key: "typeOfMaintainance" },
        { th: "Description", key: "description" },
        { th: "Cost", key: "cost" },
        { th: "Mileage", key: "mileage" },
        { th: "Maintainance Provider", key: "maintainanceProvider" },
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
                  href: "/dashboard/fleet-maintainance/new",
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

export default MaintainanceLogTable;
