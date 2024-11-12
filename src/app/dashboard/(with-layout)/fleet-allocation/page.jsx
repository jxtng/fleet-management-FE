"use client";
import { useState } from "react";
import Greeting from "../../../../components/dashboard/greeting";
import RealTimeInfo from "../../../../components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import { ChevronDown, EllipsisVertical, ShieldCheck } from "lucide-react";
import VehicleSummary from "../../../../components/dashboard/vehicle-summary";
import TableFilter from "../../../../components/dashboard/table-filter";
import AllocationCards from "./allocation-cards";
import DataTable from "@/components/ui/data-table";
import allocationMockData from "../../../../data/allocationMockData";

const FleetAllocation = () => {
  const [filterData, setFilterData] = useState({});
  const [allocateMode, setAllocateMode] = useState(true);

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          <Button>Allocate Vehicle</Button>
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

      <h2 className="capitalize font-extrabold text-xl text-secondary whitespace-nowrap mb-6">
        Recent Allocation
      </h2>
      {filterData.displayMode == "cards" ? (
        <AllocationCards />
      ) : (
        <DataTable
          selectable
          data={allocationMockData}
          columnDefs={[
            {
              th: "SN",
              thClassName: "w-10",
              key: "id",
            },
            { th: "Recipient Name", key: "recipientName" },
            { th: "Vehicle ID", key: "vehicleID" },
            { th: "Type", key: "vehicleType" },
            { th: "Color", key: "vehicleColor" },
            { th: "Make/Model", key: "makeModel" },
            { th: "Engine Number", key: "engineNumber" },
            {
              th: "Action",
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

export default FleetAllocation;
