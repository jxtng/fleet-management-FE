"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Input } from "./input";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Download,
  LayoutGrid,
  Loader2,
  MoreVertical,
  Search,
  Sheet,
  Sliders,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "./button";
import TableAction from "../dashboard/table-action";

export const createColumns = ({ data, hiddenColumns = [] }) => {
  const columns = Object.keys(data?.[0] ?? data ?? {})
    .filter((key) => !(key.startsWith("_") || hiddenColumns.includes(key)))
    .map((key) => {
      return {
        header: key.replace(/_([a-z])/g, " $1").replace(/(.)(?=[A-Z])/g, "$1 "),
        accessorKey: key,
        cell: ({ row, getValue }) => (
          <>
            {key.includes("img") || key.includes("image") ? (
              <img
                src={row.original[key]}
                alt="Image"
                className="mx-auto h-16 w-16 object-cover object-center"
              />
            ) : (
              getValue()
            )}
          </>
        ),
      };
    });

  return columns;
};

const getCommonPinningStyles = (column, isHeader) => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn =
    isPinned === "right" && column.getIsFirstColumn("right");

  return {
    boxShadow: isLastLeftPinnedColumn
      ? "-4px 0 4px -4px white inset"
      : isFirstRightPinnedColumn
      ? "4px 0 4px -4px white inset"
      : undefined,
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? "sticky" : "relative",
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
    backgroundColor: isPinned && !isHeader ? "hsl(var(--muted))" : "inherit",
  };
};

