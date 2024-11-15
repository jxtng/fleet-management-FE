import SubHeader from "@/components/dashboard/sub-header";
import TableFilter from "@/components/dashboard/table-filter";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import maintenanceSchedule from "@/data/maintenanceScheduleMockData";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import MaintenanceScheduleTable from "./table";

const ScheduledMaintenance = async ({ params }) => {
  const { vehicleID } = await params;
  const schedule = maintenanceSchedule.find(
    (s) => s.vehicleID === vehicleID
  ).schedule;

  return (
    <>
      <SubHeader
        title={`Scheduled Maintenance for Vehicle [Vehicle ID: ${vehicleID}]`}
      />
      <Link href="/dashboard/fleet-maintenance/schedule/new">
        <Button className="w-full mb-4">
          <Plus /> Schedule a New Service
        </Button>
      </Link>

      <TableFilter showDisplayToggle={false} />
      <MaintenanceScheduleTable data={schedule} />
    </>
  );
};

export default ScheduledMaintenance;
