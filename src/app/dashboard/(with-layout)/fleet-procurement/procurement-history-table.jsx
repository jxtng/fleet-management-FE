"use client";
import { useState } from "react";
import TableAction from "@/components/dashboard/table-action";
import TableFilter from "@/components/dashboard/table-filter";
import DataTable from "@/components/ui/data-table";
import { Edit, Share, Eye, Trash2 } from "lucide-react";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";
import DeleteAction from "./delete-action";
import { Button } from "@/components/ui/button";

const ProcurementHistoryTable = () => {
  const [filterData, setFilterData] = useState({});
  const { data, error, isLoading } = useSWR("/procurement", (url) =>
    axiosInstance.get(url).then((response) => response.data.data)
  );

  let columnDefs;
  if (data) {
    columnDefs = Object.keys(data[0] ?? {})
      .filter((key) => !key.startsWith("_"))
      .map((key) => {
        return {
          th: (
            <div className="capitalize">{key.replace(/_([a-z])/g, " $1")}</div>
          ),
          td: ({ row }) => (
            <>
              {key.includes("img") || key.includes("image") ? (
                <img src={row[key]} alt="Image" className="mx-auto max-w-16" />
              ) : (
                row[key]
              )}
            </>
          ),
        };
      });
  }

  return (
    <>
      <TableFilter onFilterChange={setFilterData} showDisplayToggle={false} />
      <DataTable
        data={data}
        error={error}
        isLoading={isLoading}
        // columnDefs={[
        //   { th: "Order Number", key: "orderNumber" },
        //   { th: "Type", key: "procurementType" },
        //   { th: "Vendor", key: "vendor" },
        //   { th: "Description", key: "itemDescription" },
        //   { th: "Quantity", key: "quantity" },
        //   { th: "Total Cost", key: "totalCost" },
        //   { th: "Delivery Status", key: "deliveryStatus" },
        //   {
        //     th: "Actions",
        //     td: ({ row }) => (
        //       <TableAction
        //         actions={[
        //           {
        //             label: "View Vehicle Procurement ",
        //             icon: <Eye className="text-green-400" />,
        //           },
        //           { label: "Edit Procurement  Details", icon: <Edit /> },
        //           { label: "Share Procurement Details", icon: <Share /> },
        //           {
        //             label: "Delete Procurement Info ",
        //             icon: <Trash2 className="text-red-400" />,
        //           },
        //         ]}
        //       />
        //     ),
        //   },
        // ]}
        columnDefs={columnDefs}
        actions={[
          {
            label: "View Vehicle Procurement ",
            icon: <Eye className="text-green-400" />,
            href: (row) =>
              `/dashboard/fleet-procurement/procurement/${row?._id}`,
          },
          { label: "Edit Procurement  Details", icon: <Edit /> },
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