export function DataTable({
  columns,
  unsortableColumns = [],
  extendedColumns = [],
  hiddenColumns,
  data = [],
  isLoading,
  error,
  classes = {},
  caption,
  cardFields,
  cardTitle,
  gridImage,
  actions,
  actionTrigger = <MoreVertical size={18} />,
}) {
  const [search, setSearch] = useState("");
  const [columnId, setColumnId] = useState("");
  const [tabularMode, setTabularMode] = useState(true);

  const columnDefs = columns
    ? [...columns]
    : createColumns({ data, hiddenColumns });

  extendedColumns.forEach((col) => {
    const colIndex = columnDefs.findIndex(
      (def) =>
        (col.header && def.header === col.header) ||
        (col.id && def.id === col.id)
    );
    if (colIndex === -1) {
      columnDefs.push(col);
    } else {
      columnDefs[colIndex] = col;
    }
  });

  columnDefs.unshift({
    header: "SN",
    cell: ({ row }) => {
      const lengthDiff =
        String(data.length).length - String(row.index + 1).length;
      return "0".repeat(lengthDiff) + (row.index + 1);
    },
    accessorFn: (_, index) => index + 1,
  });

  columnDefs.push({
    header: "Actions",
    cell: ({ row }) => (
      <TableAction
        row={row.original}
        actions={actions}
        trigger={actionTrigger}
      />
    ),
  });

  const table = useReactTable({
    data,
    columns: columnDefs,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (!actions && table.getColumn("Actions").getIsVisible()) {
    table.getColumn("Actions").toggleVisibility(false);
  }
  if (!table.getColumn("Actions").getIsPinned()) {
    table.getColumn("Actions").pin("right");
  }

  function handleFilterChange(newChanges) {
    if (newChanges.id !== undefined) {
      setColumnId(newChanges.id);
    }

    if (newChanges.value !== undefined) {
      setSearch(newChanges.value);
    }

    if (
      newChanges.id === "all" ||
      newChanges.id === "" ||
      (newChanges.id === undefined && columnId === "") ||
      (newChanges.id === undefined && columnId === "all")
    ) {
      table.setColumnFilters([]);
      table.setGlobalFilter(
        newChanges.value === undefined ? search : newChanges.value
      );
    } else {
      table.setColumnFilters([{ id: columnId, value: search, ...newChanges }]);
      table.setGlobalFilter("");
    }
  }

  if (!data.length) {
    return (
      <div
        className={cn(
          "w-full h-48 rounded-lg bg-muted flex justify-center items-center",
          !error && "animate-pulse"
        )}
      >
        {error && !isLoading ? (
          <div className="error">
            Error loading table data. Please refresh the page to try again
          </div>
        ) : (
          <div className="flex gap-2">
            Loading Table Data
            <Loader2 className="animate-spin" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="control flex gap-4 mb-4">
        <label htmlFor="search" className="search relative w-full">
          <Search className="absolute top-1/2 -translate-y-1/2 ml-2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            name="value"
            id="search"
            placeholder="Search vehicle"
            value={search}
            onChange={(e) => handleFilterChange({ value: e.target.value })}
            className="outline-0 pl-8 h-full w-full text-sm rounded-md border border-input focus:border-gray-500"
          />
        </label>

        <Select
          defaultValue="all"
          value={columnId}
          onValueChange={(id) => handleFilterChange({ id })}
        >
          <SelectTrigger>
            <Sliders className="inline mr-2 w-4" />
            <SelectValue placeholder="Filter By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {table.getAllColumns().map((col) => (
              <SelectItem key={col.id} value={col.id}>
                {typeof col.columnDef.header === "function"
                  ? col.columnDef.header()
                  : col.columnDef.header}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="view-radio-group flex items-center justify-around">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-e-none ${
              tabularMode
                ? "border-primary text-primary"
                : "border-input text-input-foreground "
            }`}
            onClick={() => setTabularMode(true)}
          >
            <Sheet />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-s-none ${
              !tabularMode
                ? "border-primary text-primary"
                : "border-input text-input-foreground"
            }`}
            onClick={() => setTabularMode(false)}
          >
            <LayoutGrid />
          </Button>
        </div>

        <Button
          className="export-table"
          onClick={() => {
            let headersContent = "";
            table.getHeaderGroups()[0].headers.forEach((header) => {
              let value = header.column.columnDef.header;
              value =
                typeof value === "function"
                  ? value(header.getContext())
                  : value;
              headersContent +=
                value
                  .split(" ")
                  .map((word) => word[0].toUpperCase() + word.slice(1))
                  .join("")
                  .replaceAll(",", "-") + ",";
            });

            let bodyContent = "";
            table.getRowModel().rows.forEach((row) => {
              row
                .getAllCells()
                .forEach(
                  (cell) =>
                    (bodyContent +=
                      String(cell.renderValue()).replaceAll(",", "-") + ",")
                );
              bodyContent += "\n";
            });

            let csvContent = headersContent + "\n" + bodyContent;

            // let url = encodeURI(csvContent);
            let blob = new Blob([csvContent], {
              type: "data:text/csv;charset=utf-8;",
            });
            let url = URL.createObjectURL(blob);

            let linkElement = document.createElement("a");
            linkElement.setAttribute("href", url);
            linkElement.setAttribute(
              "download",
              caption
                ? `${caption.toLowerCase().replaceAll(" ", "-")}.csv`
                : "fleet-manager-table.csv"
            );
            document.body.appendChild(linkElement);
            linkElement.click();
            linkElement.remove();
          }}
        >
          Export Table
          <Download />
        </Button>
      </div>

      {caption && (
        <div className="caption py-4 text-xl text-secondary text-left font-extrabold">
          {caption}
        </div>
      )}

      {tabularMode ? (
        <TableView {...{ table, classes, caption, unsortableColumns }} />
      ) : (
        <GridView
          {...{
            data,
            table,
            classes,
            gridImage,
            actions,
            actionTrigger,
            cardFields,
            cardTitle,
          }}
        />
      )}
    </div>
  );
}

const GridView = ({
  data,
  table,
  classes,
  actions,
  actionTrigger,
  gridImage,
  cardFields,
  cardTitle,
}) => {
  const resolvedCardFields = cardFields ?? Object.keys(data?.[0]);

  return (
    <div className="cards flex justify-between flex-wrap gap-2">
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <div
            key={row.id}
            className={cn(
              "card grow flex flex-col justify-between bg-blue-400s",
              classes.card
            )}
          >
            <div className="img-area group grow relative bg-background border-[1.3rem] border-b-0 border-input overflow-hidden">
              {actions && (
                <div className="absolute top-2 right-2">
                  <TableAction
                    row={row.original}
                    actions={actions}
                    actionTrigger={actionTrigger}
                  />
                </div>
              )}
              <div
                className={cn(
                  "flex flex-col justify-center items-center h-36 mx-auto"
                )}
              >
                {typeof gridImage === "string" ? (
                  <img
                    src={row.original[gridImage]}
                    className="h-full w-full object-contain"
                  />
                ) : gridImage ? (
                  gridImage
                ) : (
                  <>
                    <hr className="w-28 h-1.5 m-1 bg-input rounded-full animate-pulse" />
                    <hr className="w-40 h-1.5 m-1 bg-input rounded-full animate-pulse delay-200" />
                    <hr className="w-52 h-1.5 m-1 bg-input rounded-full animate-pulse delay-300" />
                    <hr className="w-32 h-1.5 m-1 bg-input rounded-full animate-pulse delay-700" />
                    <hr className="w-40 h-1.5 m-1 bg-input rounded-full animate-pulse delay-1000" />
                  </>
                )}
              </div>
            </div>
            <ul className="info-area flex flex-col p-4 bg-primary text-background">
              <li className="mb-2">{cardTitle}</li>
              {Object.entries(row.original)
                .filter(([key]) => resolvedCardFields.includes(key))
                .map(([key, value], index) => (
                  <li className="text-sm" key={key + index}>
                    <span className="opacity-70 capitalize leading-6">
                      {key
                        .replace(/((?<=[^A-Z])[A-Z])/g, " $1")
                        .replace(/_([a-z])/g, " $1")}
                    </span>
                    {key && ": "}
                    {value}
                  </li>
                ))}
            </ul>
          </div>
        ))
      ) : (
        <div
          className={cn(
            "w-full h-48 rounded-lg bg-muted flex justify-center items-center"
          )}
        >
          <div className="no-result">No result</div>
        </div>
      )}
    </div>
  );
};

