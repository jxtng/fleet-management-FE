import NewVehicleForm from "@/components/dashboard/fleet-inventory/new-vehicle-form";
import { ImageInput } from "@/components/dashboard/form-elements";
import SubHeader from "@/components/dashboard/sub-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
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
