import NewProcurementRequestForm from "@/components/dashboard/forms/new-procurement-request-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const NewProcurementRequest = () => {
  return (
    <>
      <SubHeader
        title="Create New Procurement Request"
        description="Create New Procurement Request"
      />

      <NewProcurementRequestForm />
    </>
  );
};

export default NewProcurementRequest;
