import NewMaintenanceRecordForm from "@/components/dashboard/forms/new-maintenance-record-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const NewMaintainRecord = () => {
  return (
    <>
      <SubHeader
        title="Add Maintenance Record"
        description="Add Maintenance Record"
      />

      <NewMaintenanceRecordForm />
    </>
  );
};

export default NewMaintainRecord;
