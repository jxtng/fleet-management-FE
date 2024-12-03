"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Loader2, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const DataTable = ({
  data = [],
  columnDefs = [],
  className,
  isLoading,
  error,
  serialNumber = true,
  colorful = true,
  caption = "",
  verticalBorder = true,
  actions = [],
  actionTrigger = <EllipsisVertical size={18} />,
}) => {
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

  const columns = [...columnDefs];
  if (serialNumber) {
    columns.unshift({
      th: "SN",
      thClassName: "w-12 text-center",
      tdClassName: "text-center",
      td: ({ index }) => (index < 9 ? "0" : "") + (index + 1),
    });
  }

  if (actions.length) {
    columns.push({
      th: "Action",
      td: ({ row }) => (
        <TableAction row={row} trigger={actionTrigger} actions={actions} />
      ),
      sticky: true,
    });
  }

  const stickyStyles = "sticky right-0 border bg-inherit";

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
    <div className="table-wrapper">
      {caption && (
        <div className="caption py-4 text-xl text-secondary text-left font-extrabold">
          {caption}
        </div>
      )}

      <ScrollArea type="auto" className="rounded-lg" style={{ width }}>
        <table className={cn("w-full text-sm", className)} summary={caption}>
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
              {columns.map((col, index) => {
                return (
                  <th
                    key={index}
                    className={cn(
                      "p-2 h-10 align-middle text-left",
                      colorful
                        ? "bg-primary text-background"
                        : "bg-muted text-foreground",
                      "first:rounded-tl-lg last:rounded-tr-lg",
                      col.sticky && stickyStyles,
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
                      ? "hover:even:bg-amber-100 even:bg-amber-50 even:border-amber-500 hover:odd:bg-green-100 odd:bg-green-50 odd:border-green-500"
                      : "hover:bg-muted even:bg-muted/70 odd:bg-muted/20 "
                  } `}
                >
                  {columns.map((col, colIndex) => {
                    let element = row[col.key];
                    if (col.td) {
                      element =
                        typeof col.td === "function" ? (
                          <col.td row={row} col={col} index={rowIndex} />
                        ) : (
                          col.td
                        );
                    }
                    return (
                      <td
                        key={String(rowIndex) + colIndex}
                        className={cn(
                          "p-2",
                          col.sticky && stickyStyles,
                          col.tdClassName
                        )}
                      >
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
    </div>
  );
};

export const TableAction = ({ row, trigger, actions = [] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {actions.map((action) => {
          const ActionComponent = action.ActionComponent || "button";
          return (
            <DropdownMenuItem
              key={action.label}
              className="flex w-full"
              asChild
            >
              {action.href ? (
                <Link
                  href={
                    typeof action.href === "function"
                      ? action.href(row)
                      : action.href
                  }
                >
                  {action.icon} {action.label}
                </Link>
              ) : action.ActionComponent ? (
                <ActionComponent className="flex items-center gap-2" row={row}>
                  {action.icon} {action.label}
                </ActionComponent>
              ) : (
                <button
                  className="flex items-center gap-2"
                  onClick={() => action.onClick?.(row)}
                >
                  {action.icon} {action.label}
                </button>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTable;
