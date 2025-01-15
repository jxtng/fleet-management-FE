"use client";
import { Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const RealTimeInfo = ({ title = "Real Time Data" }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerId = setTimeout(function updateTime() {
      const latestTime = new Date();

      if (latestTime.getMinutes() == date.getMinutes()) {
        clearTimeout(timerId);
        timerId = setTimeout(updateTime, 10 * 1000);
        return;
      }

      setDate(latestTime);
    }, 10 * 1000);

    return () => clearTimeout(timerId);
  });

  const padDate = (num) => (String(num).length < 2 ? "0" + num : num);

  return (
    <div className="flex items-baseline gap-4 my-4 text-secondary text-sm">
      <h2 className="capitalize font-extrabold text-xl whitespace-nowrap">
        {title}
      </h2>
      <div className="date flex items-start gap-1.5">
        <Calendar size={18} />
        <span>
          {padDate(date.getDate())}.{padDate(date.getMonth() + 1)}.
          {date.getFullYear()}
        </span>
      </div>
      <div className="date flex items-start gap-1.5">
        <Clock size={18} />
        <span>
          {padDate(date.getHours())}:{padDate(date.getMinutes())}
        </span>
      </div>
    </div>
  );
};

export default RealTimeInfo;
