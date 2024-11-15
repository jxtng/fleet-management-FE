"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import TableFilter from "@/components/dashboard/table-filter";
import maintainanceMockData from "@/data/maintainanceMockData";
import {
  AlertTriangle,
  Car,
  Eye,
  Plus,
  Share,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import InfoCard from "@/components/dashboard/info-card";
import DataTable from "@/components/ui/data-table";
import TableAction from "@/components/dashboard/table-action";
import Image from "next/image";
import Link from "next/link";

const actions = [
  {
    label: "View maintenance",
    icon: <Eye className="text-green-400" />,
    href: (row) => `/dashboard/fleet-maintainance/${row.vehicleID}`,
  },
  {
    label: "Add new maintenance history",
    icon: <Plus className="text-blue-400" />,
    href: "/dashboard/fleet-maintainance/new",
  },
  { label: "Share maintenance details", icon: <Share /> },
  {
    label: "Delete maintenance info",
    icon: <Trash2 className="text-red-400" />,
  },
];
const FleetMaintainance = () => {
  const [filterData, setFilterData] = useState({});

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Maintainance" />
        <div className="btn-group flex gap-2">
          <Link href="/dashboard/fleet-maintainance/new">
            <Button>Add New Maintainance Record</Button>
          </Link>
          <Button variant="outline">Export Logs (CSV, PDF)</Button>
        </div>
      </div>

      <VehicleSummary />
      <TableFilter onFilterChange={setFilterData} />

      {filterData.displayMode == "cards" ? (
        <div className="cards flex justify-between flex-wrap gap-2">
          {maintainanceMockData.map((vehicle) => (
            <InfoCard
              key={vehicle.id}
              title={`Vehicle ID: ${vehicle.vehicleID}`}
              details={vehicle}
              include={["vehicleType", "lastServiceDate", "nextServiceDate"]}
              className="grow"
              action={<TableAction row={vehicle} actions={actions} />}
              image={
                <Car
                  className={`w-full h-full p-2 ${
                    vehicle.status == "ok" ? "text-green-400" : "text-red-400"
                  }`}
                />
              }
            />
          ))}
        </div>
      ) : (
        <DataTable
          data={maintainanceMockData}
          selectable
          columnDefs={[
            { th: "SN", key: "id" },
            {
              th: "Vehicle Image",
              td: ({ row }) => (
                <Image
                  src="/images/car.jpeg"
                  width={80}
                  height={66}
                  alt={"Image of vehicle with id " + row.id}
                />
              ),
            },
            { th: "Vehicle ID/Inventory ID", key: "vehicleID" },
            { th: "Type", key: "vehicleType" },
            { th: "License Plate", key: "licensePlate" },
            { th: "Last Service Date", key: "lastServiceDate" },
            { th: "Next Service Due", key: "nextServiceDate" },
            {
              th: "Status",
              td: ({ row }) => (
                <>
                  {row.status == "ok" ? (
                    <ShieldCheck className="text-green-400 mx-auto" size={18} />
                  ) : (
                    <AlertTriangle
                      className="text-amber-400 mx-auto"
                      size={18}
                    />
                  )}
                </>
              ),
            },
            {
              th: "",
              td: ({ row }) => <TableAction row={row} actions={actions} />,
            },
          ]}
        />
      )}
    </div>
  );
};

export default FleetMaintainance;
