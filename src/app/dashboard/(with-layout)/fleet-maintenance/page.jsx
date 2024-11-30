"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import TableFilter from "@/components/dashboard/table-filter";
import maintenanceMockData from "@/data/maintenanceMockData";
import { Car, Eye, Plus, Share, Trash2 } from "lucide-react";
import InfoCard from "@/components/dashboard/info-card";
import DataTable from "@/components/ui/data-table";
import TableAction from "@/components/dashboard/table-action";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";

const actions = [
  {
    label: "View maintenance",
    icon: <Eye className="text-green-400" />,
    href: (row) => `/dashboard/fleet-maintenance/${row.vehicle_id}`,
  },
  {
    label: "Add new maintenance history",
    icon: <Plus className="text-blue-400" />,
    href: "/dashboard/fleet-maintenance/new",
  },
  { label: "Share maintenance details", icon: <Share /> },
  {
    label: "Delete maintenance info",
    icon: <Trash2 className="text-red-400" />,
  },
];
const FleetMaintenance = () => {
  const [filterData, setFilterData] = useState({});
  const {
    data: response,
    isLoading,
    error,
  } = useSWR("/maintainers/maintenance-record", axiosInstance.get);

  let columnDefs,
    data = [];
  if (response) {
    data = response?.data.data;
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
        <RealTimeInfo title="Fleet Maintenance" />
        <div className="btn-group flex gap-2">
          <Link href="/dashboard/fleet-maintenance/new">
            <Button>Add New Maintenance Record</Button>
          </Link>
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
              title={`Vehicle ID: ${vehicle.vehicle_id}`}
              details={vehicle}
              include={[
                "description_maintenance",
                "type_of_maintenance",
                "date",
              ]}
              className="grow"
              action={<TableAction row={vehicle} actions={actions} />}
              image={
                vehicle.invoice_img_url ? (
                  <img
                    src={vehicle.invoice_img_url}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Car
                    className={`w-full h-full p-2 ${
                      vehicle.status == "ok" ? "text-green-400" : "text-red-400"
                    }`}
                  />
                )
              }
            />
          ))}
        </div>
      ) : (
        <DataTable
          data={data}
          isLoading={isLoading}
          error={error}
          caption="Maintenance History"
          columnDefs={columnDefs}
          actions={actions}
        />
      )}
    </div>
  );
};

export default FleetMaintenance;
