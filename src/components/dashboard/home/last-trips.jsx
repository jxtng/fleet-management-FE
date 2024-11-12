import React from "react";
import { Route, Car } from "lucide-react";
import Link from "next/link";
import ChevronRightIcon from "@/icons/chevron-right";
import { Card, CardTitle } from "@/components/ui/card";

const tripMockData = [
  {
    fromAddress: "Lion Building Enugu State",
    fromDate: new Date().toString(),
    toAddress: "Agwu, Enugu State",
    toDate: new Date().toString(),
    carName: " Hyundai i20",
    distance: "1,3km",
  },
  {
    fromAddress: "Lion Building Enugu State",
    fromDate: new Date().toString(),
    toAddress: "Agwu, Enugu State",
    toDate: new Date().toString(),
    carName: " Hyundai i20",
    distance: "1,3km",
    tag: "Business",
  },
  {
    fromAddress: "Lion Building Enugu State",
    fromDate: new Date().toString(),
    toAddress: "Agwu, Enugu State",
    toDate: new Date().toString(),
    carName: " Hyundai i20",
    distance: "1,3km",
    tag: "Private",
  },
];

const LastTrips = ({ className }) => {
  const padDate = (num) => (String(num).length < 2 ? "0" + num : num);

  return (
    <Card className={"p-4 " + className}>
      <CardTitle>
        <h3 className="text-lg mb-2">Last Trips</h3>
      </CardTitle>

      {tripMockData.map((trip, index) => {
        const fromTime = new Date(trip.fromDate);
        const toTime = new Date(trip.toDate);

        return (
          <div
            key={trip.fromAddress + trip.toAddress + index}
            className="trip pl-4 mb-2 border-t-2 border-foreground"
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

            <div className="timeline-wrapper text-xs flex gap-2 *:flex *:flex-col *:justify-between whitespace-nowrap">
              <svg
                width="11"
                height="42"
                viewBox="0 0 11 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-4 h-14 translate-y-1"
              >
                <line
                  x1="5.36941"
                  y1="11.3759"
                  x2="5.20223"
                  y2="30.6291"
                  stroke="#FF9533"
                  strokeWidth="0.745327"
                  strokeLinecap="round"
                  strokeDasharray="2.24 2.24"
                />
                <path
                  d="M8.22489 38.2249L5.75 40.6997L3.27511 38.2249C2.78563 37.7354 2.45229 37.1117 2.31725 36.4328C2.18221 35.7539 2.25152 35.0501 2.51643 34.4106C2.78133 33.7711 3.22994 33.2244 3.80551 32.8399C4.38108 32.4553 5.05777 32.25 5.75 32.25C6.44223 32.25 7.11892 32.4553 7.69449 32.8399C8.27006 33.2244 8.71866 33.7711 8.98357 34.4106C9.24848 35.0501 9.3178 35.7539 9.18275 36.4328C9.04771 37.1117 8.71437 37.7354 8.22489 38.2249ZM5.75 37.6666C6.25833 37.6666 6.74584 37.4647 7.10529 37.1053C7.46473 36.7458 7.66667 36.2583 7.66667 35.75C7.66667 35.2416 7.46473 34.7541 7.10529 34.3947C6.74584 34.0352 6.25833 33.8333 5.75 33.8333C5.24167 33.8333 4.75416 34.0352 4.39471 34.3947C4.03527 34.7541 3.83333 35.2416 3.83333 35.75C3.83333 36.2583 4.03527 36.7458 4.39471 37.1053C4.75416 37.4647 5.24167 37.6666 5.75 37.6666ZM5.75 36.3333C5.59529 36.3333 5.44692 36.2718 5.33752 36.1624C5.22812 36.053 5.16667 35.9047 5.16667 35.75C5.16667 35.5953 5.22813 35.4469 5.33752 35.3375C5.44692 35.2281 5.59529 35.1666 5.75 35.1666C5.90471 35.1666 6.05308 35.2281 6.16248 35.3375C6.27187 35.4469 6.33333 35.5953 6.33333 35.75C6.33333 35.9047 6.27187 36.053 6.16248 36.1624C6.05308 36.2718 5.90471 36.3333 5.75 36.3333Z"
                  stroke="#11894E"
                  strokeWidth="0.5"
                />
                <ellipse
                  cx="5.5"
                  cy="5.34375"
                  rx="5.5"
                  ry="5.34375"
                  fill="#11894E"
                  fillOpacity="0.34"
                />
                <ellipse
                  cx="5.42896"
                  cy="5.34348"
                  rx="3"
                  ry="2.91477"
                  fill="#11894E"
                />
              </svg>
              <div className="dates font-bold">
                <time dateTime={trip.fromDate}>
                  {padDate(fromTime.getHours())}:
                  {padDate(fromTime.getMinutes())}
                </time>
                <time dateTime={trip.toDate}>
                  {padDate(toTime.getHours())}:{padDate(toTime.getMinutes())}
                </time>
              </div>
              <div className="addresses mr-2">
                <address>{trip.fromAddress}</address>
                <address>{trip.toAddress}</address>
              </div>
              <div className="icons ml-auto">
                <Car className="w-4 h-4 text-muted-foreground" />
                <Route className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="travel-detail">
                <p className="car-name">{trip.carName}</p>
                <p className="distance">{trip.distance}</p>
              </div>
            </div>
          </div>
        );
      })}

      <hr className="bg-foreground h-[3px] mb-4" />
      <Link
        href="#"
        className="mt-auto font-bold text-xs text-orange-400 hover:underline"
      >
        Show all trips{" "}
        <ChevronRightIcon className="inline-block ml-2 text-black" />{" "}
      </Link>
    </Card>
  );
};

export default LastTrips;
