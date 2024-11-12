"use client";
import { useState } from "react";
import Greeting from "../../../../components/dashboard/greeting";
import RealTimeInfo from "../../../../components/dashboard/real-time-info";
import Button from "@/components/button";
import { ChevronDown } from "lucide-react";
import TableFilter from "../../../../components/dashboard/table-filter";
import ProcurementTable from "./procurement-table";

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

      <div className="main-card bg-primary/20 rounded-3xl p-6 mb-4">
        <div className="month absolute px-4 py-2 mr-auto font-medium text-primary border-primary border-2 w-fit rounded-md">
          {months[date.getMonth()]} {date.getFullYear()}
          <ChevronDown className="inline-block ml-2" />
        </div>
        <h1 className=" flex gap-2 items-center justify-center font-extrabold text-xl text-secondary mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            fill="none"
            viewBox="0 0 61 61"
          >
            <path
              fill="#DFF9FF"
              d="M38 43.263v6.79c0 3.565-3 5-7.5 5s-7.5-1.435-7.5-5v-6.79"
            ></path>
            <path
              stroke="#00303E"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M38 43.263v6.79c0 3.565-3 5-7.5 5s-7.5-1.435-7.5-5v-6.79"
            ></path>
            <path
              fill="#9FEAFF"
              d="M36.75 43.803a15.84 15.84 0 0 0 10-15 16.55 16.55 0 0 0-16.25-16.25 16.55 16.55 0 0 0-16.25 16.25 15.835 15.835 0 0 0 10 15z"
            ></path>
            <path
              fill="#DFF9FF"
              d="M30.5 20.765a16.54 16.54 0 0 1 15.698 12.358c.382-1.408.568-2.862.552-4.32a16.547 16.547 0 0 0-16.25-16.25 16.55 16.55 0 0 0-16.25 16.25c-.016 1.46.17 2.914.553 4.322A16.54 16.54 0 0 1 30.5 20.765"
            ></path>
            <path
              stroke="#00303E"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M36.75 43.803a15.84 15.84 0 0 0 10-15 16.55 16.55 0 0 0-16.25-16.25 16.55 16.55 0 0 0-16.25 16.25 15.835 15.835 0 0 0 10 15z"
            ></path>
            <path
              stroke="#00303E"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M33 43.802v-15a2.5 2.5 0 1 1 2.5 2.5h-10a2.5 2.5 0 0 1 0-5 2.376 2.376 0 0 1 2.5 2.5v15M23 48.803h15M30.5 1.527v4.775M30.5 55.053v3.75M3 26.303h5.727M9.478 7.777l4.772 4.775M58 26.303h-5.727M51.523 7.777l-4.773 4.775"
            ></path>
          </svg>
          Procurement Overview
        </h1>

        <div className="procurement-summary flex gap-2 items-center justify-center flex-wrap">
          {[
            "Total Orders: 15",
            "Pending Deliveries: 3",
            "Budget Utilized: ₦ 7.5M of ₦ 10M",
            "Recent Aquisitions: 2 Vehicles",
          ].map((item) => (
            <div
              className="info py-2 px-12 rounded border border-gray-300 bg-gray-100 text-sm text-medium"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

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
          Alerts and Notifications <IconChevronDown />
        </Button>
      </div>

      <TableFilter onFilterChange={setFilterData} showDisplayToggle={false} />
      <ProcurementTable />
    </div>
  );
};

export default FleetProcurement;
