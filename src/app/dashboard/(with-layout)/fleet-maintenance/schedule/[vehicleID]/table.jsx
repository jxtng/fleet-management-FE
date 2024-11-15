"use client";
import React from "react";
import DataTable from "@/components/ui/data-table";
import {
  AlertTriangle,
  CheckCircle,
  Edit,
  GitCompareArrows,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import TableAction from "@/components/dashboard/table-action";

const MaintenanceScheduleTable = ({ data }) => {
  return (
    <DataTable
      data={data}
      columnDefs={[
        {
          th: "Date & Time",
          key: "dateTime",
        },
        {
          th: "Service Name",
          key: "serviceName",
        },
        {
          th: "Status",
          key: "status",
        },
        {
          th: "",
          td: ({ row }) => (
            <>
              {row.status?.toLowerCase() === "confirmed" ? (
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
                  label: "Schedule a New Service",
                  icon: <Plus className="text-green-400" />,
                  href: "new/",
                },
                {
                  label: "Edit Record",
                  icon: <Edit />,
                },
                {
                  label: "Reschedule Appointment",
                  icon: <GitCompareArrows className="text-orange-400" />,
                },
                {
                  label: "Cancel Schedule",
                  icon: <X className="text-red-400" />,
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

export default MaintenanceScheduleTable;
