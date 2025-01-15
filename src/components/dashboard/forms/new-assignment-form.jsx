"use client";
import { useState } from "react";
import SuccessDialog from "@/components/success-dialog";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/ui/form-elements";
import { Banknote, Loader2 } from "lucide-react";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import ErrorDialog from "@/components/error-dialog";

const inputs = [
  {
    label: "Name of Driver",
    name: "name_of_driver",
    placeholder: "Name of Driver",
  },
  {
    label: "Position of Government  Occupied By Driver",
    name: "driver_position",
    placeholder: "Driver Position ",
  },
  {
    label: "Select Date of Assignment",
    name: "date_of_assignment",
    type: "date",
  },
  {
    label: "Driver Contact",
    name: "driver_contact",
    placeholder: "Driver’s Contact",
  },
  {
    label: "Driver Mode of ID",
    name: "driver_id_type",
    type: "select",
    options: [
      "Civil Service ID",
      "Voters Card",
      "NIN",
      "International Passport",
    ],
    placeholder: "Driver's Contact",
  },
  {
    label: "Driver  ID",
    type: "file",
    fileTypes: ["image/jpeg", "image/png", "image/jpg"],
    name: "driver_img_url",
    placeholder: "Upload Driver ID",
  },
  {
    label: "Vehicle Status",
    type: "select",
    name: "vehicle_status",
    options: [
      "Active",
      "Inactive",
      "Under Maintenance",
      "In Service",
      "Out of Service",
    ],
    placeholder: "Select Vehicle Status",
  },
  {
    label: "Date of Order",
    name: "date_of_order",
    type: "date",
  },
  {
    label: "Start Location",
    name: "start_location",
    placeholder: "Start Location",
  },
  {
    label: "Approved Destination",
    name: "approved_destination",
    placeholder: "Stop Location",
  },
  {
    label: "Approved Allowance",
    name: "approved_allowance",
    type: "number",
    placeholder: "In Naira",
    icon: <Banknote />,
  },
].map((field) => ({ ...field, required: true }));

const NewAllocationForm = () => {
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleFormSubmitHelper({
      formSchema: createZodSchema(inputs),
      formData,
      endPoint: "/assigned/assign-vehicle",
      setSubmitStatus,
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <AllInput
        inputs={inputs}
        formData={formData}
        setFormData={setFormData}
        errors={submitStatus?.status == "form_error" && submitStatus.error}
        inputProps={{ disabled: submitStatus?.status == "submitting" }}
      />

      <Button type="submit" disabled={submitStatus?.status == "submitting"}>
        Save &amp; Update
        {submitStatus?.status == "submitting" && (
          <Loader2 className="animate-spin size-4" />
        )}
      </Button>
      <SuccessDialog
        open={submitStatus?.status == "success"}
        onOpenChange={() => {
          setSubmitStatus(null);
          setFormData({});
        }}
        title={submitStatus?.data?.message ?? "Vehicle Allocation Successful"}
        description={
          <>
            Allocation of Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been saved
            and updated
          </>
        }
      ></SuccessDialog>
      <ErrorDialog
        open={submitStatus?.status == "error"}
        onOpenChange={() => setSubmitStatus(null)}
        description={submitStatus?.error}
      />
    </form>
  );
};

export default NewAllocationForm;
