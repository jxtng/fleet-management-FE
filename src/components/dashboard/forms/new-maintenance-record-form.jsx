"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/ui/form-elements";
import SuccessDialog from "@/components/success-dialog";
import { Banknote, Loader2 } from "lucide-react";
import ErrorDialog from "@/components/error-dialog";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";

const inputs = [
  {
    label: "Enter Vehicle ID",
    name: "vehicle_id",
    placeholder: "Enter Vehicle ID",
  },
  {
    label: "Select Date",
    name: "date",
    type: "date",
  },
  {
    label: "Type of Maintenance",
    name: "type_of_maintenance",
    placeholder: "Select Maintenance Type",
    type: "select",
    options: [
      "Preventive Maintenance (PM)",
      "Corrective Maintenance",
      "Scheduled Maintenance,",
    ],
  },
  {
    label: "Description of Maintenance",
    name: "description_maintenance",
    placeholder: "E.g Oil change, tire rotation",
  },
  {
    label: "Maintenance Cost (₦)",
    name: "maintenance_cost",
    type: "number",
    placeholder: "In Naira",
    icon: <Banknote />,
  },
  {
    label: "Mileage (km)",
    name: "milage",
    type: "number",
    placeholder: "E.g 45,000",
  },
  {
    label: "Maintenance Provider",
    name: "maintenance_provider",
    placeholder: "E.g PineAuto Services",
  },
  {
    label: "Invoice",
    name: "invoice_img_url",
    type: "file",
    fileTypes: ["image/jpeg", "image/png", "image/jpg"],
  },
].map((field) => ({ ...field, required: true }));

const NewMaintenanceRecordForm = () => {
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleFormSubmitHelper({
      formSchema: createZodSchema(inputs),
      formData,
      endPoint: "/maintainers/maintenance-record",
      setSubmitStatus,
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <AllInput
        inputs={inputs}
        formData={formData}
        setFormData={setFormData}
        errors={submitStatus?.status == "form_error" && submitStatus?.error}
        inputProps={{ disabled: submitStatus?.status == "submitting" }}
      />

      <Button type="submit" disabled={submitStatus?.status == "submitting"}>
        Add Maintenance Record
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
        title={submitStatus?.data?.message ?? "Record Successfully Created"}
        description={
          <>
            Maintenance Record of Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been saved
            and updated
          </>
        }
      />
      <ErrorDialog
        open={submitStatus?.status == "error"}
        onOpenChange={() => setSubmitStatus(null)}
        description={
          <>
            {submitStatus?.error} <br />
            {submitStatus?.data?.details}
          </>
        }
      />
    </form>
  );
};

export default NewMaintenanceRecordForm;
