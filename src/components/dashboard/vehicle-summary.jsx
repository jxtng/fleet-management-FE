import { ChevronRight, FolderOpenDot } from "lucide-react";

const vehicleSummaries = [
  {
    title: "Total Vehicles",
    count: 100,
    fg: "text-blue-500",
    bg: "bg-blue-500/30",
  },
  {
    title: "Vehicles Available",
    count: 32,
    fg: "text-amber-500",
    bg: "bg-amber-500/30",
  },
  {
    title: "Vehicles Currently Active",
    count: 13,
    fg: "text-green-500",
    bg: "bg-green-500/30",
  },
  {
    title: "Vehicles with Issues",
    count: 13,
    fg: "text-red-500",
    bg: "bg-red-500/30",
  },
  {
    title: "Vehicles under Maintainace",
    count: 9,
    fg: "text-purple-500",
    bg: "bg-purple-500/30",
  },
];

const VehicleSummary = () => {
  return (
    <div className="card-wrapper flex gap-4 flex-wrap justify-center mb-6">
      {vehicleSummaries.map(({ title, count, fg, bg }) => (
        <div
          key={title + count}
          className={`grid grid-cols-6 items-center w-48 gap-4 p-4 rounded-md ${bg} ${fg}`}
        >
          <FolderOpenDot size={24} />
          <div className="info text-center text-sm col-span-4">
            <p className="count font-bold mb-1">{count}</p>
            <p className="title">{title}</p>
          </div>
          <ChevronRight className="text-neutral-500 w-6 h-6" />
        </div>
      ))}
    </div>
  );
};

export default VehicleSummary;
