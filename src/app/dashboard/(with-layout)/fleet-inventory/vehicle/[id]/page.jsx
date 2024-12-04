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
import SubHeader from "@/components/dashboard/sub-header";
import { ErrorLoader, FullLoader } from "@/components/loader";

const VehicleDetails = () => {
  const { id: vehicleId } = useParams();
  const { data, isLoading, error } = useSWR(
    `vehicle/vehicle-record/${vehicleId}`,
    (url) => axiosInstance.get(url).then((response) => response.data.data)
  );

  if (error) {
    return (
      <ErrorLoader
        className="inset-4 rounded-2xl"
        title="Error fetching vehicle details"
        label={error?.message ?? "Refreshing the page might help"}
      />
    );
  }

  if (isLoading) {
    return (
      <FullLoader
        label="Loading vehicle details"
        className="inset-4 rounded-2xl"
      />
    );
  }

  return (
    <div>
      <SubHeader
        title={data.vehicle_model.toUpperCase()}
        description={
          <>
            Viewing <strong>{data?.vehicle_model.toUpperCase()}</strong> details
          </>
        }
      />

      <div className="flex gap-4">
        <div className="image-area basis-0 grow">
          <img
            src={data.img ?? data.procurement_img}
            alt={"Image of  " + data.vehicle_model}
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
          {Object.entries(data)
            .filter(
              ([key, _]) =>
                !(["__v", "image", "_id"].includes(key) || key.includes("img"))
            )
            .map(([key, value]) => (
              <li
                key={key + value}
                className="p-3 border-b even:bg-green-100 even:border-green-500 odd:bg-red-100 odd:border-red-500"
              >
                <span className="capitalize text-muted-foreground">
                  {key.replace(/((?<=[^A-Z])[A-Z])/g, " $1").replace("_", " ")}
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
