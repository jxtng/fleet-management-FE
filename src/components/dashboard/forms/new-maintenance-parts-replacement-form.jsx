"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/ui/form-elements";
import SuccessDialog from "@/components/success-dialog";
import { Banknote } from "lucide-react";

const inputs = [
  { label: "Vehicle ID", name: "vehicleID", placeholder: "Enter Vehicle ID" },
  {
    label: "Part Name/Description",
    name: "partDescription",
    placeholder: "E.g. brake pads, engine oil, air filter",
  },
  { label: "Replacement Date", name: "replacementDate", type: "date" },
  {
    label: "Mileage/Odometer Reading (Km)",
    name: "odometerReading",
    placeholder: "E.g. 100,500 km",
  },
  {
    label: "Part Number",
    name: "partNumber",
    placeholder: "E.g. Brake Parts as BP1234",
  },
  {
    label: "Reason for Replacement",
    name: "replacementReason",
    placeholder: "E.g. Worn out",
  },
  {
    label: "Supplier/Service Provider",
    name: "serviceProvider",
    placeholder: "E.g. ABC Auto Parts",
  },
  {
    label: "Cost of Replacement",
    name: "replacementCost",
    type: "number",
    icon: <Banknote />,
    placeholder: "In Naira",
  },
  { label: "Select Date", name: "selectDate", type: "date" },
  {
    label: "Replaced By",
    name: "replacedBy",
    placeholder: "E.g. Mike Johnson",
  },
  {
    label: "Warranty Information",
    name: "warrantyInfo",
    placeholder: "E.g. No warranty, 6 months, 1 year, etc.",
  },
  {
    label: "Next Replacement Due Date",
    name: "nextReplacementDueDate",
    type: "date",
  },
  {
    label: "Description/Notes/Comments",
    name: "notes",
    type: "textarea",
  },
];

const NewMaintenancePartsReplacementForm = () => {
  const [formData, setFormData] = useState({});

  return (
    <form className="flex flex-col gap-4">
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />

      <SuccessDialog
        title="Parts Replacement Added Successfully"
        description={
          <>
            Parts replacement for Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been
            recorded
          </>
        }
      >
        <Button onClick={() => setFormData({})}>Add</Button>
      </SuccessDialog>
    </form>
  );
};

export default NewMaintenancePartsReplacementForm;
