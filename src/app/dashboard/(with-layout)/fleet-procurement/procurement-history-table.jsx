"use client";
import { useState } from "react";
import TableAction from "@/components/dashboard/table-action";
import TableFilter from "@/components/dashboard/table-filter";
import DataTable from "@/components/ui/data-table";
import procurementMockData from "@/data/procurementMockData";
import { Edit, Share, Eye, Trash2 } from "lucide-react";

const ProcurementHistoryTable = () => {
  const [filterData, setFilterData] = useState({});

  return (
    <>
      <TableFilter onFilterChange={setFilterData} showDisplayToggle={false} />
      <DataTable
        data={procurementMockData}
        columnDefs={[
          { th: "Order Number", key: "orderNumber" },
          { th: "Type", key: "procurementType" },
          { th: "Vendor", key: "vendor" },
          { th: "Description", key: "itemDescription" },
          { th: "Quantity", key: "quantity" },
          { th: "Total Cost", key: "totalCost" },
          { th: "Delivery Status", key: "deliveryStatus" },
          {
            th: "Actions",
            td: ({ row }) => (
              <TableAction
                actions={[
                  {
                    label: "View Vehicle Procurement ",
                    icon: <Eye className="text-green-400" />,
                  },
                  { label: "Edit Procurement  Details", icon: <Edit /> },
                  { label: "Share Procurement Details", icon: <Share /> },
                  {
                    label: "Delete Procurement Info ",
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

export default ProcurementHistoryTable;
