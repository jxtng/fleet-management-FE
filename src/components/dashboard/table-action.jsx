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
        {actions.map((action) => (
          <DropdownMenuItem key={action.label} asChild>
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
            ) : (
              <button className="w-full" onClick={() => action.onClick?.(row)}>
                {action.icon} {action.label}
              </button>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableAction;
