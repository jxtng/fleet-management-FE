import React from "react";
import { Car, Wrench, Fuel } from "lucide-react";
import Link from "next/link";
import ChevronRightIcon from "@/icons/chevron-right";
import { Card } from "@/components/ui/card";

const tripMockData = [
  {
    price: 80300,
    title: "Lion Building Fuel Station",
    carName: " Hyundai i20",
    status: "refuel",
  },
  {
    price: 80300,
    title: "Services and Maintenance",
    carName: " Hyundai i20",
    status: "repair",
    tag: "private",
  },
  {
    price: 80300,
    title: "Lion Building Fuel Station",
    carName: " Hyundai i20",
    status: "refuel",
    tag: "business",
  },
  {
    price: 80300,
    title: "Lion Building Fuel Station",
    carName: " Hyundai i20",
    status: "refuel",
    tag: "business",
  },
  {
    price: 80300,
    title: "Lion Building Fuel Station",
    carName: " Hyundai i20",
    status: "refuel",
    tag: "business",
  },
];

const TripExpenses = ({ className }) => {
  return (
    <Card className={"p-4 rounded-xl " + className}>
      <h3 className="text-lg mb-2">Trip Expenses</h3>

      {tripMockData.map((trip, index) => {
        return (
          <div
            key={trip.title + index}
            className="trip pl-4 mb-2 border-t-2 border-card-foreground"
          >
            <div
              className={`tag w-fit py-1 px-2 mb-4 text-xs text-white capitalize ml-auto rounded-b-lg ${
                trip.tag
                  ? "bg-gradient-to-r from-[#E36130] to-[#F99238]"
                  : "bg-gray-400"
              }`}
            >
              {trip.tag || "Untagged"}
            </div>

            <div className="trip-info flex items-start gap-2 text-xs whitespace-nowrap">
              {trip.status == "repair" ? (
                <Wrench className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Fuel className="w-4 h-4 text-muted-foreground" />
              )}
              <span className="price font-bold whitespace-nowrap">
                &#x20A6; {trip.price.toLocaleString()}
              </span>
              <p className="title mr-4">{trip.title}</p>
              <Car className="w-4 h-4 text-muted-foreground ml-auto" />
              <span className="car-name">{trip.carName}</span>
            </div>
          </div>
        );
      })}

      <hr className="bg-card-foreground h-[3px] mb-4" />
      <Link
        href="#"
        className="mt-auto font-bold text-xs text-orange-400 hover:underline"
      >
        Show all expenses{" "}
        <ChevronRightIcon className="inline-block ml-2 text-card-foreground" />{" "}
      </Link>
    </Card>
  );
};

export default TripExpenses;
