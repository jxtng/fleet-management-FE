import React from "react";
import SubHeader from "@/components/dashboard/sub-header";
import TableFilter from "@/components/dashboard/table-filter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import maintainanceLog from "@/data/maintainanceLogMockData";
import MaintainanceLogTable from "./table";

const MaintainanceLog = async ({ params }) => {
  const { vehicleID } = await params;

  return (
    <>
      <SubHeader
        title={`Maintenance Log for Vehicle [Vehicle ID: ${vehicleID}]`}
      />

      <Link href="#" className="flex flex-col my-4">
        <Button>
          <Plus /> Add Maintainance Record
        </Button>
      </Link>

      <TableFilter showDisplayToggle={false} />

      <MaintainanceLogTable
        data={
          maintainanceLog.find((log) => log.vehicleID == vehicleID)
            ?.maintainanceLog ?? []
        }
      />
    </>
  );
};

export default MaintainanceLog;
