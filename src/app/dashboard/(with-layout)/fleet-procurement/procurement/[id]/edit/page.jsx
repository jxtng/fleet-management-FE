"use client";
import { useState } from "react";
import SuccessDialog from "@/components/success-dialog";
import ErrorDialog from "@/components/error-dialog";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import ProcurementRequestForm, {
  inputs,
} from "@/components/dashboard/forms/new-procurement-request-form";
import SubHeader from "@/components/dashboard/sub-header";
import useSWR, { useSWRConfig } from "swr";
import { useParams } from "next/navigation";
import { ErrorLoader, FullLoader } from "@/components/loader";
import { axiosInstance } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const EditProcurement = () => {
  const [formData, setFormData] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { id: procurementId } = useParams();
  const { data, error, isLoading } = useSWR(
    `/procurement/${procurementId}`,
    (url) =>
      axiosInstance.get(url).then((response) => response?.data.data[0] ?? {})
  );
  const { mutate } = useSWRConfig();

  if (isLoading) {
    return (
      <FullLoader
        className="inset-4 rounded-2xl"
        label="Loading Procurement Info"
      />
    );
  }

  if (error) {
    return (
      <ErrorLoader
        className="inset-4 rounded-2xl"
        title={"An error occured fetching procurement details"}
        label={error?.message}
      />
    );
  }

  if (!formData) setFormData(data);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formStatus = await handleFormSubmitHelper({
      formSchema: createZodSchema(inputs),
      formData,
      endPoint: `/procurement/${procurementId}`,
      method: "patch",
      setSubmitStatus,
      axiosConfig: { headers: {} },
    });

    console.log(formStatus);
  };

  return (
    <>
      <SubHeader
        title="Edit Procurement Request"
        description="Create New Procurement Request"
      />

      <ProcurementRequestForm
        {...{ formData, setFormData, submitStatus, handleFormSubmit }}
        control={
          <div className="control flex flex-col gap-2 my-4">
            <Button
              type="submit"
              disabled={submitStatus?.status === "submitting"}
            >
              Update Request
              {submitStatus?.status === "submitting" && (
                <Loader2 className="animate-spin size-4" />
              )}
            </Button>
            <Button
              type="reset"
              variant="outline"
              disabled={submitStatus?.status === "submitting"}
              onClick={() => setFormData(data)}
            >
              Reset
            </Button>
          </div>
        }
      />

      <SuccessDialog
        open={submitStatus?.status === "success"}
        onOpenChange={() => {
          setSubmitStatus(null);
          setFormData({});
          mutate(`/procurement/${procurementId}`);
          mutate(`/procurement`);
        }}
        title={
          submitStatus?.data?.message ||
          "Procurement request updated successfully"
        }
        description={
          <>
            Procurement Request for vendor {formData?.vendorName}, have been
            successfully updated
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

export default EditProcurement;
