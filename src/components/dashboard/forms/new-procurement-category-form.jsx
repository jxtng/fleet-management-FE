"use client";
import { useState } from "react";
import { AllInput } from "../../ui/form-elements";
import SuccessDialog from "../success-dialog";
import { Button } from "@/components/ui/button";

const NewProcurementCategoryForm = () => {
  const [formData, setFormData] = useState({});
  return (
    <form>
      <AllInput
        inputs={[{ label: "New Category", placeholder: "Create New Category" }]}
        formData={formData}
        setFormData={setFormData}
      />

      <SuccessDialog title="Procurement created successfully">
        <Button className="my-4 w-full">Save &amp; Update</Button>
      </SuccessDialog>
    </form>
  );
};

export default NewProcurementCategoryForm;
