"use client";
import { useState } from "react";
import SuccessDialog from "@/components/success-dialog";
import ErrorDialog from "@/components/error-dialog";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import SubHeader from "@/components/dashboard/sub-header";
import useSWR, { useSWRConfig } from "swr";
import { useParams } from "next/navigation";
import { ErrorLoader, FullLoader } from "@/components/loader";
import { axiosInstance } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import VehicleForm, {
  inputs,
} from "@/components/dashboard/forms/new-vehicle-form";

const EditVehicle = () => {
  const [formData, setFormData] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { id: vehicleId } = useParams();
  const { data, error, isLoading } = useSWR(
    `/vehicle/vehicle-record/${vehicleId}`,
    (url) => axiosInstance.get(url).then((response) => response?.data?.data)
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
      endPoint: `/vehicle/vehicle-record/${vehicleId}`,
      method: "patch",
      setSubmitStatus,
    });
  };

  return (
    <>
      <SubHeader
        title="Update Vehicle Details"
        description={`Editing vehicle details for ${formData?.vehicle_model}`}
      />

      <VehicleForm
        {...{ formData, setFormData, submitStatus, handleFormSubmit }}
        control={
          <div className="control flex flex-col gap-2 my-4">
            <Button
              type="submit"
              disabled={submitStatus?.status === "submitting"}
            >
              Update details
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
          mutate(`/vehicle/vehicle-record/${vehicleId}`);
          mutate(`/vehicle/vehicle-record`);
        }}
        title={
          submitStatus?.data?.message || "Vehicle details updated successfully"
        }
        description={
          <>
            Vehicle with model: {formData?.vehicle_model}, have been
            successfully updated
          </>
        }
      />
      <ErrorDialog
        open={submitStatus?.status === "error"}
        onOpenChange={() => setSubmitStatus(null)}
        title={"Update failed"}
        description={submitStatus?.error}
      />
    </>
  );
};

export default EditVehicle;
