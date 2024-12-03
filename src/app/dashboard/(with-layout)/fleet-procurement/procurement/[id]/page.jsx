"use client";
import React from "react";
import { FullLoader, ErrorLoader } from "@/components/loader";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios";
import SubHeader from "@/components/dashboard/sub-header";

const ViewProcurement = () => {
  const { id: procurementId } = useParams();
  const { data, error, isLoading } = useSWR(
    `/procurement/${procurementId}`,
    (url) =>
      axiosInstance.get(url).then((response) => response?.data.data[0] ?? {})
  );

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

  return (
    <div>
      <SubHeader
        title={<>Procurement Details of Order Number: {data.orderNumber}</>}
        description={
          <>
            Viewing procurement details with vendor:{" "}
            <strong>{data?.vendorName}</strong>
          </>
        }
      />

      <div className="flex gap-4">
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

export default ViewProcurement;
