"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AllInput } from "./form-elements";
import SuccessDialog from "./success-dialog";
import { Banknote } from "lucide-react";

const inputs = [
  {
    label: "Enter Vehicle ID",
    name: "vehicleID",
    placeholder: "Enter Vehicle ID",
  },
  {
    label: "Select Date",
    name: "date",
    type: "date",
  },
  {
    label: "Type of Maintenance",
    name: "maintenanceType",
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
    name: "maintenanceDescription",
    placeholder: "E.g Oil change, tire rotation",
  },
  {
    label: "Maintenance Cost (₦)",
    name: "maintenanceCost",
    type: "number",
    placeholder: "In Naira",
    icon: <Banknote />,
  },
  {
    label: "Mileage (km)",
    name: "mileage",
    type: "number",
    placeholder: "E.g 45,000",
  },
  {
    label: "Maintenance Provider",
    name: "maintenanceProvider",
    placeholder: "E.g PineAuto Services",
  },
  {
    label: "Invoice",
    name: "invoice",
    type: "file",
    fileTypes: ["application/pdf", "image/jpeg", "image/png", "image/jpg"],
  },
];

const NewMaintainanceRecordForm = () => {
  const [formData, setFormData] = useState({});

  return (
    <form className="flex flex-col gap-4">
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />

      <SuccessDialog
        title="Vehicle Successfully added to Fleet inventory"
        description={
          <>
            Maintainance Record of Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been saved
            and updated
          </>
        }
      >
        <Button onClick={() => setFormData({})}>Add Maintainance Record</Button>
      </SuccessDialog>
    </form>
  );
};

export default NewMaintainanceRecordForm;
