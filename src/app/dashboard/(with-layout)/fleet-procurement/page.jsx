"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import Button from "@/components/button";
import { ChevronDown } from "lucide-react";
import TableFilter from "@/components/dashboard/table-filter";
import ProcurementTable from "./procurement-table";
import OverviewCard from "@/components/dashboard/overview-card";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const FleetProcurement = () => {
  const [filterData, setFilterData] = useState({});
  const [viewMode, setViewMode] = useState("history");
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          <Button variant="primary">Create New Request</Button>
          <Button variant="outline">Create Procurement Category</Button>
        </div>
      </div>

      <div className="relative">
        <div className="month absolute top-4 left-4 px-4 py-2 mr-auto font-medium text-primary border-primary border-2 w-fit rounded-md">
          {months[date.getMonth()]} {date.getFullYear()}
          <ChevronDown className="inline-block ml-2" />
        </div>
      </div>
      <OverviewCard
        title="Procurement Overview"
        data={[
          "Total Orders: 15",
          "Pending Deliveries: 3",
          "Budget Utilized: ₦ 7.5M of ₦ 10M",
          "Recent Aquisitions: 2 Vehicles",
        ]}
      />

      <div className="view-mode flex gap-4 mb-4">
        <Button
          variant="outline"
          className={`${
            viewMode != "history" && "border-gray-400 text-gray-400"
          } w-full flex justify-center gap-4`}
          onClick={() => setViewMode("history")}
        >
          Procurement History <ChevronDown />
        </Button>

        <Button
          variant="outline"
          className={`${
            viewMode != "management" && "border-gray-400 text-gray-400"
          } w-full flex justify-center gap-4`}
          onClick={() => setViewMode("management")}
        >
          Vendor Management <ChevronDown />
        </Button>
        <Button
          variant="outline"
          className={`${
            viewMode != "notification" && "border-gray-400 text-gray-400"
          } w-full flex justify-center gap-4`}
          onClick={() => setViewMode("notification")}
        >
          Alerts and Notifications <ChevronDown />
        </Button>
      </div>

      <TableFilter onFilterChange={setFilterData} showDisplayToggle={false} />
      <ProcurementTable />
    </div>
  );
};

export default FleetProcurement;
