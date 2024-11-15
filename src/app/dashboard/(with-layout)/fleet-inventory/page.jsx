"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import TableFilter from "@/components/dashboard/table-filter";
import DataTable from "@/components/ui/data-table";
import inventoryMockData from "@/data/inventoryMockData";
import Image from "next/image";
import { Edit, Eye, History, Share, ShieldCheck, Trash2 } from "lucide-react";

import Link from "next/link";
import InfoCard from "@/components/dashboard/info-card";
import TableAction from "@/components/dashboard/table-action";

const actions = [
  {
    label: "View vehicle details",
    icon: <Eye className="text-green-400" />,
    href: (row) => `/dashboard/fleet-inventory/vehicle/${row.id}`,
  },
  {
    label: "View vehicle history",
    icon: <History className="text-blue-400" />,
  },
  { label: "Edit vehicle details", icon: <Edit /> },
  { label: "Share vehicle details", icon: <Share /> },
  { label: "Delete vehicle", icon: <Trash2 className="text-red-400" /> },
];

const FleetInventory = () => {
  const [filterData, setFilterData] = useState({});

  console.log(filterData);

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          <Button>
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
          {inventoryMockData.map((vehicle) => (
            <InfoCard
              key={vehicle.id}
              details={vehicle}
              include={["vehicleType", "makeModel", "engineNumber"]}
              className="grow"
              action={<TableAction row={vehicle} actions={actions} />}
            />
          ))}
        </div>
      ) : (
        <DataTable
          data={inventoryMockData}
          columnDefs={[
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
            { th: "Make/Model", key: "makeModel" },
            { th: "Engine Number", key: "engineNumber" },
            {
              th: "",
              td: () => <ShieldCheck className="text-green-400" size={18} />,
            },
            {
              th: "Actions",
              td: ({ row }) => <TableAction row={row} actions={actions} />,
            },
          ]}
        />
      )}
    </div>
  );
};

export default FleetInventory;
