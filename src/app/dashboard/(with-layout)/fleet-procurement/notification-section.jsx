import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lightbulb, X } from "lucide-react";
import React from "react";

const notifications = [
  {
    type: "alert",
    message: "Your procurement for  50 Tires is delayed by 2 days.",
    status: "good",
  },
  {
    type: "alert",
    message: "Your procurement for  50 Tires has been delivered",
    status: "bad",
  },
];

const NotificationSection = () => {
  return (
    <ul className="space-y-2">
      {notifications.map(({ type, message, status }) => (
        <li
          key={message}
          className={cn(
            "p-4 rounded-lg text-center relative",
            status == "good"
              ? "bg-green-100"
              : status == "bad"
              ? "bg-red-100"
              : status == "warn"
              ? "bg-yellow-100"
              : "bg-primary/15"
          )}
        >
          <Button
            className="close-button absolute top-1 right-1 border-none bg-transparent"
            size="icon"
            variant="outline"
          >
            <X />
          </Button>
          <h4 className="text-secondary font-bold text-lg flex justify-center items-center gap-2">
            <Lightbulb />
            {type.toUpperCase()}
          </h4>
          <p className="m-2 p-2 rounded-lg text-sm bg-white">{message}</p>
        </li>
      ))}
    </ul>
  );
};

export default NotificationSection;
