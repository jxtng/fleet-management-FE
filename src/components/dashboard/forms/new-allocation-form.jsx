"use client";
import { useState } from "react";
import SuccessDialog from "@/components/dashboard/success-dialog";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/dashboard/forms/form-elements";

const inputs = [
  { label: "Vehicle ID", name: "vehicleID", placeholder: "Vehicle ID" },
  {
    label: "Vehicle Plate Number",
    name: "plateNumber",
    placeholder: "Vehicle Plate Number",
  },
  {
    label: "Vehicle Type",
    name: "vehicleType",
    placeholder: "Vehicle Type",
  },
  {
    label: "Vehicle Color",
    name: "vehicleColor",
    placeholder: "Vehicle Color",
  },

  {
    label: "Vehicle Make/Model",
    name: "makeModel",
    placeholder: "Vehicle Make/Model",
  },
  {
    label: "Vehicle Engine Number",
    name: "engineNumber",
    placeholder: "Vehicle Engine Number",
  },
  {
    label: "Name of Recipient",
    name: "recipientName",
    placeholder: "Name of Recipient",
  },
  {
    label: "Position of Government  Occupied By Recipient",
    name: "governmentPosition",
    placeholder: "Government Position ",
  },
  { label: "Select Date of Assignment", name: "assignmentDate", type: "date" },
  {
    label: "Recipient Contact",
    name: "recipientContact",
    placeholder: "Driver’s Contact",
  },
  {
    label: "Recipient Mode of ID",
    name: "recipientIDMode",
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
    label: "Recipient  ID",
    type: "file",
    fileTypes: ["application/pdf", "image/*"],
    name: "recipientID",
    placeholder: "Upload Recipient ID",
  },
  {
    label: "Vehicle Status",
    type: "select",
    name: "vehicleStatus",
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
    label: "All Vehicle Particulars have been Given to Recipient?",
    type: "select",
    name: "recievedParticulars",
    options: ["Yes", "No", "Pending"],
    placeholder: "Select Option",
  },
  {
    label: "Responsible Officer",
    name: "responsibleOfficer",
    placeholder: "Responsible Officer",
  },
];
const NewAllocationForm = () => {
  const [formData, setFormData] = useState({});
  return (
    <form className="flex flex-col gap-4">
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />

      <SuccessDialog
        title="Vehicle Allocation Successful"
        description={
          <>
            Allocation of Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been saved
            and updated
          </>
        }
      >
        <Button onClick={() => setFormData({})}>Save &amp; Update</Button>
      </SuccessDialog>
    </form>
  );
};

export default NewAllocationForm;
