"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const DataTable = ({
  data = [],
  columnDefs = [],
  selectable = true,
  serialNumber = true,
  colorful = true,
  caption = "",
  verticalBorder = false,
}) => {
  const [selectedRows, setSelectedRows] = useState(new Set());

  const columns = [...columnDefs];
  if (serialNumber) {
    columns.unshift({
      th: "SN",
      thClassName: "w-2",
      td: ({ index }) => (index > 9 ? "" : "0") + (index + 1),
    });
  }

  return (
    <ScrollArea type="auto" className="rounded-lg w-full">
      <table className="w-full text-sm">
        {caption && (
          <caption className="py-4 text-xl text-secondary text-left font-extrabold">
            {caption}
          </caption>
        )}
        <colgroup>
          {columns.map((col, index) => {
            return (
              <col key={index} className={cn(verticalBorder && "border")} />
            );
          })}
        </colgroup>
        <thead>
          <tr
            className={`${
              colorful ? "bg-primary" : "border-b border-foreground"
            } `}
          >
            {selectable && (
              <th
                className={`w-10 text-center p-2 py-5 h-10 align-middle ${
                  colorful ? "bg-primary" : "bg-muted"
                } text-background first:rounded-tl-lg last:rounded-tr-lg`}
              >
                <input
                  type="checkbox"
                  name="selectall"
                  id="selectall"
                  onChange={() => {
                    if (data.every((_, index) => selectedRows.has(index))) {
                      setSelectedRows(new Set());
                    } else {
                      setSelectedRows(new Set(data.map((_, index) => index)));
                    }
                  }}
                  checked={selectedRows.size == data.length}
                  className="accent-primary"
                />
              </th>
            )}
            {columns.map((col) => {
              return (
                <th
                  key={col.th}
                  className={cn(
                    "p-2 h-10 align-middle text-left",
                    colorful
                      ? "bg-primary text-background"
                      : "bg-muted text-foreground",
                    "first:rounded-tl-lg last:rounded-tr-lg",
                    col.thClassName
                  )}
                >
                  {typeof col.th == "function" ? <col.th /> : col.th}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            return (
              <tr
                key={rowIndex}
                className={`p-2 h-10 align-middle border-b last:border-b-0 ${
                  colorful
                    ? "hover:even:bg-amber-500/30 even:bg-amber-500/10 even:border-amber-500 hover:odd:bg-green-500/30 odd:bg-green-500/10 odd:border-green-500"
                    : "hover:bg-muted even:bg-muted/70 odd:bg-muted/20 "
                } `}
              >
                {selectable && (
                  <th>
                    <input
                      type="checkbox"
                      name={rowIndex}
                      checked={selectedRows.has(rowIndex)}
                      onChange={() => {
                        const newSelectedRows = new Set(selectedRows);
                        newSelectedRows.has(rowIndex)
                          ? newSelectedRows.delete(rowIndex)
                          : newSelectedRows.add(rowIndex);

                        setSelectedRows(newSelectedRows);
                      }}
                      className="accent-primary"
                    />
                  </th>
                )}
                {columns.map((col) => {
                  let element = row[col.key];
                  if (col.td && typeof col.td === "function") {
                    element = <col.td row={row} col={col} index={rowIndex} />;
                  }
                  return (
                    <td key={col.th} className={cn("p-2", col.tdClassName)}>
                      {element}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default DataTable;
