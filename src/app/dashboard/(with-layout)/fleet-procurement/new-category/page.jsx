"use client";
import NewProcurementCategoryForm from "@/components/dashboard/forms/new-procurement-category-form";
import SubHeader from "@/components/dashboard/sub-header";
import TableAction from "@/components/dashboard/table-action";
import { Edit, Trash2 } from "lucide-react";
import React from "react";

const NewProcurement = () => {
  return (
    <>
      <SubHeader
        title="Create New Procurement Category"
        description="Create New Procurement Type"
      />

      <NewProcurementCategoryForm />

      <h2 className="text-lg text-secondary font-bold my-8">
        Other Procurement Categories Available
      </h2>

      <ol>
        {[
          "Vehicle Procurement",
          "Vehicle Part Procurement",
          "Service Procurement",
        ].map((item) => (
          <li
            key={item}
            className="flex justify-between p-3 border-b even:bg-green-100 even:border-green-500 odd:bg-red-100 odd:border-red-500"
          >
            {item}
            <TableAction
              actions={[
                { label: "Edit procurement category/type", icon: <Edit /> },
                {
                  label: "Delete procurement category/type",
                  icon: <Trash2 className="text-red-400" />,
                },
              ]}
            />
          </li>
        ))}
      </ol>
    </>
  );
};

export default NewProcurement;
