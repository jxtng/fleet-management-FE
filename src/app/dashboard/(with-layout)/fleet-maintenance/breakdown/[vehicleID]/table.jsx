"use client";
import React from "react";
import DataTable from "@/components/ui/data-table";
import { AlertTriangle, CheckCircle, Edit, Flag, Trash2 } from "lucide-react";
import TableAction from "@/components/dashboard/table-action";

const MaintenanceBreakdownTable = ({ data }) => {
  return (
    <DataTable
      data={data}
      columnDefs={[
        {
          th: "Date & Time",
          key: "dateTime",
        },
        {
          th: "Incident ID",
          key: "incidentID",
        },
        {
          th: "Description",
          key: "description",
        },
        {
          th: "Location",
          key: "location",
        },
        {
          th: "Status",
          key: "status",
        },
        {
          th: "",
          td: ({ row }) => (
            <>
              {row.status?.toLowerCase() === "resolved" ? (
                <CheckCircle className="text-green-400" size={18} />
              ) : (
                <AlertTriangle className="text-amber-400" size={18} />
              )}
            </>
          ),
        },
        {
          th: "Action",
          td: ({ row }) => (
            <TableAction
              row={row}
              actions={[
                {
                  label: "Report Breakdown",
                  icon: <Flag className="text-green-400" />,
                  href: "new/",
                },
                {
                  label: "Edit Record",
                  icon: <Edit />,
                },
                {
                  label: "Delete Record",
                  icon: <Trash2 className="text-red-400" />,
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
};

export default MaintenanceBreakdownTable;
