"use client";
import SubHeader from "@/components/dashboard/sub-header";
import { Button } from "@/components/ui/button";
import maintenanceBreakdown from "@/data/maintenanceBreakdownMockData";
import DataTable from "@/components/ui/data-table";
import { AlertTriangle, CheckCircle, Edit, Flag, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const MaintenanceBreakdown = () => {
  const { vehicleID } = useParams();
  const breakdown = maintenanceBreakdown.find(
    (s) => s.vehicleID === vehicleID
  )?.incidents;

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

      <DataTable
        data={breakdown}
        hiddenColumns={["id", "sn"]}
        extendedColumns={[
          {
            header: "status",
            accessorKey: "status",
            cell: ({ getValue }) => (
              <div className="flex items-center gap-2">
                {getValue()}
                {getValue()?.toLowerCase() === "resolved" ? (
                  <CheckCircle className="text-green-400 shrink-0" size={18} />
                ) : (
                  <AlertTriangle
                    className="text-amber-400 shrink-0"
                    size={18}
                  />
                )}
              </div>
            ),
          },
        ]}
        actions={[
          {
            label: "Report Breakdown",
            icon: <Flag className="text-green-400" />,
            href: "new/",
          },
          {
            label: "Edit Record",
            icon: <Edit />,
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

export default MaintenanceBreakdown;
