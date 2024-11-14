import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import inventoryMockData from "@/data/inventoryMockData";
import Image from "next/image";
import InfoCard from "@/components/dashboard/info-card";

const VehicleDetails = async ({ params }) => {
  const { vehicleID } = await params;
  const vehicle = inventoryMockData.find((vehicle) => vehicle.id == vehicleID);
  console.log(vehicle);

  return (
    <div>
      <div className="flex items-center mb-4">
        <Link href="/dashboard/fleet-inventory">
          <Button size="icon" variant="outline">
            <ChevronLeft />
          </Button>
        </Link>
        <h1 className="text-secondary text-xl mx-auto font-bold">
          {vehicle.makeModel}
        </h1>
      </div>

      <div className="p-4 my-4 rounded border border-green-500 bg-green-200">
        Viewing {vehicle.makeModel} details
      </div>

      <div className="flex gap-4">
        <div className="image-area basis-0 grow">
          <img
            src="/images/car.jpg"
            width={80}
            height={66}
            alt={"Image of  " + vehicle.makeModel}
            className="w-full rounded-lg mb-4"
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
            .filter(([key, _]) => !["id", "vehicleImage"].includes(key))
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
