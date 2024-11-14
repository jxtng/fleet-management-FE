import NewAllocationForm from "@/components/dashboard/new-allocation-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const NewAllocation = () => {
  return (
    <>
      <SubHeader title="Allocate Vehicles" description="Vehicle Allocation" />
      <NewAllocationForm />
    </>
  );
};

export default NewAllocation;
