"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/ui/form-elements";
import SuccessDialog from "@/components/success-dialog";

const inputs = [
  {
    label: "Enter Vehicle ID",
    name: "vehicleID",
    placeholder: "Enter Vehicle ID",
  },
  {
    label: "Service Type",
    name: "serviceType",
    placeholder: "E.g Oil change, tire rotation",
  },
  {
    label: "Select Date",
    name: "serviceDate",
    type: "date",
  },
  {
    label: "Notes/Comments",
    name: "notes",
    type: "textarea",
    placeholder: "Enter Notes/Comments",
  },
];

const ScheduleServiceForm = () => {
  const [formData, setFormData] = useState({});

  return (
    <form className="flex flex-col gap-4">
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />

      <SuccessDialog
        title="Service Scheduled Successfully"
        description={
          <>
            Service Schedule for Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicleID}]</strong> have been
            created
          </>
        }
      >
        <Button onClick={() => setFormData({})}>Schedule Service</Button>
      </SuccessDialog>
    </form>
  );
};

export default ScheduleServiceForm;
