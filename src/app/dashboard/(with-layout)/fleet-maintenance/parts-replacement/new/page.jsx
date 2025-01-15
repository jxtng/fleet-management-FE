import NewMaintenancePartsReplacementForm from "@/components/dashboard/forms/new-maintenance-parts-replacement-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const PartsReplacement = () => {
  return (
    <>
      <SubHeader
        title="Add parts replacement"
        description="Add a new part replacement record"
      />
      <NewMaintenancePartsReplacementForm />
    </>
  );
};

export default PartsReplacement;
