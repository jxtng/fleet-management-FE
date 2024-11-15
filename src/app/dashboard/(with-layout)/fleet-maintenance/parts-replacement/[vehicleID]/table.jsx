"use client";
import TableAction from "@/components/dashboard/table-action";
import DataTable from "@/components/ui/data-table";
import { Edit, Eye, Share, Trash2 } from "lucide-react";
import React from "react";

const PartsReplacementTable = ({ data }) => {
  return (
    <DataTable
      data={data}
      columnDefs={[
        { th: "Part Name/ Description", key: "partName" },
        { th: "Replacement Date", key: "replacementDate" },
        { th: "Mileage/ Odometer Reading(Km)", key: "mileage" },
        { th: "Part Number", key: "partNumber" },
        { th: "Reason for Replacement", key: "reason" },
        {
          th: "Action",
          td: () => (
            <TableAction
              actions={[
                {
                  label: "View Report Details",
                  icon: <Eye className="text-green-400" />,
                },
                { label: "Edit Report Details", icon: <Edit /> },
                { label: "Share Report Details", icon: <Share /> },
                {
                  label: "Delete Report Info ",
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

export default PartsReplacementTable;
