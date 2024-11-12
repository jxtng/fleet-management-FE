import { IconDotsVertical, IconShieldCheckFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import procurementMockData from "./procurementMockData";

const ProcurementTable = () => {
  return (
    <table className="table-fixed w-full rounded-xl text-sm">
      <thead summary="Vehicle Procurements Table">
        <tr className="*:py-3 bg-primary text-white">
          <th className="w-fit">
            <input
              type="checkbox"
              name="allTrips"
              id="allTrips"
              className="accent-primary"
            />
          </th>

          <th>SN</th>
          <th>Order Number</th>
          <th>Type</th>
          <th>Vendor</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Total Cost</th>
          <th>Delivery Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {procurementMockData.map((procurement, index) => {
          return (
            <tr
              key={procurement.id}
              className="*:py-3 border-b-2 even:bg-amber-100/50 even:border-amber-400 odd:bg-green-100/50 odd:border-green-400 hover:even:bg-amber-100 hover:odd:bg-green-100"
            >
              <td className="text-center">
                <input
                  type="checkbox"
                  name={procurement.id}
                  id={procurement.id}
                  className="accent-primary"
                />
              </td>
              <td className="text-center">{procurement.sn}</td>
              <td className="text-center flex justify-center items-center flex-wrap">
                {procurement.orderNumber}
              </td>
              <td className="text-center">{procurement.procurementType}</td>
              <td className="text-center">{procurement.vendor}</td>
              <td>{procurement.itemDescription}</td>
              <td className="text-center">{procurement.quantity}</td>
              <td className="text-center">{procurement.totalCost}</td>
              <td className="text-center">{procurement.deliveryStatus}</td>
              <td className="text-right">
                <button className="flex justify-center text-green-400 w-full">
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

export default ProcurementTable;
