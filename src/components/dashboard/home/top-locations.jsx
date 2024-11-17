import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";

const locationMockData = [
  {
    rank: 143,
    name: "Lion Building",
  },
  {
    rank: 87,
    name: "Ministry of land",
  },
  {
    rank: 77,
    name: "Ministry of Justice",
  },
  {
    rank: 67,
    name: "Ministry of Tourism",
  },
  {
    rank: 62,
    name: "Lion Building Fuel Station",
  },
];

const TopLocations = ({ className }) => {
  return (
    <Card className={"p-4 " + className}>
      <CardTitle>
        <h3 className="text-lg mb-2">Top Locations</h3>
      </CardTitle>

      {locationMockData.map((location, index) => {
        return (
          <div
            key={location + index}
            className="trip flex items-center gap-2 text-xs whitespace-nowrap py-4 border-t-2 border-card-foreground"
          >
            <div className="rank flex items-center justify-center bg-primary text-foreground w-8 h-8 rounded-full">
              {location.rank}
            </div>
            <address>{location.name}</address>
          </div>
        );
      })}

      <hr className="bg-card-foreground h-[3px] mb-4" />
      <Link
        href="#"
        className="mt-auto font-bold text-xs text-orange-400 hover:underline"
      >
        Show all location{" "}
        <ChevronRight className="inline-block ml-2 text-card-foreground" />{" "}
      </Link>
    </Card>
  );
};

export default TopLocations;
