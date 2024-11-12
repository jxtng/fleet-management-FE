import FolderOpenIcon from "@/icons/folder-open";
import ChevronRightIcon from "@/icons/chevron-right";

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
          className={`flex items-center gap-6 p-6 rounded-md ${bg} ${fg}`}
        >
          <FolderOpenIcon />
          <div className="info text-center text-sm">
            <p className="count font-bold mb-1">{count}</p>
            <p className="title">{title}</p>
          </div>
          <ChevronRightIcon className="text-black" />
        </div>
      ))}
    </div>
  );
};

export default VehicleSummary;
