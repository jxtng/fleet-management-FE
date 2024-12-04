"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import TableFilter from "@/components/dashboard/table-filter";
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
          <Button variant="outline">Export Logs (CSV, PDF)</Button>
        </div>
      </div>

      <VehicleSummary />
      <TableFilter onFilterChange={setFilterData} />

      {filterData.displayMode == "cards" ? (
        <div className="cards flex justify-between flex-wrap gap-2">
          {data.map((vehicle) => (
            <InfoCard
              key={vehicle._id}
              details={vehicle}
              include={["vehicle_model", "engine_number", "createdAt"]}
              title={`Vehicle ID: ${vehicle.plate_number}`}
              image={
                vehicle.image ? (
                  <img src={vehicle.image} />
                ) : vehicle.procurement_img ? (
                  <img src={vehicle.procurement_img} />
                ) : (
                  <UserCircle className="w-full h-full p-2 text-muted-foreground" />
                )
              }
              actions={actions}
            />
          ))}
        </div>
      ) : (
        <DataTable
          caption="Vehicle Inventory"
          data={data}
          isLoading={isLoading}
          error={error}
          columnDefs={columnDefs}
          actions={actions}
        />
      )}
    </div>
  );
};

export default FleetInventory;
