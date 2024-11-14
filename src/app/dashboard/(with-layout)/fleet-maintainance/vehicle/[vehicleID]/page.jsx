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

      <p className="text-lg font-bold text-secondary">
        Click to view the details related to Vehicle ID: {vehicleID}.
      </p>
      <div className="flex">
        {[
          {
            name: "Maintainance Log",
            colors: ["bg-green-100", "bg-green-500", "text-green-500"],
          },
          {
            name: "Scheduled Maintainance",
            colors: ["bg-green-100", "bg-green-500", "text-green-500"],
          },
          {
            name: "Breakdown Incident",
            colors: ["bg-green-100", "bg-green-500", "text-green-500"],
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
    "text-primary",
    "text-primary",
  ],
}) => {
  return (
    <div className={`maintainance-card p-4 rounded-lg ${background}`}>
      <div className="flex gap-8">
        <FileClock className={`w-20 h-20 ${textColor}`} />
        <span className="font-bold text-secondary">{name}</span>
      </div>
      <Button className={btnColor}>View</Button>
    </div>
  );
};
export default VehicleMaintainanceView;
