import OverviewCard from "@/components/dashboard/overview-card";
import SubHeader from "@/components/dashboard/sub-header";
import TableFilter from "@/components/dashboard/table-filter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import PartsReplacementTable from "./table";
import partsReplacement from "@/data/maintenancePartsReplacementMockData";
import Link from "next/link";

const PartsReplacement = async ({ params }) => {
  const { vehicleID } = await params;
  const replacements = partsReplacement.find(
    (vehicle) => vehicle.vehicleID === vehicleID
  ).replacements;

  return (
    <>
      <SubHeader
        title={`Parts Replacement History for Vehicle [Vehicle ID: ${vehicleID}]`}
      />

      <OverviewCard
        title="Replacement Summary"
        data={[
          "Total Parts Replaced: 12",
          "Total Cost: ₦1,200,450.00",
          "Parts Under Warranty: 5",
          "Last Replacement: Oct 10, 2024",
        ]}
      />

      <Link href="new/">
        <Button className="w-full my-4">
          <Plus /> Add Parts Replacement
        </Button>
      </Link>

      <TableFilter showDisplayToggle={false} />
      <PartsReplacementTable data={replacements} />
    </>
  );
};

export default PartsReplacement;
