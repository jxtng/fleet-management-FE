"use client";
import { useState } from "react";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import VehicleForm, {
  inputs,
} from "@/components/dashboard/forms/new-vehicle-form";
import SubHeader from "@/components/dashboard/sub-header";
import SuccessDialog from "@/components/success-dialog";
import ErrorDialog from "@/components/error-dialog";

const NewVehicle = () => {
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formStatus = await handleFormSubmitHelper({
      formSchema: createZodSchema(inputs),
      formData,
      endPoint: "/vehicle/add-vehicle",
      setSubmitStatus,
    });
  };

  return (
    <>
      <SubHeader
        title="Add/Document Vehicle"
        description="New Vehicle Documentation"
      />
      <VehicleForm
        {...{ formData, setFormData, submitStatus, handleFormSubmit }}
      />

<SuccessDialog
        open={submitStatus?.status == "success"}
        onOpenChange={(open) => {
          setFormData({});
          if (!open) setSubmitStatus(null);
        }}
        title={
          submitStatus?.data?.message ??
          "Vehicle Successfully added to Fleet inventory"
        }
        description={
          <>
            Fleet Inventory of Vehicle{" "}
            <strong>[Plate Number: {formData.plate_number}]</strong> have been
            saved and updated
          </>
        }
      ></SuccessDialog>
      <ErrorDialog
        open={submitStatus?.status == "error"}
        onOpenChange={(open) => !open && setSubmitStatus(null)}
        description={submitStatus?.error}
      ></ErrorDialog>
    </>
  );
};

export default NewVehicle;
