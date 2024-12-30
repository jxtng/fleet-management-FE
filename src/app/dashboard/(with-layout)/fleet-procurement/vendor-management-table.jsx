import { TypeInput } from "@/components/ui/form-elements";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import vendorManagementMockData from "@/data/vendorManagementMockData";
import { Edit, Share, Eye, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const VendorManagementTable = () => {
  return (
    <>
      <DataTable
        data={vendorManagementMockData}
        actions={[
          {
            label: "View vendor details",
            icon: <Eye className="text-green-400" />,
          },
          { label: "Edit vendor details", icon: <Edit /> },
          { label: "Share vendor details", icon: <Share /> },
          {
            label: "Delete vendor details",
            icon: <Trash2 className="text-red-400" />,
          },
        ]}
      />
    </>
  );
};

export default VendorManagementTable;
