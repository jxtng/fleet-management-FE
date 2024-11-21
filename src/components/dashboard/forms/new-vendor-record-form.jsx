"use client";
import { useState } from "react";
import { AllInput } from "../../ui/form-elements";
import SuccessDialog from "../success-dialog";
import { Button } from "@/components/ui/button";

const inputs = [
  {
    label: "Vendor Name",
    type: "text",
    placeholder: "Enter name of the vendor company",
    name: "vendorName",
  },
  {
    label: "Vendor Category",
    type: "select",
    options: ["Spare Parts", "Vehicles", "Office Supplies", "IT Equipment"], // Example options
    placeholder: "Enter name of the Vendor Category",
    name: "vendorCategory",
  },
  {
    label: "Company Registration Number",
    type: "text",
    placeholder: "Enter Company Registration Number",
    name: "registrationNumber",
  },
  {
    label: "Company Email Address",
    type: "email",
    placeholder: "Enter Company Email Address",
    name: "emailAddress",
  },
  {
    label: "Company Phone Contact",
    type: "tel",
    placeholder: "Enter Company Phone Contact",
    name: "phoneContact",
  },
  {
    label: "Company Address",
    type: "text",
    placeholder: "Enter Company Address",
    name: "address",
  },
  {
    label: "Company Website URL",
    type: "url",
    placeholder: "Enter Company Website URL",
    name: "websiteUrl",
  },
  {
    label: "Primary Contact Name",
    type: "text",
    placeholder: "E.g. John Ikemefuna",
    name: "primaryContactName",
  },
  {
    label: "Quantity",
    type: "number",
    placeholder: "Enter Number of Items",
    name: "quantity",
  },
  {
    label: "Contract Start Date",
    type: "date",
    name: "contractStartDate",
  },
  {
    label: "Contract Expiry Date",
    type: "date",
    name: "contractExpiryDate",
  },
  {
    label: "Notes/Additional Information",
    type: "text",
    placeholder: "E.g. N1000",
    name: "additionalInformation",
  },
];

const NewVendorRecordForm = () => {
  const [formData, setFormData] = useState({});

  return (
    <form className="flex flex-col gap-4">
      <AllInput inputs={inputs} formData={formData} setFormData={setFormData} />

      <SuccessDialog
        title="Vendor successfully onboarded"
        description="The vendor has been onboarded! Begin building a strong business relationship."
      >
        <Button className="my-4 w-full">Create Record </Button>
      </SuccessDialog>
    </form>
  );
};

export default NewVendorRecordForm;
