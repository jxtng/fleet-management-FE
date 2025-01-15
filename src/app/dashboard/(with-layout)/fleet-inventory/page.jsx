"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import DataTable from "@/components/ui/data-table";
import { Edit, Eye, History, Share, Trash2, UserCircle } from "lucide-react";

import Link from "next/link";
import InfoCard from "@/components/dashboard/info-card";
import TableAction from "@/components/dashboard/table-action";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";
import DeleteAction from "./delete-action";

const actions = [
  {
    label: "View vehicle details",
    icon: <Eye className="text-green-400" />,
    href: (row) => `/dashboard/fleet-inventory/vehicle/${row._id}`,
  },
  {
    label: "View vehicle history",
    icon: <History className="text-blue-400" />,
  },
  {
    label: "Edit vehicle details",
    icon: <Edit />,
    href: (row) => `/dashboard/fleet-inventory/vehicle/${row._id}/edit`,
  },
  { label: "Share vehicle details", icon: <Share /> },
  {
    label: "Delete vehicle",
    icon: <Trash2 className="text-red-400" />,
    ActionComponent: DeleteAction,
  },
];

const FleetInventory = () => {
  const [filterData, setFilterData] = useState({});
  const { data, isLoading, error } = useSWR("/vehicle/vehicle-record", (url) =>
    axiosInstance.get(url).then((response) => response?.data?.data)
  );

  let columns;
  // if (data) {
  // columns = Object.keys(data[0] ?? {})
  //   .filter(
  //     (key) =>
  //       !(key.startsWith("_") || ["updatedAt", "createdAt"].includes(key))
  //   )
  //   .map((key) => {
  //     return {
  //       header: (
  //         <div className="capitalize">{key.replace(/_([a-z])/g, " $1")}</div>
  //       ),
  //       accessorKey: key,
  //       cell: ({ row }) => (
  //         <>
  //           {key.includes("img") || key.includes("image") ? (
  //             <img src={row[key]} alt="Image" className="mx-auto max-w-16" />
  //           ) : (
  //             row.getValue(key)
  //           )}
  //         </>
  //       ),
  //     };
  //   });
  // }

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          <Button asChild>
            <Link href="/dashboard/fleet-inventory/new/">
              Add/Document New Vehicle
            </Link>
          </Button>
        </div>
      </div>

      <VehicleSummary />

      <DataTable
        caption="Vehicle Inventory"
        data={data}
        isLoading={isLoading}
        error={error}
        actions={actions}
        cardFields={["vehicle_model", "engine_number", "createdAt"]}
      />
    </div>
  );
};

export default FleetInventory;
