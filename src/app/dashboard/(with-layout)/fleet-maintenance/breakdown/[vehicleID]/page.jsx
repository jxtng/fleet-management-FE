import SubHeader from "@/components/dashboard/sub-header";
import TableFilter from "@/components/dashboard/table-filter";
import { Button } from "@/components/ui/button";
import maintenanceBreakdown from "@/data/maintenanceBreakdownMockData";
import { Flag, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import MaintenanceBreakdownTable from "./table";

const MaintenanceBreakdown = async ({ params }) => {
  const { vehicleID } = await params;
  const breakdown = maintenanceBreakdown.find(
    (s) => s.vehicleID === vehicleID
  ).incidents;

  return (
    <>
      <SubHeader
        title={`Maintenance Breakdown for Vehicle [Vehicle ID: ${vehicleID}]`}
      />
      <Link href="/dashboard/fleet-maintenance/breakdown/new">
        <Button className="w-full mb-4">
          <Flag /> Report Breakdown
        </Button>
      </Link>

      <TableFilter showDisplayToggle={false} />
      <MaintenanceBreakdownTable data={breakdown} />
    </>
  );
};

export default MaintenanceBreakdown;
