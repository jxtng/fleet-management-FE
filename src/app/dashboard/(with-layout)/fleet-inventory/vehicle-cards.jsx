import React from "react";

import vehicleMockData from "./vehicleMockData";
import Image from "next/image";
import { IconDotsVertical } from "@tabler/icons-react";

const VehicleCards = () => {
  const { vehicleID, vehicleType, makeModel, engineNumber } =
    vehicleMockData[0];

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {vehicleMockData.map((vehicle) => (
        <div className="vehicle-card w-fit group">
          <div className="img-container relative rounded-t-md border-gray-200 border-x-8 border-t-8 h-[100px] overflow-hidden">
            <Image
              src="/images/car.jpeg"
              width={80}
              height={66}
              alt={"Image of vehicle with id " + vehicle.id}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
            />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <button>
              <IconDotsVertical className="absolute top-1 right-1 text-white" />
            </button>
          </div>
          <div className="info text-xs text-foreground/80 bg-primary p-2 rounded-b-md">
            <p className="font-bold text-sm text-foreground">
              Vehicle ID: {vehicle.vehicleID}
            </p>
            <p>Vehicle Type: {vehicle.vehicleType}</p>
            <p>Vehicle Make: {vehicle.makeModel}</p>
            <p>Engine Number: {vehicle.engineNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleCards;
