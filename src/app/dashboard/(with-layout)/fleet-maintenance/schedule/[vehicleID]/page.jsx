"use client";
import React from "react";
import SubHeader from "@/components/dashboard/sub-header";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import maintenanceSchedule from "@/data/maintenanceScheduleMockData";
import {
  AlertTriangle,
  CheckCircle,
  Edit,
  GitCompareArrows,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ScheduledMaintenance = () => {
  const { vehicleID } = useParams();
  const schedule = maintenanceSchedule.find(
    (s) => s.vehicleID === vehicleID
  )?.schedule;

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

      <DataTable
        data={schedule}
        hiddenColumns={["id", "sn"]}
        extendedColumns={[
          {
            header: "Status",
            cell: ({ row }) => (
              <>
                {row.original.status?.toLowerCase() === "confirmed" ? (
                  <CheckCircle className="text-green-400" size={18} />
                ) : (
                  <AlertTriangle className="text-amber-400" size={18} />
                )}
              </>
            ),
          },
        ]}
        actions={[
          {
            label: "Schedule a New Service",
            icon: <Plus className="text-green-400" />,
            href: "new/",
          },
          {
            label: "Edit Record",
            icon: <Edit />,
          },
          {
            label: "Reschedule Appointment",
            icon: <GitCompareArrows className="text-orange-400" />,
          },
          {
            label: "Cancel Schedule",
            icon: <X className="text-red-400" />,
          },
          {
            label: "Delete Record",
            icon: <Trash2 className="text-red-400" />,
          },
        ]}
      />
    </>
  );
};

export default ScheduledMaintenance;
