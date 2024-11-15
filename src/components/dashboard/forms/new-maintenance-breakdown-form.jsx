"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/dashboard/forms/form-elements";
import SuccessDialog from "@/components/dashboard/success-dialog";

const inputs = [
  {
    label: "Enter Incident ID",
    name: "incidentID",
    placeholder: "Enter Incident ID",
  },
  {
    label: "Enter Vehicle ID",
    name: "vehicleID",
    placeholder: "Enter Vehicle ID",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Enter location of incident",
  },
  {
    label: "Select Incident Date",
    name: "incidentDate",
    type: "date",
  },
  {
    label: "Notes/Comments",
    name: "notes",
    type: "textarea",
    placeholder: "Enter Notes/Comments",
  },
];

const NewMaintenanceBreakdownForm = () => {
  const [formData, setFormData] = useState({});

  return (
    <form className="flex flex-col gap-4">
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />

      <SuccessDialog
        title="Breakdown Incident Reported Successfully"
        description={
          <>
            Breakdown for Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been
            reported
          </>
        }
      >
        <Button onClick={() => setFormData({})}>Report</Button>
      </SuccessDialog>
    </form>
  );
};

export default NewMaintenanceBreakdownForm;
