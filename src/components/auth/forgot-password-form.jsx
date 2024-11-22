"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AllInput } from "./auth-form-elements";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Forgot Password Form Submit Logic Coming Soon...
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="self-stretch flex flex-col gap-4"
    >
      <Tabs defaultValue="email">
        <TabsList className="w-full my-4">
          <TabsTrigger value="email">Use Email</TabsTrigger>
          <TabsTrigger value="phone">Use Phone</TabsTrigger>
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
                placeholder: "7012345678",
                icon: (
                  <div>
                    <svg
                      width={70}
                      height={23}
                      viewBox="0 0 70 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="Frame 1">
                        <rect
                          id="rect1"
                          y={3}
                          width={10}
                          height={18}
                          fill="#008751"
                        />
                        <rect
                          id="rect2"
                          x={10}
                          y={3}
                          width={10}
                          height={18}
                          fill="white"
                        />
                        <rect
                          id="rect3"
                          x={20}
                          y={3}
                          width={10}
                          height={18}
                          fill="#008751"
                        />
                        <text
                          id={234}
                          fill="currentColor"
                          xmlSpace="preserve"
                          style={{
                            whiteSpace: "pre",
                          }}
                          fontSize={14}
                          letterSpacing="0em"
                        >
                          <tspan x={33} y={17.3936}>
                            {"+234"}
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                ),
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
