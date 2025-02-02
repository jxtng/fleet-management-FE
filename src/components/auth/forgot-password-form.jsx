"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AllInput } from "./auth-form-elements";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { Phone } from "lucide-react";

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Forgot Password Form Submit Logic Coming Soon...

    router.push("/auth/forgot-password/verify");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="self-stretch flex flex-col gap-4"
    >
      <Tabs defaultValue="email">
        <TabsList className="w-full my-4">
          <TabsTrigger value="email" className="revert">
            Use Email
          </TabsTrigger>
          <TabsTrigger value="phone" className="revert">
            Use Phone
          </TabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <AllInput
            inputs={[
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "fleetmanager@gmail.com",
                icon: <Mail className="w-5 h-5" />,
                required: true,
              },
            ]}
            formData={formData}
            setFormData={setFormData}
          />
        </TabsContent>
        <TabsContent value="phone">
          <AllInput
            inputs={[
              {
                label: "Phone Number",
                name: "phone",
                type: "tel",
                placeholder: "07012345678",
                icon: <Phone />,
                inputClassName: "pl-20",
                pattern: "\\d{10}",
                required: true,
              },
            ]}
            formData={formData}
            setFormData={setFormData}
          />
        </TabsContent>
      </Tabs>
      <Button type="submit">Request Confirmation Code</Button>
    </form>
  );
};

export default ForgotPasswordForm;
