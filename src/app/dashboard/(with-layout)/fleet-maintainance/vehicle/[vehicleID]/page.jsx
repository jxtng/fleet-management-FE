import OverviewCard from "@/components/dashboard/overview-card";
import SubHeader from "@/components/dashboard/sub-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileClock } from "lucide-react";
import React from "react";

const VehicleMaintainanceView = async ({ params }) => {
  const { vehicleID } = await params;

  return (
    <>
      <SubHeader
        title={`Maintainance Log for Vehicle [Vehicle ID: ${vehicleID}]`}
      />

      <OverviewCard
        title="Vehicle Overview"
        data={[
          "Mileage (km): 45,000",
          "Vehicle Type: SUV",
          "Current Status: Active",
          "Last Maintenance Date: 2024-08-12",
          "Fuel Efficiency (km/l): 12.4",
        ]}
      />

      <p className="text-lg font-bold text-secondary my-8">
        Click to view the details related to Vehicle ID: {vehicleID}.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            name: "Maintainance Log",
            colors: ["bg-pink-100", "bg-pink-500", "text-pink-500"],
          },
          {
            name: "Scheduled Maintainance",
            colors: ["bg-yellow-100", "bg-yellow-500", "text-yellow-500"],
          },
          {
            name: "Breakdown Incident",
            colors: ["bg-red-100", "bg-red-500", "text-red-500"],
          },
          {
            name: "Parts Replacement History",
            colors: ["bg-slate-100", "bg-slate-500", "text-slate-500"],
          },
          {
            name: "Maintenance Cost Analytics",
            colors: ["bg-teal-100", "bg-teal-500", "text-teal-500"],
          },
          {
            name: "Fuel & Oil Monitoring",
            colors: ["bg-zinc-100", "bg-zinc-500", "text-zinc-500"],
          },
        ].map(({ name, colors }) => (
          <MaintainanceCard key={name} name={name} colors={colors} />
        ))}
      </div>
    </>
  );
};

const MaintainanceCard = ({
  name,
  colors: [background, btnColor, textColor] = [
    "bg-primary/20",
    "bg-primary",
    "text-primary",
  ],
}) => {
  return (
    <div
      className={`maintainance-card p-4 flex flex-col gap-4 rounded-lg ${background}`}
    >
      <div className="flex items-center justify-center gap-4">
        <FileClock className={`w-16 h-16 ${textColor}`} />
        <span className="font-bold text-lg text-secondary">{name}</span>
      </div>
      <Button className={` ${btnColor} hover:opacity-85 hover:${btnColor}`}>
        View
      </Button>
    </div>
  );
};
export default VehicleMaintainanceView;
