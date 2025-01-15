"use client";
import DataTable from "@/components/ui/data-table";
import { Edit, Share, Eye, Trash2 } from "lucide-react";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";
import DeleteAction from "./delete-action";

const ProcurementHistoryTable = () => {
  const { data, error, isLoading } = useSWR("/procurement", (url) =>
    axiosInstance.get(url).then((response) => response.data.data)
  );

  return (
    <>
      <DataTable
        data={data}
        error={error}
        isLoading={isLoading}
        actions={[
          {
            label: "View Vehicle Procurement ",
            icon: <Eye className="text-green-400" />,
            href: (row) =>
              `/dashboard/fleet-procurement/procurement/${row?._id}`,
          },
          {
            label: "Edit Procurement  Details",
            icon: <Edit />,
            href: (row) =>
              `/dashboard/fleet-procurement/procurement/${row?._id}/edit`,
          },
          { label: "Share Procurement Details", icon: <Share /> },
          {
            label: "Delete Procurement Info",
            icon: <Trash2 className="text-red-400" />,
            ActionComponent: DeleteAction,
          },
        ]}
      />
    </>
  );
};

export default ProcurementHistoryTable;
