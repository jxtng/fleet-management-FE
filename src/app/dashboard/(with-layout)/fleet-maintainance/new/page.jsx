import NewMaintainanceRecordForm from "@/components/dashboard/new-maintainance-record-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const NewMaintainRecord = () => {
  return (
    <>
      <SubHeader
        title="Add Maintainance Record"
        description="Add Maintainance Record"
      />

      <NewMaintainanceRecordForm />
    </>
  );
};

export default NewMaintainRecord;
