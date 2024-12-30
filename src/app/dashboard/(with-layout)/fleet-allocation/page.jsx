"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import { ChevronDown, Edit, Eye, History, Share, Trash2 } from "lucide-react";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import DataTable from "@/components/ui/data-table";
import Link from "next/link";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";

const allocationActions = [
  { label: "View recipient full details", icon: <Eye /> },
  { label: "View recipient history", icon: <History /> },
  { label: "Edit recipient details", icon: <Edit /> },
  { label: "Share recipient details", icon: <Share /> },
  { label: "Delete recipient", icon: <Trash2 className="text-red-400" /> },
];

const assignmentActions = allocationActions.map((action) => ({
  ...action,
  label: action.label.replace("recipient", "driver"),
}));

const FleetAllocation = () => {
  const [allocateMode, setAllocateMode] = useState(true);
  const { data, isLoading, error } = useSWR(
    allocateMode ? "/allocation/allocate" : "/assigned/assign-vehicle",
    (url) => axiosInstance.get(url).then((res) => res.data.data)
  );

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          <Link
            href={`/dashboard/fleet-allocation/new${
              allocateMode ? "" : "-assignment"
            }`}
          >
            <Button>{allocateMode ? "Allocate" : "Assign"} Vehicle</Button>
          </Link>
          <Button variant="outline">Export Logs (CSV, PDF)</Button>
        </div>
      </div>

      <VehicleSummary />

      <div className="allocate-or-assign-wrapper flex gap-4 mb-4">
        <Button
          variant="outline"
          className={`${
            !allocateMode && "border-gray-400 text-gray-400"
          } w-full flex justify-center gap-4`}
          onClick={() => setAllocateMode(true)}
        >
          Allocate Vehicle <ChevronDown />
        </Button>

        <Button
          variant="outline"
          className={`${
            allocateMode && "border-gray-400 text-gray-400"
          } w-full flex justify-center gap-4`}
          onClick={() => setAllocateMode(false)}
        >
          Assign Vehicle <ChevronDown />
        </Button>
      </div>

      <DataTable
        data={data}
        isLoading={isLoading}
        error={error}
        caption={`Recent ${allocateMode ? "Allocation" : "Assignment"}`}
        hiddenColumns={["updatedAt", "createdAt"]}
        actions={allocateMode ? allocationActions : assignmentActions}
        cardFields={
          allocateMode
            ? [
                "name_of_recipient",
                "vehicle_id",
                "vehicle_model",
                "engine_number",
              ]
            : ["name_of_driver", "driver_position", "date_of_assignment"]
        }
        gridImage={allocateMode ? "recipient_img_id" : "driver_img_url"}
      />
    </div>
  );
};

export default FleetAllocation;
