import { cn } from "@/lib/utils";
import React from "react";

const InfoCard = ({
  title,
  details = {},
  include = [],
  className,
  action,
  image,
}) => {
  let infoList = Array.isArray(details)
    ? details.map((item) => ["", item])
    : Object.entries(details);

  if (include.length) {
    infoList = infoList.filter((item) => include.includes(item[0]));
  }

  return (
    <div className={cn("card ", className)}>
      <div className="img-area group relative h-44 bg-background border-[1.3rem] border-b-0 border-input overflow-hidden">
        {action && <div className="absolute top-2 right-2">{action}</div>}
        {image ? (
          image
        ) : (
          <>
            <hr className="w-28 h-2 m-4 bg-input rounded" />
            <hr className="w-40 h-2 m-4 bg-input rounded" />
            <hr className="w-52 h-2 m-4 bg-input rounded" />
            <hr className="w-32 h-2 m-4 bg-input rounded" />
            <hr className="w-40 h-2 m-4 bg-input rounded" />
          </>
        )}
      </div>
      <ul className="info-area flex flex-col p-4 bg-primary text-background">
        <li className="text-lg mb-2">{title}</li>
        {infoList.map(([key, value], index) => (
          <li className="text-sm" key={key + index}>
            <span className="opacity-70 capitalize leading-6">
              {key.replace(/((?<=[^A-Z])[A-Z])/g, " $1")}
            </span>
            {key && ": "}
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
