"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sliders, ChevronDown, Sheet, LayoutGrid, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TableFilter = ({ onFilterChange, showDisplayToggle = true }) => {
  const [filterData, setFilterData] = useState({
    search: "",
    filterBy: "",
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
      <label htmlFor="search" className="search relative w-full">
        <Search className="absolute top-1/2 -translate-y-1/2 ml-2 w-4 h-4 text-muted-foreground" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search vehicle"
          value={filterData.search}
          onChange={handleFilterChange}
          className="outline-0 pl-8 h-full w-full text-sm rounded-md border border-input focus:border-gray-500"
        />
      </label>

      <Select
        value={filterData.filterBy}
        onValueChange={(value) =>
          handleFilterChange({ name: "filterBy", value })
        }
      >
        <SelectTrigger>
          <span className="pointer-events-none">
            <Sliders className="inline mr-2 w-4" />
            <SelectValue placeholder="Filter By" />
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vehicleID">Vehicle ID</SelectItem>
          <SelectItem value="vehicleType">Vehicle Type</SelectItem>
          <SelectItem value="engineNumber">Engine Number</SelectItem>
          <SelectItem value="makeModel">Make/Model</SelectItem>
          <SelectItem value="procurementSource">Procurement Source</SelectItem>
          <SelectItem value="responsibleOfficer">
            Responsible Officer
          </SelectItem>
        </SelectContent>
      </Select>

      {showDisplayToggle && (
        <div className="radio-group flex items-center justify-around">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-e-none ${
              filterData.displayMode == "tabular"
                ? "border-primary text-primary"
                : "border-input text-input-foreground "
            }`}
            onClick={() =>
              handleFilterChange({ name: "displayMode", value: "tabular" })
            }
          >
            <Sheet />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-s-none ${
              filterData.displayMode == "cards"
                ? "border-primary text-primary"
                : "border-input text-input-foreground"
            }`}
            onClick={() =>
              handleFilterChange({ name: "displayMode", value: "cards" })
            }
          >
            <LayoutGrid />
          </Button>
        </div>
      )}
    </div>
  );
};

export default TableFilter;
