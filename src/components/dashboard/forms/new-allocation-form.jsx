"use client";
import { useState } from "react";
import SuccessDialog from "@/components/success-dialog";
import { Button } from "@/components/ui/button";
import { AllInput } from "@/components/ui/form-elements";
import { axiosInstance } from "@/lib/axios";
import { createErrors, createZodSchema } from "@/lib/form-utils";
import { Loader2 } from "lucide-react";
import ErrorDialog from "@/components/error-dialog";

const inputs = [
  {
    label: "Vehicle ID",
    name: "vehicle_id",
    placeholder: "Vehicle ID",
    required: true,
  },
  {
    label: "Vehicle Plate Number",
    name: "plate_number",
    placeholder: "Vehicle Plate Number",
    required: true,
  },
  {
    label: "Vehicle Type",
    name: "vehicle_type",
    placeholder: "Vehicle Type",
    required: true,
  },
  {
    label: "Vehicle Color",
    name: "vehicle_color",
    placeholder: "Vehicle Color",
    required: true,
  },

  {
    label: "Vehicle Make/Model",
    name: "vehicle_model",
    placeholder: "Vehicle Make/Model",
    required: true,
  },
  {
    label: "Vehicle Engine Number",
    name: "engine_number",
    placeholder: "Vehicle Engine Number",
    required: true,
  },
  {
    label: "Name of Recipient",
    name: "name_of_recipient",
    placeholder: "Name of Recipient",
    required: true,
  },
  {
    label: "Position of Government  Occupied By Recipient",
    name: "position_of_recipient",
    placeholder: "Government Position ",
    required: true,
  },
  {
    label: "Select Date of Allocation",
    name: "date_of_allocation",
    type: "date",
    required: true,
  },
  {
    label: "Recipient Contact",
    name: "recipient_contact",
    placeholder: "Driver’s Contact",
    required: true,
  },
  {
    label: "Recipient Mode of ID",
    name: "recipient_id_type",
    type: "select",
    options: [
      "Civil Service ID",
      "Voters Card",
      "NIN",
      "International Passport",
    ],
    placeholder: "Driver's Contact",
    required: true,
  },
  {
    label: "Recipient  ID",
    type: "file",
    fileTypes: ["application/pdf", "image/jpg", "image/png", "image/jpeg"],
    name: "recipient_img_id",
    placeholder: "Upload Recipient ID",
    required: true,
  },
  {
    label: "Vehicle Status",
    type: "select",
    name: "vehicle_status",
    options: [
      "Active",
      "Inactive",
      "Under Maintenance",
      "In Service",
      "Out of Service",
    ],
    placeholder: "Select Vehicle Status",
    required: true,
  },
  {
    label: "All Vehicle Particulars have been Given to Recipient?",
    type: "select",
    name: "vehicle_particulars_status",
    options: ["Yes", "No", "Pending"],
    placeholder: "Select Option",
    required: true,
  },
  {
    label: "Responsible Officer",
    name: "responsible_officer",
    placeholder: "Responsible Officer",
    required: true,
  },
];
const newAllocationFormSchema = createZodSchema(inputs);

const NewAllocationForm = () => {
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validatedFormData = newAllocationFormSchema.safeParse(formData);

    if (!validatedFormData.success) {
      setErrors(createErrors(validatedFormData.error));
      return;
    } else setErrors(null);

    setSubmitStatus("submitting");
    try {
      const response = await axiosInstance.post(
        "/allocation/allocate",
        validatedFormData.data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFormData({});
      setSubmitStatus({ status: "success", message: response.data.message });
    } catch (err) {
      console.log(err);
      setSubmitStatus({
        status: "error",
        message: err.response?.data?.message ?? err.message,
      });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <AllInput
        inputs={inputs}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        inputProps={{ disabled: submitStatus == "submitting" }}
      />

      <Button
        type="submit"
        onClick={handleFormSubmit}
        disabled={submitStatus == "submitting"}
      >
        Save &amp; Update
        {submitStatus == "submitting" && <Loader2 className="animate-spin" />}
      </Button>
      <SuccessDialog
        open={submitStatus?.status == "success"}
        onOpenChange={() => setSubmitStatus(null)}
        title={submitStatus?.message}
        description={
          <>
            Allocation of Vehicle{" "}
            <strong>[Vehicle ID: {formData.vehicle_id}]</strong> have been saved
            and updated
          </>
        }
      ></SuccessDialog>

      <ErrorDialog
        open={submitStatus?.status == "error"}
        onOpenChange={() => setSubmitStatus(null)}
        description={<>{submitStatus?.message}</>}
      ></ErrorDialog>
    </form>
  );
};

export default NewAllocationForm;
