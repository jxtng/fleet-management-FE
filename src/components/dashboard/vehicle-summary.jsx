"use client";
import { axiosInstance } from "@/lib/axios";
import { ChevronRight, FolderOpenDot, Loader2 } from "lucide-react";
import useSWR from "swr";
import { ErrorLoader, FullLoader } from "../loader";
import { cn } from "@/lib/utils";
import { useState } from "react";

const vehicleSummaries = [
  {
    title: "Total Vehicles",
    count: 100,
    fg: "text-blue-500",
    bg: "bg-blue-500/30",
    key: "totalVehicles",
  },
  {
    title: "Vehicles Available",
    count: 32,
    fg: "text-amber-500",
    bg: "bg-amber-500/30",
    key: "availableVehicles",
  },
  {
    title: "Vehicles Currently Active",
    count: 13,
    fg: "text-green-500",
    bg: "bg-green-500/30",
    key: "activeVehicles",
  },
  {
    title: "Vehicles with Issues",
    count: 13,
    fg: "text-red-500",
    bg: "bg-red-500/30",
    key: "issuesVehicles",
  },
  {
    title: "Vehicles under Maintenace",
    count: 9,
    fg: "text-purple-500",
    bg: "bg-purple-500/30",
    key: "maintenanceVehicles",
  },
];

const fetcher = (url) =>
  axiosInstance.get(url).then((response) => response.data.data);

const VehicleSummary = () => {
  const {
    data: vehiclesData,
    isLoading: vehiclesLoading,
    error: vehiclesError,
  } = useSWR("/vehicle/vehicle-record", fetcher);
  const {
    data: maintenanceData,
    isLoading: maintenanceLoading,
    error: maintenanceError,
  } = useSWR("/vehicle/vehicle-record", fetcher);

  let data = {},
    errors = {};

  if (vehiclesData) {
    data = {
      ...data,
      totalVehicles: vehiclesData.length,
      availableVehicles: vehiclesData.filter((vehicle) =>
        ["Available", "Active", "Reserved"].includes(vehicle.status)
      ).length,
      activeVehicles: vehiclesData.filter((vehicle) =>
        ["active", "scheduled for service", "allocated"].includes(
          vehicle.status?.toLowerCase()
        )
      ).length,
    };
  }

  if (vehiclesError) {
    errors = {
      ...errors,
      totalVehicles: true,
      availableVehicles: true,
      activeVehicles: true,
    };
  }

  if (maintenanceData) {
    data = {
      ...data,
      maintenanceVehicles: maintenanceData.length,
      issuesVehicles: 0,
    };
  }

  if (maintenanceError) {
    errors = { ...errors, underMaintenance: true, issuesVehicles: true };
  }

  return (
    <div className="card-wrapper flex gap-4 flex-wrap justify-center mb-6">
      {vehicleSummaries.map(({ title, count, fg, bg, key }) => (
        <div
          key={title + count}
          className={cn(
            "grid grid-cols-6 items-center w-48 h-28 gap-4 p-4 rounded-md",
            bg,
            fg
          )}
        >
          {errors[key] ? (
            <div className="col-span-6 text-sm text-center animate-pulse">
              Error fetching <span className="font-bold">{title}</span> data
            </div>
          ) : (
            <>
              <FolderOpenDot size={24} />
              <div className="info text-center text-sm col-span-4">
                <p className="count font-bold mb-1">
                  {data[key] !== undefined ? (
                    data[key]
                  ) : (
                    <Loader2 className="size-6 animate-spin mx-auto" />
                  )}
                </p>
                <p className="title">{title}</p>
              </div>
              <ChevronRight className="text-neutral-500 w-6 h-6" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default VehicleSummary;