const TableView = ({ table, classes, caption, unsortableColumns }) => {
  const [width, setWidth] = useState("100%");

  useEffect(() => {
    function syncWidth() {
      let width = document.querySelector("#main-scroll-area")?.clientWidth;
      if (!width) return;
      let mainElementStyles = window.getComputedStyle(
        document.querySelector("main")
      );
      width -=
        parseFloat(mainElementStyles.paddingTop) +
        parseFloat(mainElementStyles.paddingBottom);
      setWidth(width || "100%");
    }

    window.addEventListener("resize", syncWidth);
    syncWidth();

    return () => window.removeEventListener("resize", syncWidth);
  }, []);

  return (
    <ScrollArea type="auto" className="rounded-lg" style={{ width }}>
      <Table className={cn(classes.table)} summary={caption}>
        <TableHeader className={cn(classes.thead)}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className={cn("bg-primary hover:bg-primary h-14", classes.tr)}
            >
              {headerGroup.headers.map((header) => {
                const isSortable =
                  header.column.getCanSort() &&
                  !unsortableColumns.includes(header.column.id);

                return (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "p-2 h-10 align-middle text-primary-foreground border-r last:border-r-0 capitalize",
                      isSortable && "cursor-pointer select-none",
                      classes.th
                    )}
                    style={{ ...getCommonPinningStyles(header.column, true) }}
                    onClick={() => {
                      if (!isSortable) return;

                      if (header.column.getIsSorted === "desc") {
                        header.column.clearSorting();
                      } else {
                        header.column.toggleSorting();
                      }
                    }}
                  >
                    <div className="flex gap-2 items-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {isSortable &&
                        (header.column.getIsSorted() === "asc" ? (
                          <ArrowUp size={16} className="inline shrink-0" />
                        ) : header.column.getIsSorted() === "desc" ? (
                          <ArrowDown size={16} className="inline shrink-0" />
                        ) : (
                          <ArrowUpDown size={16} className="inline shrink-0" />
                        ))}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.map((row) => (
            <TableRow
              key={row.id}
              className={cn(
                "p-2 h-10 align-middle",
                classes.tr,
                "hover:even:bg-amber-100 even:bg-amber-50 even:border-amber-500 hover:odd:bg-green-100 odd:bg-green-50 odd:border-green-500"
              )}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={cn("border-r last:border-r-0", classes.td)}
                  style={{ ...getCommonPinningStyles(cell.column) }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {table.getRowModel().rows?.length === 0 && (
        <div
          className={cn(
            "h-32 rounded-lg bg-muted flex justify-center items-center",
            "sticky inset-0"
          )}
          style={{ width }}
        >
          <div className="no-result">No result</div>
        </div>
      )}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default DataTable;
