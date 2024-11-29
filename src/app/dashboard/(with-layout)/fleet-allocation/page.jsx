"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Edit,
  Eye,
  History,
  Share,
  Trash2,
  UserCircle,
} from "lucide-react";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import TableFilter from "@/components/dashboard/table-filter";
import DataTable from "@/components/ui/data-table";
import InfoCard from "@/components/dashboard/info-card";
import Link from "next/link";
import allocationMockData from "@/data/allocationMockData";
import assignmentMockData from "@/data/assignmentMockData";
import TableAction from "@/components/dashboard/table-action";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";
import Image from "next/image";

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

// const allocationColumnDef = [
//   { th: "Recipient Name", key: "name_of_recipient" },
//   { th: "Vehicle ID", key: "vehicle_id" },
//   { th: "Type", key: "vehicle_type" },
//   { th: "Color", key: "vehicle_color" },
//   { th: "Make/Model", key: "vehicle_model" },
//   { th: "Engine Number", key: "engine_number" },
//   {
//     th: "Action",
//     td: ({ row }) => <TableAction row={row} actions={allocationActions} />,
//   },
// ];

// const assignmentColumnDef = allocationColumnDef.map((col) => {
//   if (col.key === "name_of_recipient") {
//     return { th: "Driver Name", key: "name_of_driver" };
//   }

//   if (col.th === "Action") {
//     return {
//       th: "Action",
//       td: ({ row }) => <TableAction row={row} actions={assignmentActions} />,
//     };
//   }
//   return col;
// });

const FleetAllocation = () => {
  const [allocateMode, setAllocateMode] = useState(true);
  const {
    data: responseData,
    isLoading,
    error,
  } = useSWR(
    allocateMode ? "/allocation/allocate" : "/assigned/assign-vehicle",
    axiosInstance
  );
  const [filterData, setFilterData] = useState({});

  let data = [];
  let columnDefs;

  if (responseData) {
    data = responseData?.data.data;
    columnDefs = Object.keys(data[0] ?? {})
      .filter((key) => !key.startsWith("_"))
      .map((key) => {
        return {
          th: (
            <div className="capitalize">{key.replace(/_([a-z])/g, " $1")}</div>
          ),
          td: ({ row }) => (
            <>
              {key.includes("img") ? (
                <img
                  src={row[key]}
                  alt="Image"
                  className="mx-auto max-w-16 w-16"
                />
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

      <TableFilter onFilterChange={setFilterData} />

      {filterData.displayMode == "cards" ? (
        <div className="cards flex justify-center flex-wrap gap-4">
          {data.map((record) => (
            <InfoCard
              key={record._id}
              details={record}
              include={
                allocateMode
                  ? ["vehicle_id", "vehicle_model", "engine_number"]
                  : ["driver_position", "date_of_assignment"]
              }
              title={
                allocateMode
                  ? `Recipient Name: ${record.name_of_recipient}`
                  : `Driver Name: ${record.name_of_driver}`
              }
              image={
                allocateMode && record.recipient_img_id ? (
                  <img src={record.recipient_img_id} />
                ) : !allocateMode && record.driver_img_url ? (
                  <img src={record.driver_img_url} />
                ) : (
                  <UserCircle className="w-full h-full p-2 text-muted-foreground" />
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
          caption={`Recent ${allocateMode ? "Allocation" : "Assignment"}`}
          // columnDefs={allocateMode ? allocationColumnDef : assignmentColumnDef}
          columnDefs={columnDefs}
          actions={allocationActions}
        />
      )}
    </div>
  );
};

export default FleetAllocation;
