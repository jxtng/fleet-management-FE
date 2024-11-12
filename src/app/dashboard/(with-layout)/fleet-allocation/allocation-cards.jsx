import React from "react";
import allocationMockData from "../../../../data/allocationMockData";
import Image from "next/image";
import { EllipsisVertical, User } from "lucide-react";

const AllocationCards = () => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {allocationMockData.map((allocation) => (
        <div key={allocation.id} className="vehicle-card w-fit group">
          <div className="img-container flex items-center justify-center relative rounded-t-md border-gray-200 border-x-8 border-t-8 h-[100px] overflow-hidden">
            <User className="w-20 h-auto p-2 border-2 border-current rounded-full" />
            <button>
              <EllipsisVertical className="absolute top-1 right-1 text-white" />
            </button>
          </div>
          <div className="info text-xs text-foreground/80 bg-primary p-2 rounded-b-md">
            <p className="font-bold text-sm text-foreground">
              Recipient Name: {allocation.recipientName}
            </p>
            <p>Vehicle ID: {allocation.vehicleID}</p>
            <p>Vehicle Make: {allocation.makeModel}</p>
            <p>Engine Number: {allocation.engineNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllocationCards;
