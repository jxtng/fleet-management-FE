"use client";
import React from "react";
import SuccessDialog from "@/components/success-dialog";
import { useState } from "react";
import ErrorDialog from "@/components/error-dialog";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import ProcurementRequestForm, {
  inputs,
} from "@/components/dashboard/forms/new-procurement-request-form";
import SubHeader from "@/components/dashboard/sub-header";

const NewProcurementRequest = () => {
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
    <>
      <SubHeader
        title="Create New Procurement Request"
        description="Create New Procurement Request"
      />

      <ProcurementRequestForm
        {...{ formData, setFormData, submitStatus, handleFormSubmit }}
      />

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
    </>
  );
};

export default NewProcurementRequest;
