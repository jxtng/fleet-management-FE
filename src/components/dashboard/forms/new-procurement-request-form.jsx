"use client";
import { useState } from "react";
import { AllInput } from "../../ui/form-elements";
import SuccessDialog from "../../success-dialog";
import { Button } from "@/components/ui/button";
import ErrorDialog from "@/components/error-dialog";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import { Banknote, Loader2 } from "lucide-react";

const inputs = [
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

const NewProcurementRequestForm = () => {
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formStatus = await handleFormSubmitHelper({
      formSchema: createZodSchema(inputs),
      formData,
      endPoint: "/procurement",
      setSubmitStatus,
      axiosConfig: { headers: {} },
    });

    console.log(formStatus);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <AllInput
        inputs={inputs}
        formData={formData}
        setFormData={setFormData}
        errors={submitStatus?.status === "form_error" && submitStatus?.error}
      />

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

      <SuccessDialog
        open={submitStatus?.status === "success"}
        onOpenChange={() => {
          setSubmitStatus(null);
          setFormData({});
        }}
        title={
          submitStatus?.data?.message ||
          "Procurement request created successfully"
        }
        description={
          <>
            Procurement Request for vendor {formData.vendorName}, have been
            successfully created
          </>
        }
      />
      <ErrorDialog
        open={submitStatus?.status === "error"}
        onOpenChange={() => setSubmitStatus(null)}
        title={"Procurement request creation failed"}
        description={submitStatus?.error}
      />
    </form>
  );
};

export default NewProcurementRequestForm;
