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

const allocationActions = [
  { label: "View recipient details", icon: <Eye /> },
  { label: "View recipient history", icon: <History /> },
  { label: "Edit recipient details", icon: <Edit /> },
  { label: "Share recipient details", icon: <Share /> },
  { label: "Delete recipient", icon: <Trash2 className="text-red-400" /> },
];

const assignmentActions = allocationActions.map((action) => ({
  ...action,
  label: action.label.replace("recipient", "driver"),
}));

const allocationColumnDef = [
  { th: "Recipient Name", key: "recipientName" },
  { th: "Vehicle ID", key: "vehicleID" },
  { th: "Type", key: "vehicleType" },
  { th: "Color", key: "vehicleColor" },
  { th: "Make/Model", key: "makeModel" },
  { th: "Engine Number", key: "engineNumber" },
  {
    th: "Action",
    td: ({ row }) => <TableAction row={row} actions={allocationActions} />,
  },
];

const assignmentColumnDef = allocationColumnDef.map((col) => {
  if (col.key === "recipientName") {
    return { th: "Driver Name", key: "driverName" };
  }

  if (col.th === "Action") {
    return {
      th: "Action",
      td: ({ row }) => <TableAction row={row} actions={assignmentActions} />,
    };
  }
  return col;
});

const FleetAllocation = () => {
  const [filterData, setFilterData] = useState({});
  const [allocateMode, setAllocateMode] = useState(true);

  const mockData = allocateMode ? allocationMockData : assignmentMockData;

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
          {mockData.map((record, index) => (
            <InfoCard
              key={record.vehicleID + index}
              details={record}
              include={["vehicleID", "vehicleMake", "engineNumber"]}
              title={
                allocateMode
                  ? `Recipient Name: ${record.recipientName}`
                  : `Driver Name: ${record.driverName}`
              }
              image={
                <UserCircle className="w-full h-full p-2 text-muted-foreground" />
              }
            />
          ))}
        </div>
      ) : (
        <DataTable
          data={mockData}
          caption={`Recent ${allocateMode ? "Allocation" : "Assignment"}`}
          columnDefs={allocateMode ? allocationColumnDef : assignmentColumnDef}
        />
      )}
    </div>
  );
};

export default FleetAllocation;
