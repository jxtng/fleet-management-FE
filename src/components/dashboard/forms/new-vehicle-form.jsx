"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/ui/form-elements";
import SuccessDialog from "@/components/success-dialog";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import ErrorDialog from "@/components/error-dialog";
import { Loader2 } from "lucide-react";

const inputs = [
  // { label: "Vehicle ID", name: "vehicleID", placeholder: "Enter Vehicle ID" },
  {
    label: "Upload Vehicle Image",
    name: "vehicle_img",
    type: "file",
    fileTypes: ["image/jpeg", "image/png", "image/jpg"],
  },
  {
    label:
      "Upload of procurement documents, such as invoices, approval letters, and delivery receipts.(Organize Them in one File)",
    name: "procurement_img",
    type: "file",
    fileTypes: ["image/jpeg", "image/png", "image/jpg"],
  },
  {
    label: "Vehicle Plate Number",
    name: "plate_number",
    placeholder: "Enter Vehicle Plate Number",
  },
  {
    label: "Vehicle Type",
    name: "vehicle_type",
    placeholder: "Enter Vehicle Type",
  },
  {
    label: "Vehicle Make/Model",
    name: "vehicle_model",
    placeholder: "Enter Vehicle Make/Model",
  },
  {
    label: "Vehicle Engine Number",
    name: "engine_number",
    placeholder: "Enter Vehicle Engine Number",
  },
  {
    label: "Select Date of Procurement",
    name: "date_of_procurement",
    type: "date",
  },
  { label: "Select Date of Delivery", name: "date_of_delivery", type: "date" },
  {
    label: "Procurement Source",
    name: "procurement_source",
    placeholder: "Enter Procurement Source",
  },
  {
    label: "Assigned To",
    name: "assigned_to_under_review",
    placeholder: "Assigned To",
  },
  {
    label: "Select Date of Assignment",
    name: "date_of_assignment",
    type: "date",
  },
  {
    label: "Responsible Officer",
    name: "responsible_officer",
    placeholder: "Responsible Officer",
  },
  {
    label: "Vehicle Status",
    name: "vehicle_status",
    placeholder: "Vehicle Status",
    type: "select",
    options: [
      "Active",
      "Under Maintenance",
      "Pending Maintenance",
      "Awaiting Parts",
      "Out of Service",
      "Scheduled for Service",
      "Overdue for Service",
      "Retired",
      "Awaiting Disposal",
      "Allocated",
      "Pending Delivery",
      "Under Inspection",
      "Damaged",
      "Reserved",
      "Accident Reported",
      "Sold/Disposed",
    ],
  },
].map((field) => ({ ...field, required: true }));

const NewVehicleForm = () => {
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
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <AllInput
        inputs={inputs}
        formData={formData}
        setFormData={setFormData}
        errors={submitStatus?.status == "form_error" ? submitStatus.error : {}}
        inputProps={{ disabled: submitStatus?.status == "submitting" }}
      />

      <Button type="submit" disabled={submitStatus?.status == "submitting"}>
        Add Vehicle
        {submitStatus?.status == "submitting" && (
          <Loader2 className="animate-spin size-4" />
        )}
      </Button>

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
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been saved
            and updated
          </>
        }
      ></SuccessDialog>
      <ErrorDialog
        open={submitStatus?.status == "error"}
        onOpenChange={(open) => !open && setSubmitStatus(null)}
        description={submitStatus?.error}
      ></ErrorDialog>
    </form>
  );
};

export default NewVehicleForm;
