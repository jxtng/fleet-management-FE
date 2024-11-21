import { TypeInput } from "@/components/ui/form-elements";
import TableAction from "@/components/dashboard/table-action";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import vendorManagementMockData from "@/data/vendorManagementMockData";
import { Edit, Share, Eye, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const VendorManagementTable = () => {
  return (
    <>
      <div className="vendor-control my-4 flex items-end gap-2 [&>div]:grow">
        <TypeInput
          type="search"
          icon={<Search size={16} />}
          placeholder="Search"
        />
        <Link href="/dashboard/fleet-procurement/new-vendor">
          <Button>Add New Vendor</Button>
        </Link>
      </div>

      <DataTable
        data={vendorManagementMockData}
        columnDefs={[
          { th: "Vendor Name", key: "vendorName" },
          { th: "Contact Info", key: "contactInfo" },
          { th: "Contract Starts", key: "contractStarts" },
          { th: "Contract Expires", key: "contractExpires" },
          { th: "Vendor Category", key: "vendorCategory" },
          {
            th: "Actions",
            td: ({ row }) => (
              <TableAction
                row={row}
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
            ),
          },
        ]}
      />
    </>
  );
};

export default VendorManagementTable;
