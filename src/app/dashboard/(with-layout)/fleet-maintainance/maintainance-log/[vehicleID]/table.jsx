"use client";
import TableAction from "@/components/dashboard/table-action";
import DataTable from "@/components/ui/data-table";
import Link from "next/link";

const MaintainanceLogTable = ({ data }) => {
  return (
    <DataTable
      selectable
      data={data}
      columnDefs={[
        {
          th: "SN",
          td: ({ index }) => <>{(index > 9 ? "" : "0") + (index + 1)}</>,
        },
        { th: "Date", key: "date" },
        { th: "Type of Maintainance", key: "typeOfMaintainance" },
        { th: "Description", key: "description" },
        { th: "Cost", key: "cost" },
        { th: "Mileage", key: "mileage" },
        { th: "Maintainance Provider", key: "maintainanceProvider" },
        {
          th: "Invoice",
          td: () => <Link href="#">View Invoice</Link>,
        },
        { th: "Action", td: ({ row }) => <TableAction row={row} /> },
      ]}
    />
  );
};

export default MaintainanceLogTable;
