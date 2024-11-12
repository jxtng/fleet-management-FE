"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import TableFilter from "@/components/dashboard/table-filter";
import VehicleCards from "./vehicle-cards";
import DataTable from "@/components/ui/data-table";
import inventoryMockData from "@/data/inventoryMockData";
import Image from "next/image";
import { EllipsisVertical, ShieldCheck } from "lucide-react";

const FleetInventory = () => {
  const [filterData, setFilterData] = useState({});

  console.log(filterData);

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          <Button>Add/Document New Vehicle</Button>
          <Button variant="outline">Export Logs (CSV, PDF)</Button>
        </div>
      </div>

      <VehicleSummary />
      <TableFilter onFilterChange={setFilterData} />

      {filterData.displayMode == "cards" ? (
        <VehicleCards />
      ) : (
        <DataTable
          data={inventoryMockData}
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
            { th: "Make/Model", key: "makeModel" },
            { th: "Engine Number", key: "engineNumber" },
            {
              th: "Actions",
              td: () => (
                <button className="flex text-green-400">
                  <ShieldCheck size={18} />
                  <EllipsisVertical size={18} />
                </button>
              ),
            },
          ]}
        />
      )}
    </div>
  );
};

export default FleetInventory;
