import React from "react";
import NewVendorRecordForm from "@/components/dashboard/forms/new-vendor-record-form";
import SubHeader from "@/components/dashboard/sub-header";

const NewVendorRecord = () => {
  return (
    <>
      <SubHeader
        title="Create New Procurement Request"
        description="Create New Procurement Request"
      />

      <NewVendorRecordForm />
    </>
  );
};

export default NewVendorRecord;
