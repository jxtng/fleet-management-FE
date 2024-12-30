"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import OverviewCard from "@/components/dashboard/overview-card";
import Link from "next/link";
import ProcurementHistoryTable from "./procurement-history-table";
import VendorManagementTable from "./vendor-management-table";
import NotificationSection from "./notification-section";

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
  const [viewMode, setViewMode] = useState("history");
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Inventory" />
        <div className="btn-group flex gap-2">
          {viewMode === "management" ? (
            <Link href="/dashboard/fleet-procurement/new-vendor">
              <Button>Add New Vendor</Button>
            </Link>
          ) : (
            <Link href="/dashboard/fleet-procurement/new-request">
              <Button>Create New Request</Button>
            </Link>
          )}

          <Link href="/dashboard/fleet-procurement/new-category">
            <Button variant="outline">Create Procurement Category</Button>
          </Link>
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

      {viewMode == "history" ? (
        <ProcurementHistoryTable />
      ) : viewMode == "management" ? (
        <VendorManagementTable />
      ) : (
        <NotificationSection />
      )}
    </div>
  );
};

export default FleetProcurement;
