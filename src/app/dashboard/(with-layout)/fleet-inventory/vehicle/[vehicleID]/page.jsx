"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import InfoCard from "@/components/dashboard/info-card";
import { useParams, useRouter } from "next/navigation";
import ErrorDialog from "@/components/error-dialog";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";

const VehicleDetails = () => {
  const { vehicleID } = useParams();
  const {
    data: response,
    isLoading,
    error,
  } = useSWR("vehicle/vehicle-record", axiosInstance.get);
  const router = useRouter();

  if (error) {
    return (
      <ErrorDialog
        title={error.message}
        description="Reload the page to try again"
        defaultOpen
      ></ErrorDialog>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen rounded bg-muted animate-pulse">
        <Loader2 className="animate-spin size-10" />
      </div>
    );
  }

  const vehicle =
    response?.data.data.find((vehicle) => vehicle._id == vehicleID) ?? {};

  return (
    <div>
      <div className="flex items-center mb-4">
        <Link href="/dashboard/fleet-inventory">
          <Button size="icon" variant="outline">
            <ChevronLeft />
          </Button>
        </Link>
        <h1 className="text-secondary text-xl mx-auto font-bold">
          {vehicle.vehicle_model}
        </h1>
      </div>

      <div className="p-4 my-4 rounded border border-green-500 bg-green-200">
        Viewing {vehicle.vehicle_model} details
      </div>

      <div className="flex gap-4">
        <div className="image-area basis-0 grow">
          <img
            src={vehicle.img ?? vehicle.procurement_img}
            alt={"Image of  " + vehicle.vehicle_model}
            className="w-full rounded-lg mb-4 min-h-40 object-cover object-left-top"
          />
          <InfoCard
            title="Procurement Document"
            details={[
              <Link
                key="viewLink"
                href="#"
                className="underline underline-offset-4"
              >
                View
              </Link>,
            ]}
          />
        </div>
        <ul className="info-area basis-0 grow">
          {Object.entries(vehicle)
            .filter(
              ([key, _]) =>
                !(["__v", "image"].includes(key) || key.includes("img"))
            )
            .map(([key, value]) => (
              <li
                key={key + value}
                className="p-3 border-b even:bg-green-100 even:border-green-500 odd:bg-red-100 odd:border-red-500"
              >
                <span className="capitalize text-muted-foreground">
                  {key.replace(/((?<=[^A-Z])[A-Z])/g, " $1")}
                </span>
                : {value}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VehicleDetails;
