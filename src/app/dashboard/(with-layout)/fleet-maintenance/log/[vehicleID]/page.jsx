import React from "react";
import SubHeader from "@/components/dashboard/sub-header";
import TableFilter from "@/components/dashboard/table-filter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import maintenanceLog from "@/data/maintenanceLogMockData";
import MaintenanceLogTable from "./table";

const MaintenanceLog = async ({ params }) => {
  const { vehicleID } = await params;

  return (
    <>
      <SubHeader
        title={`Maintenance Log for Vehicle [Vehicle ID: ${vehicleID}]`}
      />

      <Link href="#" className="flex flex-col my-4">
        <Button>
          <Plus /> Add Maintenance Record
        </Button>
      </Link>

      <TableFilter showDisplayToggle={false} />

      <MaintenanceLogTable data={maintenanceLog[0]?.maintenanceLog ?? []} />
    </>
  );
};

export default MaintenanceLog;
