"use client";
import { AllInput } from "../../ui/form-elements";
import { Button } from "@/components/ui/button";
import { Banknote, Loader2 } from "lucide-react";

export const inputs = [
  {
    label: "Procurement Type",
    name: "procurementType",
    type: "select",
    options: [
      "Vehicle Procurement",
      "Vehicle Part Procurement",
      "Service Procurement",
    ],
    placeholder: "Select Procurement Type",
    required: true,
  },
  {
    label: "Vendor Name",
    name: "vendorName",
    type: "text",
    placeholder: "Enter Vendor Name",
    required: true,
  },
  {
    label: "Item Description",
    name: "description",
    type: "text",
    placeholder: "E.g N1000",
    required: true,
  },
  {
    label: "Quantity",
    name: "quantity",
    type: "number",
    placeholder: "Enter Number of Items.",
    required: true,
    min: 1,
  },
  {
    label: "Budget Allocation",
    name: "budget",
    type: "number",
    icon: <Banknote />,
    placeholder: "In Naira",
    required: true,
  },
  {
    label: "Priority Level",
    name: "priorityLevel",
    type: "select",
    options: ["Low", "Medium", "High"],
    placeholder: "Select Priority Level",
    required: true,
  },
];

const ProcurementRequestForm = ({
  formData,
  setFormData,
  handleFormSubmit,
  submitStatus,
  control,
}) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <AllInput
        inputs={inputs}
        formData={formData}
        setFormData={setFormData}
        errors={submitStatus?.status === "form_error" && submitStatus?.error}
      />

      {control ? (
        control
      ) : (
        <Button
          className="my-4 w-full"
          type="submit"
          disabled={submitStatus?.status === "submitting"}
        >
          Create Request
          {submitStatus?.status === "submitting" && (
            <Loader2 className="animate-spin size-4" />
          )}
        </Button>
      )}
    </form>
  );
};

export default ProcurementRequestForm;
