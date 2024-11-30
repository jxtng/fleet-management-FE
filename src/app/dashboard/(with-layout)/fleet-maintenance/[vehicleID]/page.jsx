"use client";
import React from "react";
import OverviewCard from "@/components/dashboard/overview-card";
import SubHeader from "@/components/dashboard/sub-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileClock, Loader2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";

const VehicleMaintenanceView = () => {
  const { vehicleID } = useParams();
  const {
    data: response,
    isLoading,
    error,
  } = useSWR("/maintainers/maintenance-record", axiosInstance.get);

  if (isLoading || error) {
    return (
      <div className="absolute inset-8 flex justify-center items-center bg-muted rounded-lg animate-pulse">
        {isLoading ? (
          <Loader2 size={64} className="animate-spin" />
        ) : (
          <p>Failed to load data. Refresh to try again.</p>
        )}
      </div>
    );
  }

  const vehicle = response?.data.data.find(
    (vehicle) => vehicle.vehicle_id === vehicleID
  );

  if (!vehicle) notFound();

  return (
    <>
      <SubHeader
        title={`Maintenance Overview for Vehicle [Vehicle ID: ${vehicleID}]`}
      />

      <OverviewCard
        title="Vehicle Overview"
        data={[
          "Mileage (km): " + vehicle.milage,
          "Maintenance Type: " + vehicle.type_of_maintenance,
          "Cost (₦): " + vehicle.maintenance_cost,
          "Last Maintenance Date: " + vehicle.updatedAt,
          "Provider: " + vehicle.maintenance_provider,
        ]}
      />

      <p className="text-lg font-bold text-secondary my-8">
        Click to view the details related to the Vehicle ID: {vehicleID}.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            name: "Maintenance Log",
            colors: ["bg-pink-100", "bg-pink-500", "text-pink-500"],
            href: `log/${vehicleID}`,
          },
          {
            name: "Scheduled Maintenance",
            colors: ["bg-yellow-100", "bg-yellow-500", "text-yellow-500"],
            href: `schedule/${vehicleID}`,
          },
          {
            name: "Breakdown Incident",
            colors: ["bg-red-100", "bg-red-500", "text-red-500"],
            href: `breakdown/${vehicleID}`,
          },
          {
            name: "Parts Replacement History",
            colors: ["bg-slate-100", "bg-slate-500", "text-slate-500"],
            href: `parts-replacement/${vehicleID}`,
          },
          {
            name: "Maintenance Cost Analytics",
            colors: ["bg-teal-100", "bg-teal-500", "text-teal-500"],
          },
          {
            name: "Fuel & Oil Monitoring",
            colors: ["bg-zinc-100", "bg-zinc-500", "text-zinc-500"],
          },
        ].map((props) => (
          <MaintenanceCard key={props.name} {...props} />
        ))}
      </div>
    </>
  );
};

const MaintenanceCard = ({
  name,
  colors: [background, btnColor, textColor] = [
    "bg-primary/20",
    "bg-primary",
    "text-primary",
  ],
  href = "#",
}) => {
  return (
    <div
      className={`maintenance-card p-4 flex flex-col gap-4 rounded-lg ${background}`}
    >
      <div className="flex items-center justify-center gap-4">
        <FileClock className={`w-16 h-16 ${textColor}`} />
        <span className="font-bold text-lg text-secondary">{name}</span>
      </div>
      <Link
        href={href}
        className={cn(
          "mt-auto",
          buttonVariants(),
          btnColor,
          `hover:opacity-85 hover:${btnColor}`
        )}
      >
        View
      </Link>
    </div>
  );
};
export default VehicleMaintenanceView;
