"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/ui/form-elements";
import SuccessDialog from "@/components/dashboard/success-dialog";

const inputs = [
  {
    label: "Upload Vehicle Image",
    name: "vehicleImage",
    type: "file",
    fileTypes: ["image/jpeg", "image/png", "image/jpg"],
  },
  {
    label:
      "Upload of procurement documents, such as invoices, approval letters, and delivery receipts.(Organize Them in one File)",
    name: "procurementDocuments",
    type: "file",
    fileTypes: ["application/pdf", "image/jpeg", "image/png", "image/jpg"],
  },
  { label: "Vehicle ID", name: "vehicleID", placeholder: "Enter Vehicle ID" },
  {
    label: "Vehicle Plate Number",
    name: "vehiclePlateNumber",
    placeholder: "Enter Vehicle Plate Number",
  },
  {
    label: "Vehicle Make/Model",
    name: "vehicleMakeModel",
    placeholder: "Enter Vehicle Make/Model",
  },
  {
    label: "Vehicle Engine Number",
    name: "vehicleEngineNumber",
    placeholder: "Enter Vehicle Engine Number",
  },
  {
    label: "Select Date of Procurement",
    name: "procurementDate",
    type: "date",
  },
  { label: "Select Date of Delivery", name: "deliveryDate", type: "date" },
  {
    label: "Procurement Source",
    name: "procurementSource",
    placeholder: "Enter Procurement Source",
  },
  { label: "Assigned To", name: "assignedTo", placeholder: "Assigned To" },
  { label: "Select Date of Assignment", name: "assignmentDate", type: "date" },
  {
    label: "Responsible Officer",
    name: "responsibleOfficer",
    placeholder: "Responsible Officer",
  },
  {
    label: "Vehicle Status",
    name: "vehicleStatus",
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
];

const NewVehicleForm = () => {
  const [formData, setFormData] = useState({});

  return (
    <form className="flex flex-col gap-4">
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />

      <SuccessDialog
        title="Vehicle Successfully added to Fleet inventory"
        description={
          <>
            Fleet Inventory of Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been saved
            and updated
          </>
        }
      >
        <Button onClick={() => setFormData({})}>Add Vehicle</Button>
      </SuccessDialog>
    </form>
  );
};

export default NewVehicleForm;
