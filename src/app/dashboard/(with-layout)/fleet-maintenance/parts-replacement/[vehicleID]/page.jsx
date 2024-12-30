"use client";
import React from "react";
import OverviewCard from "@/components/dashboard/overview-card";
import SubHeader from "@/components/dashboard/sub-header";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Eye, Share, Trash2 } from "lucide-react";
import partsReplacement from "@/data/maintenancePartsReplacementMockData";
import Link from "next/link";
import { useParams } from "next/navigation";
import DataTable from "@/components/ui/data-table";

const PartsReplacement = () => {
  const { vehicleID } = useParams();
  const replacements = partsReplacement.find(
    (vehicle) => vehicle.vehicleID === vehicleID
  )?.replacements;

  return (
    <>
      <SubHeader
        title={`Parts Replacement History for Vehicle [Vehicle ID: ${vehicleID}]`}
      />

      <OverviewCard
        title="Replacement Summary"
        data={[
          "Total Parts Replaced: 12",
          "Total Cost: ₦1,200,450.00",
          "Parts Under Warranty: 5",
          "Last Replacement: Oct 10, 2024",
        ]}
      />

      <Link href="new/">
        <Button className="w-full my-4">
          <Plus /> Add Parts Replacement
        </Button>
      </Link>

      <DataTable
        data={replacements}
        hiddenColumns={["id"]}
        actions={[
          {
            label: "View Report Details",
            icon: <Eye className="text-green-400" />,
          },
          { label: "Edit Report Details", icon: <Edit /> },
          { label: "Share Report Details", icon: <Share /> },
          {
            label: "Delete Report Info ",
            icon: <Trash2 className="text-red-400" />,
          },
        ]}
      />
    </>
  );
};

export default PartsReplacement;
