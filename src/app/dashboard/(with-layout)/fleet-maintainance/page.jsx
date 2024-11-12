"use client";
import { useState } from "react";
import Greeting from "../../../../components/dashboard/greeting";
import RealTimeInfo from "../../../../components/dashboard/real-time-info";
import Button from "@/components/button";
import VehicleSummary from "../../../../components/dashboard/vehicle-summary";
import TableFilter from "../../../../components/dashboard/table-filter";
import MaintainanceTable from "./maintainance-table";
import MaintainanceCards from "./maintainance-cards";

const FleetMaintainance = () => {
  const [filterData, setFilterData] = useState({});

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Maintainance" />
        <div className="btn-group flex gap-2">
          <Button variant="primary">Add New Maintainance Record</Button>
          <Button variant="outline">Export Logs (CSV, PDF)</Button>
        </div>
      </div>

      <VehicleSummary />

      <TableFilter onFilterChange={setFilterData} />

      {filterData.displayMode == "cards" ? (
        <MaintainanceCards />
      ) : (
        <MaintainanceTable />
      )}
    </div>
  );
};

export default FleetMaintainance;
