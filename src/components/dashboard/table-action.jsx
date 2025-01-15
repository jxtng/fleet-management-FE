import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

const TableAction = ({
  row,
  trigger = <EllipsisVertical size={18} />,
  actions = [],
}) => {
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

export default TableAction;
