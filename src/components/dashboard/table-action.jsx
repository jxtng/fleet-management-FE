import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Edit,
  EllipsisVertical,
  Eye,
  History,
  Share,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const TableAction = ({ row }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex text-green-400">
        <EllipsisVertical size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/fleet-inventory/vehicle/${row.id}`}>
            <Eye /> View details
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <History /> View history
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit /> Edit details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share /> Share details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash2 className="text-red-400" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableAction;
