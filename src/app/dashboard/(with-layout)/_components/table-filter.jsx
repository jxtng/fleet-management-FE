import Button from "@/components/button";
import { Sliders, ChevronDown, Sheet, LayoutGrid, Search } from "lucide-react";
import { useState } from "react";

const TableFilter = ({ onFilterChange, showDisplayToggle = true }) => {
  const [filterData, setFilterData] = useState({
    search: "",
    filterBy: "none",
    displayMode: "tabular",
  });

  const handleFilterChange = (e) => {
    const name = e.target?.name ?? e.name;
    const value = e.target?.value ?? e.value;

    setFilterData((fd) => ({ ...fd, [name]: value }));
    onFilterChange?.({ ...filterData, [name]: value });
  };

  return (
    <div className="flex gap-4 mb-8">
      <label
        htmlFor="search"
        className="search border-2 grow border-gray-300 rounded-md flex items-center gap-1 w-fit p-2 bg-gray-50 has-[:focus]:border-gray-500"
      >
        <Search size={20} className="text-gray-500" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search vehicle"
          value={filterData.search}
          onChange={handleFilterChange}
          className="outline-0 bg-transparent"
        />
      </label>

      <label
        htmlFor="filter"
        className="filter border-2 pl-2 border-gray-300 rounded-md flex items-center gap-1 w-fit bg-gray-50 has-[:focus]:border-gray-500"
      >
        <Sliders />
        <select
          name="filterBy"
          id="filter"
          className="p-2 appearance-none bg-transparent outline-none cursor-pointer"
          value={filterData.filterBy}
          onChange={handleFilterChange}
        >
          <option value="none" disabled>
            Filter by
          </option>

          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle Type">Vehicle Type</option>
          <option value="Engine number">Engine number</option>
          <option value="Make/Model">Make/Model</option>
          <option value="Procurement source">Procurement source</option>
          <option value="Responsible officer">Responsible officer</option>
        </select>
        <ChevronDown className="mr-2" />
      </label>

      {showDisplayToggle && (
        <div className="radio-group flex items-center justify-around">
          <Button
            className={`bg-white border p-2 rounded-e-none has-[:checked]:border-primary ${
              filterData.displayMode == "tabular"
                ? "border-primary text-primary"
                : "border-gray-300 text-gray-600"
            }`}
            onClick={() =>
              handleFilterChange({ name: "displayMode", value: "tabular" })
            }
          >
            <Sheet className="peer-checked:text-primary" />
          </Button>
          <Button
            className={`bg-white border p-2 rounded-s-none has-[:checked]:border-primary ${
              filterData.displayMode == "cards"
                ? "border-primary text-primary"
                : "border-gray-300 text-gray-600"
            }`}
            onClick={() =>
              handleFilterChange({ name: "displayMode", value: "cards" })
            }
          >
            <LayoutGrid className="peer-checked:text-primary" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default TableFilter;
