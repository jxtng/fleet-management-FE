import NewVehicleForm from "@/components/dashboard/new-vehicle-form";
import SubHeader from "@/components/dashboard/sub-header";
import React from "react";

const NewVehicle = () => {
  return (
    <>
      <SubHeader
        title="Add/Document Vehicle"
        description="New Vehicle Documentation"
      />
      <NewVehicleForm />
    </>
  );
};

export default NewVehicle;
