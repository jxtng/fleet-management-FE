import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SuccessDialog from "@/components/success-dialog";
import ErrorDialog from "@/components/error-dialog";
import { axiosInstance } from "@/lib/axios";
import { useSWRConfig } from "swr";
import { Loader2 } from "lucide-react";

const DeleteAction = ({ description = "", children, row }) => {
  const [open, setOpen] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(null);
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    setDeleteStatus({
      status: "submitting",
      error: null,
    });

    try {
      const response = await axiosInstance.delete(`/procurement/${row._id}`);
      setDeleteStatus({
        status: "success",
        message: response?.data?.message,
      });

      console.log(response);
    } catch (err) {
      console.log(err);
      setDeleteStatus({
        status: "error",
        error:
          err?.response?.data?.error ??
          rr?.response?.data?.message ??
          err?.message,
      });
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="w-full relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-muted">
          {children}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-secondary text-xl text-center">
              {deleteStatus?.status == "submitting" ? (
                "Deleting..."
              ) : (
                <>
                  Are you sure you want to delete this item? Order Number:{" "}
                  <strong>{row.orderNumber}</strong>
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-between">
            <DialogClose asChild>
              <Button
                variant="outline"
                disabled={deleteStatus?.status == "submitting"}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleteStatus?.status == "submitting"}
            >
              Delete
              {deleteStatus?.status == "submitting" && (
                <Loader2 className="animate-spin size-4" />
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <SuccessDialog
        open={deleteStatus?.status == "success"}
        onOpenChange={() => {
          setDeleteStatus(null);
          mutate("/procurement", async (procurements) => {
            return procurements.filter(
              (procurement) => procurement._id !== row._id
            );
          });
        }}
        title={
          deleteStatus?.message ?? "Procurement Record Deleted Successfully"
        }
      />
      <ErrorDialog
        open={deleteStatus?.status == "error"}
        onOpenChange={() => setDeleteStatus(null)}
        description={
          deleteStatus?.error ?? "Failed to delete procurement record"
        }
      />
    </div>
  );
};

export default DeleteAction;
