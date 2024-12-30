"use client";
import { useState } from "react";
import Greeting from "@/components/dashboard/greeting";
import RealTimeInfo from "@/components/dashboard/real-time-info";
import { Button } from "@/components/ui/button";
import VehicleSummary from "@/components/dashboard/vehicle-summary";
import { Car, Eye, Plus, Share, Trash2 } from "lucide-react";
import DataTable from "@/components/ui/data-table";
import Link from "next/link";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";

const actions = [
  {
    label: "View maintenance",
    icon: <Eye className="text-green-400" />,
    href: (row) => `/dashboard/fleet-maintenance/${row.vehicle_id}`,
  },
  {
    label: "Add new maintenance history",
    icon: <Plus className="text-blue-400" />,
    href: "/dashboard/fleet-maintenance/new",
  },
  { label: "Share maintenance details", icon: <Share /> },
  {
    label: "Delete maintenance info",
    icon: <Trash2 className="text-red-400" />,
  },
];
const FleetMaintenance = () => {
  const { data, isLoading, error } = useSWR(
    "/maintainers/maintenance-record",
    (url) => axiosInstance.get(url).then((res) => res.data.data)
  );

  return (
    <div>
      <Greeting />
      <div className="flex justify-between items-center flex-wrap gap-2 my-4">
        <RealTimeInfo title="Fleet Maintenance" />
        <div className="btn-group flex gap-2">
          <Link href="/dashboard/fleet-maintenance/new">
            <Button>Add New Maintenance Record</Button>
          </Link>
          <Button variant="outline">Export Logs (CSV, PDF)</Button>
        </div>
      </div>

      <VehicleSummary />

      <DataTable
        data={data}
        isLoading={isLoading}
        error={error}
        caption="Maintenance History"
        cardFields={[
          "vehicle_id",
          "description_maintenance",
          "type_of_maintenance",
          "date",
        ]}
        hiddenColumns={["createdAt", "updatedAt"]}
        gridImage="invoice_img_url"
        actions={actions}
      />
    </div>
  );
};

export default FleetMaintenance;
