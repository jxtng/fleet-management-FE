import React from "react";
import UserIcon from "@/icons/user";

const tripsMockData = [
  {
    id: 1,
    driver: "Chinedu Ikwuere",
    phone: "+234 546 763 21",
    carType: "Hyundai i20",
    orderedTime: "04.12.2021 - 20:30",
    startLocation: "Lion Building, Enugu Government House",
    destination: "Ministry of Land Headquarters, New Market",
    approvedSum: "₦80,300",
  },
  {
    id: 2,
    driver: "Chinedu Ikwuere",
    phone: "+234 546 763 21",
    carType: "Hyundai i20",
    orderedTime: "04.12.2021 - 20:30",
    startLocation: "Lion Building, Enugu Government House",
    destination: "Ministry of Land Headquarters, New Market",
    approvedSum: "₦80,300",
  },
  {
    id: 3,
    driver: "Chinedu Ifunanya",
    phone: "+234 546 763 21",
    carType: "Hyundai i20",
    orderedTime: "04.12.2021 - 20:30",
    startLocation: "Lion Building, Enugu Government House",
    destination: "Ministry of Land Headquarters, New Market",
    approvedSum: "₦80,300",
  },
  {
    id: 4,
    driver: "Chinedu Ikwuere",
    phone: "+234 546 763 21",
    carType: "Hyundai i20",
    orderedTime: "04.12.2021 - 20:30",
    startLocation: "Lion Building, Enugu Government House",
    destination: "Ministry of Land Headquarters, New Market",
    approvedSum: "₦80,300",
  },
  {
    id: 5,
    driver: "Chinedu Ikwuere",
    phone: "+234 546 763 21",
    carType: "Hyundai i20",
    orderedTime: "04.12.2021 - 20:30",
    startLocation: "Lion Building, Enugu Government House",
    destination: "Ministry of Land Headquarters, New Market",
    approvedSum: "₦80,300",
  },
  {
    id: 6,
    driver: "Chinedu Ikwuere",
    phone: "+234 546 763 21",
    carType: "Hyundai i20",
    orderedTime: "04.12.2021 - 20:30",
    startLocation: "Lion Building, Enugu Government House",
    destination: "Ministry of Land Headquarters, New Market",
    approvedSum: "₦80,300",
  },
];

const TripTable = () => {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="ring-2 ring-gray-200 ring-offset-4 ring-offset-gray-100 bg-gray-100 rounded-xl *:py-1">
          <th className="w-fit pl-1">
            <input
              type="checkbox"
              name="allTrips"
              id="allTrips"
              className="accent-primary"
            />
          </th>
          <th className="w-[20%]">Driver</th>
          <th className="w-[10%]">Car Type</th>
          <th className="w-[15%]">Ordered Time</th>
          <th className="w-[20%]">Start Location</th>
          <th className="w-[20%]">Destination</th>
          <th className="w-[10%]">Approved Sum</th>
        </tr>
      </thead>
      <tbody>
        {tripsMockData.map((trip) => {
          return (
            <tr key={trip.id} className="*:py-3">
              <td className="text-center">
                <input
                  type="checkbox"
                  name={trip.id}
                  id={trip.id}
                  className="accent-primary"
                />
              </td>
              <td className="text-center flex justify-center items-center flex-wrap">
                <UserIcon className="border-2 border-black rounded-full w-8 h-8 m-2" />
                <div className="info">
                  <div className="driver-name font-bold">{trip.driver}</div>
                  <div className="phone-number text-gray-500">{trip.phone}</div>
                </div>
              </td>
              <td className="text-center">{trip.carType}</td>
              <td className="text-center">{trip.orderedTime}</td>
              <td>{trip.startLocation}</td>
              <td>{trip.destination}</td>
              <td>
                <div className="badge p-1 mx-1 rounded-xl bg-green-100 text-green-800 text-center text-sm font-bold">
                  {trip.approvedSum}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TripTable;
