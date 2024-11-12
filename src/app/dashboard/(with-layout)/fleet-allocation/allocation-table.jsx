import { IconDotsVertical, IconShieldCheckFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import allocationMockData from "./allocationMockData";

const AllocationTable = () => {
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
          <th className="w-[20%]">Recepient Name</th>
          <th className="w-[10%]">Vehicle ID</th>
          <th className="w-fit"> Type</th>
          <th className="w-fit"> Color</th>
          <th className="w-[15%]">Make/Model</th>
          <th className="w-[20%]">Engine Number</th>
          <th className="w-fit">Actions</th>
        </tr>
      </thead>
      <tbody>
        {allocationMockData.map((allocation, index) => {
          return (
            <tr
              key={allocation.id}
              className="*:py-3 border-b-2 even:bg-amber-100/50 even:border-amber-400 odd:bg-green-100/50 odd:border-green-400 hover:even:bg-amber-100 hover:odd:bg-green-100"
            >
              <td className="text-center">
                <input
                  type="checkbox"
                  name={allocation.id}
                  id={allocation.id}
                  className="accent-primary"
                />
              </td>
              <td className="text-center">
                {(index < 9 ? "0" : "") + (index + 1)}
              </td>
              <td className="text-center flex justify-center items-center flex-wrap">
                {allocation.recipientName}
              </td>
              <td className="text-center">{allocation.vehicleID}</td>
              <td className="text-center">{allocation.vehicleType}</td>
              <td className="text-center">{allocation.vehicleColor}</td>
              <td>{allocation.makeModel}</td>
              <td className="text-center">{allocation.engineNumber}</td>
              <td className="text-center">
                <button className="flex text-green-400">
                  <IconShieldCheckFilled size={18} />
                  <IconDotsVertical size={18} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllocationTable;
