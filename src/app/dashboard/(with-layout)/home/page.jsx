"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import LastTrips from "@/components/dashboard/home/last-trips";
import TripExpenses from "@/components/dashboard/home/trip-expenses";
import TopLocations from "@/components/dashboard/home/top-locations";
import Link from "next/link";
import { useAuth } from "@/components/auth/auth";

const DashboardHome = () => {
  const { authState } = useAuth();

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

      {!authState?.organization && (
        <div className="create-org-badge p-4 bg-amber-200 rounded my-4 text-sm">
          You currently have no orgaization.{" "}
          <Link
            href="/auth/create-org"
            className="text-primary hover:underline"
          >
            Click here to create one
          </Link>
        </div>
      )}

      <VehicleSummary />

      <div className="trips-summary flex flex-wrap gap-4 justify-center mb-8">
        <LastTrips className="grow" />
        <TripExpenses className="grow" />
        <TopLocations className="grow" />
      </div>
    </div>
  );
};

export default DashboardHome;
