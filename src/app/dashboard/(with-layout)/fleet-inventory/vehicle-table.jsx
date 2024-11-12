import { EllipsisVertical, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

import vehicleMockData from "./vehicleMockData";

const VehicleTable = () => {
  return (
    <table className="table-fixed w-full rounded-xl text-sm">
      <thead>
        <tr className="*:py-3 bg-primary text-foreground">
          <th className="w-fit pl-1">
            <input
              type="checkbox"
              name="allTrips"
              id="allTrips"
              className="accent-primary"
            />
          </th>
          <th className="w-fit">SN</th>
          <th className="w-[15%]">Vehicle Image</th>
          <th className="w-[20%]">Vehicle ID/Inventory ID</th>
          <th className="w-fit"> Type</th>
          <th className="w-[15%]">Make/Model</th>
          <th className="w-[20%]">Engine Number</th>
          <th className="w-fit">Actions</th>
        </tr>
      </thead>
      <tbody>
        {vehicleMockData.map((vehicle, index) => {
          return (
            <tr
              key={vehicle.id}
              className="*:py-3 border-b-2 even:bg-amber-100/50 even:border-amber-400 odd:bg-green-100/50 odd:border-green-400 hover:even:bg-amber-100 hover:odd:bg-green-100"
            >
              <td className="text-center">
                <input
                  type="checkbox"
                  name={vehicle.id}
                  id={vehicle.id}
                  className="accent-primary"
                />
              </td>
              <td className="text-center">
                {(index < 9 ? "0" : "") + (index + 1)}
              </td>
              <td className="text-center flex justify-center items-center flex-wrap">
                <Image
                  src="/images/car.jpeg"
                  width={80}
                  height={66}
                  alt={"Image of vehicle with id " + vehicle.id}
                />
              </td>
              <td className="text-center">{vehicle.vehicleID}</td>
              <td className="text-center">{vehicle.vehicleType}</td>
              <td>{vehicle.makeModel}</td>
              <td className="text-center">{vehicle.engineNumber}</td>
              <td className="text-center">
                <button className="flex text-green-400">
                  <ShieldCheck size={18} />
                  <EllipsisVertical size={18} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default VehicleTable;
