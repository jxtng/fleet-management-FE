import NewAssignmentForm from "@/components/dashboard/forms/new-assignment-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const NewAssignment = () => {
  return (
    <>
      <SubHeader title="Assign Vehicles" description="Vehicle Assignment" />
      <NewAssignmentForm />
    </>
  );
};

export default NewAssignment;
