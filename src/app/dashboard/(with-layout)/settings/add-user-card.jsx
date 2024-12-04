import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AllInput } from "@/components/auth/auth-form-elements";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Loader2 } from "lucide-react";
import { createZodSchema, handleFormSubmitHelper } from "@/lib/form-utils";
import ErrorDialog from "@/components/error-dialog";
import SuccessDialog from "@/components/success-dialog";

const inputs = [
  {
    name: "fullname",
    label: "User Full Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "User Email",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    label: "User Phone Number",
    type: "tel",
    required: true,
  },
];
const AddUserCard = ({ setUserMode, mutate }) => {
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formStatus = await handleFormSubmitHelper({
      formSchema: createZodSchema(inputs),
      formData,
      endPoint: "/settings",
      setSubmitStatus,
      axiosConfig: { headers: {} },
      onError(formStatus) {
        // The below block was meant to be handled on the server side
        console.log(formStatus);
        if (formStatus?.error.includes("duplicate key")) {
          setSubmitStatus({
            ...formStatus,
            error: `Organization with email: ${formData.email} already exists`,
          });
        }
      },
    });

    console.log(formStatus);
  };

  return (
    <Card>
      <CardHeader className="text-secondary flex-row">
        <Button
          onClick={() => setUserMode(false)}
          variant="outline"
          size="icon"
        >
          <ChevronLeft />
        </Button>
        <CardTitle className="mx-auto">Add User</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <AllInput
            {...{ inputs, formData, setFormData }}
            errors={
              submitStatus?.status === "form_error" && submitStatus?.error
            }
          />
          <Button
            type="submit"
            className="w-full"
            disabled={submitStatus?.status === "submitting"}
          >
            Add User
            {submitStatus?.status === "submitting" && (
              <Loader2 className="animate-spin" />
            )}
          </Button>
        </form>
        <SuccessDialog
          open={submitStatus?.status === "success"}
          onOpenChange={() => {
            setSubmitStatus(null);
            setFormData({});
            mutate();
          }}
          title={submitStatus?.data?.message || "User created successfully"}
          description={
            <>User: {formData.fullname}, have been successfully created</>
          }
        />
        <ErrorDialog
          open={submitStatus?.status === "error"}
          onOpenChange={() => setSubmitStatus(null)}
          title={"User creation failed"}
          description={submitStatus?.error}
        />
      </CardContent>
    </Card>
  );
};

export default AddUserCard;
