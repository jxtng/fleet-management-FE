import React from "react";
import { Button } from "@/components/ui/button";

import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import LastTrips from "@/components/dashboard/home/last-trips";
import TripExpenses from "@/components/dashboard/home/trip-expenses";
import TopLocations from "@/components/dashboard/home/top-locations";
import TripTable from "@/components/dashboard/home/trip-table";
import Link from "next/link";

const DashboardHome = () => {
  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo />{" "}
        <Button variant="outline" asChild>
          <Link href="/dashboard/fleet-inventory/new/">
            Add/Document New Vehicle
          </Link>
        </Button>
      </div>

      <VehicleSummary />

      <div className="trips-summary flex flex-wrap gap-4 justify-center mb-8">
        <LastTrips className="grow" />
        <TripExpenses className="grow" />
        <TopLocations className="grow" />
      </div>

      <TripTable />
    </div>
  );
};

export default DashboardHome;
